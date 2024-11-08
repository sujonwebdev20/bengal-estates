import express from "express";
import {
  createBlog,
  deleteBlogById,
  editBlogById,
  getAllBlogs,
  getBlogById,
} from "../controllers/blogController.js";
import multer from "multer";
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
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // File size limit 100mb
});

router
  .route("/admin/blogs")
  .post(verifyUserToken, isAuthorizedUser, upload.single("image"), createBlog);
router
  .route("/admin/blogs/:id")
  .delete(verifyUserToken, isAuthorizedUser, deleteBlogById);
router
  .route("/admin/blogs/:id")
  .put(verifyUserToken, isAuthorizedUser, upload.single("image"), editBlogById);
router.route("/blogs").get(getAllBlogs);
router.route("/blogs/:id").get(getBlogById);

export default router;
