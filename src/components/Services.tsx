import React from 'react';
import { Store, MessageCircle, Palette, Zap, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
  Store: Store,
  MessageCircle: MessageCircle,
  Palette: Palette,
  Zap: Zap,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 border-b border-[#E5E0D6] bg-[#F2EFE8] text-[#171717] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E0D6]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#66645F]">
              <span className="text-[#C6532E] font-bold">WHAT WE BUILD</span>
              <span>•</span>
              <span>CUSTOM WEBSITES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
              What We Build
            </h2>
            <p className="text-lg text-[#66645F] font-normal leading-relaxed">
              Need a website for your business? We can build it. Tell us what you sell, and we'll figure out the rest. Custom design, direct communication, and no unnecessary complexity.
            </p>
          </div>

          <div className="text-xs font-mono text-[#73765A] uppercase tracking-wider">
            Custom Code • No Templates • Fast Builds
          </div>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(service => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Zap;

            return (
              <div
                key={service.id}
                className="p-8 rounded-[8px] bg-white border border-[#D5CFC3] hover:border-[#171717] transition-colors flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[6px] bg-[#F2EFE8] border border-[#E5E0D6] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-[#F2EFE8] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-[4px] bg-[#E5E0D6] text-[#171717]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif-display font-normal text-[#171717] group-hover:text-[#C6532E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#73765A] mt-1 font-bold">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#66645F] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#E5E0D6] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#66645F] font-bold block">
                      Scope Includes:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#171717]">
                        <Check className="w-3.5 h-3.5 text-[#73765A] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E0D6]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#171717] hover:text-[#C6532E] transition-colors group/link"
                  >
                    <span>Talk to us about this</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
