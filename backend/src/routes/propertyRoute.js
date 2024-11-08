import express from "express";
import {
  addToFavoriteById,
  createProperty,
  deletePropertyById,
  editPropertyById,
  getAllFavorites,
  getAllProperties,
  getPropertyById,
} from "../controllers/propertyController.js";
import {
  isAuthorizedUser,
  verifyUserToken,
} from "../middlewares/authMiddleware.js";
import multer from "multer";

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
});

router
  .route("/admin/property/create")
  .post(
    verifyUserToken,
    isAuthorizedUser,
    upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "images" }]),
    createProperty
  );
router.route("/property/all").get(getAllProperties);
router.route("/property/:id").get(getPropertyById);
router.route("/property/favorite/:id").post(verifyUserToken, addToFavoriteById);
router.route("/property/favorites/all").get(verifyUserToken, getAllFavorites);
router
  .route("/admin/property/delete/:id")
  .delete(verifyUserToken, isAuthorizedUser, deletePropertyById);
router
  .route("/admin/property/edit/:id")
  .put(
    verifyUserToken,
    isAuthorizedUser,
    upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "images" }]),
    editPropertyById
  );

export default router;
