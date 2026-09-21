import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getSiteNovaWhatsAppUrl } from '../data/portfolioData';

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

  const whatsappLink = getSiteNovaWhatsAppUrl();

  const navLinks = [
    { href: '#work', label: 'WORK' },
    { href: '#services', label: 'SERVICES' },
    { href: '#process', label: 'PROCESS' },
    { href: '#about', label: 'ABOUT' },
  ];

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F2EFE8]/95 backdrop-blur-md border-b border-[#E5E0D6] py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Minimal Brand Logo */}
            <a
              id="nav-logo"
              href="#"
              className="flex items-baseline gap-2.5 text-[#171717]"
            >
              <span className="text-base sm:text-lg font-bold tracking-tight uppercase font-sans-ui text-[#171717]">
                SITENOVA
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#66645F]">
                WEB STUDIO
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="nav-desktop-links" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-mono font-bold tracking-widest uppercase text-[#66645F] hover:text-[#171717] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                id="nav-btn-start-project"
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#contact"
                className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-[4px] bg-[#171717] text-[#F2EFE8]"
              >
                START →
              </a>
              <button
                id="nav-toggle-mobile-menu"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 text-[#171717] hover:text-[#C6532E] focus:outline-none transition-colors"
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
            className="fixed inset-0 z-50 bg-[#171717]/80 backdrop-blur-sm md:hidden flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="bg-[#F2EFE8] border-t border-[#E5E0D6] p-6 sm:p-8 rounded-t-[8px]"
            >
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E0D6]">
                <span className="text-sm font-bold font-mono uppercase tracking-widest text-[#171717]">
                  SITENOVA WEB STUDIO
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#171717] hover:text-[#C6532E]"
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
                    className="text-xl font-serif-display text-[#171717] hover:text-[#C6532E] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#E5E0D6] flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-[4px] bg-[#171717] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider hover:bg-[#C6532E] transition-colors"
                >
                  START A PROJECT →
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-[4px] border border-[#171717] text-[#171717] font-bold text-xs uppercase tracking-wider hover:bg-[#E5E0D6] transition-colors"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
