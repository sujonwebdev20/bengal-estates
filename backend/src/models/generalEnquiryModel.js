import { Schema, model } from "mongoose";

const generalEnquirySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const GeneralEnquiry = model("GeneralEnquiry", generalEnquirySchema);
export default GeneralEnquiry;
