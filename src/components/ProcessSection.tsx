import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Strategy & Scope',
      headline: "Tell us what you're building",
      desc: 'Send us a message with your business goals, brand assets, and vision. We analyze your requirements and outline a transparent scope and fixed timeline within 24 hours.',
    },
    {
      num: '02',
      title: 'Design & Code',
      headline: 'We design & engineer your build',
      desc: 'We craft high-fidelity responsive layouts, custom typography rhythm, and performant React components strictly tailored around your products and conversion funnels.',
    },
    {
      num: '03',
      title: 'Interactive Review',
      headline: 'You test & we refine together',
      desc: 'You click through the live staging build on your own mobile device and desktop. We fine-tune micro-interactions, copy, cart workflows, and performance.',
    },
    {
      num: '04',
      title: 'Global Launch',
      headline: 'Edge deployment & full handover',
      desc: 'We connect your custom domain, deploy to global edge CDN infrastructure, and hand over a blazing fast, zero-maintenance digital storefront ready to convert.',
    },
  ];

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#0E0F13] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 pb-8 border-b border-[#1E2028] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-3">
              HOW WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-base sm:text-lg text-[#9FA4B2] font-normal leading-relaxed">
              No bloated corporate overhead, no layers of account executives. You collaborate directly with senior creators from initial brief to production launch.
            </p>
          </div>

          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#646876]">
            7–14 Days Typical Delivery Window
          </span>
        </div>

        {/* Clean Sequential Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#22242D]">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`flex flex-col justify-between ${idx !== 0 ? 'lg:pl-8' : ''} ${
                idx !== steps.length - 1 ? 'lg:pr-8' : ''
              }`}
            >
              <div>
                {/* Large Number Visual Anchor */}
                <span className="font-heading text-5xl sm:text-6xl text-[#FF4D15] font-extrabold block mb-4">
                  {step.num}
                </span>

                <span className="text-xs font-mono-tech uppercase tracking-widest text-[#646876] block mb-1">
                  {step.title}
                </span>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
                  {step.headline}
                </h3>

                <p className="text-sm text-[#9FA4B2] leading-relaxed font-sans-ui">
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
