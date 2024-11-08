import User from "../models/userModel.js";

const isAdminUser = async (userId) => {
  const user = await User.findById(userId);
  // console.log("check", user && user.role === "admin");

  return user && user.role === "admin";
};

export default isAdminUser;
