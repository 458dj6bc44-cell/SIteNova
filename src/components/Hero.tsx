import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle, Zap, Shield, Sparkles, Smartphone, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { agencyConfig, vitaloProject, gstoreProject, noireProject, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const whatsappLink = getSiteNovaWhatsAppUrl();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle normalized coordinates between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting with subtle mouse parallax and float */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-emerald-600/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full animate-float-slow transition-transform duration-700 ease-out"
        style={{ transform: `translate(calc(-50% + ${mousePos.x * 0.8}px), calc(-50% + ${mousePos.y * 0.8}px))` }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-blue-600/10 blur-[100px] pointer-events-none -z-10 rounded-full animate-float-reverse transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-[300px] h-[250px] bg-amber-500/10 blur-[110px] pointer-events-none -z-10 rounded-full animate-pulse-glow transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Availability Pill */}
          <motion.div
            variants={itemVariants}
            id="hero-badge-status"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm hover:border-emerald-500/50 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200">SiteNova Studio</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-semibold">{agencyConfig.contact.status}</span>
          </motion.div>

          {/* Strong Agency Headline */}
          <motion.h1
            variants={itemVariants}
            id="hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-[1.08] mb-6"
          >
            Modern websites engineered to{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent inline-block">
              convert visitors into buyers.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            id="hero-description"
            className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-9"
          >
            We design high-converting, lightning-fast static websites and frictionless social-commerce storefronts.
            Zero server clutter, zero monthly database bills, and tailored for maximum sales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-14"
          >
            <motion.a
              id="hero-cta-work"
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base tracking-tight shadow-xl shadow-white/10 hover:shadow-white/20 transition-colors group"
            >
              <span>View Case Studies</span>
              <ArrowDown className="w-4 h-4 text-slate-700 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              id="hero-cta-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base tracking-tight shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-colors group"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Get Your Website</span>
            </motion.a>
          </motion.div>

          {/* Highlights / Metric Badges */}
          <motion.div
            variants={itemVariants}
            id="hero-metrics"
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-6 border-t border-slate-800/80"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-sm text-center transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">100% Static</div>
              <div className="text-xs text-slate-400 mt-0.5">Vercel & Edge Optimized</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/30 backdrop-blur-sm text-center transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading">0% Gateway Fees</div>
              <div className="text-xs text-slate-400 mt-0.5">WhatsApp Direct Orders</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-sm text-center transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">&lt; 1.0s Speed</div>
              <div className="text-xs text-slate-400 mt-0.5">Zero Database Latency</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-sm text-center transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">7–14 Days</div>
              <div className="text-xs text-slate-400 mt-0.5">Fast Turnaround</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Featured Case Studies Quick Preview Hero Strip */}
        <motion.div
          id="hero-showcase-strip"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Featured Client Case Studies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* VITALØ Featured Card */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-emerald-500/40 hover:border-emerald-400/80 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {vitaloProject.badge}
                  </span>
                  <a
                    href={vitaloProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-emerald-400 transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-emerald-400 transition-colors">
                  {vitaloProject.name}
                </h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                  Premium supplement e-commerce website with WhatsApp ordering, advanced product interactions, and a mobile-first shopping experience.
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800/80">
                <a
                  href="#vital0"
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Read Full Case Study →
                </a>
                <a
                  href={vitaloProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors inline-flex items-center gap-1 shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/30"
                >
                  <span>View Live Site</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* GStore Quick Card */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-blue-500/50 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {gstoreProject.badge}
                  </span>
                  <a
                    href={gstoreProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                  {gstoreProject.name}
                </h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                  Modern responsive sportswear e-commerce featuring dynamic catalogs, variant pickers, instant search, and shopping cart.
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800/80">
                <a
                  href="#gstore"
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Read Full Case Study →
                </a>
                <a
                  href={gstoreProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors inline-flex items-center gap-1 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/30"
                >
                  <span>View Live Site</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* NOIRÉ Quick Card */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-500/50 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {noireProject.badge}
                  </span>
                  <a
                    href={noireProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-amber-400 transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-amber-400 transition-colors">
                  {noireProject.name}
                </h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                  Luxury perfume store with bespoke olfactory design and direct-to-WhatsApp social ordering system with zero transaction fees.
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800/80">
                <a
                  href="#noire"
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Read Full Case Study →
                </a>
                <a
                  href={noireProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium transition-colors inline-flex items-center gap-1 shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/30"
                >
                  <span>View Live Site</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
