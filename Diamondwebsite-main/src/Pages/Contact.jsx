import React, { useState } from 'react';
import Header from '../Contact/Header'; 

export default function LuxuryContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
<>
    <Header/>
    <section className="min-h-fit bg-[#1A1A1A] text-white px-6 py-16 md:px-12 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Pill Label */}
            <div className="inline-block">
              <span className="px-6 py-2 border border-gray-600 rounded-full text-xs uppercase tracking-wider text-gray-300">
                Get in Touch
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's get in touch with us.
            </h1>

            {/* Supporting Text */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              If you would like to work with us or just want to get in touch, we'd love to hear from you!
            </p>

            {/* Contact Numbers */}
            <div className="space-y-4 pt-8">
              <div>
                <a 
                  href="tel:+919920752390" 
                  className="text-3xl md:text-4xl font-semibold text-[#d4a574] hover:text-[#e8bc8a] transition-colors block pb-2 border-b border-[#d4a574]/30"
                >
                  +91 99207 52390
                </a>
              </div>
              <div>
                <a 
                  href="tel:+919261619050" 
                  className="text-3xl md:text-4xl font-semibold text-[#d4a574] hover:text-[#e8bc8a] transition-colors block pb-2 border-b border-[#d4a574]/30"
                >
                  +91 92616 19050
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 pt-8">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:pt-16">
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
              />

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</>

  );
}