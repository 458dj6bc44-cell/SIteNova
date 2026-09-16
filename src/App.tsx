import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectVitalo } from './components/ProjectVitalo';
import { ProjectGStore } from './components/ProjectGStore';
import { ProjectNoire } from './components/ProjectNoire';
import { NoireWhatsAppSystem } from './components/NoireWhatsAppSystem';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { Sparkles, Layers, ArrowDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090B0E] text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Projects Section Header Anchor */}
        <section id="projects" className="py-12 bg-slate-950/80 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Client Case Studies
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mt-1">
                  Selected Work by <span className="text-emerald-400">SiteNova</span>
                </h2>
                <p className="text-sm text-slate-400 mt-1 max-w-xl">
                  Explore full production websites built with modern 100% static React architecture, responsive design,
                  and direct customer conversion workflows.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href="#vital0"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>01. VITALØ (Featured) ↓</span>
                </a>
                <a
                  href="#gstore"
                  className="px-3.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-medium transition-colors"
                >
                  02. GStore Sportswear ↓
                </a>
                <a
                  href="#noire"
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-medium transition-colors"
                >
                  03. NOIRÉ Parfums ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Project 1 (Featured): VITALØ Precision Supplements Showcase */}
        <ProjectVitalo />

        {/* Project 2: GStore Sportswear Showcase */}
        <ProjectGStore />

        {/* Project 3: NOIRÉ Luxury Perfume Showcase */}
        <ProjectNoire />

        {/* Dedicated NOIRÉ WhatsApp Ordering System Innovation Breakdown & Simulator */}
        <NoireWhatsAppSystem />

        {/* Services Section */}
        <Services />

        {/* Why Choose SiteNova Section */}
        <WhyChooseUs />

        {/* 4-Step Process Section */}
        <ProcessSection />

        {/* Contact & Inquiry CTA Section */}
        <ContactCTA />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
