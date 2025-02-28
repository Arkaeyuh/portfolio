'use client'

import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';
import { useState, useMemo } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
  };

  const memoizedParticleBackground = useMemo(() => <ParticleBackground />, []);

  return (
    <div className="flex flex-col min-h-screen bg-back text-white scrollbar-hide">
      {memoizedParticleBackground}

      <section className="relative flex flex-col items-center justify-start pt-[15vh] space-y-8">
        <h1 className="text-4xl font-bold text-violet-700">Contact Me</h1>
        <p className="text-lg text-center max-w-xl">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities.
          Feel free to drop a message!
        </p>

        <div className="bg-gray-900 p-8 rounded-xl shadow-md w-full max-w-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-700 hover:bg-violet-500 text-white py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
        </div>

        <div className="mt-8">
          <Link href="/">
            <p className="bg-violet-700 text-white py-2 px-4 rounded-lg hover:bg-violet-500 transition-colors duration-200 cursor-pointer">
              Back to Home
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}