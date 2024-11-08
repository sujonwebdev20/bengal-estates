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

const router = express.Router();

router.route("/maintenance_request").post(verifyUserToken, maintenanceRequest);
router
  .route("/admin/maintenance_request/all")
  .get(verifyUserToken, isAuthorizedUser, getAllMaintenanceRequests);
router
  .route("/maintenance_request/all")
  .get(verifyUserToken, getAllMaintenanceRequestsByUserId);

router
  .route("/admin/action_change/:id")
  .put(verifyUserToken, isAuthorizedUser, updateMaintenanceRequestActionType);

export default router;
