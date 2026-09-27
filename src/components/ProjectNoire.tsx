import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { noireProject, sampleNoireFragrances } from '../data/portfolioData';

export const ProjectNoire: React.FC = () => {
  const [selectedFragrance, setSelectedFragrance] = useState(sampleNoireFragrances[0]);

  return (
    <section
      id="noire"
      className="py-20 sm:py-28 bg-[#0B0C0E] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Project Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-2">
                04 • {noireProject.category}
              </span>
              <h3 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none mb-4">
                NOIRÉ Parfums
              </h3>
              <p className="text-base sm:text-lg text-[#9FA4B2] font-normal leading-relaxed">
                {noireProject.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1E2028]">
              <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#646876] block mb-2">
                Key Capabilities
              </span>
              <p className="text-xs text-[#E1E4EB] font-medium leading-relaxed font-sans-ui">
                Luxury editorial typography, olfactory note breakdown, zero payment gateway commissions, instant pre-formatted WhatsApp orders.
              </p>
            </div>

            <div className="pt-2">
              <a
                id="noire-view-live-btn"
                href={noireProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[5px] bg-[#14151B] hover:bg-[#FF4D15] text-white border border-[#2B2E3C] hover:border-[#FF4D15] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>VIEW LIVE STORE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Luxury Showcase Surface */}
          <div className="lg:col-span-7 border border-[#22242D] bg-[#121318] p-6 sm:p-8 rounded-[8px] shadow-xl">
            <div className="flex items-center justify-between pb-5 border-b border-[#22242D]">
              <div>
                <span className="font-mono-tech text-xs font-bold text-white uppercase tracking-wider">
                  LUXURY EDITORIAL STOREFRONT
                </span>
                <span className="text-xs font-mono-tech text-[#646876] block">noire-store-five.vercel.app</span>
              </div>
              <span className="text-xs font-mono-tech text-[#FF4D15] font-bold">0% Gateway Fees</span>
            </div>

            {/* Fragrance Selector */}
            <div className="py-5 border-b border-[#22242D]">
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block mb-2">
                Select Fragrance Edition:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sampleNoireFragrances.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFragrance(f)}
                    className={`p-2.5 text-left border rounded-[5px] transition-all text-xs ${
                      selectedFragrance.id === f.id
                        ? 'border-[#FF4D15] bg-[#1B1D25] font-bold text-white shadow-sm'
                        : 'border-[#22242D] bg-[#0E0F13] text-[#9FA4B2] hover:border-[#353846]'
                    }`}
                  >
                    <div className="truncate font-heading text-sm">{f.name}</div>
                    <div className="text-[11px] text-[#FF4D15] font-mono-tech mt-0.5">{f.price} EGP</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Fragrance Showcase */}
            <div className="py-6 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h4 className="text-2xl font-serif-display text-white">{selectedFragrance.name}</h4>
                  <p className="text-xs text-[#9FA4B2] mt-0.5">{selectedFragrance.tagline} • {selectedFragrance.size}</p>
                </div>
                <div className="text-xl font-mono-tech font-bold text-[#FF4D15]">
                  {selectedFragrance.price.toLocaleString()} EGP
                </div>
              </div>

              <div className="p-4 bg-[#0E0F13] rounded-[6px] border border-[#22242D] text-xs text-[#9FA4B2] space-y-1 font-sans-ui">
                <span className="font-mono-tech text-[10px] uppercase text-white font-bold block mb-1">
                  Olfactory Notes Architecture:
                </span>
                <p>• <strong className="text-white">Top:</strong> {selectedFragrance.notes.top}</p>
                <p>• <strong className="text-white">Heart:</strong> {selectedFragrance.notes.heart}</p>
                <p>• <strong className="text-white">Base:</strong> {selectedFragrance.notes.base}</p>
              </div>

              <a
                href={`https://wa.me/201555380043?text=${encodeURIComponent(
                  `Hello NOIRÉ! I would like to order: ${selectedFragrance.name} (${selectedFragrance.size}) for ${selectedFragrance.price} EGP.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-[5px] bg-[#181A22] hover:bg-[#FF4D15] text-white border border-[#262835] hover:border-[#FF4D15] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#FF4D15] group-hover:text-white" />
                <span>Test WhatsApp Order for {selectedFragrance.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
