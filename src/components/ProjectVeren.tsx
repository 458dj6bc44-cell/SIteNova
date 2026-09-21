import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, ShieldCheck, Monitor, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { verenProject } from '../data/portfolioData';

export const ProjectVeren: React.FC = () => {
  const [showLiveIframe, setShowLiveIframe] = useState(false);

  return (
    <section
      id="veren"
      className="relative py-24 sm:py-32 bg-[#20211F] text-[#F2EFE8] overflow-hidden border-b border-[#30312F]"
    >
      {/* Editorial Watermark & Architectural Accents */}
      <div className="absolute top-8 right-8 lg:right-16 text-[120px] sm:text-[180px] lg:text-[240px] font-serif-display font-bold text-[#F2EFE8]/[0.03] select-none pointer-events-none leading-none -z-0">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Flagship Header Label */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#383A37]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-[#C6532E] text-[#F2EFE8] rounded-[4px]">
              FLAGSHIP CASE STUDY
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5E0D6]/60">
              PROJECT 01 / 04
            </span>
          </div>

          <a
            href={verenProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5E0D6] hover:text-[#C6532E] transition-colors"
          >
            <span>VISIT LIVE DEPLOYMENT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Flagship Title & Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C6532E] mb-3">
              {verenProject.category}
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif-display font-normal text-[#F2EFE8] tracking-tight leading-[0.95] mb-6">
              VÉREN
            </h2>
            <p className="text-xl sm:text-2xl text-[#E5E0D6] font-light leading-relaxed max-w-3xl">
              {verenProject.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-5 bg-[#171717]/80 p-6 rounded-[8px] border border-[#30312F]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-1">
                Role & Craft
              </span>
              <span className="text-sm font-semibold text-[#F2EFE8]">
                Art Direction, Editorial UI/UX & Edge Deployment
              </span>
            </div>
            <div className="border-t border-[#30312F] pt-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-1">
                Architecture
              </span>
              <span className="text-sm font-semibold text-[#F2EFE8]">
                100% Static React • Vercel Global Edge
              </span>
            </div>
            <div className="border-t border-[#30312F] pt-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-1">
                Direct URL
              </span>
              <a
                href={verenProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#C6532E] hover:underline break-all"
              >
                veren-amber.vercel.app
              </a>
            </div>
          </div>
        </div>

        {/* Massive Flagship Showcase Area */}
        <div className="relative rounded-[12px] bg-[#141514] border border-[#383A37] shadow-2xl overflow-hidden mb-14">
          {/* Top Browser Chrome Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#191A19] border-b border-[#30312F]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#383A37]" />
              <span className="w-3 h-3 rounded-full bg-[#383A37]" />
              <span className="w-3 h-3 rounded-full bg-[#383A37]" />
            </div>

            <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-[6px] bg-[#141514] border border-[#30312F] text-[11px] font-mono text-[#E5E0D6]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6532E] animate-pulse" />
              <span>https://veren-amber.vercel.app</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowLiveIframe(!showLiveIframe)}
                className={`px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-colors ${
                  showLiveIframe
                    ? 'bg-[#C6532E] text-[#F2EFE8]'
                    : 'bg-[#20211F] text-[#E5E0D6] hover:bg-[#30312F]'
                }`}
              >
                {showLiveIframe ? 'Show Curated Mockup' : 'Interactive Preview'}
              </button>
              <a
                href={verenProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#E5E0D6] hover:text-[#C6532E] transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Viewport Content */}
          <div className="relative min-h-[500px] sm:min-h-[640px] lg:min-h-[760px] bg-[#0E0F0E] flex flex-col items-center justify-center overflow-hidden">
            {showLiveIframe ? (
              <iframe
                src={verenProject.liveUrl}
                title="VÉREN Live Website"
                className="w-full h-[760px] border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="relative w-full h-full min-h-[500px] sm:min-h-[640px] lg:min-h-[760px] p-6 sm:p-12 lg:p-16 flex flex-col justify-between bg-gradient-to-b from-[#171817] via-[#121312] to-[#0A0A0A]">
                {/* Visual Editorial Preview Canvas */}
                <div className="flex items-center justify-between border-b border-[#30312F]/60 pb-6">
                  <div className="font-serif-display text-2xl sm:text-3xl tracking-widest text-[#F2EFE8]">
                    VÉREN
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#66645F]">
                    HAUTE DIGITAL EDITIONS • AMBER EDITION
                  </div>
                </div>

                <div className="py-16 sm:py-24 text-center max-w-2xl mx-auto">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C6532E] block mb-4">
                    SPATIAL LUXURY SHOWCASE
                  </span>
                  <h3 className="font-serif-display text-4xl sm:text-6xl text-[#F2EFE8] leading-tight mb-6">
                    Sensory Elegance & Sculptural Typographic Design
                  </h3>
                  <p className="text-sm sm:text-base text-[#66645F] leading-relaxed mb-8">
                    Crafted with restrained luxury sensibilities, fluid scroll choreography, and
                    minimalist editorial discipline. The live site exemplifies high-fashion digital art
                    direction.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={verenProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-[8px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold text-xs uppercase tracking-widest transition-all shadow-xl"
                    >
                      <span>LAUNCH VÉREN EXPERIENCE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setShowLiveIframe(true)}
                      className="inline-flex items-center gap-2 px-6 py-4 rounded-[8px] bg-[#20211F] hover:bg-[#2B2C29] text-[#F2EFE8] border border-[#383A37] text-xs font-bold uppercase tracking-widest transition-all"
                    >
                      <Monitor className="w-4 h-4 text-[#C6532E]" />
                      <span>Test Inside Viewport</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Spec Footer inside frame */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#30312F]/60 text-xs">
                  <div>
                    <span className="text-[#66645F] block text-[10px] uppercase font-mono">
                      Category
                    </span>
                    <span className="text-[#E5E0D6] font-medium">Haute Editorial</span>
                  </div>
                  <div>
                    <span className="text-[#66645F] block text-[10px] uppercase font-mono">
                      Deployment
                    </span>
                    <span className="text-[#E5E0D6] font-medium">Vercel Edge</span>
                  </div>
                  <div>
                    <span className="text-[#66645F] block text-[10px] uppercase font-mono">
                      Typography
                    </span>
                    <span className="text-[#E5E0D6] font-medium">Editorial Serif</span>
                  </div>
                  <div>
                    <span className="text-[#66645F] block text-[10px] uppercase font-mono">
                      Status
                    </span>
                    <span className="text-[#C6532E] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6532E] animate-ping" />
                      Live in Production
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Cards Grid (Editorial Asymmetrical) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[8px] bg-[#191A19] border border-[#30312F] flex flex-col justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] block mb-4">
              01 / ART DIRECTION
            </span>
            <h4 className="font-serif-display text-2xl text-[#F2EFE8] mb-3">
              Sculptural Typographic Hierarchy
            </h4>
            <p className="text-xs text-[#E5E0D6]/70 leading-relaxed">
              Bespoke typography paired with intentional whitespace, delicate line dividing rules,
              and tactile responsive layouts.
            </p>
          </div>

          <div className="p-8 rounded-[8px] bg-[#191A19] border border-[#30312F] flex flex-col justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] block mb-4">
              02 / CHOREOGRAPHY
            </span>
            <h4 className="font-serif-display text-2xl text-[#F2EFE8] mb-3">
              Spatial Flow & Fluid Motion
            </h4>
            <p className="text-xs text-[#E5E0D6]/70 leading-relaxed">
              Subtle scroll-orchestrated transitions, masked reveals, and fluid interactions
              engineered strictly on GPU-accelerated transforms.
            </p>
          </div>

          <div className="p-8 rounded-[8px] bg-[#191A19] border border-[#30312F] flex flex-col justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] block mb-4">
              03 / EDGE RUNTIME
            </span>
            <h4 className="font-serif-display text-2xl text-[#F2EFE8] mb-3">
              Zero Database Overhead
            </h4>
            <p className="text-xs text-[#E5E0D6]/70 leading-relaxed">
              100% static React edge delivery deployed to Vercel global infrastructure with instant
              cache hits and zero downtime vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
