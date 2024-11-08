import express from "express";
import multer from "multer";
import {
  addToFavoriteById,
  createProperty,
  deletePropertyById,
  editPropertyById,
  getAllFavorites,
  getAllProperties,
  getPropertyById,
  getSuggestedProperties,
} from "../controllers/propertyController.js";
import {
  isAuthorizedUser,
  verifyUserToken,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // File size limit 100mb
  fileFilter: function (req, res, next) {
    if (["image/jpeg", "image/png", "image/jpg"].includes(res.mimetype)) {
      next(null, true);
    } else {
      next(
        new Error("Invalid file type. Only JPEG, PNG, and JPG are allowed.")
      );
    }
  },
});

router
  .route("/admin/property/create")
  .post(
    verifyUserToken,
    isAuthorizedUser,
    upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "images" }]),
    createProperty
  );
router.route("/properties").get(getAllProperties);
router.route("/suggested-properties").get(getSuggestedProperties);
router.route("/properties/:id").get(getPropertyById);
router.route("/property/favorite/:id").post(verifyUserToken, addToFavoriteById);
router.route("/property/favorites/all").get(verifyUserToken, getAllFavorites);
router
  .route("/admin/properties/:id")
  .delete(verifyUserToken, isAuthorizedUser, deletePropertyById);
router
  .route("/admin/properties/:id")
  .put(
    verifyUserToken,
    isAuthorizedUser,
    upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "images" }]),
    editPropertyById
  );

export default router;
