'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
        />

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 focus:outline-none w-full max-w-md px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-10 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.1] relative shadow-2xl"
          >
            {/* Light effect on modal */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />
            
            {/* Inner shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-3xl" />
            
            {/* Close button */}
            <Dialog.Close asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close"
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800/80 border border-neutral-800 text-neutral-400 hover:text-white text-lg transition-all"
              >
                ✕
              </motion.button>
            </Dialog.Close>

            {/* Title */}
            <div className="mb-8">
              <Dialog.Title className="text-3xl font-semibold text-white mb-2 tracking-tight">
                Let's Connect
              </Dialog.Title>
              <p className="text-sm text-neutral-500 font-light">Send me a message and I'll respond as soon as possible!</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">✓</div>
                <p className="text-xl font-semibold text-white mb-2">Message Sent!</p>
                <p className="text-sm text-neutral-400 font-light">Thanks for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-all font-light"
                    placeholder="Enzo"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-all font-light"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-all resize-none font-light"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-xl text-sm font-medium text-black bg-white hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
