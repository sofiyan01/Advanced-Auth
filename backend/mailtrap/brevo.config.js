// config/brevo.config.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // smtp-relay.brevo.com
  port: process.env.SMTP_PORT, // 587
  secure: false, // TLS (STARTTLS), so keep this false
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sender = {
  name: "Sayed Sofiyan",
  address: process.env.SMTP_USER,
};
