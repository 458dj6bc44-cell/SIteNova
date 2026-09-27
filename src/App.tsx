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
    <div className="min-h-screen bg-[#0B0C0E] text-[#F4F4F6] font-sans selection:bg-[#FF4D15] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Modern Agency Hero Section */}
        <Hero />

        {/* Selected Work Index Anchor Header */}
        <section id="work" className="py-16 bg-[#0E0F13] border-b border-[#1E2028]">
          <div id="projects" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2 text-xs font-mono-tech uppercase tracking-widest text-[#9FA4B2]">
                  <span className="text-[#FF4D15] font-bold">PORTFOLIO INDEX</span>
                  <span>•</span>
                  <span>LIVE PRODUCTION BUILDS</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
                  Selected Work
                </h2>
                <p className="text-sm text-[#9FA4B2] mt-2 max-w-xl font-normal leading-relaxed">
                  Real websites and e-commerce platforms designed and engineered by AR Digital. Zero templates. Explore our live builds below.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#veren"
                  className="px-3.5 py-1.5 rounded-[5px] bg-[#FF4D15] text-white border border-[#FF4D15] text-xs font-mono-tech font-bold hover:bg-[#E63E07] transition-colors shadow-sm"
                >
                  01. VÉREN (Flagship) ↓
                </a>
                <a
                  href="#vital0"
                  className="px-3.5 py-1.5 rounded-[5px] bg-[#14151B] text-[#E1E4EB] border border-[#22242D] text-xs font-mono-tech font-bold hover:border-[#FF4D15] hover:text-white transition-colors"
                >
                  02. VITALØ ↓
                </a>
                <a
                  href="#gstore"
                  className="px-3.5 py-1.5 rounded-[5px] bg-[#14151B] text-[#E1E4EB] border border-[#22242D] text-xs font-mono-tech font-bold hover:border-[#FF4D15] hover:text-white transition-colors"
                >
                  03. GStore ↓
                </a>
                <a
                  href="#noire"
                  className="px-3.5 py-1.5 rounded-[5px] bg-[#14151B] text-[#E1E4EB] border border-[#22242D] text-xs font-mono-tech font-bold hover:border-[#FF4D15] hover:text-white transition-colors"
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

        {/* Why Choose AR Digital Section */}
        <WhyChooseUs />

        {/* 4-Step Process Section */}
        <ProcessSection />

        {/* Contact & Commission CTA Section */}
        <ContactCTA />
      </main>

      {/* Modern Agency Footer */}
      <Footer />
    </div>
  );
}
