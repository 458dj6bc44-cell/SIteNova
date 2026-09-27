import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Monitor } from 'lucide-react';
import { verenProject } from '../data/portfolioData';

export const ProjectVeren: React.FC = () => {
  const [showLiveIframe, setShowLiveIframe] = useState(false);

  return (
    <section
      id="veren"
      className="py-24 sm:py-32 lg:py-36 bg-[#0E0F13] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Flagship Header & Hierarchy */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 text-xs font-mono-tech uppercase tracking-widest text-[#9FA4B2]">
            <span className="text-[#FF4D15] font-bold">FLAGSHIP WORK</span>
            <span>•</span>
            <span>{verenProject.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-6xl sm:text-8xl lg:text-9xl font-heading font-extrabold text-white tracking-tight leading-[0.9] mb-6">
                VÉREN
              </h2>
              <p className="text-lg sm:text-2xl text-[#E1E4EB]/90 font-light leading-relaxed max-w-3xl">
                {verenProject.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 border-l border-[#22242D] pl-6 lg:pl-8">
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#646876] block mb-1">
                  Key Capabilities
                </span>
                <p className="text-xs text-[#9FA4B2] leading-relaxed font-sans-ui">
                  Bespoke art direction, editorial layouts, fluid choreography, 100% static React edge delivery.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href={verenProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[5px] bg-[#FF4D15] hover:bg-[#E63E07] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#FF4D15]/20 hover:shadow-[#FF4D15]/35"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Flagship Visual Showcase */}
        <div className="rounded-[8px] bg-[#08090B] border border-[#22242D] overflow-hidden shadow-2xl">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#121318] border-b border-[#1E2028]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2B2E3C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2B2E3C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2B2E3C]" />
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono-tech text-[#9FA4B2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]" />
              <span>veren-amber.vercel.app</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowLiveIframe(!showLiveIframe)}
                className="px-2.5 py-1 rounded-[4px] text-[11px] font-mono-tech uppercase tracking-wider bg-[#181A22] text-[#E1E4EB] hover:bg-[#22242F] border border-[#262835] transition-colors"
              >
                {showLiveIframe ? 'Show Curated View' : 'Interactive Mode'}
              </button>
              <a
                href={verenProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-[#9FA4B2] hover:text-[#FF4D15] transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Viewport Canvas */}
          <div className="relative min-h-[480px] sm:min-h-[600px] lg:min-h-[700px] bg-[#08090B]">
            {showLiveIframe ? (
              <iframe
                src={verenProject.liveUrl}
                title="VÉREN Live Website"
                className="w-full h-[700px] border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-between min-h-[480px] sm:min-h-[600px] lg:min-h-[700px] bg-[#0E0F13]">
                <div className="flex items-center justify-between border-b border-[#1E2028] pb-6">
                  <span className="font-heading text-2xl tracking-widest text-white font-bold">
                    VÉREN
                  </span>
                  <span className="text-[11px] font-mono-tech tracking-widest uppercase text-[#646876]">
                    HAUTE DIGITAL SHOWCASE
                  </span>
                </div>

                <div className="py-12 sm:py-16 max-w-3xl mx-auto text-center">
                  <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-4">
                    FLAGSHIP PRODUCTION BUILD
                  </span>
                  <h3 className="font-heading text-4xl sm:text-6xl text-white font-extrabold leading-tight mb-6">
                    Sensory Elegance & Sculptural Typographic Design
                  </h3>
                  <p className="text-base text-[#9FA4B2] leading-relaxed mb-8 max-w-2xl mx-auto font-sans-ui">
                    Restrained luxury aesthetics, fluid spatial transitions, and disciplined editorial typography. The live site exemplifies high-fashion digital art direction.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={verenProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[5px] bg-[#FF4D15] hover:bg-[#E63E07] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF4D15]/25"
                    >
                      <span>OPEN LIVE WEBSITE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setShowLiveIframe(true)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[5px] bg-[#14151B] hover:bg-[#1C1E26] text-white border border-[#2B2E3C] text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Monitor className="w-3.5 h-3.5 text-[#FF4D15]" />
                      <span>Test Inside Viewport</span>
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1E2028] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-[#646876]">
                  <span>Vercel Global Edge CDN</span>
                  <span className="text-[#FF4D15]">● 100% Static React Architecture</span>
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
