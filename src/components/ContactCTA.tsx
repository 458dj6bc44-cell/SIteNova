import React, { useState } from 'react';
import {
  MessageCircle,
  Instagram,
  Mail,
  ArrowUpRight,
  Clock,
  Copy,
  Check
} from 'lucide-react';
import { agencyConfig, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const ContactCTA: React.FC = () => {
  const [selectedProjectType, setSelectedProjectType] = useState('E-Commerce Website');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const customMessage = `Hello SiteNova! I'm interested in commissioning a website (${selectedProjectType}) for my business. I'd like to learn more about your services.`;

  const dynamicWhatsAppLink = getSiteNovaWhatsAppUrl(customMessage);

  const copyEmail = () => {
    navigator.clipboard.writeText(agencyConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-b border-[#30312F] relative overflow-hidden bg-[#20211F] text-[#F2EFE8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Container */}
          <div className="rounded-[12px] bg-[#171717] border border-[#383A37] p-8 sm:p-14 shadow-2xl relative">
            {/* Top Label */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#30312F]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-[4px] bg-[#C6532E] text-[#F2EFE8] font-mono text-[10px] font-bold uppercase tracking-widest">
                  COMMISSIONS OPEN
                </span>
                <span className="text-xs font-mono text-[#E5E0D6]/60 uppercase tracking-wider">
                  Direct Agency Contact
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#E5E0D6]/70">
                <Clock className="w-3.5 h-3.5 text-[#C6532E]" />
                <span>Turnaround: {agencyConfig.contact.turnaroundTime}</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#F2EFE8] tracking-tight leading-[1.05]">
              Initiate Your Digital <span className="text-[#C6532E]">Transformation</span>
            </h2>

            <p className="text-[#E5E0D6] text-base sm:text-lg mt-4 leading-relaxed font-light max-w-2xl">
              No endless intake forms. Connect directly with SiteNova's creative directors on WhatsApp or Instagram to discuss timelines, technical scope, and exact estimates.
            </p>

            {/* Project Type Selector */}
            <div className="mt-10 pt-8 border-t border-[#30312F]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block mb-3">
                Select Primary Engagement Focus:
              </span>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'Creative Studio / Agency Site',
                  'E-Commerce Storefront',
                  'Luxury WhatsApp Direct Store',
                  'High-Performance Static Web App',
                ].map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedProjectType(type)}
                    className={`px-4 py-2 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedProjectType === type
                        ? 'bg-[#C6532E] text-[#F2EFE8] border border-[#C6532E]'
                        : 'bg-[#20211F] text-[#E5E0D6] border border-[#383A37] hover:border-[#E5E0D6]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Button */}
              <a
                id="contact-btn-whatsapp"
                href={dynamicWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-[8px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold transition-all shadow-md flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[6px] bg-black/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#F2EFE8]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#F2EFE8]/80 font-mono">
                      Fastest Response
                    </div>
                    <div className="text-base font-bold tracking-tight">
                      Message on WhatsApp
                    </div>
                    <div className="text-xs text-[#F2EFE8]/80 font-mono">
                      {agencyConfig.contact.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram Button */}
              <a
                id="contact-btn-instagram"
                href={agencyConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-[8px] bg-[#20211F] hover:bg-[#282926] border border-[#383A37] text-[#F2EFE8] font-bold transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[6px] bg-white/5 text-[#E5E0D6] flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#66645F] font-mono">
                      Social Channel
                    </div>
                    <div className="text-base font-bold tracking-tight">
                      {agencyConfig.contact.instagramHandle}
                    </div>
                    <div className="text-xs text-[#E5E0D6]/60 font-mono">
                      Follow & Direct Message
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#66645F] group-hover:text-[#F2EFE8]" />
              </a>
            </div>

            {/* Email Alternative */}
            <div className="mt-6 p-4 rounded-[6px] bg-[#20211F] border border-[#30312F] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs text-[#E5E0D6]/80 font-mono">
                <Mail className="w-4 h-4 text-[#73765A]" />
                <span>Brief submission:</span>
                <span className="text-[#F2EFE8] font-bold">{agencyConfig.contact.email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-[4px] bg-[#171717] hover:bg-[#282926] text-xs font-mono text-[#E5E0D6] border border-[#383A37] transition-colors flex items-center gap-1.5"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
