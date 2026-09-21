import React, { useState } from 'react';
import { ArrowUpRight, Check, ShoppingCart } from 'lucide-react';
import { gstoreProject } from '../data/portfolioData';

export const ProjectGStore: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('M');
  const [selectedColor, setSelectedColor] = useState<'Black' | 'Navy' | 'Olive'>('Black');
  const [cartCount, setCartCount] = useState(2);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setCartCount(prev => prev + 1);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section
      id="gstore"
      className="py-20 sm:py-28 bg-[#E5E0D6]/40 text-[#171717] border-b border-[#E5E0D6]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Project Details (#13) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block mb-2">
                {gstoreProject.category}
              </span>
              <h3 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
                GStore Sportswear
              </h3>
              <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
                {gstoreProject.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#D5CFC3]">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-2">
                Key Capabilities
              </span>
              <p className="text-xs text-[#171717] font-medium leading-relaxed">
                Apparel variant matrix, clean sizing controls, fast touch ergonomics, and static React architecture with zero database downtime.
              </p>
            </div>

            <div className="pt-2">
              <a
                id="gstore-view-live-btn"
                href={gstoreProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>VIEW PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Sportswear Preview Surface */}
          <div className="lg:col-span-7 border border-[#D5CFC3] bg-white p-6 sm:p-8 rounded-[4px]">
            <div className="flex items-center justify-between pb-5 border-b border-[#E5E0D6]">
              <div>
                <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider">
                  SPORTSWEAR STOREFRONT
                </span>
                <span className="text-xs text-[#66645F] block">gstore-zeta.vercel.app</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#171717]">
                <ShoppingCart className="w-4 h-4 text-[#C6532E]" />
                <span>Bag ({cartCount})</span>
              </div>
            </div>

            {/* Featured Product Preview */}
            <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 bg-[#F2EFE8] p-6 rounded-[2px] flex flex-col items-center justify-center text-center border border-[#E5E0D6]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#66645F] mb-1">
                  NEW ARRIVAL
                </span>
                <span className="font-serif-display text-2xl text-[#171717]">AeroFit Pro Tee</span>
                <span className="font-mono text-sm font-bold text-[#C6532E] mt-2">850 EGP</span>
                <span className="text-[11px] text-[#66645F] mt-1">Lightweight Athletic Fabric</span>
              </div>

              <div className="sm:col-span-7 space-y-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block mb-2">
                    Size: <span className="text-[#171717] font-bold">{selectedSize}</span>
                  </span>
                  <div className="flex gap-2">
                    {(['S', 'M', 'L', 'XL'] as const).map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-[2px] border text-xs font-mono font-bold transition-colors ${
                          selectedSize === size
                            ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                            : 'bg-white text-[#66645F] border-[#E5E0D6] hover:border-[#171717]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block mb-2">
                    Colorway: <span className="text-[#171717] font-bold">{selectedColor}</span>
                  </span>
                  <div className="flex gap-2">
                    {(['Black', 'Navy', 'Olive'] as const).map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 rounded-[2px] border text-xs transition-colors ${
                          selectedColor === color
                            ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                            : 'bg-white text-[#66645F] border-[#E5E0D6] hover:border-[#171717]'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className={`w-full py-3 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-[#73765A] text-[#F2EFE8]'
                      : 'bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag • 850 EGP</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
