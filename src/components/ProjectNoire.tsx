import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { noireProject, sampleNoireFragrances } from '../data/portfolioData';

export const ProjectNoire: React.FC = () => {
  const [selectedFragrance, setSelectedFragrance] = useState(sampleNoireFragrances[0]);

  return (
    <section
      id="noire"
      className="py-20 sm:py-28 bg-[#F2EFE8] text-[#171717] border-b border-[#E5E0D6]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Project Details (#13) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block mb-2">
                {noireProject.category}
              </span>
              <h3 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
                NOIRÉ Parfums
              </h3>
              <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
                {noireProject.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E0D6]">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-2">
                Key Capabilities
              </span>
              <p className="text-xs text-[#171717] font-medium leading-relaxed">
                Luxury editorial typography, olfactory note breakdown, zero payment gateway commissions, instant pre-formatted WhatsApp orders.
              </p>
            </div>

            <div className="pt-2">
              <a
                id="noire-view-live-btn"
                href={noireProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>VIEW PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Luxury Showcase Surface */}
          <div className="lg:col-span-7 border border-[#E5E0D6] bg-white p-6 sm:p-8 rounded-[4px]">
            <div className="flex items-center justify-between pb-5 border-b border-[#E5E0D6]">
              <div>
                <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider">
                  LUXURY EDITORIAL STOREFRONT
                </span>
                <span className="text-xs text-[#66645F] block">noire-store-five.vercel.app</span>
              </div>
              <span className="text-xs font-mono text-[#C6532E] font-bold">0% Gateway Fees</span>
            </div>

            {/* Fragrance Selector */}
            <div className="py-5 border-b border-[#E5E0D6]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block mb-2">
                Select Fragrance Edition:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {sampleNoireFragrances.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFragrance(f)}
                    className={`p-2.5 text-left border rounded-[2px] transition-all text-xs ${
                      selectedFragrance.id === f.id
                        ? 'border-[#171717] bg-[#F2EFE8] font-bold text-[#171717]'
                        : 'border-[#E5E0D6] text-[#66645F] hover:border-[#171717]'
                    }`}
                  >
                    <div className="truncate font-serif-display text-sm">{f.name}</div>
                    <div className="text-[11px] text-[#C6532E] font-mono mt-0.5">{f.price} EGP</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Fragrance Showcase */}
            <div className="py-6 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h4 className="text-2xl font-serif-display text-[#171717]">{selectedFragrance.name}</h4>
                  <p className="text-xs text-[#66645F] mt-0.5">{selectedFragrance.tagline} • {selectedFragrance.size}</p>
                </div>
                <div className="text-xl font-mono font-bold text-[#171717]">
                  {selectedFragrance.price.toLocaleString()} EGP
                </div>
              </div>

              <div className="p-4 bg-[#F2EFE8] rounded-[2px] border border-[#E5E0D6] text-xs text-[#66645F] space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#171717] font-bold block mb-1">
                  Olfactory Notes Architecture:
                </span>
                <p>• <strong className="text-[#171717]">Top:</strong> {selectedFragrance.notes.top}</p>
                <p>• <strong className="text-[#171717]">Heart:</strong> {selectedFragrance.notes.heart}</p>
                <p>• <strong className="text-[#171717]">Base:</strong> {selectedFragrance.notes.base}</p>
              </div>

              <a
                href={`https://wa.me/201555380043?text=${encodeURIComponent(
                  `Hello NOIRÉ! I would like to order: ${selectedFragrance.name} (${selectedFragrance.size}) for ${selectedFragrance.price} EGP.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-[2px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#C6532E]" />
                <span>Test WhatsApp Order for {selectedFragrance.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
