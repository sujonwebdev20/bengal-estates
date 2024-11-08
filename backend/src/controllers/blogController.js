import Blog from "../models/blogModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

/***********************
 * CREATE BLOG HANDLER *
 ***********************/
export const createBlog = async (req, res, next) => {
  const reqFile = req.file;
  const reqBodyBlog = req.body;

  if (!reqFile || !reqBodyBlog.title) {
    return res.status(400).json({
      success: false,
      message: "Please filled at least Image and Main Title is required",
    });
  }

  try {
    const uploadedResult = await cloudinary.uploader
      .upload(reqFile.path, {
        folder: "bengal-estates",
      })
      .catch((err) => next(err));

    fs.unlink(reqFile.path, (err) => {
      if (err) {
        next(err);
      }
    });
    reqBodyBlog.image = uploadedResult.secure_url;

    const newBlog = Blog(reqBodyBlog);
    await newBlog.save();
    return res
      .status(201)
      .json({ success: true, message: "Blog created successfully" });
  } catch (error) {
    next(error);
  }
};

/*************************
 * GET ALL BLOGS HANDLER *
 *************************/
export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find().sort({ createdAt: -1 }).exec();
    return res.status(200).json(allBlogs);
  } catch (error) {
    next(error);
  }
};

/**************************
 * GET BLOG BY ID HANDLER *
 **************************/
export const getBlogById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    return res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

/*****************************
 * DELETE BLOG BY ID HANDLER *
 *****************************/
export const deleteBlogById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const blogImage = blog.image;

    // Deleting images from Cloudinary
    const splitedImage = blogImage.split("/");
    const imageName = splitedImage[splitedImage.length - 1].split(".")[0];

    const deletedImageResult = await cloudinary.uploader.destroy(
      `bengal-estates/${imageName}`
    );

    if (deletedImageResult.result === "ok") {
      // Deleting the property from the database
      await Blog.findByIdAndDelete(id);
      return res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      return res
        .status(500)
        .json({ message: "Something wen't wrong. Please try again" });
    }
  } catch (error) {
    next(error);
  }
};

/***************************
 * EDIT BLOG BY ID HANDLER *
 ***************************/
export const editBlogById = async (req, res, next) => {
  const { id } = req.params;
  const reqBodyBlog = req.body;
  const reqFile = req.file;

  try {
    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (reqFile) {
      const uploadedResult = await cloudinary.uploader
        .upload(reqFile.path, {
          folder: "bengal-estates",
        })
        .catch((err) => next(err));

      if (uploadedResult.secure_url) {
        const takeExistingImage = existingBlog.image;
        // Deleting images from cloudinary
        const splitedImage = takeExistingImage.split("/");
        const imageName = splitedImage[splitedImage.length - 1].split(".")[0];

        await cloudinary.uploader.destroy(`bengal-estates/${imageName}`);
      } else {
        return res.status(500).json({
          message: "Something went wrong. Please try again",
        });
      }

      fs.unlink(reqFile.path, (err) => {
        if (err) {
          next(err);
        }
      });

      reqBodyBlog.image = uploadedResult.secure_url;
    } else {
      // If no new file is provided, retain the old image
      reqBodyBlog.image = existingBlog.image;
    }

    await Blog.findByIdAndUpdate(id, reqBodyBlog, {
      new: true,
    });
    return res
      .status(201)
      .json({ success: true, message: "Blog updated successfully" });
  } catch (error) {
    next(error);
  }
};
