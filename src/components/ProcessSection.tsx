import React from 'react';
import { MessageSquare, Layout, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { processSteps, agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

const stepIcons = [MessageSquare, Layout, CheckCircle, Rocket];

export const ProcessSection: React.FC = () => {
  const whatsappLink = getSiteNovaWhatsAppUrl();

  return (
    <section id="process" className="py-24 border-t border-slate-800/80 bg-slate-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mt-2">
            Simple 4-Step <span className="text-emerald-400">Process</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            From first message to live launch in just 7 to 14 days. Transparent, fast, and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group hover:bg-slate-900/90 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-700 group-hover:text-emerald-400/80 font-mono transition-colors">
                      {step.number}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-emerald-400"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">{step.duration}</span>
                  <span className="text-emerald-400 font-semibold">{step.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xl transition-colors"
        >
          <div>
            <h4 className="text-base font-bold text-white font-heading">
              Ready to start step 1 for your business?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Tell us what you sell or showcase, and we'll reply with ideas and an estimate within 24 hours.
            </p>
          </div>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide transition-colors shadow-md flex items-center gap-2 flex-shrink-0 group"
          >
            <span>Start With a Chat</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
