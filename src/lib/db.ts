import mongoose from "mongoose";

// Hardcoded MongoDB connection string
const MONGODB_URI = "mongodb+srv://rbaskeyofficial:rbaskeyofficial@cluster0.lnstw.mongodb.net/drf?appName=Cluster0";

// Declare global type for mongoose cache using mongoose.Mongoose to avoid global self-referencing issues
declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  } | undefined;
}

export default async function connectDB() {
  // Fallback for placeholder connection string to avoid server crashes
  if (MONGODB_URI.includes("YOUR_MONGODB_CONNECTION_STRING_HERE") || !MONGODB_URI) {
    console.warn("[DRF DB] Warning: MongoDB Connection URI is still a placeholder. Database actions will fail until configured.");
    throw new Error("MONGODB_URI placeholder detected. Please update MONGODB_URI in src/lib/db.ts");
  }

  // Ensure global cache exists
  if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
  }

  // Capture local reference for type-safe narrowing
  const cached = global.mongoose;

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      console.log("[DRF DB] MongoDB connected successfully.");
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("[DRF DB] MongoDB connection failed:", e);
    throw e;
  }

  return cached.conn;
}
