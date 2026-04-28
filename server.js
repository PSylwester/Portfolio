import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// CORS (możesz ograniczyć do swojego frontendu)
app.use(cors());

// Parsowanie JSON
app.use(express.json());

// Rate limit (max 5 requestów / minuta na IP)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: 'Za dużo prób, spróbuj później' },
});
app.use('/api/send-email', limiter);

// Transporter SMTP (WP.pl)
const transporter = nodemailer.createTransport({
  host: 'smtp.wp.pl',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test połączenia przy starcie
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP błąd:', error);
  } else {
    console.log('✅ SMTP gotowy do wysyłki');
  }
});

// Endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, topic, message } = req.body;

  // Walidacja
  if (!name || !email || !topic || !message) {
    return res.status(400).json({ error: 'Brak wymaganych danych' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'Wiadomość za długa' });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nowa wiadomość od ${name} - ${topic}`,
      text: `
Imię: ${name}
Email: ${email}
Temat: ${topic}

${message}
      `,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><b>Imię:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Temat:</b> ${topic}</p>
        <p>${message}</p>
      `,
    });

    console.log('✅ Mail wysłany');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Błąd wysyłki:', error);
    res.status(500).json({ error: 'Błąd wysyłki maila' });
  }
});

// Start serwera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server działa na http://localhost:${PORT}`);
});
