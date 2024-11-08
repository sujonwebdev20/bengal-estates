import express from "express";
import { signup, signin, signout } from "../controllers/authController.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/signout").post(signout);

export default router;
