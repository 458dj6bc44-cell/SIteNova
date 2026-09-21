import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Monitor } from 'lucide-react';
import { verenProject } from '../data/portfolioData';

export const ProjectVeren: React.FC = () => {
  const [showLiveIframe, setShowLiveIframe] = useState(false);

  return (
    <section
      id="veren"
      className="py-24 sm:py-32 lg:py-36 bg-[#20211F] text-[#F2EFE8] border-b border-[#30312F]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Flagship Header & Hierarchy */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#E5E0D6]/60">
            <span className="text-[#C6532E] font-bold">FLAGSHIP WORK</span>
            <span>•</span>
            <span>{verenProject.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-6xl sm:text-8xl lg:text-9xl font-serif-display font-normal text-[#F2EFE8] tracking-tight leading-[0.9] mb-6">
                VÉREN
              </h2>
              <p className="text-lg sm:text-2xl text-[#E5E0D6]/90 font-light leading-relaxed max-w-3xl">
                {verenProject.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 border-l border-[#383A37] pl-6 lg:pl-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-1">
                  Key Capabilities
                </span>
                <p className="text-xs text-[#E5E0D6]/80 leading-relaxed font-sans-ui">
                  Bespoke art direction, editorial layouts, fluid choreography, 100% static React edge delivery.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href={verenProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Flagship Visual Showcase */}
        <div className="rounded-[4px] bg-[#141514] border border-[#383A37] overflow-hidden">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#191A19] border-b border-[#30312F]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#383A37]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#383A37]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#383A37]" />
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#E5E0D6]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6532E]" />
              <span>veren-amber.vercel.app</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowLiveIframe(!showLiveIframe)}
                className="px-2.5 py-1 rounded-[2px] text-[11px] font-mono uppercase tracking-wider bg-[#20211F] text-[#E5E0D6] hover:bg-[#30312F] transition-colors"
              >
                {showLiveIframe ? 'Show Curated View' : 'Interactive Mode'}
              </button>
              <a
                href={verenProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-[#E5E0D6] hover:text-[#C6532E] transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Viewport Canvas */}
          <div className="relative min-h-[480px] sm:min-h-[600px] lg:min-h-[700px] bg-[#0E0F0E]">
            {showLiveIframe ? (
              <iframe
                src={verenProject.liveUrl}
                title="VÉREN Live Website"
                className="w-full h-[700px] border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-between min-h-[480px] sm:min-h-[600px] lg:min-h-[700px] bg-[#121312]">
                <div className="flex items-center justify-between border-b border-[#30312F] pb-6">
                  <span className="font-serif-display text-2xl tracking-widest text-[#F2EFE8]">
                    VÉREN
                  </span>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#66645F]">
                    HAUTE DIGITAL SHOWCASE
                  </span>
                </div>

                <div className="py-12 sm:py-16 max-w-3xl mx-auto text-center">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] block mb-4">
                    FLAGSHIP PRODUCTION BUILD
                  </span>
                  <h3 className="font-serif-display text-4xl sm:text-6xl text-[#F2EFE8] leading-tight mb-6">
                    Sensory Elegance & Sculptural Typographic Design
                  </h3>
                  <p className="text-base text-[#E5E0D6]/70 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Restrained luxury aesthetics, fluid spatial transitions, and disciplined editorial typography. The live site exemplifies high-fashion digital art direction.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={verenProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[4px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      <span>OPEN LIVE WEBSITE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setShowLiveIframe(true)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[4px] bg-[#20211F] hover:bg-[#2B2C29] text-[#F2EFE8] border border-[#383A37] text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Monitor className="w-3.5 h-3.5 text-[#C6532E]" />
                      <span>Test Inside Viewport</span>
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#30312F] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#66645F]">
                  <span>Vercel Global Edge CDN</span>
                  <span className="text-[#C6532E]">● 100% Static React Architecture</span>
                  <span>Direct URL: veren-amber.vercel.app</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
