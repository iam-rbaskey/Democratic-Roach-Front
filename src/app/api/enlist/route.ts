import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Roacher from "@/models/Roacher";

export async function POST(request: Request) {
  try {
    // Connect to MongoDB
    await connectDB();

    const body = await request.json();
    const {
      name,
      email,
      state,
      ageGroup,
      locationCity,
      locationRegion,
      locationCountry,
      latitude,
      longitude,
    } = body;

    // Basic Validation
    if (!name || !email || !state || !ageGroup) {
      return NextResponse.json(
        { error: "All registration fields are required to activate your node." },
        { status: 400 }
      );
    }

    // Check if email already registered
    const existingRoacher = await Roacher.findOne({ email });
    if (existingRoacher) {
      return NextResponse.json(
        { error: "This secure email is already registered as an active node." },
        { status: 409 }
      );
    }

    // Parse client IP address from request headers or use client-supplied IP
    const forwarded = request.headers.get("x-forwarded-for");
    const headerIp = forwarded
      ? forwarded.split(",")[0].trim()
      : (request.headers.get("x-real-ip") || "");

    const ip = headerIp && headerIp !== "127.0.0.1" && headerIp !== "::1"
      ? headerIp
      : (body.ip || "127.0.0.1");

    // Generate unique sequential DRF Roach ID
    const count = await Roacher.countDocuments();
    const nextSequence = 1000 + count + 1;
    const roachId = `DRF-${String(nextSequence).padStart(6, "0")}`;

    // Create and save new Roacher registration with network data
    const newRoacher = new Roacher({
      name,
      email,
      state,
      ageGroup,
      roachId,
      ip,
      locationCity,
      locationRegion,
      locationCountry,
      latitude,
      longitude,
    });

    await newRoacher.save();

    console.log(`[DRF DB] Registered Roacher: ${name} (${roachId}) from IP: ${ip} [Geo: ${locationCity || "Unknown"}]`);

    return NextResponse.json({
      success: true,
      roachId,
      ip,
      geo: {
        city: locationCity,
        region: locationRegion,
        country: locationCountry,
      }
    });
  } catch (error) {
    console.error("[DRF Enlist Error]", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown database error";
    return NextResponse.json(
      { error: "Database transaction failed.", details: errorMessage },
      { status: 500 }
    );
  }
}
