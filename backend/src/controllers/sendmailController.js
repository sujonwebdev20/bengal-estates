import nodemailer from "nodemailer";

export const sendmail = (req, res, next) => {
  const { subject, to, body } = req.body;
  if (!subject || !to || !body) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  // Nodemailer transporter configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Create a promise array to send emails to each recipient
  const emailPromises = to.map((recipient) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient, // Each recipient gets their email in the "to" field
      subject: subject,
      html: body,
    };

    return transporter.sendMail(mailOptions);
  });

  // Send emails to all recipients
  Promise.all(emailPromises)
    .then((results) => {
      return res
        .status(200)
        .json({ success: true, message: "Emails sent successfully", results });
    })
    .catch((error) => {
      next(error);
    });
};
