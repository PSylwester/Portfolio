import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setError(null);

    try {
      // Przykład z EmailJS (pamiętaj o instalacji i kluczach w .env)
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert(t('contact.form.success'));
      formRef.current.reset();
    } catch (err) {
      setError(t('contact.form.error_connection'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
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
            name="name" // WAŻNE: 'name' musi pasować do zmiennych w szablonie EmailJS
            required
            disabled={loading}
            placeholder={t('contact.form.placeholder_name')}
            className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] focus:border-[color:var(--color-accent)] transition-colors"
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
            disabled={loading}
            placeholder={t('contact.form.placeholder_email')}
            className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] focus:border-[color:var(--color-accent)] transition-colors"
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
          disabled={loading}
          placeholder={t('contact.form.placeholder_subject')}
          className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] focus:border-[color:var(--color-accent)] transition-colors"
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
          disabled={loading}
          placeholder={t('contact.form.placeholder_message')}
          className="dark:bg-white/5 bg-[color:var(--color-background)] border dark:border-white/10 border-black/10 rounded-xl px-4 py-3 text-[color:var(--color-foreground)] focus:border-[color:var(--color-accent)] transition-colors resize-none"
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
  );
}
