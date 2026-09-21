import React from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const whatsappLink = getSiteNovaWhatsAppUrl();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 pb-20 md:pb-28 bg-[#F2EFE8] text-[#171717] overflow-hidden border-b border-[#E5E0D6]"
    >
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E0D6_1px,transparent_1px),linear-gradient(to_bottom,#E5E0D6_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Studio Eyebrow & Status */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#66645F]"
          >
            <span className="text-[#C6532E] font-extrabold font-mono">00 / STUDIO</span>
            <span className="w-8 h-[1px] bg-[#66645F]/40" />
            <span className="text-[#171717]">SITENOVA WEB STUDIO</span>
            <span className="hidden sm:inline-block text-[#66645F]">•</span>
            <span className="hidden sm:inline-block font-medium text-[#73765A]">
              SMALL TEAM • CUSTOM WEBSITES
            </span>
          </motion.div>

          {/* Main Asymmetrical Headline */}
          <motion.h1
            variants={itemVariants}
            id="hero-headline"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#171717] leading-[1.02] mb-8"
          >
            WE BUILD <br />
            WEBSITES THAT <br />
            <span className="font-serif-display font-normal italic lowercase tracking-normal text-[#C6532E] pr-2">
              feel like
            </span>
            <span className="font-sans-ui text-[#171717]">YOURS.</span>
          </motion.h1>

          {/* Editorial Supporting Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <motion.p
              variants={itemVariants}
              id="hero-description"
              className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-[#66645F] font-normal leading-relaxed"
            >
              Small studio. Custom websites. Built around your business, your customers, and how you actually sell.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="md:col-span-4 border-l-2 border-[#C6532E] pl-5 py-1 flex flex-col gap-1 text-xs text-[#66645F]"
            >
              <span className="text-[#171717] font-bold uppercase tracking-wider">
                Direct Communication
              </span>
              <p className="leading-relaxed">
                You talk directly with the people designing and coding your website. No account managers, no ticket queues, no unnecessary complexity.
              </p>
            </motion.div>
          </div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16"
          >
            <a
              id="hero-cta-work"
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-[8px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-sm"
            >
              <span>VIEW OUR WORK</span>
              <ArrowDown className="w-4 h-4 text-[#F2EFE8] group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              id="hero-cta-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-[8px] bg-transparent hover:bg-[#E5E0D6] text-[#171717] border border-[#171717] font-bold text-sm tracking-wider uppercase transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#C6532E]" />
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#66645F] group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Editorial Statistics Strip */}
          <motion.div
            variants={itemVariants}
            id="hero-metrics"
            className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#E5E0D6] pt-8 gap-y-8 gap-x-6"
          >
            <div className="flex flex-col border-l border-[#E5E0D6] pl-4 sm:pl-6">
              <span className="font-serif-display text-2xl sm:text-3xl text-[#171717]">
                100% Custom
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#66645F] mt-1">
                No generic templates
              </span>
            </div>

            <div className="flex flex-col border-l border-[#E5E0D6] pl-4 sm:pl-6">
              <span className="font-serif-display text-2xl sm:text-3xl text-[#C6532E]">
                Direct Contact
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#66645F] mt-1">
                Talk with the builders
              </span>
            </div>

            <div className="flex flex-col border-l border-[#E5E0D6] pl-4 sm:pl-6">
              <span className="font-serif-display text-2xl sm:text-3xl text-[#171717]">
                &lt; 1.0s Speed
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#66645F] mt-1">
                Fast static React builds
              </span>
            </div>

            <div className="flex flex-col border-l border-[#E5E0D6] pl-4 sm:pl-6">
              <span className="font-serif-display text-2xl sm:text-3xl text-[#73765A]">
                7–14 Days
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#66645F] mt-1">
                From idea to live
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Fluid Editorial Studio Marquee Strip */}
      <div className="mt-20 pt-5 pb-5 border-t border-b border-[#E5E0D6] bg-[#E5E0D6]/30 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-[#171717]">
          <span>SMALL STUDIO</span>
          <span className="text-[#C6532E]">✦</span>
          <span>CUSTOM WEBSITES</span>
          <span className="text-[#C6532E]">✦</span>
          <span>DIRECT COMMUNICATION</span>
          <span className="text-[#C6532E]">✦</span>
          <span>BUILT FOR HOW YOU SELL</span>
          <span className="text-[#C6532E]">✦</span>
          <span>100% STATIC REACT</span>
          <span className="text-[#C6532E]">✦</span>
          <span>ZERO FLUFF</span>
          <span className="text-[#C6532E]">✦</span>
          <span>NO TEMPLATES</span>
          <span className="text-[#C6532E]">✦</span>
          <span>SMALL STUDIO</span>
          <span className="text-[#C6532E]">✦</span>
          <span>CUSTOM WEBSITES</span>
          <span className="text-[#C6532E]">✦</span>
          <span>DIRECT COMMUNICATION</span>
          <span className="text-[#C6532E]">✦</span>
          <span>BUILT FOR HOW YOU SELL</span>
          <span className="text-[#C6532E]">✦</span>
          <span>100% STATIC REACT</span>
          <span className="text-[#C6532E]">✦</span>
          <span>ZERO FLUFF</span>
          <span className="text-[#C6532E]">✦</span>
          <span>NO TEMPLATES</span>
          <span className="text-[#C6532E]">✦</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hidden lg:flex absolute bottom-24 right-12 items-center gap-3 text-xs tracking-widest uppercase text-[#66645F]">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-8 h-[1px] bg-[#66645F]" />
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C6532E]" />
      </div>
    </section>
  );
};
