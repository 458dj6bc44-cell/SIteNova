import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ShoppingBag,
  Send,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Flame,
  Droplet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { noireProject, sampleNoireFragrances } from '../data/portfolioData';

export const ProjectNoire: React.FC = () => {
  const [selectedFragrance, setSelectedFragrance] = useState(sampleNoireFragrances[0]);

  return (
    <section id="noire" className="py-24 sm:py-32 border-b border-[#E5E0D6] bg-[#F2EFE8] text-[#171717] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E5E0D6]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#66645F]">
              <span className="text-[#C6532E] font-bold">PROJECT 04 / 04</span>
              <span>•</span>
              <span className="text-[#171717] font-semibold">{noireProject.category}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
              NOIRÉ Parfums
            </h2>
            <p className="text-lg text-[#66645F] font-normal leading-relaxed">
              {noireProject.description}
            </p>
          </div>

          {/* Primary View Live Website CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              id="noire-view-live-btn"
              href={noireProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[8px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm group"
            >
              <span>VIEW LIVE PROJECT</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Highlight Grid & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Features & Story (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C6532E]" />
                <span>Luxury Store Architecture</span>
              </h3>

              <div className="space-y-2.5">
                {noireProject.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-[6px] bg-[#F2EFE8] border border-[#E5E0D6] text-xs text-[#171717] font-medium leading-snug"
                  >
                    <div className="mt-0.5 text-[#C6532E] flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stat Summary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3] text-center">
                <div className="font-serif-display text-2xl font-bold text-[#C6532E]">0%</div>
                <div className="text-xs text-[#66645F] mt-1 font-medium">Gateway Fees</div>
              </div>
              <div className="p-4 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3] text-center">
                <div className="font-serif-display text-2xl font-bold text-[#171717]">1-Click</div>
                <div className="text-xs text-[#66645F] mt-1 font-medium">WhatsApp Dispatch</div>
              </div>
            </div>
          </div>

          {/* Right: Luxury Perfume Presentation & Interactive Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] bg-white border border-[#D5CFC3] shadow-lg overflow-hidden flex flex-col">
              {/* Luxury Frame Bar */}
              <div className="px-5 py-3.5 bg-[#E5E0D6] border-b border-[#D5CFC3] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#171717]" />
                  <span className="font-serif-display text-xs tracking-widest text-[#171717] uppercase font-bold">
                    NOIRÉ PARFUMS • HAUTE COLLECTION
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#66645F]">Case Study 04</span>
              </div>

              {/* Luxury Product Showcase Area */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  {/* Bottle Visual Representation */}
                  <div className="w-40 h-52 sm:w-48 sm:h-60 rounded-[6px] bg-[#171717] border border-[#2A2B29] p-4 flex flex-col items-center justify-center relative shadow-xl flex-shrink-0">
                    <div className="w-14 h-7 rounded-t-[3px] bg-gradient-to-b from-[#C6532E] to-[#9E3E20] mb-1 shadow-sm" />
                    <div className="w-24 h-32 rounded-[4px] bg-[#20211F] border border-[#383A37] flex flex-col items-center justify-center p-3 relative shadow-inner">
                      <span className="text-[10px] uppercase tracking-widest font-serif-display text-[#E5E0D6]">
                        NOIRÉ
                      </span>
                      <div className="w-8 h-[1px] bg-[#C6532E]/60 my-1.5" />
                      <span className="text-[8px] uppercase tracking-wider text-[#66645F] text-center font-mono">
                        EXTRAIT
                      </span>
                      <span className="text-[8px] text-[#E5E0D6]/70 mt-2 font-mono">{selectedFragrance.size}</span>
                    </div>
                  </div>

                  {/* Selected Fragrance Details */}
                  <div className="flex-1 space-y-3 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#73765A]/15 text-[#73765A] text-[11px] font-bold font-mono">
                      <Droplet className="w-3 h-3" />
                      <span>Extrait de Parfum</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif-display font-normal text-[#171717]">
                      {selectedFragrance.name}
                    </h3>
                    <div className="text-lg font-bold text-[#C6532E] font-mono">
                      {selectedFragrance.price.toLocaleString()} EGP
                    </div>
                    <div className="p-3.5 rounded-[6px] bg-[#F2EFE8] border border-[#E5E0D6] space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#66645F] font-bold block">
                        Olfactory Notes:
                      </span>
                      <p className="text-xs text-[#171717] italic font-serif-display">
                        "{selectedFragrance.notes}"
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <a
                        href="#whatsapp-ordering"
                        className="px-4 py-2.5 rounded-[6px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>View WhatsApp System</span>
                      </a>
                      <a
                        href={noireProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#66645F] hover:text-[#171717] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fragrance Selector Tabs */}
                <div className="pt-4 border-t border-[#E5E0D6]">
                  <span className="text-xs text-[#66645F] uppercase tracking-wider font-bold block mb-3">
                    Select Fragrance in Collection:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {sampleNoireFragrances.map(fragrance => (
                      <button
                        key={fragrance.id}
                        onClick={() => setSelectedFragrance(fragrance)}
                        className={`p-3 rounded-[6px] text-left border transition-all ${
                          selectedFragrance.id === fragrance.id
                            ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                            : 'bg-[#F2EFE8] border-[#E5E0D6] text-[#171717] hover:border-[#73765A]'
                        }`}
                      >
                        <div className="text-xs font-bold truncate">{fragrance.name.split(' ')[0]}</div>
                        <div className={`text-[11px] font-mono mt-0.5 ${selectedFragrance.id === fragrance.id ? 'text-[#C6532E]' : 'text-[#66645F]'}`}>
                          {fragrance.price.toLocaleString()} EGP
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
