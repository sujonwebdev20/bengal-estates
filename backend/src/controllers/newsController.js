import News from "../models/newsModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

/***** Create News *****/
export const createNews = async (req, res, next) => {
  const reqBodyNews = req.body;
  const reqFile = req.file;

  if (!reqFile || !reqBodyNews.title) {
    return res.status(400).json({
      success: false,
      message: "Please filled at least Image and Main Title !",
    });
  }

  try {
    const uploadedResult = await cloudinary.uploader
      .upload(reqFile.path, {
        folder: "bengal-estates",
        use_filename: true,
      })
      .catch((err) => next(err));

    fs.unlink(reqFile.path, (err) => {
      if (err) {
        next(err);
      }
    });

    reqBodyNews.image = uploadedResult.secure_url;

    const newNews = News(reqBodyNews);
    await newNews.save();
    return res
      .status(201)
      .json({ success: true, message: "News created successfully" });
  } catch (error) {
    next(error);
  }
};

/***** Get All News *****/
export const getAllNews = async (req, res, next) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }).exec();
    res.json({ success: true, data: news });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/***** Get Single News *****/
export const getSingleNews = async (req, res, next) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res
        .status(404)
        .json({ success: false, message: "News not found" });
    }
    return res.json({ success: true, data: news });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/***** Update News *****/
export const updateNews = async (req, res, next) => {
  const { id } = req.params;
  const reqBodyNews = req.body;
  const reqFile = req.file;
  try {
    const existingNews = await News.findById(id);
    if (!existingNews) {
      fs.unlink(reqFile.path, (err) => {
        if (err) {
          next(err);
        }
      });
      return res
        .status(404)
        .json({ success: false, message: "News not found" });
    }

    if (reqFile) {
      const uploadedResult = await cloudinary.uploader
        .upload(reqFile.path, {
          folder: "bengal-estates",
          use_filename: true,
        })
        .catch((err) => next(err));

      if (uploadedResult.secure_url) {
        const takeExistingImage = existingNews.image;
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

      reqBodyNews.image = uploadedResult.secure_url;
    } else {
      // If no new file is provided, retain the old image
      reqBodyNews.image = existingNews.image;
    }
    await News.findByIdAndUpdate(id, reqBodyNews, {
      new: true,
    });
    return res
      .status(201)
      .json({ success: true, message: "News updated successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/***** Delete News *****/
export const deleteNews = async (req, res, next) => {
  const { id } = req.params;

  try {
    const existingNews = await News.findById(id);
    if (!existingNews) {
      return res
        .status(404)
        .json({ success: false, message: "News not found" });
    }
    // Deleting images from cloudinary
    const splitedImage = existingNews.image.split("/");
    const imageName = splitedImage[splitedImage.length - 1].split(".")[0];
    const deletedImageResult = await cloudinary.uploader.destroy(
      `bengal-estates/${imageName}`
    );

    if (deletedImageResult.result === "ok") {
      // Deleting the property from the database
      await News.findByIdAndDelete(id);
      return res.status(200).json({ message: "News deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// For testing purposes only
export const testNewsRoute = (req, res) => {
  res.json({ message: "News API is working" });
};
