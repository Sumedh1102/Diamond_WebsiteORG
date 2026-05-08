import React from 'react';

export default function LuxuryFooter() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">
      {/* Top Information Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Address Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Address</h3>
            <p className="text-gray-400 leading-relaxed">
              23 - Sunrise Chambers, beside<br />
              Princess Plaza, MiniBazar,<br />
              Varachha Road Surat - 395006
            </p>
          </div>

          {/* Link Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Link</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  OUR PRODUCTS
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  BLOGS
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Social</h3>
            <ul className="space-y-3">
              <li>
                <a href="#facebook" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  FACEBOOK
                </a>
              </li>
              <li>
                <a href="#linkedin" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>

          {/* Say Hello Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Say Hello</h3>
            <div className="space-y-4">
              <a href="mailto:navkardiamonds@gmail.com" className="text-gray-400 hover:text-white transition-colors block text-sm">
                navkardiamonds@gmail.com
              </a>
              <a href="tel:+917567421124" className="text-white hover:text-gray-300 transition-colors block text-lg font-medium">
                +91 75674 21124
              </a>
              <a href="tel:+919714107775" className="text-white hover:text-gray-300 transition-colors block text-lg font-medium">
                +91 97141 07775
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-8xl mx-auto px-8">
        <div className="border-t border-gray-800"></div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <span className="text-white text-xl font-light tracking-widest">NAV</span>
            <span className="text-[#c9a961] text-xl font-light">KAR</span>
            <span className="text-white text-xl font-light tracking-widest ml-2">DIAMONDS</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            Copyright ©2023. All Rights Reserved{' '}
            <a href="#" className="text-[#c9a961] hover:text-[#d4b676] transition-colors">
              NavKar Diamonds
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}