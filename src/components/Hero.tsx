import React from 'react';
import { ArrowDown, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { agencyConfig, getARDigitalWhatsAppUrl } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const whatsappLink = getARDigitalWhatsAppUrl();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 bg-[#0B0C0E] text-[#F4F4F6] border-b border-[#1E2028] overflow-hidden"
    >
      {/* Subtle Ambient Background Gradient & Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-5 sm:right-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#FF4D15]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Identity & Origin Label */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 text-xs font-mono-tech tracking-widest uppercase text-[#9FA4B2]"
          >
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#161820] border border-[#272A36] text-white font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]" />
              AR DIGITAL
            </span>
            <span className="hidden sm:inline-block w-4 h-[1px] bg-[#333744]" />
            <span className="text-[#9FA4B2]">DIGITAL AGENCY & WEB STUDIO</span>
            <span className="hidden md:inline-block w-4 h-[1px] bg-[#333744]" />
            <span className="hidden md:inline-block text-[#646876]">EGYPT & WORLDWIDE</span>
          </motion.div>

          {/* Dominant Modern Headline */}
          <motion.h1
            variants={itemVariants}
            id="hero-headline"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold text-white tracking-tight leading-[1.02] mb-8"
          >
            WE BUILD WEBSITES <br />
            THAT MAKE BUSINESSES <br />
            <span className="text-[#FF4D15]">LOOK & PERFORM BETTER.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            id="hero-description"
            className="text-lg sm:text-xl text-[#9FA4B2] font-normal leading-relaxed max-w-2xl mb-10"
          >
            {agencyConfig.subheadline}
          </motion.p>

          {/* Clean Action Buttons */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="flex flex-wrap items-center gap-4 mb-16 sm:mb-20"
          >
            <a
              id="hero-cta-work"
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[5px] bg-[#FF4D15] hover:bg-[#E63E07] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#FF4D15]/25 hover:shadow-[#FF4D15]/40"
            >
              <span>VIEW OUR WORK</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              id="hero-cta-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[5px] bg-[#14151B] hover:bg-[#1C1E26] text-white border border-[#2B2E3C] hover:border-[#FF4D15]/50 font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D15]" />
            </a>
          </motion.div>

          {/* Technical Agency Metrics Grid */}
          <motion.div
            variants={itemVariants}
            id="hero-metrics"
            className="pt-8 border-t border-[#1E2028] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-heading font-bold text-white mb-0.5">
                100% Bespoke
              </span>
              <span className="text-xs font-mono-tech text-[#646876]">
                Custom code, zero templates
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-heading font-bold text-[#FF4D15] mb-0.5">
                Direct Senior
              </span>
              <span className="text-xs font-mono-tech text-[#646876]">
                Work directly with makers
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-heading font-bold text-white mb-0.5">
                &lt; 800ms
              </span>
              <span className="text-xs font-mono-tech text-[#646876]">
                Global edge response time
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-heading font-bold text-emerald-400 mb-0.5">
                0% Gateway
              </span>
              <span className="text-xs font-mono-tech text-[#646876]">
                Direct WhatsApp commerce
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
