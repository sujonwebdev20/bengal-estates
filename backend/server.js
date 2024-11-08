import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDb from "./src/config/connectDb.js";
import authRoute from "./src/routes/authRoute.js";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";
import propertyRoute from "./src/routes/propertyRoute.js";
import blogRoute from "./src/routes/blogRoute.js";
import { v2 as cloudinary } from "cloudinary";
import generalEnquiryRoute from "./src/routes/generalEnquiryRoute.js";
import maintenanceRequestRoute from "./src/routes/maintenanceRequestRoute.js";
import contactRoute from "./src/routes/contactRoute.js";
import newsRoute from "./src/routes/newsRoute.js";
import emailRoute from "./src/routes/emailRoute.js";
import { app, server } from "./socketServer.js";
// import messageRoute from "./src/routes/messageRoute.js";

// Configuration
dotenv.config();
// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello Bengal Estates" });
});
app.use("/api", authRoute);
app.use("/api", propertyRoute);
app.use("/api", blogRoute);
app.use("/api", generalEnquiryRoute);
app.use("/api", contactRoute);
app.use("/api", maintenanceRequestRoute);
app.use("/api", newsRoute);
app.use("/api", emailRoute);
// app.use("/api", messageRoute);

// Error handler middleware
app.use(errorHandler);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
  connectDb();
});
