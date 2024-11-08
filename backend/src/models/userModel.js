import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [30, "Name must be at most 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    validate: {
      validator: function (v) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
          v
        );
      },
      message: "Please enter a valid phone number",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is required"],
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: "Passwords do not match",
    },
  },
  favorites: { type: Array },
  likes: { type: Array },
  role: {
    type: String,
    default: "user",
  },
  maintenanceRequestMessages: [
    { type: Schema.Types.ObjectId, ref: "MaintenanceRequest" },
  ],
});

userSchema.pre("save", function () {
  this.confirmPassword = undefined;
});

userSchema.pre("save", async function () {
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(this.password, saltRound);
  this.password = hashedPassword;
});

// Custom methods in mongoose
userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        name: this.name,
        email: this.email,
        role: this.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );
  } catch (error) {
    return new Error(error);
  }
};

const User = model("User", userSchema);
export default User;
