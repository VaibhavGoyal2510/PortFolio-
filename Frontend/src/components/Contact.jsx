import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setError('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-2 sm:px-4 md:px-8">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-blue-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800/90 rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-gray-900 text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-gray-900 text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-gray-900 text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 text-sm sm:text-base"
          disabled={submitted || loading}
        >
          {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
        </button>
        {error && <p className="text-red-400 text-center mt-2 text-sm sm:text-base">{error}</p>}
      </motion.form>
      {submitted && (
        <motion.p
          className="mt-6 text-green-400 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for reaching out! I will get back to you soon.
        </motion.p>
      )}
    </section>
  );
};
