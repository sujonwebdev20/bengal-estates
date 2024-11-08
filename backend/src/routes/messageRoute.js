// import express from "express";
// import {
//   getMessage,
//   sendMessage,
//   // userGetIdOfAdminForMessage,
// } from "../controllers/messageController.js";
// import { verifyUserToken } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router
//   .route("/maintenance_request/:id/message")
//   .post(verifyUserToken, sendMessage);
// // router
// //   .route("/maintenance_request")
// //   .get(verifyUserToken, userGetIdOfAdminForMessage);
// router.route("/messages/:id").get(verifyUserToken, getMessage);

// export default router;
