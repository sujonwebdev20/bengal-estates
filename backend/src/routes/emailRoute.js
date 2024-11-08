import express from "express";
import { sendmail } from "../controllers/sendmailController.js";
import {
  isAuthorizedUser,
  verifyUserToken,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/admin/sendmail")
  .post(verifyUserToken, isAuthorizedUser, sendmail);

export default router;
