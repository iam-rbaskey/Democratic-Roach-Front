import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Roacher from "@/models/Roacher";

export async function POST(request: Request) {
  try {
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

    if (!name || !email || !state || !ageGroup) {
      return NextResponse.json(
        { error: "All registration fields are required." },
        { status: 400 }
      );
    }

    const existingRoacher = await Roacher.findOne({ email });
    if (existingRoacher) {
      return NextResponse.json(
        { error: "This email is already registered." },
        { status: 409 }
      );
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const headerIp = forwarded
      ? forwarded.split(",")[0].trim()
      : (request.headers.get("x-real-ip") || "");

    const ip = headerIp && headerIp !== "127.0.0.1" && headerIp !== "::1"
      ? headerIp
      : (body.ip || "127.0.0.1");

    // sequential id generation (DRF-001001 base offset)
    const count = await Roacher.countDocuments();
    const nextSequence = 1000 + count + 1;
    const roachId = `DRF-${String(nextSequence).padStart(6, "0")}`;

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
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Database transaction failed." },
      { status: 500 }
    );
  }
}
