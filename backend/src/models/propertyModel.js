import { Schema, model } from "mongoose";

const propertySchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    propertyId: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [{ type: String, required: true }],
    description: { type: String, required: true },
    garages: { type: Number },
    propertySize: { type: Number },
    propertyType: { type: String },
    yearBuilt: { type: Number },
    parking: { type: Number },
    garageSize: { type: Number },
    heating: { type: String },
    bed: { type: Number },
    balcony: { type: Number },
    bath: { type: Number },
    features: [{ type: String }],
    isAvailable: {
      type: String,
      required: true,
      enum: ["Available", "Up Coming", "Occupied"],
    },
  },
  { timestamps: true }
);

const Property = model("Property", propertySchema);
export default Property;
