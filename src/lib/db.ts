import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://rbaskeyofficial:rbaskeyofficial@cluster0.lnstw.mongodb.net/drf?appName=Cluster0";

declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  } | undefined;
}

export default async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI in db connection module");
  }

  if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
  }

  const cached = global.mongoose;

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((m) => {
      console.log("DB connected successfully.");
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("DB connection error:", e);
    throw e;
  }

  return cached.conn;
}
