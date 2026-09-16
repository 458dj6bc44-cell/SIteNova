import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

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

  const whatsappLink = getSiteNovaWhatsAppUrl();

  const navLinks = [
    { id: 'nav-link-work', href: '#projects', label: 'Projects' },
    { id: 'nav-link-vital0', href: '#vital0', label: 'VITALØ', featured: true },
    { id: 'nav-link-gstore', href: '#gstore', label: 'GStore' },
    { id: 'nav-link-noire', href: '#noire', label: 'NOIRÉ' },
    { id: 'nav-link-whatsapp-system', href: '#whatsapp-ordering', label: 'WhatsApp Ordering', highlight: true },
    { id: 'nav-link-services', href: '#services', label: 'Services' },
    { id: 'nav-link-process', href: '#process', label: 'Process' },
    { id: 'nav-link-why-us', href: '#why-us', label: 'Why Us' },
  ];

  return (
    <motion.header
      id="site-header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090B0E]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            id="nav-logo"
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group text-white transition-transform duration-200"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
              <div className="w-full h-full bg-[#0d1117] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Site<span className="text-emerald-400">Nova</span>
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Web Studio
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav id="nav-desktop-links" className="hidden md:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                className={`relative text-sm px-3 py-1.5 rounded-full transition-all duration-200 font-medium group ${
                  link.featured
                    ? 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10'
                    : link.highlight
                    ? 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {(link.featured || link.highlight) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  )}
                  <span>{link.label}</span>
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-emerald-400 rounded-full group-hover:w-3/4 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              id="nav-btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs tracking-wide transition-colors shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </motion.a>
            <motion.a
              id="nav-btn-contact"
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-1 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors border border-slate-700/60"
            >
              <span>Get a Website</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="nav-mobile-btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 active:scale-95 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              id="nav-toggle-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 focus:outline-none active:scale-95 transition-transform"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="nav-mobile-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#0c0f14]/98 border-b border-slate-800 px-6 py-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50 transition-colors"
              >
                All Projects
              </a>
              <a
                href="#vital0"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-emerald-400 font-medium py-2 border-b border-slate-800/50 flex items-center justify-between"
              >
                <span>VITALØ Supplements</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Featured</span>
              </a>
              <a
                href="#gstore"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800/50 flex items-center justify-between transition-colors"
              >
                <span>GStore Sportswear</span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">Athletic Store</span>
              </a>
              <a
                href="#noire"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/50 flex items-center justify-between transition-colors"
              >
                <span>NOIRÉ Parfums</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Luxury Store</span>
              </a>
              <a
                href="#whatsapp-ordering"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-emerald-400 font-medium py-2 border-b border-slate-800/50 flex items-center justify-between"
              >
                <span>WhatsApp Ordering System</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Feature Highlight</span>
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50 transition-colors"
              >
                Services
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50 transition-colors"
              >
                Why Choose SiteNova
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50 transition-colors"
              >
                Our 4-Step Process
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50 transition-colors"
              >
                Contact & Inquiries
              </a>

              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm active:scale-98 transition-transform"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700 active:scale-98 transition-transform"
                >
                  <span>Request Project Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
