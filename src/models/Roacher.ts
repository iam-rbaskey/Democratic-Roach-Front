import { Schema, Document, models, model } from "mongoose";

export interface IRoacher extends Document {
  name: string;
  email: string;
  state: string;
  ageGroup: string;
  roachId: string;
  ip: string;
  locationCity?: string;
  locationRegion?: string;
  locationCountry?: string;
  latitude?: number;
  longitude?: number;
  createdAt: Date;
}

const RoacherSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Secure email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  state: {
    type: String,
    required: [true, "State/Union Territory is required"],
    trim: true,
  },
  ageGroup: {
    type: String,
    required: [true, "Age group is required"],
    enum: ["Under 18", "18-24", "25-34", "35+"],
  },
  roachId: {
    type: String,
    required: true,
    unique: true,
  },
  ip: {
    type: String,
    required: true,
    trim: true,
  },
  locationCity: {
    type: String,
    trim: true,
  },
  locationRegion: {
    type: String,
    trim: true,
  },
  locationCountry: {
    type: String,
    trim: true,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Roacher || model<IRoacher>("Roacher", RoacherSchema);
