import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';

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
    <section className="contact-section py-16 bg-white">
      <Container maxWidth="lg" className="px-4">
        <Typography
          variant="h4"
          gutterBottom
          component="h2"
          className="contact-title text-center mb-12"
        >
          Get In Touch
        </Typography>

        <Paper elevation={3} className="contact-form-paper max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                variant="outlined"
                size="medium"
                className="contact-input"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                variant="outlined"
                size="medium"
                className="contact-input"
              />
            </div>

            <TextField
              fullWidth
              label="Subject"
              name="subject"
              required
              variant="outlined"
              size="medium"
              className="contact-input"
            />

            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              variant="outlined"
              size="medium"
              className="contact-input"
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              className="contact-submit-btn mt-6"
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
    </section>
  );
};

export default ContactForm;
