import User from "../models/userModel.js";

const isAdminUser = async (userId) => {
  const user = await User.findById(userId);

  return user && user.role === "admin";
};

export default isAdminUser;
