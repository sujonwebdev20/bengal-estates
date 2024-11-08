import express from "express";
import {
  deleteEnquiryMessageById,
  generalEnquiry,
  getGeneralEnquiry,
} from "../controllers/generalEnquiryController.js";
import {
  isAuthorizedUser,
  verifyUserToken,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/general-enquiry").post(verifyUserToken, generalEnquiry);
router
  .route("/admin/enquiry-messages")
  .get(verifyUserToken, isAuthorizedUser, getGeneralEnquiry);
router
  .route("/admin/enquiry-messages/:id")
  .delete(verifyUserToken, isAuthorizedUser, deleteEnquiryMessageById);

export default router;
