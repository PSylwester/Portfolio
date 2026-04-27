// server.js
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Wczytaj zmienne środowiskowe z pliku .env
dotenv.config();

const app = express();

// Konfiguracja serwera
app.use(cors()); // Zezwól na połączenia z Vite
app.use(express.json()); // Zaznacz, że czekasz na dane JSON

// Twój punkt API do wysyłki maila
app.post('/api/send-email', async (req, res) => {
  const { name, email, topic, message } = req.body;

  // Walidacja - sprawdzamy czy nie ma pustych pól
  if (!name || !email || !topic || !message) {
    return res.status(400).json({ error: 'Brak wymaganych danych' });
  }

  try {
    // Konfiguracja klienta mailowego (SMTP)
    const transporter = nodemailer.createTransport({
      host: 'smtp.wp.pl', // Możesz zmienić na inny, jeśli używasz innego providera
      port: 465, // Port dla SSL  lub 587 dla TLS
      secure: true, // Użyj SSL dla portu 465 lub false dla portu 587
      auth: {
        user: process.env.EMAIL_USER, // Twój adres e-mail z .env
        pass: process.env.EMAIL_PASS, // Twoje hasło / hasło generatora aplikacji
      },
    });

    await transporter.sendMail({
      from: `Aplikacja Portfolio-contact`,
      to: 'p.sylwek18@wp.pl', // Email na który ma trafić wiadomość
      subject: `Nowa wiadomość od ${name} - Temat: ${topic}`,
      text: message,
      html: `<h2>Wiadomość od: ${name}</h2><p>Email: ${email}</p><p>Temat: ${topic}</p><p>${message}</p>`,
    });

    console.log('✓ Wiadomość wysłana sukcesem!');
    res.status(200).json({ success: true, message: 'Wiadomość wysłana' });
  } catch (error) {
    console.error('❌ Błąd wysyłki:', error);
    res.status(500).json({ error: 'Błąd serwera przy wysyłce' });
  }
});

// Uruchomienie serweru na porcie 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend startuje na porcie ${PORT}`);
});
