import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F2EFE8]/92 backdrop-blur-md border-b border-[#E5E0D6] py-3.5 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="nav-logo"
              href="#"
              className="flex items-baseline gap-2 group text-[#171717]"
            >
              <span className="text-xl sm:text-2xl font-black tracking-tight uppercase font-sans-ui text-[#171717]">
                SITENOVA
              </span>
              <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-widest text-[#66645F] group-hover:text-[#C6532E] transition-colors">
                WEB STUDIO
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="nav-desktop-links" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold tracking-widest uppercase text-[#66645F] hover:text-[#171717] transition-colors relative py-1 group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C6532E] group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </nav>

            {/* Action CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                id="nav-btn-start-project"
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs tracking-wider uppercase transition-all duration-200"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#contact"
                className="text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-[8px] bg-[#171717] text-[#F2EFE8]"
              >
                START →
              </a>
              <button
                id="nav-toggle-mobile-menu"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#171717] hover:text-[#C6532E] focus:outline-none transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Editorial Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="nav-mobile-fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#20211F] text-[#F2EFE8] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-[#20211F] pb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black uppercase tracking-tight text-[#F2EFE8]">
                  SITENOVA
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-[#66645F]">
                  WEB STUDIO
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F2EFE8] hover:text-[#C6532E] transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Editorial Nav Items with DM Serif Display */}
            <div className="py-12 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-[#66645F] font-semibold">
                INDEX
              </span>
              {[
                { href: '#work', label: '01. SELECTED WORK' },
                { href: '#services', label: '02. SERVICES' },
                { href: '#whatsapp-ordering', label: '03. WHATSAPP COMMERCE' },
                { href: '#process', label: '04. PROCESS' },
                { href: '#about', label: '05. ABOUT & ADVANTAGE' },
                { href: '#contact', label: '06. START A PROJECT' },
              ].map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                  className="font-serif-display text-3xl sm:text-4xl text-[#F2EFE8] hover:text-[#C6532E] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom Contact Details */}
            <div className="pt-6 border-t border-[#66645F]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#E5E0D6]">
              <div>
                <p className="text-[#66645F] uppercase tracking-wider mb-1">Direct Inquiries</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#F2EFE8] hover:text-[#C6532E] flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C6532E]" />
                  <span>{agencyConfig.contact.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <p className="text-[#66645F] uppercase tracking-wider mb-1">Email Studio</p>
                <a
                  href={`mailto:${agencyConfig.contact.email}`}
                  className="font-mono text-[#F2EFE8] hover:text-[#C6532E]"
                >
                  {agencyConfig.contact.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
