import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.PASSMAIL,
  },
});
export default transport;
