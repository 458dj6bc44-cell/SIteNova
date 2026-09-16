import React from 'react';
import { Flame, Gauge, ShieldCheck, Gem } from 'lucide-react';
import { motion } from 'motion/react';
import { whyChooseSiteNova } from '../data/portfolioData';

const iconMap = {
  Flame: Flame,
  Gauge: Gauge,
  ShieldCheck: ShieldCheck,
  Gem: Gem,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 border-t border-slate-800/80 relative overflow-hidden bg-[#080B0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            The SiteNova Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mt-2">
            Why Businesses Choose <span className="text-emerald-400">SiteNova</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Most web agencies deliver sluggish WordPress templates with 50 plugins that break every month.
            We build lean, ultra-fast static websites engineered for high conversions and zero maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseSiteNova.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Gem;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all hover:bg-slate-900/80 flex flex-col justify-between shadow-lg group"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mb-4 group-hover:border-emerald-500/30 transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.div>
                  <div className="text-2xl font-extrabold text-white font-heading mb-1 group-hover:text-emerald-300 transition-colors">
                    {item.metric}
                  </div>
                  <div className="text-xs text-emerald-400 font-semibold mb-3">
                    {item.metricLabel}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
