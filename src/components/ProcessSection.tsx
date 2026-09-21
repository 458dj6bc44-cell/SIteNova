import React from 'react';
import { MessageSquare, Layout, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { processSteps, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

const stepIcons = [MessageSquare, Layout, CheckCircle, Rocket];

export const ProcessSection: React.FC = () => {
  const whatsappLink = getSiteNovaWhatsAppUrl();

  return (
    <section id="process" className="py-24 sm:py-32 border-b border-[#E5E0D6] bg-[#F2EFE8] text-[#171717] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E5E0D6]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#66645F]">
              <span className="text-[#C6532E] font-bold">HOW WE WORK</span>
              <span>•</span>
              <span>FROM FIRST IDEA TO LIVE WEBSITE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
              How We Work
            </h2>
            <p className="text-lg text-[#66645F] font-normal leading-relaxed">
              No unnecessary meetings or departments. You talk directly with the small team making your website, from the first message to the day your site goes live.
            </p>
          </div>

          <div className="text-xs font-mono text-[#73765A] uppercase tracking-wider">
            Direct & Collaborative • 7–14 Days
          </div>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;

            return (
              <div
                key={step.number}
                className="p-6 rounded-[8px] bg-white border border-[#D5CFC3] hover:border-[#171717] transition-colors flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-display text-3xl font-bold text-[#C6532E]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-[6px] bg-[#F2EFE8] border border-[#E5E0D6] flex items-center justify-center text-[#171717] group-hover:bg-[#171717] group-hover:text-[#F2EFE8] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif-display font-normal text-[#171717] mb-2 group-hover:text-[#C6532E] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#66645F] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D6] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#66645F]">{step.duration}</span>
                  <span className="text-[#73765A] font-bold">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <h4 className="text-xl font-serif-display font-normal text-[#171717]">
              Have a project in mind?
            </h4>
            <p className="text-xs text-[#66645F] mt-1">
              Tell us what you're building. We'll give you honest thoughts, transparent pricing, and a realistic timeline.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-[8px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 flex-shrink-0 group"
          >
            <span>Send Us a Message</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
