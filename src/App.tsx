import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectVeren } from './components/ProjectVeren';
import { ProjectVitalo } from './components/ProjectVitalo';
import { ProjectGStore } from './components/ProjectGStore';
import { ProjectNoire } from './components/ProjectNoire';
import { NoireWhatsAppSystem } from './components/NoireWhatsAppSystem';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#171717] font-sans selection:bg-[#C6532E]/20 selection:text-[#C6532E]">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Editorial Hero Section */}
        <Hero />

        {/* Selected Work Index Anchor Header */}
        <section id="work" className="py-16 bg-[#E5E0D6]/40 border-b border-[#E5E0D6]">
          <div id="projects" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2 text-xs font-mono uppercase tracking-widest text-[#66645F]">
                  <span className="text-[#C6532E] font-bold">PORTFOLIO INDEX</span>
                  <span>•</span>
                  <span>LIVE WEBSITES</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-serif-display font-normal text-[#171717] tracking-tight">
                  Selected Work
                </h2>
                <p className="text-sm text-[#66645F] mt-2 max-w-xl font-normal leading-relaxed">
                  Real websites we designed and built. No templates. Explore the live builds below.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#veren"
                  className="px-3.5 py-1.5 rounded-[4px] bg-[#171717] text-[#F2EFE8] border border-[#171717] text-xs font-mono font-bold hover:bg-[#C6532E] hover:border-[#C6532E] transition-colors"
                >
                  01. VÉREN (Flagship) ↓
                </a>
                <a
                  href="#vital0"
                  className="px-3.5 py-1.5 rounded-[4px] bg-white text-[#171717] border border-[#D5CFC3] text-xs font-mono font-bold hover:border-[#171717] transition-colors"
                >
                  02. VITALØ ↓
                </a>
                <a
                  href="#gstore"
                  className="px-3.5 py-1.5 rounded-[4px] bg-white text-[#171717] border border-[#D5CFC3] text-xs font-mono font-bold hover:border-[#171717] transition-colors"
                >
                  03. GStore ↓
                </a>
                <a
                  href="#noire"
                  className="px-3.5 py-1.5 rounded-[4px] bg-white text-[#171717] border border-[#D5CFC3] text-xs font-mono font-bold hover:border-[#171717] transition-colors"
                >
                  04. NOIRÉ ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Project 01 (Flagship): VÉREN Studio Showcase */}
        <ProjectVeren />

        {/* Project 02: VITALØ Precision Supplements Showcase */}
        <ProjectVitalo />

        {/* Project 03: GStore Sportswear Showcase */}
        <ProjectGStore />

        {/* Project 04: NOIRÉ Parfums Luxury Showcase */}
        <ProjectNoire />

        {/* NOIRÉ WhatsApp Ordering System Innovation Breakdown & Simulator */}
        <NoireWhatsAppSystem />

        {/* Services & Capabilities Section */}
        <Services />

        {/* Why Choose SiteNova Section */}
        <WhyChooseUs />

        {/* 4-Step Process Section */}
        <ProcessSection />

        {/* Contact & Commission CTA Section */}
        <ContactCTA />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
