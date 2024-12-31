const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or use a custom SMTP server
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password or app password
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: "recipient-email@gmail.com", // Replace with your recipient email
      subject: "Nouveau message de contact",
      text: `Email: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
