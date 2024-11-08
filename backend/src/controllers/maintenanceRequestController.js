import MaintenanceRequest from "../models/maintenanceRequestModel.js";
import User from "../models/userModel.js";

/**********************************************
 * CREATE MAINTENANCE REQUEST MESSAGE HANDLER *
 **********************************************/
export const maintenanceRequest = async (req, res, next) => {
  const { name, email, phone, address, requestMessage } = req.body;
  const authenticatedUserToken = req.decodedToken;
  // Simple validation
  if (!name || !email || !phone || !address || !requestMessage) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  // Find requested user by email in database
  const user = await User.findById(authenticatedUserToken.userId);
  if (!user) {
    return res.status(400).json({ success: false, message: "Please Signin" });
  }
  // Find last maintenance request
  try {
    const lastRequest = await MaintenanceRequest.findOne().sort({
      tokenId: -1,
    });
    const newTokenId = lastRequest ? lastRequest.tokenId + 1 : 100001;
    // Create new maintenance request
    const createdRequestMessage = await MaintenanceRequest.create({
      name,
      email,
      phone,
      address,
      requestMessage,
      user: authenticatedUserToken.userId,
      status: "Pending",
      tokenId: newTokenId,
    });
    // Push new maintenance request message id in createdRequestMessage property array of user
    await User.findOneAndUpdate(
      { _id: authenticatedUserToken.userId },
      { $push: { maintenanceRequestMessages: createdRequestMessage._id } }
    );
    // Send response
    return res.status(200).json({
      success: true,
      message: "Submitted your request",
      createdRequestMessage,
    });
  } catch (error) {
    // Send error
    next(error);
  }
};

/**********************************************
 * GET ALL MAINTENANCE REQUESTS HANDLER *
 **********************************************/
export const getAllMaintenanceRequests = async (req, res, next) => {
  try {
    const maintenanceRequests = await MaintenanceRequest.find()
      .sort({ createdAt: -1 })
      .exec();
    return res.status(200).json(maintenanceRequests);
  } catch (error) {
    next(error);
  }
};

/**********************************************
 * GET MAINTENANCE REQUEST BY USER ID HANDLER *
 **********************************************/
export const getAllMaintenanceRequestsByUserId = async (req, res, next) => {
  const authenticatedUserToken = req.decodedToken;

  try {
    const maintenanceRequests = await MaintenanceRequest.find({
      user: authenticatedUserToken.userId,
    });
    return res.status(200).json(maintenanceRequests);
  } catch (error) {
    next(error);
  }
};

/**********************************************************
 * ACTIONTYPE PROPERTY VALUE CHANGE OF MAINTENANCE REQUEST *
 **********************************************************/
export const updateMaintenanceRequestActionType = async (req, res, next) => {
  const authenticatedUserToken = req.decodedToken;
  const { id } = req.params;

  try {
    const maintenanceRequest = await MaintenanceRequest.findById(id);
    if (!maintenanceRequest) {
      return res
        .status(400)
        .json({ success: false, message: "Maintenance request not found" });
    }

    // if (maintenanceRequest.user.toString() !== authenticatedUserToken.userId) {
    //   return res.status(403).json({ success: false, message: "Unauthorized" });
    // }

    if (maintenanceRequest.actionType === "PENDING") {
      maintenanceRequest.actionType = "SOLVED";
    } else {
      maintenanceRequest.actionType = "PENDING";
    }
    await maintenanceRequest.save();
    return res
      .status(200)
      .json({ success: true, message: "Updated Action Type" });
  } catch (error) {
    next(error);
  }
};
