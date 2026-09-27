import React from 'react';
import { services } from '../data/portfolioData';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#0B0C0E] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 pb-8 border-b border-[#1E2028] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-3">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
              Services & Capabilities
            </h2>
            <p className="text-base sm:text-lg text-[#9FA4B2] font-normal leading-relaxed">
              We design and engineer custom digital experiences from scratch. Built specifically around your brand identity, your conversion funnel, and how your customers actually buy.
            </p>
          </div>

          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#646876]">
            0% Page Builders • 100% Bespoke Code
          </span>
        </div>

        {/* Editorial Services Numbered List */}
        <div className="divide-y divide-[#1E2028]">
          {services.map((service, index) => {
            const indexStr = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group"
              >
                {/* Visual Number Anchor */}
                <div className="lg:col-span-2">
                  <span className="font-heading text-4xl sm:text-5xl text-[#333745] group-hover:text-[#FF4D15] font-bold transition-colors">
                    {indexStr}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[#FF4D15] font-bold block">
                    {service.tagline}
                  </span>
                </div>

                {/* Short Explanation */}
                <div className="lg:col-span-3">
                  <p className="text-sm text-[#9FA4B2] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="lg:col-span-3 border-l border-[#22242D] pl-4 lg:pl-6">
                  <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#646876] block mb-2">
                    Key Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#E1E4EB]">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
                        <span className="text-[#FF4D15] text-[10px]">•</span>
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
