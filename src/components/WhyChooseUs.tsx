import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Direct communication',
      desc: 'You talk directly with the people designing and building your site. No account managers, endless phone tag, or lost details.',
    },
    {
      title: 'Custom design',
      desc: 'Every website is crafted from scratch around your brand, your products, and how your customers actually buy. Zero templates.',
    },
    {
      title: 'Zero server bills',
      desc: 'Built with modern static React and deployed to global edge networks. Loads under a second worldwide with zero database maintenance.',
    },
    {
      title: 'Fair pricing',
      desc: 'As a lean, focused studio with zero corporate overhead, we provide high-tier craftsmanship without inflated agency retainers.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#20211F] text-[#F2EFE8] border-b border-[#30312F]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Statement (#18) */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] font-bold block mb-4">
            ABOUT SITENOVA
          </span>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif-display font-normal text-[#F2EFE8] tracking-tight leading-[0.95] mb-8">
            SMALL ENOUGH TO CARE <br />
            <span className="italic text-[#E5E0D6]">ABOUT EVERY DETAIL.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-[#E5E0D6]/90 font-light leading-relaxed max-w-3xl">
            SiteNova is a small web studio focused on building custom websites for businesses that want something better than a template.
          </p>

          <p className="text-sm sm:text-base text-[#66645F] mt-4 leading-relaxed max-w-2xl font-sans-ui">
            We work directly with founders, brand owners, and independent businesses. We build the site you actually need, not the generic theme everyone else has.
          </p>
        </div>

        {/* Human Supporting Points (#18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#383A37] pt-8 border-t border-[#383A37]">
          {points.map((point, idx) => (
            <div
              key={point.title}
              className={`flex flex-col justify-between ${idx !== 0 ? 'lg:pl-8' : ''} ${
                idx !== points.length - 1 ? 'lg:pr-8' : ''
              }`}
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-serif-display text-[#F2EFE8] mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-[#E5E0D6]/70 leading-relaxed font-sans-ui">
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
