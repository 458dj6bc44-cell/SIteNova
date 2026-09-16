import React from 'react';
import { Store, MessageCircle, Palette, Zap, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data/portfolioData';

const iconMap = {
  Store: Store,
  MessageCircle: MessageCircle,
  Palette: Palette,
  Zap: Zap,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 border-t border-slate-800/80 bg-slate-950/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mt-2">
            Engineered for <span className="text-emerald-400">Conversion</span> & Speed
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Every website we create is custom-coded for your brand. No bloated themes, no sluggish plugins,
            and no unexpected monthly hosting fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Zap;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors"
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-emerald-400 border border-slate-700/60">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400/90 mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Deliverables Included:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    <span>Discuss this for your business</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
