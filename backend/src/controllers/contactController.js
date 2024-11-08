import Contact from "../models/contactModel.js";

export const createContact = async (req, res, next) => {
  const reqBody = req.body;

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    await Contact.create(reqBody);

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      data: req.body,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllContact = async (req, res, next) => {
  try {
    const allContacts = await Contact.find().sort({ createdAt: -1 }).exec();
    return res.status(200).json(allContacts);
  } catch (error) {
    next(error);
  }
};
