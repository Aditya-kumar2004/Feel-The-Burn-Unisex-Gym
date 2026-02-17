const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  // Strict Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  // Create Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Professional HTML Template for User
  const getAutoReplyHtml = (name) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Arial', sans-serif; background-color: #1a1a1a; color: #ffffff; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #000000; border: 1px solid #333; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
        .header { background-color: #000000; padding: 30px; text-align: center; border-bottom: 2px solid #e11d48; }
        .header h1 { color: #e11d48; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 40px 30px; line-height: 1.6; color: #e5e5e5; }
        .greeting { font-size: 20px; margin-bottom: 20px; color: #ffffff; }
        .highlight { color: #e11d48; font-weight: bold; }
        .footer { background-color: #111; padding: 20px; text-align: center; color: #666; font-size: 12px; border-top: 1px solid #333; }
        .button { display: inline-block; padding: 12px 24px; background-color: #e11d48; color: white; text-decoration: none; border-radius: 4px; margin-top: 20px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Feel The Burn Unisex Gym <img src="logo.svg"></h1>
        </div>
        <div class="content">
          <p class="greeting">Hi ${name},</p>
          <p>Thank you for reaching out to <strong>Feel The Burn Unisex Gym</strong>. We have received your message and appreciate your interest in joining our fitness community.</p>
          <p>One of our team members will review your inquiry and get back to you within <span class="highlight">24 hours</span>.</p>
          <p>At Feel The Burn, we are committed to helping you crush your fitness goals. While you wait, check out our latest updates on our website.</p>
          <a href="http://localhost:5173" class="button">Visit Website</a>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Feel The Burn Unisex Gym. All rights reserved.</p>
          <p>Lower Chutia Samlong, Namkum, Ranchi, Jharkhand – 834010</p>
        </div>
      </div>
    </body>
    </html>
    `;

  // Professional HTML Template for Admin (New Lead Alert)
  const getAdminEmailHtml = (data) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Arial', sans-serif; background-color: #f4f4f5; color: #18181b; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 16px; overflow: hidden; margin-top: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .header { background-color: #000000; padding: 25px; text-align: center; border-bottom: 4px solid #e11d48; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px; }
        .content { padding: 30px; }
        .alert-badge { display: inline-block; background-color: #e11d48; color: white; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
        .info-table td { padding: 12px; border-bottom: 1px solid #e4e4e7; }
        .label { font-weight: bold; color: #71717a; width: 120px; }
        .value { color: #18181b; font-weight: 500; }
        .message-box { background-color: #f4f4f5; padding: 15px; border-radius: 6px; border-left: 4px solid #e11d48; margin-top: 10px; font-style: italic; color: #3f3f46; }
        .footer { background-color: #f4f4f5; padding: 15px; text-align: center; color: #71717a; font-size: 12px; border-top: 1px solid #e4e4e7; }
        .action-btn { display: inline-block; padding: 10px 20px; background-color: #18181b; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; margin-right: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Lead Alert</h1>
        </div>
        <div class="content">
          <div class="alert-badge">New Website Inquiry</div>
          <p style="margin-top: 0;">You have received a new message from the <strong>Feel The Burn</strong> contact form.</p>
          
          <table class="info-table">
            <tr>
              <td class="label">Name:</td>
              <td class="value">${data.name}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td class="value"><a href="mailto:${data.email}" style="color: #e11d48; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr>
              <td class="label">Phone:</td>
              <td class="value">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td class="label">Date:</td>
              <td class="value">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="margin-bottom: 10px; font-weight: bold; color: #18181b;">Message:</div>
          <div class="message-box">
            "${data.message}"
          </div>

          <div style="margin-top: 30px; text-align: center;">
            <a href="mailto:${data.email}" class="action-btn">Reply to User</a>
            ${data.phone ? `<a href="tel:${data.phone}" class="action-btn" style="background-color: #ffffff; color: #18181b; border: 1px solid #d4d4d8;">Call User</a>` : ''}
          </div>
        </div>
        <div class="footer">
          <p>Feel The Burn Admin Notification System</p>
        </div>
      </div>
    </body>
    </html>
    `;

  // Admin Email Options
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to gym admin
    subject: `New Lead: ${name} - Feel The Burn Gym`,
    html: getAdminEmailHtml({ name, email, phone, message })
  };

  // Auto-Reply Email Options
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Send to user
    subject: 'We Received Your Message - Feel The Burn Gym',
    html: getAutoReplyHtml(name)
  };

  try {
    // Send Success Response IMMEDIATELY (Optimistic UI)
    res.status(200).json({ success: true, message: 'Message sent successfully!' });

    // Send Emails in Background (Fire-and-Forget)
    const sendEmails = async () => {
      try {
        await transporter.sendMail(adminMailOptions);
        console.log('Admin email sent successfully');
      } catch (error) {
        console.error('Error sending admin email:', error);
      }

      try {
        await transporter.sendMail(userMailOptions);
        console.log('User auto-reply sent successfully');
      } catch (error) {
        console.error('Error sending auto-reply:', error);
      }
    };

    // Trigger background process
    sendEmails();

  } catch (error) {
    console.error('Critical Error in request handler:', error);
    // If response hasn't been sent yet (rare case before res.status), verify headers sent
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: 'Server error occurred.' });
    }
  }
});

app.get('/', (req, res) => {
  res.send('Feel The Burn Gym Backend is running');
});

// Start Server (only if run directly)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
