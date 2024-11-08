import GeneralEnquiry from "../models/generalEnquiryModel.js";

export const generalEnquiry = async (req, res, next) => {
  const reqBody = req.body;
  const { name, email, location, phone, description } = req.body;
  // Validation
  try {
    if (!name || !email || !location || !phone || !description) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    await GeneralEnquiry.create(reqBody);

    return res
      .status(200)
      .json({ success: true, message: "Submitted", reqBody });
  } catch (error) {
    next(error);
  }
};

export const getGeneralEnquiry = async (req, res, next) => {
  try {
    const allEnquiry = await GeneralEnquiry.find()
      .sort({ createdAt: -1 })
      .exec();
    return res.status(200).json(allEnquiry);
  } catch (error) {
    next(error);
  }
};

export const deleteEnquiryMessageById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const generalEnquiry = await GeneralEnquiry.findById(id);
    if (!generalEnquiry) {
      return res.status(404).json({ message: "Enquiry Message not found" });
    }

    // Deleting the property from the database
    await GeneralEnquiry.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Enquiry Message deleted successfully" });
  } catch (error) {
    next(error);
  }
};
