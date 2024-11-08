import express from "express";
import multer from "multer";
import {
  createNews,
  getAllNews,
  getSingleNews,
  deleteNews,
  updateNews,
} from "../controllers/newsController.js";
import {
  isAuthorizedUser,
  verifyUserToken,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

/***** Destination and file config *****/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

/***** Uploading file config *****/
const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // File size limit 100mb
  fileFilter: async function (req, res, next) {
    if (["image/jpeg", "image/png", "image/jpg"].includes(res.mimetype)) {
      next(null, true);
    } else {
      next(
        new Error("Invalid file type. Only JPEG, PNG, and JPG are allowed.")
      );
    }
  },
});

/***** Post route of news *****/
router.post(
  "/admin/newsies",
  upload.single("image"),
  verifyUserToken,
  isAuthorizedUser,
  createNews
);

/***** Get routes of news *****/
router.get("/newsies", getAllNews);
router.get("/newsies/:id", getSingleNews);

/***** Delete route of news *****/
router.delete(
  "/admin/newsies/:id",
  verifyUserToken,
  isAuthorizedUser,
  deleteNews
);

/***** Update route of news *****/
router.put(
  "/admin/newsies/:id",
  upload.single("image"),
  verifyUserToken,
  isAuthorizedUser,
  updateNews
);

export default router;
