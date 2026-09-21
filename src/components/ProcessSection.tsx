import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      headline: "Tell us what you're building",
      desc: 'Send us a message with your business details, products, and vision. We discuss requirements directly without middlemen.',
    },
    {
      num: '02',
      title: 'Design',
      headline: 'We design & build your site',
      desc: 'We architect bespoke editorial layouts, custom typography, and performant React code tailored strictly around your brand.',
    },
    {
      num: '03',
      title: 'Refine',
      headline: 'You test & we refine',
      desc: 'You preview the staging build on your own phone and computer. We polish the interactions, copy, and details together.',
    },
    {
      num: '04',
      title: 'Launch',
      headline: 'Live website & full handover',
      desc: 'We connect your domain, deploy to global edge CDN infrastructure, and hand over a fast, maintenance-free site.',
    },
  ];

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#F2EFE8] text-[#171717] border-b border-[#E5E0D6]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 pb-8 border-b border-[#E5E0D6] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] font-bold block mb-3">
              HOW WE WORK
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
              Simple Collaboration
            </h2>
            <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
              No bloated enterprise agile ceremonies, account managers, or bureaucracy. You work directly with the people actually designing and building your site.
            </p>
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#73765A]">
            7–14 Days Typical Turnaround
          </span>
        </div>

        {/* Clean Sequential Editorial Flow (#17) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E5E0D6]">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`flex flex-col justify-between ${idx !== 0 ? 'lg:pl-8' : ''} ${
                idx !== steps.length - 1 ? 'lg:pr-8' : ''
              }`}
            >
              <div>
                {/* Large Number Visual Anchor */}
                <span className="font-serif-display text-5xl sm:text-6xl text-[#C6532E] font-normal block mb-4">
                  {step.num}
                </span>

                <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block mb-1">
                  {step.title}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif-display text-[#171717] mb-3">
                  {step.headline}
                </h3>

                <p className="text-sm text-[#66645F] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
