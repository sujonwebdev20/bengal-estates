import Property from "../models/propertyModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import User from "../models/userModel.js";

/***************************
 * CREATE PROPERTY HANDLER *
 ***************************/
export const createProperty = async (req, res, next) => {
  try {
    const reqBodyProperty = req.body;
    const files = req.files;

    // Uploading thumbnail in cloudinary
    if (files.thumbnail && files.thumbnail[0]) {
      const thumbnailUpload = await cloudinary.uploader
        .upload(files.thumbnail[0].path, {
          folder: "bengal-estates",
        })
        .catch((err) => next(err));
      reqBodyProperty.thumbnail = thumbnailUpload.secure_url;
      fs.unlink(files.thumbnail[0].path, (err) => {
        if (err) {
          next(err);
        }
      });
    }

    // Uploading images in cloudinary
    if (files.images) {
      const imageUploadPromises = files.images.map(async (file) => {
        const uploadedResult = await cloudinary.uploader.upload(file.path, {
          folder: "bengal-estates",
        });
        fs.unlink(file.path, (err) => {
          if (err) {
            next(err);
          }
        });
        return uploadedResult.secure_url;
      });

      reqBodyProperty.images = await Promise.all(imageUploadPromises);
    }

    if (reqBodyProperty.features) {
      reqBodyProperty.features = JSON.parse(reqBodyProperty.features);
    }

    const createdProperty = await Property.create(reqBodyProperty);
    return res.status(201).json({
      success: true,
      message: "Property created successfully",
      property: createdProperty,
    });
  } catch (error) {
    next(error);
  }
};

/******************************
 * GET ALL PROPERTIES HANDLER *
 ******************************/
export const getAllProperties = async (req, res, next) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 }).exec();
    return res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

/******************************
 * GET PROPERTY BY ID HANDLER *
 ******************************/
export const getPropertyById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);
    return res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

/*********************************
 * DELETE PROPERTY BY ID HANDLER *
 *********************************/
export const deletePropertyById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const existingProperty = await Property.findById(id);
    if (!existingProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    const propertyImages = existingProperty.images;

    // Deleting image from Cloudinary
    const imageDeletePromises = propertyImages.map(async (image) => {
      const splitedImageArray = image.split("/");
      const imageName =
        splitedImageArray[splitedImageArray.length - 1].split(".")[0];

      try {
        const result = await cloudinary.uploader.destroy(
          `bengal-estates/${imageName}`
        );
        return result;
      } catch (err) {
        next(err);
      }
    });

    // Deleting thumbnail from Cloudinary
    const thumbnail = existingProperty.thumbnail;
    if (thumbnail) {
      const splitedThumbnailArray = thumbnail.split("/");
      const thumbnailName =
        splitedThumbnailArray[splitedThumbnailArray.length - 1].split(".")[0];

      try {
        await cloudinary.uploader.destroy(`bengal-estates/${thumbnailName}`);
      } catch (err) {
        next(err);
      }
    }

    await Promise.all(imageDeletePromises);

    // Deleting the property from the database
    await Property.findByIdAndDelete(id);

    return res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    next(error);
  }
};

/*******************************
 * EDIT PROPERTY BY ID HANDLER *
 *******************************/
export const editPropertyById = async (req, res, next) => {
  const { id } = req.params;
  const reqBodyProperty = req.body;
  const files = req.files;

  try {
    const existingProperty = await Property.findById(id);
    if (!existingProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Uploading new images to Cloudinary
    const imageUploadPromises = files.images
      ? files.images.map(async (file) => {
          const uploadedResult = await cloudinary.uploader
            .upload(file.path, {
              folder: "bengal-estates",
            })
            .catch((err) => next(err));
          fs.unlink(file.path, (err) => {
            if (err) {
              next(err);
            }
          });
          return uploadedResult.secure_url;
        })
      : [];

    const newImages = await Promise.all(imageUploadPromises);

    // Uploading new thumbnail to Cloudinary
    let newThumbnail = reqBodyProperty.thumbnail;
    if (files.thumbnail) {
      const uploadedThumbnail = await cloudinary.uploader.upload(
        files.thumbnail[0].path,
        {
          folder: "bengal-estates",
        }
      );
      fs.unlink(files.thumbnail[0].path, (err) => {
        if (err) {
          next(err);
        }
      });

      // Deleting old thumbnail from Cloudinary
      if (existingProperty.thumbnail) {
        const thumbnailDeleteArray = existingProperty.thumbnail.split("/");
        const thumbnailName =
          thumbnailDeleteArray[thumbnailDeleteArray.length - 1].split(".")[0];
        await cloudinary.uploader.destroy(`bengal-estates/${thumbnailName}`);
      }

      newThumbnail = uploadedThumbnail.secure_url;
    }

    // Deleting old images from Cloudinary if new images are uploaded
    if (newImages.length > 0) {
      const imageDeletePromises = existingProperty.images.map(async (image) => {
        const splitedImageArray = image.split("/");
        const imageName =
          splitedImageArray[splitedImageArray.length - 1].split(".")[0];

        try {
          const result = await cloudinary.uploader.destroy(
            `bengal-estates/${imageName}`
          );
          return result;
        } catch (err) {
          next(err);
        }
      });
      await Promise.all(imageDeletePromises);
    }

    // Updating the images and thumbnail in the request body
    reqBodyProperty.images =
      newImages.length > 0 ? newImages : existingProperty.images;
    reqBodyProperty.thumbnail = newThumbnail;

    // Updating other fields
    if (reqBodyProperty.features) {
      reqBodyProperty.features = JSON.parse(reqBodyProperty.features);
    }

    // Updating the property in the database
    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      reqBodyProperty,
      { new: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error) {
    next(error);
  }
};

/**************************************************
 * ADD AND REMOVE FAVORITE PROPERTY BY ID HANDLER *
 **************************************************/
export const addToFavoriteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    let user = await User.findById(req.decodedToken.userId);
    if (!user) {
      return res.status(404).json({ message: "Please signin" });
    }

    const existingProperty = await Property.findById(id);
    if (!existingProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    const isExistInFavorites = user.favorites.some(
      (favorite) => favorite.toString() === existingProperty._id.toString()
    );

    if (isExistInFavorites) {
      user.favorites = user.favorites.filter(
        (favorite) => favorite.toString() !== existingProperty._id.toString()
      );
      await User.findByIdAndUpdate(req.decodedToken.userId, user, {
        new: true,
      });
      return res
        .status(200)
        .json({ success: false, message: "Property removed from favorites" });
    }

    user.favorites.push(existingProperty._id);
    await User.findByIdAndUpdate(req.decodedToken.userId, user, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Added to Favorite",
    });
  } catch (error) {
    next(error);
  }
};

/*******************************
 * GET ALL FAVORITE PROPERTIES *
 *******************************/
export const getAllFavorites = async (req, res, next) => {
  try {
    const user = await User.findById(req.decodedToken.userId);

    const favorites = await Property.find({
      _id: { $in: user.favorites },
    });

    if (!favorites) {
      return res.status(404).json({ message: "Favorites not found" });
    }

    return res.status(200).json({ success: true, data: favorites });
  } catch (error) {
    next(error);
  }
};

/****************************
 * GET SUGGESTED PROPERTIES *
 ****************************/
export const getSuggestedProperties = async (req, res, next) => {
  try {
    const properties = await Property.find().limit(3);
    return res.status(200).json({ success: true, data: properties });
  } catch (error) {
    next(error);
  }
};
