// nodemailer.config.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "barney96@ethereal.email",
    pass: "FCkxCT8342pbGXz6W5",
  },
});

export default transporter;
