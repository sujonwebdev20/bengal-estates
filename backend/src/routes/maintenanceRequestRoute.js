import express from "express";
import {
  getAllMaintenanceRequests,
  getAllMaintenanceRequestsByUserId,
  maintenanceRequest,
  updateMaintenanceRequestActionType,
} from "../controllers/maintenanceRequestController.js";
import {
  isAuthorizedUser,
  verifyUserToken,
} from "../middlewares/authMiddleware.js";
import {
  getMessage,
  getSpecificMessagesOfMaintenanceRequestForUser,
  sendMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.route("/maintenance-requests").post(verifyUserToken, maintenanceRequest);
router
  .route("/admin/maintenance-requests")
  .get(verifyUserToken, isAuthorizedUser, getAllMaintenanceRequests);
router
  .route("/maintenance-requests")
  .get(verifyUserToken, getAllMaintenanceRequestsByUserId);

router
  .route("/admin/action-change/:id")
  .put(verifyUserToken, isAuthorizedUser, updateMaintenanceRequestActionType);

router
  .route("/maintenance-requests/message")
  .post(verifyUserToken, sendMessage);

router
  .route("/maintenance-requests/:id")
  .get(verifyUserToken, getSpecificMessagesOfMaintenanceRequestForUser);

router.route("/messages/:id").get(verifyUserToken, getMessage);

export default router;
