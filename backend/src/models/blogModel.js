import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);
export default Blog;
