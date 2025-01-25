import nodemailer from 'nodemailer';

// Configure the email transporter
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: '',
		pass: ''
	}
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendErrorEmail(error: any) {
	const now = new Date();
	const formattedDate = now.toLocaleDateString('fr-FR');
	const formattedTime = now.toLocaleTimeString('fr-FR');

	// Generate a random 4-digit number
	const randomNumber = Math.floor(1000 + Math.random() * 9000);

	const mailOptions = {
		from: process.env.SMTP_USER,
		to: '', // Replace with the recipient's email
		subject: `Erreur de soumission de formulaire pour le site JV (${randomNumber})`, // randomNumber is used to avoid duplicate subjects
		html: `
			<p>Une erreur de soumission de formulaire s'est produite le <strong>${formattedDate}</strong> à <strong>${formattedTime}</strong>.</p>
			<p><strong>Voici les détails de l'erreur :</strong></p>
			<pre>${JSON.stringify(error, null, 2)}</pre>
			<p><strong>Comment résoudre le problème :</strong> Cette erreur est probablement causé par l'arrêt de votre projet Supabase. 
			Veuillez vérifier votre projet Supabase via ce lien : 
			<a href="https://supabase.com/dashboard/project/tdccvcaasjcopyhaeruy" target="_blank">Supabase Dashboard</a> 
			et le restaurer s'il est en pause.</p>
			<p>Si vous avez besoin d'aide, veuillez contacter le développeur pour une assistance supplémentaire.</p>
		`
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent:', info.response);
	} catch (err) {
		console.error('Error sending email:', err);
	}
}
