import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = getSiteNovaWhatsAppUrl();

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090B0E]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
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
          </a>

          {/* Desktop Navigation Links */}
          <nav id="nav-desktop-links" className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <a
              id="nav-link-work"
              href="#projects"
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/50 transition-colors"
            >
              Projects
            </a>
            <a
              id="nav-link-gstore"
              href="#gstore"
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/50 transition-colors"
            >
              GStore
            </a>
            <a
              id="nav-link-noire"
              href="#noire"
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/50 transition-colors"
            >
              NOIRÉ
            </a>
            <a
              id="nav-link-whatsapp-system"
              href="#whatsapp-ordering"
              className="text-sm text-emerald-400 hover:text-emerald-300 px-3 py-1.5 rounded-full hover:bg-emerald-500/10 transition-colors font-medium flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp Ordering
            </a>
            <a
              id="nav-link-services"
              href="#services"
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/50 transition-colors"
            >
              Services
            </a>
            <a
              id="nav-link-process"
              href="#process"
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/50 transition-colors"
            >
              Process
            </a>
            <a
              id="nav-link-why-us"
              href="#why-us"
              className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/50 transition-colors"
            >
              Why Us
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              id="nav-btn-contact"
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-all border border-slate-700/60"
            >
              <span>Get a Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="nav-mobile-btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              id="nav-toggle-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-dropdown"
          className="md:hidden bg-[#0c0f14]/98 border-b border-slate-800 px-6 py-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50"
            >
              All Projects
            </a>
            <a
              href="#gstore"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800/50 flex items-center justify-between"
            >
              <span>GStore Sportswear</span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">Athletic Store</span>
            </a>
            <a
              href="#noire"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/50 flex items-center justify-between"
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
              className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50"
            >
              Why Choose SiteNova
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50"
            >
              Our 4-Step Process
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-slate-200 hover:text-emerald-400 py-2 border-b border-slate-800/50"
            >
              Contact & Inquiries
            </a>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
