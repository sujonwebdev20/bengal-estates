import express from "express";
import {
  isAuthorizedUser,
  verifyUserToken,
} from "../middlewares/authMiddleware.js";
import {
  createContact,
  getAllContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.route("/contact").post(createContact);
router
  .route("/admin/contact-messages")
  .get(verifyUserToken, isAuthorizedUser, getAllContact);

export default router;
