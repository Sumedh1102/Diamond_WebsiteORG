import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

import { blogData } from '../data/blogData';

const WHATSAPP_URL = 'https://wa.me/919920752390?text=Hello,%20I%20have%20an%20inquiry%20regarding%20diamonds.';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/About' },
  {
    name: 'Education',
    subLinks: [
      { name: "4C's of Diamonds", path: '/education/4cs' },
      { name: 'Diamond Comparison', path: '/education/comparison' },
    ],
  },
  {
    name: 'Blogs',
    subLinks: blogData.map((blog) => ({ name: blog.title, date: blog.date, path: `/blog/${blog.slug}` })),
    allLink: { name: 'View all blogs', path: '/Blogs' },
  },
  { name: 'Contact', path: '/Contact' },
];

// Routes match case-insensitively (/about renders the /About page), so compare lower-cased paths
const normalisePath = (path) => path.toLowerCase().replace(/\/+$/, '') || '/';

const isLinkActive = (link, pathname) => {
  const current = normalisePath(pathname);
  if (link.subLinks) {
    return [...link.subLinks, link.allLink].some((sub) => sub && normalisePath(sub.path) === current);
  }
  if (link.path === '/') return current === '/' || current === '/home';
  return normalisePath(link.path) === current;
};

const desktopLinkClass = (active) =>
  `group inline-flex items-center gap-1.5 py-2 text-xs xl:text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-none ${
    active ? 'text-[#B88A6A]' : 'text-white/80 hover:text-white focus-visible:text-white'
  }`;

const dropdownItemClass = (active) =>
  `group/item flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 focus-visible:outline-none focus-visible:bg-white/[0.06] ${
    active ? 'text-[#B88A6A]' : 'text-white/75 hover:bg-white/[0.04] hover:text-white'
  }`;

// Bronze line under a desktop link: grows from the centre on hover, stays for the current page
const underline = (active) => (
  <span
    aria-hidden="true"
    className={`absolute -bottom-2 left-0 h-px w-full origin-center bg-[#B88A6A] transition-transform duration-300 ease-out ${
      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
    }`}
  />
);

