import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 bg-[#F2EFE8] text-[#171717] border-b border-[#E5E0D6]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Identity Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6 sm:mb-8 text-xs font-mono tracking-widest uppercase text-[#66645F]"
          >
            <span className="text-[#171717] font-bold">SITENOVA WEB STUDIO</span>
            <span className="w-6 h-[1px] bg-[#66645F]/30" />
            <span className="text-[#73765A]">SMALL TEAM • CUSTOM WEBSITES</span>
          </motion.div>

          {/* Dominant Headline */}
          <motion.h1
            variants={itemVariants}
            id="hero-headline"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-serif-display font-normal text-[#171717] tracking-tight leading-[0.98] mb-8"
          >
            WE BUILD <br />
            WEBSITES THAT <br />
            <span className="italic text-[#C6532E]">FEEL LIKE</span> YOURS.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            id="hero-description"
            className="text-lg sm:text-xl text-[#66645F] font-normal leading-relaxed max-w-2xl mb-10"
          >
            {agencyConfig.subheadline}
          </motion.p>

          {/* Clean Restrained CTAs */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="flex flex-wrap items-center gap-4 mb-16 sm:mb-20"
          >
            <a
              id="hero-cta-work"
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[4px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <span>VIEW OUR WORK</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              id="hero-cta-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[4px] bg-transparent hover:bg-[#E5E0D6] text-[#171717] border border-[#171717] font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#66645F]" />
            </a>
          </motion.div>

          {/* Restrained Technical Positioning Line (#21) */}
          <motion.div
            variants={itemVariants}
            id="hero-metrics"
            className="pt-6 border-t border-[#E5E0D6] flex flex-wrap items-baseline gap-x-8 gap-y-3 text-xs text-[#66645F]"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-lg text-[#171717] font-normal">100% Custom</span>
              <span className="text-[#66645F] font-mono">• No generic templates</span>
            </div>
            <div className="hidden sm:inline-block text-[#E5E0D6]">•</div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-lg text-[#C6532E] font-normal">Direct Contact</span>
              <span className="text-[#66645F] font-mono">• Talk with the builders</span>
            </div>
            <div className="hidden md:inline-block text-[#E5E0D6]">•</div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-lg text-[#171717] font-normal">&lt;1.0s Speed</span>
              <span className="text-[#66645F] font-mono">• Fast static React builds</span>
            </div>
            <div className="hidden lg:inline-block text-[#E5E0D6]">•</div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-lg text-[#73765A] font-normal">7–14 Days</span>
              <span className="text-[#66645F] font-mono">• From idea to live</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
