import { Schema, model } from "mongoose";

const maintenanceRequestSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  requestMessage: { type: String, required: true },
  tokenId: { type: Number, default: 100001 },
  actionType: { type: String, enum: ["PENDING", "SOLVED"], default: "PENDING" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const MaintenanceRequest = model(
  "MaintenanceRequest",
  maintenanceRequestSchema
);
export default MaintenanceRequest;
