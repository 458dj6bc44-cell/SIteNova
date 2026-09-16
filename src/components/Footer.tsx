import React from 'react';
import { Sparkles, ArrowUpRight, MessageCircle, Instagram, Mail, Heart } from 'lucide-react';
import { agencyConfig, vitaloProject, gstoreProject, noireProject, getSiteNovaWhatsAppUrl } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = getSiteNovaWhatsAppUrl();

  return (
    <footer id="site-footer" className="bg-[#050709] border-t border-slate-900 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#0d1117] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Site<span className="text-emerald-400">Nova</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Bespoke web design & modern social-commerce development studio. Building ultra-fast, 100% static
              React storefronts ready for instant Vercel edge deployment.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={agencyConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${agencyConfig.contact.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-1 text-xs text-slate-400">
              <span className="text-slate-500">WhatsApp: </span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-emerald-400 hover:underline font-medium"
              >
                {agencyConfig.contact.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Col 2: Featured Client Showcases */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Client Projects
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#vital0"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span className="text-emerald-400 font-medium">VITALØ</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Featured</span>
                </a>
              </li>
              <li>
                <a
                  href={vitaloProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <span>vital0.vercel.app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#gstore"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>GStore Sportswear</span>
                  <span className="text-[10px] text-blue-400 font-mono">Sportswear</span>
                </a>
              </li>
              <li>
                <a
                  href={gstoreProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <span>gstore-static.vercel.app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#noire"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>NOIRÉ Parfums</span>
                  <span className="text-[10px] text-amber-400 font-mono">Luxury Fragrance</span>
                </a>
              </li>
              <li>
                <a
                  href={noireProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>noire-store-five.vercel.app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#whatsapp-ordering"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-medium"
                >
                  <span>WhatsApp Ordering Guide</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Agency Navigation & Deployment */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              Architecture & Vercel
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>100% Static React (Vite)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Vercel Edge Distribution</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero Database Overhead</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero Server Maintenance</span>
              </li>
              <li className="pt-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
                  Built to deploy cleanly with <code className="text-emerald-300 font-mono">npm run build</code> into <code className="text-emerald-300 font-mono">dist/</code>.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} SiteNova Web Design Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Hire SiteNova
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
