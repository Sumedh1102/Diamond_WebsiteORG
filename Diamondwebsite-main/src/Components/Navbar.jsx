import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

import { blogData } from '../data/blogData';

export default function LuxuryNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/About' },
    {
      name: 'EDUCATION',
      path: '#',
      subLinks: [
        { name: "4C'S OF DIAMONDS", path: '/education/4cs' },
        { name: 'DIAMOND COMPARISON', path: '/education/comparison' },
      ]
    },
    { 
      name: 'BLOGS', 
      path: '/Blogs',
      subLinks: [
        { name: 'ALL BLOGS', path: '/Blogs' },
        ...blogData.map(blog => ({
          name: blog.title.toUpperCase(),
          path: `/blog/${blog.slug}`
        }))
      ]
    },
    { name: 'CONTACT', path: '/Contact' },
  ];


  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full bg-black">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <div className="flex items-center flex-shrink-0">
          <NavLink to="/" className="flex items-center">
            <img src="https://i.ibb.co/XZ0B29FV/NAV.png" alt="NAV Diamonds Logo" className="h-12 sm:h-14 w-auto object-cover bg-black rounded-xl px-5" />
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group h-20 flex items-center"
              onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.subLinks ? (
                <button className="flex items-center gap-1 text-xs xl:text-sm tracking-wider text-white hover:text-[#B88A6A] transition-colors duration-200">
                  {link.name}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={({ isActive }) =>
                    `text-xs xl:text-sm tracking-wider transition-colors duration-200 relative group ${isActive ? 'text-[#B88A6A]' : 'text-white hover:text-[#B88A6A]'
                    }`
                  }
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#B88A6A] transform origin-left transition-transform duration-200 ${location.pathname === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </NavLink>
              )}

              {/* Dropdown Menu */}
              {link.subLinks && activeDropdown === link.name && (
                <div className="absolute top-20 left-0 w-64 bg-[#242424] border border-[#B88A6A]/20 shadow-2xl py-2 z-50">
                  {link.subLinks.map((sub) => (
                    <div key={sub.name} className="relative group/sub">
                      {sub.subLinks ? (
                        <div className="relative">
                          <button className="w-full flex items-center justify-between px-6 py-4 text-xs tracking-widest text-white hover:text-[#B88A6A] hover:bg-white/5 transition-all duration-200">
                            {sub.name}
                            <span className="text-[10px]">▶</span>
                          </button>
                          {/* Second Level Dropdown */}
                          <div className="absolute top-0 left-full w-64 bg-[#242424] border border-[#B88A6A]/20 shadow-2xl py-2 hidden group-hover/sub:block">
                            {sub.subLinks.map((nested) => (
                              <NavLink
                                key={nested.name}
                                to={nested.path}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="block px-6 py-4 text-xs tracking-widest text-white hover:text-[#B88A6A] hover:bg-white/5 transition-all duration-200"
                              >
                                {nested.name}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <NavLink
                          to={sub.path}
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          className="block px-6 py-4 text-xs tracking-widest text-white hover:text-[#B88A6A] hover:bg-white/5 transition-all duration-200"
                        >
                          {sub.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <a 
          href="https://wa.me/919920752390?text=Hello,%20I%20have%20an%20inquiry%20regarding%20diamonds."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center bg-[#B88A6A] hover:bg-[#A67958] text-white px-6 xl:px-8 py-2.5 xl:py-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#B88A6A]/20 group/inquiry relative overflow-hidden"
        >
          <div className="flex items-center transition-all duration-300">
            <div className="w-0 opacity-0 group-hover/inquiry:w-6 group-hover/inquiry:opacity-100 group-hover/inquiry:mr-2 transition-all duration-300 flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-xs xl:text-sm tracking-wide">Inquiry</span>
            <span className="text-base xl:text-lg ml-2 transition-transform duration-300 group-hover/inquiry:translate-x-1 group-hover/inquiry:-translate-y-1">↗</span>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 sm:top-20 right-0 w-full sm:w-80 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] bg-[#1A1A1A] border-t border-[#B88A6A]/30 z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="px-6 py-6 space-y-1 h-full flex flex-col overflow-y-auto">
          {navLinks.map((link, index) => (
            <div key={link.name}>
              {link.subLinks ? (
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className="w-full flex items-center justify-between text-left text-sm sm:text-base tracking-wider transition-all duration-200 py-4 px-4 rounded text-white hover:text-[#B88A6A] hover:bg-white/5"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="pl-6 space-y-1 bg-white/5 rounded-b-xl mb-2">
                      {link.subLinks.map((sub) => (
                        <div key={sub.name}>
                          {sub.subLinks ? (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveDropdown(activeDropdown === sub.name ? link.name : sub.name);
                                }}
                                className="w-full flex items-center justify-between py-4 px-4 text-xs sm:text-sm tracking-widest text-white/70 hover:text-[#B88A6A]"
                              >
                                {sub.name}
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === sub.name ? 'rotate-180' : ''}`} />
                              </button>
                              {activeDropdown === sub.name && (
                                <div className="pl-4 space-y-1 bg-white/5 mb-2">
                                  {sub.subLinks.map((nested) => (
                                    <NavLink
                                      key={nested.name}
                                      to={nested.path}
                                      onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                      className="block py-3 px-4 text-[10px] sm:text-xs tracking-widest text-white/50 hover:text-[#B88A6A]"
                                    >
                                      {nested.name}
                                    </NavLink>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <NavLink
                              to={sub.path}
                              onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                              className="block py-4 px-4 text-xs sm:text-sm tracking-widest text-white/70 hover:text-[#B88A6A]"
                            >
                              {sub.name}
                            </NavLink>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={({ isActive }) =>
                    `block text-left text-sm sm:text-base tracking-wider transition-all duration-200 py-4 px-4 rounded ${isActive
                      ? 'text-[#B88A6A] bg-[#B88A6A]/10'
                      : 'text-white hover:text-[#B88A6A] hover:bg-white/5'
                    }`
                  }
                  style={{
                    animation: isMobileMenuOpen
                      ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                      : 'none',
                  }}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}

          <div className="flex-grow" />

          <a
            href="https://wa.me/919920752390?text=Hello,%20I%20have%20an%20inquiry%20regarding%20diamonds."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-[#B88A6A] hover:bg-[#A67958] text-white px-8 py-4 transition-all duration-200 mt-4 hover:shadow-lg hover:shadow-[#B88A6A]/20 group/inquiry relative overflow-hidden"
            style={{
              animation: isMobileMenuOpen
                ? 'slideIn 0.3s ease-out 0.3s both'
                : 'none',
            }}
          >
            <div className="flex items-center">
              <div className="w-0 opacity-0 group-hover/inquiry:w-7 group-hover/inquiry:opacity-100 group-hover/inquiry:mr-2 transition-all duration-300 flex items-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-sm tracking-wide">Inquiry</span>
              <span className="text-lg ml-2 transition-transform duration-300 group-hover/inquiry:translate-x-1 group-hover/inquiry:-translate-y-1">↗</span>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
