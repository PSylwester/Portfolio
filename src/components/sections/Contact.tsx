import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Container } from '../ui/Container';
import { Realtime } from '../ui/Realtime';
import { Send, Coffee, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const { t } = useTranslation();
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
        alert(t('contact.form.success'));
        setFormData({ name: '', email: '', topic: '', message: '' });
      } else {
        const data = await response.json();
        setError(data.error || t('contact.form.error_server'));
      }
    } catch (err) {
      setError(t('contact.form.error_connection'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <Container className="relative py-24 min-h-screen flex flex-col justify-center">
        <header className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <Trans
              i18nKey="contact.title"
              components={[
                <span key="0" />,
                <span key="1" className="text-[color:var(--color-accent)]" />,
              ]}
            />
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <form
              onSubmit={handleSubmit}
              className="glass p-8 md:p-10 rounded-3xl border dark:border-white/10 border-black/10 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[color:var(--color-text-muted)] ml-1">
                    {t('contact.form.label_name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder={t('contact.form.placeholder_name')}
                    className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[color:var(--color-text-muted)] ml-1">
                    {t('contact.form.label_email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder={t('contact.form.placeholder_email')}
                    className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-sm font-medium text-[color:var(--color-text-muted)] ml-1">
                  {t('contact.form.label_subject')}
                </label>
                <input
                  type="text"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder={t('contact.form.placeholder_subject')}
                  className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="text-sm font-medium text-[color:var(--color-text-muted)] ml-1">
                  {t('contact.form.label_message')}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder={t('contact.form.placeholder_message')}
                  className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-text-muted)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-10 py-4 bg-[color:var(--color-accent)] text-[#f8fafc] dark:text-[#0f172a] hover:shadow-lg hover:shadow-[color:var(--color-accent)]/50 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {loading ? t('contact.form.sending') : t('contact.form.submit')}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>

              {error && <p className="mt-4 text-red-400 text-sm italic">{error}</p>}
            </form>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-10">
            <div className="flex justify-start">
              <Realtime />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[color:var(--color-foreground)] flex items-center gap-3">
                {t('contact.info.coffee_title')}{' '}
                <Coffee className="text-[color:var(--color-accent)]" />
              </h3>
              <p className="text-[color:var(--color-text-muted)] text-lg leading-relaxed text-balance">
                {t('contact.info.coffee_desc')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-[color:var(--color-text-muted)] uppercase tracking-widest font-bold">
                    {t('contact.info.email_me')}
                  </p>
                  <p className="text-[color:var(--color-foreground)] font-medium">
                    hello@yourportfolio.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-[color:var(--color-text-muted)] uppercase tracking-widest font-bold">
                    {t('contact.info.socials')}
                  </p>
                  <p className="text-[color:var(--color-foreground)] font-medium">
                    LinkedIn / GitHub / Twitter
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/5 inline-block">
              <p className="text-sm text-[color:var(--color-text-muted)] italic">
                {t('contact.info.footer_note')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
