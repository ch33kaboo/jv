import nodemailer from 'nodemailer';

// Configure the email transporter
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: '',
		pass: ''
	}
});

export async function sendErrorEmail(error: any) {
	const mailOptions = {
		from: process.env.SMTP_USER,
		to: '', // Replace with the recipient's email
		subject: 'Application Error Notification',
		text: `An error occurred: ${JSON.stringify(error)}`
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent:', info.response);
	} catch (err) {
		console.error('Error sending email:', err);
	}
}
