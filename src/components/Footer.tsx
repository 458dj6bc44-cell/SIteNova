import React from 'react';
import { ArrowUpRight, MessageCircle, Instagram, Mail } from 'lucide-react';
import { agencyConfig, verenProject, vitaloProject, gstoreProject, noireProject, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = getSiteNovaWhatsAppUrl();

  return (
    <footer id="site-footer" className="bg-[#171717] border-t border-[#30312F] py-20 text-[#E5E0D6]/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Studio Brand & Identity */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6532E]" />
              <span className="text-2xl font-serif-display font-normal tracking-tight text-[#F2EFE8]">
                SiteNova Web Studio
              </span>
            </div>
            <p className="text-sm text-[#E5E0D6]/80 max-w-md leading-relaxed font-light">
              Independent digital architecture and web design studio. We engineer bespoke, 100% static React storefronts and editorial brand flagships deployed on global edge infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[4px] bg-[#20211F] border border-[#383A37] flex items-center justify-center text-[#E5E0D6] hover:text-[#C6532E] hover:border-[#C6532E] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[4px] bg-[#20211F] border border-[#383A37] flex items-center justify-center text-[#E5E0D6] hover:text-[#C6532E] hover:border-[#C6532E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${agencyConfig.contact.email}`}
                className="w-9 h-9 rounded-[4px] bg-[#20211F] border border-[#383A37] flex items-center justify-center text-[#E5E0D6] hover:text-[#C6532E] hover:border-[#C6532E] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Client Showcases */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E5E0D6] font-bold">
              Selected Projects
            </h4>
            <ul className="space-y-3 text-xs font-mono">
              <li>
                <div className="flex items-center justify-between">
                  <a href="#veren" className="text-[#F2EFE8] hover:text-[#C6532E] transition-colors font-bold">
                    01. VÉREN
                  </a>
                  <a
                    href={verenProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66645F] hover:text-[#E5E0D6] flex items-center gap-0.5"
                  >
                    <span>veren-amber.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <a href="#vital0" className="text-[#F2EFE8] hover:text-[#C6532E] transition-colors font-bold">
                    02. VITALØ
                  </a>
                  <a
                    href={vitaloProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66645F] hover:text-[#E5E0D6] flex items-center gap-0.5"
                  >
                    <span>vital0.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <a href="#gstore" className="text-[#F2EFE8] hover:text-[#C6532E] transition-colors font-bold">
                    03. GStore Sportswear
                  </a>
                  <a
                    href={gstoreProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66645F] hover:text-[#E5E0D6] flex items-center gap-0.5"
                  >
                    <span>gstore-static.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <a href="#noire" className="text-[#F2EFE8] hover:text-[#C6532E] transition-colors font-bold">
                    04. NOIRÉ Parfums
                  </a>
                  <a
                    href={noireProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66645F] hover:text-[#E5E0D6] flex items-center gap-0.5"
                  >
                    <span>noire-store-five.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Principles & Specs */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E5E0D6] font-bold">
              Infrastructure Spec
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#E5E0D6]/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73765A]" />
                <span>100% Static React Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73765A]" />
                <span>Vercel Global Edge CDN</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73765A]" />
                <span>Zero Server Maintenance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73765A]" />
                <span>Zero Security Vulnerabilities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#30312F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#66645F]">
          <p>© {currentYear} SiteNova Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-[#F2EFE8] transition-colors">
              Back to Top ↑
            </a>
            <a href="#contact" className="hover:text-[#C6532E] transition-colors">
              Commission Project
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
