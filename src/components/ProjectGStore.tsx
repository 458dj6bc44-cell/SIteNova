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
      className="py-20 sm:py-28 bg-[#0E0F13] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Project Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-2">
                03 • {gstoreProject.category}
              </span>
              <h3 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none mb-4">
                GStore Sportswear
              </h3>
              <p className="text-base sm:text-lg text-[#9FA4B2] font-normal leading-relaxed">
                {gstoreProject.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1E2028]">
              <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#646876] block mb-2">
                Key Capabilities
              </span>
              <p className="text-xs text-[#E1E4EB] font-medium leading-relaxed font-sans-ui">
                Apparel variant matrix, clean sizing controls, fast touch ergonomics, and static React architecture with zero database downtime.
              </p>
            </div>

            <div className="pt-2">
              <a
                id="gstore-view-live-btn"
                href={gstoreProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[5px] bg-[#14151B] hover:bg-[#FF4D15] text-white border border-[#2B2E3C] hover:border-[#FF4D15] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>VIEW LIVE STORE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Sportswear Preview Surface */}
          <div className="lg:col-span-7 border border-[#22242D] bg-[#121318] p-6 sm:p-8 rounded-[8px] shadow-xl">
            <div className="flex items-center justify-between pb-5 border-b border-[#22242D]">
              <div>
                <span className="font-mono-tech text-xs font-bold text-white uppercase tracking-wider">
                  SPORTSWEAR STOREFRONT
                </span>
                <span className="text-xs font-mono-tech text-[#646876] block">gstore-zeta.vercel.app</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-white">
                <ShoppingCart className="w-4 h-4 text-[#FF4D15]" />
                <span>Bag ({cartCount})</span>
              </div>
            </div>

            {/* Featured Product Preview */}
            <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 bg-[#181A22] p-6 rounded-[6px] flex flex-col items-center justify-center text-center border border-[#262835]">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#646876] mb-1">
                  NEW ARRIVAL
                </span>
                <span className="font-heading text-xl text-white font-bold">AeroFit Pro Tee</span>
                <span className="font-mono-tech text-sm font-bold text-[#FF4D15] mt-2">850 EGP</span>
                <span className="text-[11px] text-[#9FA4B2] mt-1">Lightweight Athletic Fabric</span>
              </div>

              <div className="sm:col-span-7 space-y-4">
                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block mb-2">
                    Size: <span className="text-white font-bold">{selectedSize}</span>
                  </span>
                  <div className="flex gap-2">
                    {(['S', 'M', 'L', 'XL'] as const).map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-[4px] border text-xs font-mono-tech font-bold transition-colors ${
                          selectedSize === size
                            ? 'bg-[#FF4D15] text-white border-[#FF4D15]'
                            : 'bg-[#0E0F13] text-[#9FA4B2] border-[#22242D] hover:border-[#353846]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block mb-2">
                    Colorway: <span className="text-white font-bold">{selectedColor}</span>
                  </span>
                  <div className="flex gap-2">
                    {(['Black', 'Navy', 'Olive'] as const).map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 rounded-[4px] border text-xs transition-colors ${
                          selectedColor === color
                            ? 'bg-[#FF4D15] text-white border-[#FF4D15] font-semibold'
                            : 'bg-[#0E0F13] text-[#9FA4B2] border-[#22242D] hover:border-[#353846]'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className={`w-full py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#FF4D15] hover:bg-[#E63E07] text-white shadow-md shadow-[#FF4D15]/20'
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
