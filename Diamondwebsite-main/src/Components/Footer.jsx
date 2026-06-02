import React from 'react';
import { Link } from 'react-router-dom';

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
              CE-5010 Bharat Diamond Bourse,<br />
              G block Bandra Kurla Complex,<br />
              Mumbai - 400051
            </p>
          </div>

          {/* Link Column */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Link</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  OUR PRODUCTS
                </Link>
              </li>
              <li>
                <Link to="/Blogs" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  BLOGS
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-gray-400 hover:text-white transition-colors uppercase text-sm tracking-wide">
                  CONTACT
                </Link>
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
              <a href="tel:+919920752390" className="text-white hover:text-gray-300 transition-colors block text-lg font-medium">
                +91 99207 52390
              </a>
              <a href="tel:+919261619050" className="text-white hover:text-gray-300 transition-colors block text-lg font-medium">
                +91 92616 19050
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
            <img src="https://i.ibb.co/XZ0B29FV/NAV.png" alt="NAV Diamonds Logo" className="h-12 w-auto object-contain mix-blend-lighten" />
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