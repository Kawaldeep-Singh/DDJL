import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import.meta.env.VITE_EMAILJS_SERVICE
import.meta.env.VITE_VITE_EMAILJS_TEMPLATE_ID
import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email || 'Not provided',
      phone: formData.phone,
      city: formData.city,
      project: 'Shree Krishna Heritage, Sector 9A, Jhajjar',
    };

    try {
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', city: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Name */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name *"
        required
        disabled={status === 'loading'}
        className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#0066B2] transition-colors disabled:opacity-60"
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number *"
        required
        pattern="[0-9]{10}"
        maxLength={10}
        disabled={status === 'loading'}
        className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#0066B2] transition-colors disabled:opacity-60"
      />

      {/* City */}
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Your City *"
        required
        disabled={status === 'loading'}
        className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#0066B2] transition-colors disabled:opacity-60"
      />

      {/* Email — Optional */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address (Optional)"
        disabled={status === 'loading'}
        className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#0066B2] transition-colors disabled:opacity-60"
      />

      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-300 text-green-700 text-sm px-4 py-2 rounded">
          ✓ Enquiry submitted! We will call you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-300 text-red-700 text-sm px-4 py-2 rounded">
          ✗ Something went wrong. Please call us directly.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#D32F2F] text-white py-2 rounded font-bold text-sm hover:bg-[#B71C1C] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'ENQUIRE NOW'}
      </button>
    </form>
  );
};

export default EnquiryForm;
