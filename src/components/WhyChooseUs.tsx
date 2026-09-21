import React from 'react';
import { Flame, Gauge, ShieldCheck, Gem } from 'lucide-react';
import { whyChooseSiteNova } from '../data/portfolioData';

const iconMap = {
  Flame: Flame,
  Gauge: Gauge,
  ShieldCheck: ShieldCheck,
  Gem: Gem,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 sm:py-32 border-b border-[#30312F] relative overflow-hidden bg-[#20211F] text-[#F2EFE8]">
      <div id="about" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#383A37]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#E5E0D6]/60">
              <span className="text-[#C6532E] font-bold">THE SITENOVA STANDARD</span>
              <span>•</span>
              <span>TECHNICAL ADVANTAGE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#F2EFE8] tracking-tight leading-none mb-4">
              Why Brands Trust SiteNova
            </h2>
            <p className="text-lg text-[#E5E0D6] font-light leading-relaxed">
              Most digital agencies assemble bloated WordPress templates loaded with 50 fragile plugins. We design and hand-craft custom edge architectures engineered for razor-sharp speed, rock-solid security, and commercial conversion.
            </p>
          </div>

          <div className="text-xs font-mono text-[#73765A] uppercase tracking-wider">
            Zero bloat • Zero plugins • 100% Code
          </div>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseSiteNova.map((item, idx) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Gem;

            return (
              <div
                key={idx}
                className="p-6 rounded-[8px] bg-[#171717] border border-[#30312F] hover:border-[#C6532E] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-[6px] bg-[#20211F] border border-[#383A37] flex items-center justify-center text-[#E5E0D6] mb-5 group-hover:text-[#C6532E] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="font-serif-display text-4xl font-normal text-[#F2EFE8] mb-1 group-hover:text-[#C6532E] transition-colors">
                    {item.metric}
                  </div>
                  <div className="text-xs font-mono text-[#73765A] font-bold uppercase tracking-wider mb-4">
                    {item.metricLabel}
                  </div>
                  <h3 className="text-base font-bold text-[#F2EFE8] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E5E0D6]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
