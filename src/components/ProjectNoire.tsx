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
    <section id="noire" className="py-24 border-t border-slate-800/80 relative overflow-hidden bg-[#07090C]">
      {/* Background warm amber glow */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-700/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Case Study 03 • Haute Parfumerie & Social-Commerce
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              NOIRÉ <span className="text-amber-400 font-serif-luxury font-normal italic">Parfums</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A bespoke luxury perfume house combining dark high-fashion editorial aesthetics with a
              frictionless direct-to-WhatsApp checkout system that bypasses payment gateways.
            </p>
          </div>

          {/* Primary View Live Website CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              id="noire-view-live-btn"
              href={noireProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-colors group"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            <span className="text-xs text-slate-400 block sm:inline">
              Deployed on Vercel: <span className="text-slate-300 font-mono">noire-store-five.vercel.app</span>
            </span>
          </div>
        </motion.div>

        {/* Highlight Grid & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Features & Story (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white font-heading mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Luxury Store Architecture</span>
              </h3>

              <div className="space-y-2.5">
                {noireProject.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="mt-0.5 p-1 rounded bg-amber-500/10 text-amber-400 flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stat Summary */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center transition-colors hover:border-amber-500/30">
                <div className="text-2xl font-bold text-amber-400 font-heading">0%</div>
                <div className="text-xs text-slate-400 mt-1">Payment Gateway Fees</div>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-center transition-colors hover:border-slate-700">
                <div className="text-2xl font-bold text-white font-heading">1-Click</div>
                <div className="text-xs text-slate-400 mt-1">WhatsApp Order Generation</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Luxury Perfume Presentation & Interactive Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-slate-800 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden shadow-2xl">
              {/* Luxury Frame Bar */}
              <div className="px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="font-serif-luxury text-xs tracking-widest text-slate-300 uppercase">
                    NOIRÉ PARFUMS • HAUTE COLLECTION
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Live Case Study</span>
              </div>

              {/* Luxury Product Showcase Area */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  {/* Bottle Visual Representation */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-40 h-52 sm:w-48 sm:h-60 rounded-2xl bg-gradient-to-b from-slate-900 to-black border border-amber-500/30 p-4 flex flex-col items-center justify-center relative shadow-2xl shadow-amber-500/10 flex-shrink-0 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.15),transparent_70%)]" />
                    <div className="w-16 h-8 rounded-t-md bg-gradient-to-b from-amber-400 to-amber-700 border border-amber-300/40 mb-1 z-10 shadow-sm" />
                    <div className="w-24 h-32 rounded-xl bg-gradient-to-b from-slate-800/90 via-slate-950 to-black border border-amber-500/40 flex flex-col items-center justify-center p-3 relative z-10 shadow-inner">
                      <span className="text-[9px] uppercase tracking-widest font-serif-luxury text-amber-300">
                        NOIRÉ
                      </span>
                      <div className="w-8 h-[1px] bg-amber-500/50 my-1" />
                      <span className="text-[8px] uppercase tracking-wider text-slate-400 text-center font-mono">
                        PARFUM
                      </span>
                      <span className="text-[7px] text-slate-500 mt-2">{selectedFragrance.size}</span>
                    </div>
                  </motion.div>

                  {/* Selected Fragrance Details */}
                  <div className="flex-1 space-y-3 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-[11px] font-medium border border-amber-500/30">
                      <Droplet className="w-3 h-3" />
                      <span>Extrait de Parfum</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      {selectedFragrance.name}
                    </h3>
                    <div className="text-lg font-bold text-amber-400 font-mono">
                      {selectedFragrance.price.toLocaleString()} EGP
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Olfactory Profile:
                      </span>
                      <p className="text-xs text-slate-300 italic font-serif-luxury">
                        "{selectedFragrance.notes}"
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <a
                        href="#whatsapp-ordering"
                        className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition-all inline-flex items-center gap-1.5 active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>See WhatsApp Flow Below</span>
                      </a>
                      <a
                        href={noireProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fragrance Selector Tabs */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-3">
                    Select Fragrance in Collection:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {sampleNoireFragrances.map(fragrance => (
                      <button
                        key={fragrance.id}
                        onClick={() => setSelectedFragrance(fragrance)}
                        className={`p-2.5 rounded-xl text-left border transition-all active:scale-95 ${
                          selectedFragrance.id === fragrance.id
                            ? 'bg-amber-500/15 border-amber-500 text-white shadow-md shadow-amber-500/10'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-xs font-bold truncate">{fragrance.name.split(' ')[0]}</div>
                        <div className="text-[11px] text-amber-400/90 font-medium mt-0.5">{fragrance.price.toLocaleString()} EGP</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
