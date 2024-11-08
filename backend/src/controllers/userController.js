import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getOtherUsers = async (req, res) => {
  try {
    const loggedInUserId = req.userId;
    const otherUser = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );
    return res.status(200).json({ success: true, otherUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
