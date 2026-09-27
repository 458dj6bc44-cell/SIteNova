import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getARDigitalWhatsAppUrl, agencyConfig } from '../data/portfolioData';
import { ARLogo } from './ARLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const whatsappLink = getARDigitalWhatsAppUrl();

  const navLinks = [
    { href: '#work', label: 'WORK' },
    { href: '#services', label: 'SERVICES' },
    { href: '#process', label: 'PROCESS' },
    { href: '#about', label: 'AGENCY' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0C0E]/92 backdrop-blur-md border-b border-[#1E2028] py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* AR Digital Geometric Brand Identity */}
            <a
              id="nav-logo"
              href="#"
              className="group focus:outline-none"
              aria-label="AR Digital Home"
            >
              <ARLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav id="nav-desktop-links" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-mono-tech font-semibold tracking-widest uppercase text-[#9FA4B2] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTA + Availability */}
            <div className="hidden sm:flex items-center gap-5">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#14151B] border border-[#22242D] text-[11px] font-mono-tech text-[#9FA4B2]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>Available for Q2/Q3</span>
              </div>

              <a
                id="nav-btn-start-project"
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[5px] bg-[#FF4D15] hover:bg-[#E63E07] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#FF4D15]/20 hover:shadow-[#FF4D15]/35"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#contact"
                className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-[4px] bg-[#FF4D15] text-white"
              >
                START →
              </a>
              <button
                id="nav-toggle-mobile-menu"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 text-white hover:text-[#FF4D15] focus:outline-none transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md md:hidden flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="bg-[#101115] border-t border-[#22242D] p-6 sm:p-8 rounded-t-[12px]"
            >
              <div className="flex items-center justify-between pb-6 border-b border-[#22242D]">
                <ARLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-[#FF4D15]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-heading font-medium tracking-tight text-[#E1E4EB] hover:text-[#FF4D15] py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-6 border-t border-[#22242D] flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-[6px] bg-[#FF4D15] hover:bg-[#E63E07] text-white font-bold text-center text-xs tracking-wider uppercase transition-colors"
                >
                  START A PROJECT →
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-[6px] bg-[#16171E] border border-[#262833] text-[#9FA4B2] hover:text-white font-mono-tech text-center text-xs tracking-wider uppercase transition-colors"
                >
                  CHAT ON WHATSAPP
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
