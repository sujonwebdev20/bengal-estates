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

router.route("/general_enquiry").post(verifyUserToken, generalEnquiry);
router
  .route("/admin/enquiry_messages")
  .get(verifyUserToken, isAuthorizedUser, getGeneralEnquiry);
router
  .route("/admin/enquiry_messages/delete/:id")
  .delete(verifyUserToken, isAuthorizedUser, deleteEnquiryMessageById);

export default router;
