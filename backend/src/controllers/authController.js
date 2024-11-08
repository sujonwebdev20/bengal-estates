import User from "../models/userModel.js";
import bcrypt from "bcrypt";

/*********************
 * SIGNUP HANDLER *
 *********************/
export const signup = async (req, res, next) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;
    // Validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const userCreated = await User.create({
      name,
      email,
      phone,
      password,
      confirmPassword,
    });

    res.status(201).json({
      success: true,
      message: "Registration has been success",
      token: await userCreated.generateToken(),
    });
  } catch (error) {
    next(error);
  }
};

/*********************
 * SIGNIN HANDLER *
 *********************/
export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password",
      });
    }
    const existingUser = await User.findOne({ email });

    // Check user in database
    if (!existingUser) {
      return res
        .status(400)
        .json({ status: false, message: "Email or Password invalid" });
    }
    // Compare password
    const isMatchedPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isMatchedPassword) {
      return res.status(400).json({ message: "Email or Password invalid" });
    }
    const token = await existingUser.generateToken();

    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });

    return res.status(200).json({
      success: true,
      message: "Signin successful",
      token,
    });
  } catch (error) {
    next(error);
  }
};

/*********************
 * SIGNOUT HANDLER *
 *********************/
export const signout = async (req, res, next) => {
  try {
    res
      .clearCookie("token", { expires: new Date(Date.now()) })
      .status(200)
      .json({ success: true, message: "Signout successful" });
  } catch (error) {
    next(error);
  }
};
