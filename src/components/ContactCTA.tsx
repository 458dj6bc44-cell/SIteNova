import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Instagram, Mail, Check, Copy } from 'lucide-react';
import { agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const ContactCTA: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const whatsappUrl = getSiteNovaWhatsAppUrl();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 bg-[#20211F] text-[#F2EFE8] border-b border-[#30312F]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Final CTA Headline (#26) */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] font-bold block mb-4">
            START YOUR PROJECT
          </span>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif-display font-normal text-[#F2EFE8] tracking-tight leading-[0.95] mb-10">
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="italic text-[#E5E0D6]">WORTH REMEMBERING.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <a
              id="cta-start-project-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[4px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Personal Contact (#27) */}
        <div className="pt-12 border-t border-[#383A37] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-serif-display text-[#F2EFE8] mb-3">
              Have a project in mind?
            </h3>
            <p className="text-sm sm:text-base text-[#E5E0D6]/70 leading-relaxed font-sans-ui max-w-md">
              Send us a message on WhatsApp. Tell us what you sell, what you need, and we'll figure out the rest. You talk directly with the people who will actually design and build it.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-[#383A37] rounded-[4px] bg-[#191A19] hover:border-[#C6532E] transition-colors group block"
            >
              <div className="flex items-center justify-between mb-3 text-[#C6532E]">
                <MessageCircle className="w-5 h-5" />
                <ArrowUpRight className="w-3.5 h-3.5 text-[#66645F] group-hover:text-[#C6532E] transition-colors" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block">
                WhatsApp
              </span>
              <span className="text-sm font-bold text-[#F2EFE8] mt-1 block">
                {agencyConfig.contact.whatsappDisplay}
              </span>
            </a>

            {/* Instagram */}
            <a
              href={agencyConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-[#383A37] rounded-[4px] bg-[#191A19] hover:border-[#C6532E] transition-colors group block"
            >
              <div className="flex items-center justify-between mb-3 text-[#E5E0D6]">
                <Instagram className="w-5 h-5" />
                <ArrowUpRight className="w-3.5 h-3.5 text-[#66645F] group-hover:text-[#C6532E] transition-colors" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block">
                Instagram
              </span>
              <span className="text-sm font-bold text-[#F2EFE8] mt-1 block">
                {agencyConfig.contact.instagramHandle}
              </span>
            </a>

            {/* Email */}
            <div className="p-5 border border-[#383A37] rounded-[4px] bg-[#191A19] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-[#E5E0D6]">
                  <Mail className="w-5 h-5" />
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#66645F] hover:text-[#C6532E] transition-colors"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block">
                  Email
                </span>
                <a
                  href={`mailto:${agencyConfig.contact.email}`}
                  className="text-xs font-bold text-[#F2EFE8] hover:text-[#C6532E] transition-colors mt-1 block truncate"
                >
                  {agencyConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
