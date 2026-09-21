import React from 'react';
import { services } from '../data/portfolioData';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#F2EFE8] text-[#171717] border-b border-[#E5E0D6]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 pb-8 border-b border-[#E5E0D6] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] font-bold block mb-3">
              WHAT WE BUILD
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
              Services & Capabilities
            </h2>
            <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
              We design and develop custom digital experiences from scratch. Built specifically around how your business operates and how your customers actually buy.
            </p>
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#73765A]">
            0% Corporate Bloat • 100% Custom Code
          </span>
        </div>

        {/* Editorial Services Numbered List (#16) */}
        <div className="divide-y divide-[#E5E0D6]">
          {services.map((service, index) => {
            const indexStr = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
              >
                {/* Visual Number Anchor */}
                <div className="lg:col-span-2">
                  <span className="font-serif-display text-4xl sm:text-5xl text-[#66645F]/40 font-normal">
                    {indexStr}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-serif-display text-[#171717] mb-2">
                    {service.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C6532E] font-bold block">
                    {service.tagline}
                  </span>
                </div>

                {/* Short Explanation */}
                <div className="lg:col-span-3">
                  <p className="text-sm text-[#66645F] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="lg:col-span-3 border-l border-[#E5E0D6] pl-4 lg:pl-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-2">
                    Key Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#171717]">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
                        <span className="text-[#C6532E] text-[10px]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
