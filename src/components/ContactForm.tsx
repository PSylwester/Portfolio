import React from 'react';
import { Container } from '@mui/material';
import './ContactForm.css';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e.currentTarget as unknown as FormData);
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
                  className="contact-input-field"
                  placeholder=" "
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
                  rows={4}
                  className="contact-input-field contact-textarea"
                  placeholder=" "
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="contact-submit-btn">
                  👋 Say "Hello"
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
