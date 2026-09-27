import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Instagram, Mail, Check, Copy } from 'lucide-react';
import { agencyConfig, getARDigitalWhatsAppUrl } from '../data/portfolioData';

export const ContactCTA: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const whatsappUrl = getARDigitalWhatsAppUrl();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 bg-[#0E0F13] text-[#F4F4F6] border-b border-[#1E2028] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#FF4D15]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Final CTA Headline */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-4">
            START YOUR PROJECT
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.0] mb-8">
            LET'S BUILD SOMETHING <br />
            <span className="text-[#FF4D15]">WORLD-CLASS TOGETHER.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#9FA4B2] font-normal leading-relaxed max-w-2xl mb-10">
            Tell us about your brand, what you need to build, and your target launch date. We'll provide honest feedback, clear scope, and an actionable roadmap within 24 hours.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              id="cta-start-project-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[6px] bg-[#FF4D15] hover:bg-[#E63E07] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF4D15]/25 hover:shadow-[#FF4D15]/40"
            >
              <span>MESSAGE ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Direct Contact Channels */}
        <div className="pt-12 border-t border-[#22242D] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
              Direct Contact
            </h3>
            <p className="text-sm sm:text-base text-[#9FA4B2] leading-relaxed font-sans-ui max-w-md">
              We respond rapidly on WhatsApp. You'll speak directly with our senior builders about your requirements, project timelines, and technical architecture.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-[#22242D] rounded-[8px] bg-[#14151B] hover:border-[#FF4D15]/60 transition-colors group block"
            >
              <div className="flex items-center justify-between mb-3 text-[#FF4D15]">
                <MessageCircle className="w-5 h-5" />
                <ArrowUpRight className="w-3.5 h-3.5 text-[#646876] group-hover:text-[#FF4D15] transition-colors" />
              </div>
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block">
                WhatsApp
              </span>
              <span className="text-sm font-bold text-white mt-1 block">
                {agencyConfig.contact.whatsappDisplay}
              </span>
            </a>

            {/* Instagram */}
            <a
              href={agencyConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-[#22242D] rounded-[8px] bg-[#14151B] hover:border-[#FF4D15]/60 transition-colors group block"
            >
              <div className="flex items-center justify-between mb-3 text-[#FF4D15]">
                <Instagram className="w-5 h-5" />
                <ArrowUpRight className="w-3.5 h-3.5 text-[#646876] group-hover:text-[#FF4D15] transition-colors" />
              </div>
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block">
                Instagram
              </span>
              <span className="text-sm font-bold text-white mt-1 block">
                {agencyConfig.contact.instagramHandle}
              </span>
            </a>

            {/* Email */}
            <div className="p-5 border border-[#22242D] rounded-[8px] bg-[#14151B] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-[#FF4D15]">
                  <Mail className="w-5 h-5" />
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#646876] hover:text-white transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block">
                  Email
                </span>
                <span className="text-sm font-bold text-white mt-1 block truncate">
                  {agencyConfig.contact.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
