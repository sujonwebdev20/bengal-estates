import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String },
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);
export default Blog;
