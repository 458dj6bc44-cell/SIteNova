import React from 'react';
import { ArrowUpRight, MessageCircle, Instagram, Mail } from 'lucide-react';
import {
  agencyConfig,
  verenProject,
  vitaloProject,
  gstoreProject,
  noireProject,
  getARDigitalWhatsAppUrl,
} from '../data/portfolioData';
import { ARLogo } from './ARLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = getARDigitalWhatsAppUrl();

  return (
    <footer id="site-footer" className="bg-[#0B0C0E] border-t border-[#1E2028] py-20 text-[#9FA4B2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Studio Brand & Identity */}
          <div className="md:col-span-5 space-y-5">
            <ARLogo size="md" />

            <p className="text-sm text-[#9FA4B2] max-w-md leading-relaxed font-light">
              A modern digital agency designing and engineering high-impact websites and e-commerce platforms for forward-thinking businesses. Based in Egypt, working with clients worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[6px] bg-[#14151B] border border-[#22242D] flex items-center justify-center text-[#9FA4B2] hover:text-[#FF4D15] hover:border-[#FF4D15]/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[6px] bg-[#14151B] border border-[#22242D] flex items-center justify-center text-[#9FA4B2] hover:text-[#FF4D15] hover:border-[#FF4D15]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${agencyConfig.contact.email}`}
                className="w-9 h-9 rounded-[6px] bg-[#14151B] border border-[#22242D] flex items-center justify-center text-[#9FA4B2] hover:text-[#FF4D15] hover:border-[#FF4D15]/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Client Showcases */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold">
              Selected Work
            </h4>
            <ul className="space-y-3 text-xs font-mono-tech">
              <li>
                <div className="flex items-center justify-between">
                  <a href="#veren" className="text-[#F4F4F6] hover:text-[#FF4D15] transition-colors font-bold">
                    01. VÉREN
                  </a>
                  <a
                    href={verenProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#646876] hover:text-[#F4F4F6] flex items-center gap-0.5"
                  >
                    <span>veren-amber.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <a href="#vital0" className="text-[#F4F4F6] hover:text-[#FF4D15] transition-colors font-bold">
                    02. VITALØ
                  </a>
                  <a
                    href={vitaloProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#646876] hover:text-[#F4F4F6] flex items-center gap-0.5"
                  >
                    <span>vital0.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <a href="#gstore" className="text-[#F4F4F6] hover:text-[#FF4D15] transition-colors font-bold">
                    03. GStore Sportswear
                  </a>
                  <a
                    href={gstoreProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#646876] hover:text-[#F4F4F6] flex items-center gap-0.5"
                  >
                    <span>gstore-zeta.vercel.app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <a href="#noire" className="text-[#F4F4F6] hover:text-[#FF4D15] transition-colors font-bold">
                    04. NOIRÉ Parfums
                  </a>
                  <a
                    href={noireProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#646876] hover:text-[#F4F4F6] flex items-center gap-0.5"
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
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold">
              Engineering Specs
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech text-[#9FA4B2]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]" />
                <span>100% Static React Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]" />
                <span>Vercel Global Edge CDN</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]" />
                <span>Sub-800ms Global Page Loads</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]" />
                <span>Zero Server Maintenance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E2028] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#646876]">
          <p>© {currentYear} AR Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
            <a href="#contact" className="hover:text-[#FF4D15] transition-colors">
              Start a Project →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
