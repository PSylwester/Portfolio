import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Realtime } from './Realtime'; // Twój nowy komponent zegara
import { Send, Coffee, Mail, MessageSquare } from 'lucide-react'; // Ikony dla lepszego UX
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Wiadomość wysłana pomyślnie!');
        setFormData({ name: '', email: '', topic: '', message: '' });
      } else {
        const data = await response.json();
        setError(data.error || 'Błąd serwera');
      }
    } catch (err) {
      setError('Nie udało się nawiązać połączenia z serwerem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="relative py-24 min-h-screen flex flex-col justify-center">
      {/* Nagłówek sekcji */}
      <header className="mb-16 text-left">
        <h2 className="landing_title text-4xl md:text-6xl font-bold mb-6">
          Get in <span className="text-blue-500">Touch</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Lewa strona - Formularz (Szklany panel) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <form
            onSubmit={handleSubmit}
            className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 ml-1">E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="john@example.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
              <input
                type="text"
                name="topic"
                required
                value={formData.topic}
                onChange={handleChange}
                disabled={loading}
                placeholder="Project Inquiry"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                placeholder="Tell me about your idea..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>

            {error && <p className="mt-4 text-red-400 text-sm italic">{error}</p>}
          </form>
        </div>

        {/* Prawa strona - Content & Info */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-10">
          <div className="flex justify-start">
            <Realtime />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              Let's Grab a Coffee <Coffee className="text-blue-500" />
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed text-balance">
              I believe your work—and the ideas behind it—matter. Whether you have a big idea or
              just a quick question, I'm here to listen and collaborate.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  Email Me
                </p>
                <p className="text-white font-medium">hello@yourportfolio.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Socials</p>
                <p className="text-white font-medium">LinkedIn / GitHub / Twitter</p>
              </div>
            </div>
          </div>

          {/* Mały "easter egg" - status */}
          <div className="glass p-6 rounded-2xl border border-white/5 inline-block">
            <p className="text-sm text-gray-400 italic">
              "I usually reply within 24 hours. Coffee's on me! ☕"
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
