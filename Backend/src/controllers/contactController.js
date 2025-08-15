import nodemailer from 'nodemailer';
import Message from '../models/message.model.js';

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Save message to MongoDB
    await Message.create({ name, email, message });

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };
    await transporter.sendMail(mailOptions);

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      text: `Hi ${name},\n\nSab changa si?\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nDon't Worry, I'll not waste your time. Untill then, Enjoy your day.\n\nBest regards,\nVaibhav Goyal`,
    };
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
};