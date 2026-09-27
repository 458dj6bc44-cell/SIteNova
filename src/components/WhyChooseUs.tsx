import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Direct Senior Collaboration',
      desc: 'You work directly with senior designers and digital architects. No account managers, endless phone tag, or lost requirements. Clear, fast execution from day one.',
    },
    {
      title: 'Bespoke Code & Architecture',
      desc: 'Every website is crafted from the ground up for your specific brand and business goals. Zero generic WordPress themes, page builders, or cookie-cutter templates.',
    },
    {
      title: 'Edge Speed & Zero Server Bills',
      desc: 'Engineered with modern static React and deployed on edge CDN networks worldwide. Sub-second load times on mobile with zero database vulnerabilities.',
    },
    {
      title: 'High-Impact Conversion Systems',
      desc: 'We design for results: frictionless 1-tap WhatsApp checkout, transparent cart architectures, and intuitive mobile ergonomics that turn visitors into customers.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#101115] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Agency Positioning Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-4">
            ABOUT AR DIGITAL
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.0] mb-8">
            WE BUILD WEBSITES THAT <br />
            <span className="text-[#9FA4B2] font-normal">MAKE YOUR BRAND STAND OUT.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-[#E1E4EB]/90 font-light leading-relaxed max-w-3xl">
            AR Digital is a modern digital agency focused on designing and engineering high-impact websites for forward-thinking businesses.
          </p>

          <p className="text-sm sm:text-base text-[#7A7F90] mt-4 leading-relaxed max-w-2xl font-sans-ui">
            We partner with founders, brands, and ambitious enterprises worldwide. We don't build generic websites—we engineer bespoke digital platforms built around your customers and how you actually convert.
          </p>
        </div>

        {/* Agency Advantage Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#22242D] pt-8 border-t border-[#22242D]">
          {points.map((point, idx) => (
            <div
              key={point.title}
              className={`flex flex-col justify-between ${idx !== 0 ? 'lg:pl-8' : ''} ${
                idx !== points.length - 1 ? 'lg:pr-8' : ''
              }`}
            >
              <div>
                <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mb-2.5">
                  {point.title}
                </h3>
                <p className="text-sm text-[#9FA4B2] leading-relaxed font-sans-ui">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
