import React, { useState } from 'react';
import { Container } from '@mui/material';
import './ContactForm.css';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  // 1. Stan przechowujący dane wstępnie wypełnione formularza
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  // Stan dla komunikatów i procesu ładowania
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Obsługa zmiany inputów - podtrzymuje dane w stanach
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Główna funkcja wysyłania do backendu
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Zapobiega odświeżeniu strony
    setLoading(true);
    setError(null);

    try {
      // WYSYŁKA DO SERWERA (localhost:5000 to domyślny port backendu)
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Oznacza, że wysyłamy JSON
        },
        body: JSON.stringify(formData), // Przekształca stan w obiekt JSON
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Wiadomość wysłana pomyślnie!');

        // Resetuj formularz po sukcesie
        setFormData({ name: '', email: '', topic: '', message: '' });
      } else {
        setError(data.error || 'Błąd serwera');
      }
    } catch (err) {
      console.error('Wystąpił błąd:', err);
      setError('Nie udało się nawiązać połączenia z serwerem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section relative overflow-hidden flex items-center justify-center h-full">
      <Container maxWidth="lg" className="px-4 py-16">
        <div className="contact-content-wrapper flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="contact-text-content text-left max-w-lg">
            <div className="contact-heading text-4xl md:text-5xl font-bold leading-tight flex">
              <span className="contact-heading-span">Let's Grab a Coffee (Virtual or Real!)</span>
              <span className="inline-block">☕</span>
            </div>
            <p className="contact-subheading mt-4 text-gray-300 text-lg">
              Your project deserves personal attention.✨ I'd love to hear about it.
            </p>
            <p className="contact-description mt-6 text-gray-400">
              Hi there!👋 Thanks for stopping by my space on the web. I believe your work—and the
              ideas behind it—matter. That's why I'm here: to listen, help, and collaborate without
              any corporate formalities. Whether you have a big idea or just a quick question, feel
              free to drop me a line via email or message here ✒️. No pressure at all, just good
              communication. I usually reply quickly, and who knows? Maybe one day we'll even meet
              for a real coffee to brainstorm together! 😄
            </p>
          </div>

          {/* Right side - Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form-container relative z-10 w-full max-w-md"
          >
            <div className="contact-form-glass">
              <div className="contact-form-header mb-6">
                <h3 className="contact-form-title text-xl font-semibold text-white">Contact Me!</h3>
              </div>

              <div className="contact-input-group mb-4">
                <label htmlFor="name" className="contact-label block text-sm text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="contact-input-field"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading} // Blokuje inputy podczas wysyłania, aby uniknąć duplikatów
                />
              </div>

              <div className="contact-input-group mb-4">
                <label htmlFor="email" className="contact-label block text-sm text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="contact-input-field"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="contact-input-group mb-4">
                <label htmlFor="topic" className="contact-label block text-sm text-gray-300 mb-2">
                  Topic
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  required
                  className="contact-input-field"
                  placeholder=" "
                  value={formData.topic}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="contact-input-group mb-6">
                <label htmlFor="message" className="contact-label block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="contact-input-field contact-textarea"
                  placeholder=" "
                  disabled={loading}
                ></textarea>
              </div>
              {/* Przycisk z stanem */}
              <div className="flex justify-end">
                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  <span>{loading ? '👋 Sending...' : '👋 Say "Hello"'}</span>
                </button>
              </div>
              {/* 3. Obsługa błędu (jeśli wystąpi) */}
              {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