// lucide-react has no brand icons
const whatsappIcon = (className) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function LuxuryNavigation() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const closeTimer = useRef(null);
  const lastPointerType = useRef('');
  const dropdownTriggers = useRef({});

  // Shrink the bar once the page scrolls. The threshold is larger than the height it loses,
  // so the spacer below is already hidden under the bar when it shrinks.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close every menu after navigating
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  }, [pathname]);

  // Close the mobile menu when the window grows into the desktop layout
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e) => e.matches && setIsMobileMenuOpen(false);
    desktop.addEventListener('change', handleChange);
    return () => desktop.removeEventListener('change', handleChange);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Escape closes any open menu; a click outside the header closes a dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      setOpenDropdown(null);
      setIsMobileMenuOpen(false);
      // The closed menu is hidden, so hand focus back to the button that opened it
      if (mobileMenuRef.current?.contains(document.activeElement)) menuButtonRef.current?.focus();
    };
    const handlePointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const openDropdownNow = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  // Short delay so the menu survives the pointer crossing the gap between the link and the panel
  const closeDropdownSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleNavigate = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* The header is fixed, so this keeps the page content from starting underneath it */}
      <div aria-hidden="true" className="h-20 sm:h-24 bg-black" />

      <header ref={headerRef} className="fixed inset-x-0 top-0 z-40 bg-black">
        <nav
          aria-label="Main"
          className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] grid-rows-[100%] items-center gap-x-4 transition-[height] duration-300 ease-out ${
            isScrolled ? 'h-16 sm:h-[72px]' : 'h-20 sm:h-24'
          }`}
        >
          {/* Brand Logo: the image has empty space around the mark, so it is drawn taller than
              the bar (about 1.8x) and the excess is clipped instead of spilling onto the page */}
          <NavLink
            to="/"
            onClick={handleNavigate}
            aria-label="NAV Diamonds home"
            className="h-full min-w-max flex items-center justify-self-start overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A6A]/70"
          >
            <img
              src="https://i.ibb.co/q3pmNkKq/image.png"
              alt="NAV Diamonds Logo"
              className={`w-auto max-w-[calc(100vw-6rem)] sm:max-w-[calc(100vw-17rem)] lg:max-w-[14rem] xl:max-w-[18rem] object-contain transition-[height] duration-300 ease-out ${
                isScrolled ? 'h-[115px] sm:h-[132px]' : 'h-36 sm:h-44'
              }`}
            />
          </NavLink>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex h-full items-center gap-7 xl:gap-10">
            {navLinks.map((link) => {
              const active = isLinkActive(link, pathname);

              if (!link.subLinks) {
                return (
                  <li key={link.name} className="h-full flex items-center">
                    <NavLink to={link.path} onClick={handleNavigate} className={desktopLinkClass(active)}>
                      <span className="relative">
                        {link.name}
                        {underline(active)}
                      </span>
                    </NavLink>
                  </li>
                );
              }

              const open = openDropdown === link.name;
              const menuId = `nav-menu-${link.name.toLowerCase()}`;

              return (
                <li
                  key={link.name}
                  className="relative h-full flex items-center"
                  onPointerEnter={(e) => e.pointerType === 'mouse' && openDropdownNow(link.name)}
                  onPointerLeave={(e) => e.pointerType === 'mouse' && closeDropdownSoon()}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setOpenDropdown((current) => (current === link.name ? null : current));
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape' && open) {
                      setOpenDropdown(null);
                      dropdownTriggers.current[link.name]?.focus();
                    }
                  }}
                >
                  <button
                    type="button"
                    ref={(el) => {
                      dropdownTriggers.current[link.name] = el;
                    }}
                    aria-expanded={open}
                    aria-controls={menuId}
                    onPointerDown={(e) => {
                      lastPointerType.current = e.pointerType;
                    }}
                    onKeyDown={() => {
                      lastPointerType.current = 'keyboard';
                    }}
                    onClick={() => {
                      // A mouse already opened the menu on hover, so its click keeps it open.
                      // Touch and keyboard have no hover, so for them a click toggles it.
                      if (lastPointerType.current === 'mouse') openDropdownNow(link.name);
                      else setOpenDropdown((current) => (current === link.name ? null : link.name));
                    }}
                    className={desktopLinkClass(active || open)}
                  >
                    <span className="relative">
                      {link.name}
                      {underline(active || open)}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu. The top padding bridges the gap to the bar so hovering across it keeps the menu open. */}
                  <div
                    id={menuId}
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-200 ease-out ${
                      open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d]/95 backdrop-blur-xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85)] ${
                        link.allLink ? 'w-[22rem]' : 'w-64'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B88A6A] to-transparent"
                      />
                      <ul className="p-2">
                        {link.subLinks.map((sub) => (
                          <li key={sub.path}>
                            <NavLink
                              to={sub.path}
                              onClick={handleNavigate}
                              className={({ isActive }) => dropdownItemClass(isActive)}
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[9px] h-px w-3 shrink-0 bg-[#B88A6A]/50 transition-all duration-300 group-hover/item:w-5 group-hover/item:bg-[#B88A6A]"
                              />
                              <span className="flex flex-col gap-1">
                                <span className="text-sm leading-snug line-clamp-2">{sub.name}</span>
                                {sub.date && (
                                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">{sub.date}</span>
                                )}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                      {link.allLink && (
                        <div className="border-t border-white/10 p-2">
                          <NavLink
                            to={link.allLink.path}
                            onClick={handleNavigate}
                            className="group/all flex items-center justify-between rounded-lg px-3 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B88A6A] transition-colors duration-200 hover:bg-white/[0.04] hover:text-[#D9B592] focus-visible:outline-none focus-visible:bg-white/[0.06]"
                          >
                            {link.allLink.name}
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/all:translate-x-1" />
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-self-end gap-3">
            {/* Inquiry CTA (in the mobile menu on phones) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta hidden sm:inline-flex items-center gap-2 rounded-full bg-[#B88A6A] px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 text-[11px] xl:text-xs font-semibold uppercase tracking-[0.18em] text-[#111] shadow-[0_8px_24px_-10px_rgba(184,138,106,0.8)] transition-all duration-300 hover:bg-[#C99D7B] hover:shadow-[0_10px_30px_-8px_rgba(184,138,106,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {whatsappIcon('w-4 h-4')}
              Inquiry
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-[#B88A6A]/70 hover:text-[#B88A6A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A6A]"
            >
              <span
                aria-hidden="true"
                className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-[4px]'
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ease-out ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-[4px]'
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Bronze hairline, stronger once the page has scrolled */}
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B88A6A]/70 to-transparent transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-40'
          }`}
        />
      </header>

      {/* Mobile Menu: full screen, below the header bar */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 z-30 bg-black transition-[opacity,visibility] duration-300 ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#B88A6A]/10 blur-3xl"
        />

        <div className="relative h-full overflow-y-auto overscroll-contain pt-20 sm:pt-24">
          <nav aria-label="Mobile" className="max-w-xl min-h-full mx-auto px-6 sm:px-10 pt-4 pb-8 flex flex-col">
            <ul>
              {navLinks.map((link, index) => {
                const active = isLinkActive(link, pathname);
                const number = String(index + 1).padStart(2, '0');
                const rowAnimation = `transition-[opacity,transform] duration-500 ease-out ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`;
                const rowDelay = { transitionDelay: isMobileMenuOpen ? `${80 + index * 50}ms` : '0ms' };
                const labelClass = `font-serif text-[1.75rem] sm:text-4xl leading-none transition-colors duration-300 ${
                  active ? 'text-[#B88A6A]' : 'text-white group-hover:text-[#E3C7A5]'
                }`;
                const numberEl = (
                  <span className="w-6 shrink-0 text-[11px] font-medium tracking-[0.2em] text-[#B88A6A]/80">{number}</span>
                );

                if (!link.subLinks) {
                  return (
                    <li key={link.name} className={`border-b border-white/10 ${rowAnimation}`} style={rowDelay}>
                      <NavLink to={link.path} onClick={handleNavigate} className="group flex items-baseline gap-4 py-4 sm:py-5">
                        {numberEl}
                        <span className={labelClass}>{link.name}</span>
                      </NavLink>
                    </li>
                  );
                }

                const expanded = openMobileSection === link.name;
                const sectionId = `mobile-menu-${link.name.toLowerCase()}`;

                return (
                  <li key={link.name} className={`border-b border-white/10 ${rowAnimation}`} style={rowDelay}>
                    <button
                      type="button"
                      onClick={() => setOpenMobileSection(expanded ? null : link.name)}
                      aria-expanded={expanded}
                      aria-controls={sectionId}
                      className="group w-full flex items-baseline gap-4 py-4 sm:py-5 text-left"
                    >
                      {numberEl}
                      <span className={`flex-1 ${labelClass}`}>{link.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 self-center transition-transform duration-300 ${
                          expanded ? 'rotate-180 text-[#B88A6A]' : 'text-white/50'
                        }`}
                      />
                    </button>

                    {/* Collapsed sections are also invisible, which keeps their links out of the tab order.
                        Expanded ones inherit visibility so they hide with the closed menu. */}
                    <div
                      id={sectionId}
                      className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${
                        expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] invisible'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="pl-10 pb-5 space-y-1">
                          {link.subLinks.map((sub) => (
                            <li key={sub.path}>
                              <NavLink
                                to={sub.path}
                                onClick={handleNavigate}
                                className={({ isActive }) =>
                                  `block py-2 text-[15px] leading-snug transition-colors duration-200 ${
                                    isActive ? 'text-[#B88A6A]' : 'text-white/65 hover:text-white'
                                  }`
                                }
                              >
                                {sub.name}
                                {sub.date && (
                                  <span className="block mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">{sub.date}</span>
                                )}
                              </NavLink>
                            </li>
                          ))}
                          {link.allLink && (
                            <li>
                              <NavLink
                                to={link.allLink.path}
                                onClick={handleNavigate}
                                className="inline-flex items-center gap-2 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B88A6A] hover:text-[#D9B592] transition-colors duration-200"
                              >
                                {link.allLink.name}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </NavLink>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div
              className={`mt-auto pt-10 transition-[opacity,transform] duration-500 ease-out ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${80 + navLinks.length * 50}ms` : '0ms' }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta w-full flex items-center justify-center gap-2.5 rounded-full bg-[#B88A6A] px-6 sm:px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] whitespace-nowrap text-[#111] shadow-[0_10px_30px_-10px_rgba(184,138,106,0.8)] transition-colors duration-300 hover:bg-[#C99D7B]"
              >
                {whatsappIcon('w-5 h-5')}
                WhatsApp Inquiry
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </a>
              <p className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] text-white/35 text-balance">
                Lab-grown diamond manufacturers &amp; exporters
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
