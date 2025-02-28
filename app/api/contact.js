import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: 'gmail', // Replace with your SMTP server
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch(error) {
        res.status(500).json({ message: 'Error sending email', error: error.toString() });
    }

  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}