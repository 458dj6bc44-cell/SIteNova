import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Mail,
  ArrowUpRight,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const ContactCTA: React.FC = () => {
  const [selectedProjectType, setSelectedProjectType] = useState('E-Commerce Website');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const customMessage = `Hello SiteNova! I'm interested in getting a website (${selectedProjectType}) for my business. I'd like to learn more about your services.`;

  const dynamicWhatsAppLink = getSiteNovaWhatsAppUrl(customMessage);

  const copyEmail = () => {
    navigator.clipboard.writeText(agencyConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative overflow-hidden bg-[#07090C]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[150px] pointer-events-none -z-10 rounded-full animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-slate-700 p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-colors"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Your Next Project</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Typical Turnaround: {agencyConfig.contact.turnaroundTime}</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Ready to build a website that{' '}
              <span className="text-emerald-400">actually generates revenue?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl">
              Skip complex forms. Contact SiteNova directly via WhatsApp or Instagram.
              We'll review your business concept and respond with a personalized proposal within 24 hours.
            </p>

            {/* Project Type Selector to customize WhatsApp message */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                What type of website does your business need?
              </span>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Sportswear & Apparel E-Commerce',
                  'Luxury Store with WhatsApp Ordering',
                  'Brand Portfolio & Corporate Site',
                  'Custom Social-Commerce Store',
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedProjectType(type)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all active:scale-95 ${
                      selectedProjectType === type
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* WhatsApp Button */}
              <motion.a
                id="contact-btn-whatsapp"
                href={dynamicWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group p-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 fill-slate-950" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-900/80 font-bold">
                      Recommended • Instant Reply
                    </div>
                    <div className="text-lg font-extrabold tracking-tight">
                      Chat on WhatsApp
                    </div>
                    <div className="text-xs text-slate-950/80 font-mono font-medium">
                      {agencyConfig.contact.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* Instagram Button */}
              <motion.a
                id="contact-btn-instagram"
                href={agencyConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group p-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-pink-500/50 text-white font-bold transition-colors shadow-lg hover:shadow-pink-500/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                      Direct Message
                    </div>
                    <div className="text-lg font-extrabold tracking-tight">
                      {agencyConfig.contact.instagramHandle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-pink-400" />
              </motion.a>
            </div>

            {/* Email Contact alternative */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Prefer email? Send your project brief to:</span>
                <span className="font-mono text-emerald-300 font-semibold">{agencyConfig.contact.email}</span>
              </div>
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
