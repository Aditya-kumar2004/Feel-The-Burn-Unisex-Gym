require('dotenv').config();
const nodemailer = require('nodemailer');
const path = require('path');

const testEmail = async () => {
    console.log('Testing Email Configuration...');
    console.log('User:', process.env.EMAIL_USER);
    // console.log('Pass:', process.env.EMAIL_PASS); // Don't log password

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to self
        subject: 'Test Email from Gym Backend',
        text: 'If you receive this, your email configuration is correct!',
        attachments: [{
            filename: 'logo.png',
            path: path.join(__dirname, '../src/assets/logo-final.png'),
            cid: 'logo'
        }]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
    } catch (error) {
        console.error('❌ Error sending email:', error);
    }
};

testEmail();
