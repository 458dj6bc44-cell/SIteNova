import React, { useState } from 'react';
import { ArrowUpRight, Check, ShoppingBag } from 'lucide-react';
import { vitaloProject, sampleVitaloProducts } from '../data/portfolioData';

export const ProjectVitalo: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(sampleVitaloProducts[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(sampleVitaloProducts[0].flavors[0]);
  const [selectedServingSize, setSelectedServingSize] = useState<'standard' | 'bulk'>('standard');
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [cartCount, setCartCount] = useState(1);

  const handleProductSelect = (product: typeof sampleVitaloProducts[0]) => {
    setSelectedProduct(product);
    setSelectedFlavor(product.flavors[0]);
  };

  const handleAddToCart = () => {
    setAddedSuccess(true);
    setCartCount(prev => prev + 1);
    setTimeout(() => setAddedSuccess(false), 1800);
  };

  const currentPrice = selectedServingSize === 'bulk' ? Math.round(selectedProduct.price * 1.8) : selectedProduct.price;

  return (
    <section
      id="vital0"
      className="py-20 sm:py-28 bg-[#0B0C0E] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Project Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold block mb-2">
                02 • {vitaloProject.category}
              </span>
              <h3 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none mb-4">
                VITALØ
              </h3>
              <p className="text-base sm:text-lg text-[#9FA4B2] font-normal leading-relaxed">
                {vitaloProject.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1E2028]">
              <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#646876] block mb-2">
                Key Capabilities
              </span>
              <p className="text-xs text-[#E1E4EB] font-medium leading-relaxed font-sans-ui">
                Instant client-side catalog filtering, multi-variant flavor and serving size selectors, slide-out cart, sub-second edge loads.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={vitaloProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[5px] bg-[#14151B] hover:bg-[#FF4D15] text-white border border-[#2B2E3C] hover:border-[#FF4D15] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>VIEW LIVE STORE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Storefront Surface */}
          <div className="lg:col-span-7 border border-[#22242D] bg-[#121318] p-6 sm:p-8 rounded-[8px] shadow-xl">
            {/* Header bar of the preview */}
            <div className="flex items-center justify-between pb-5 border-b border-[#22242D]">
              <div>
                <span className="font-mono-tech text-xs font-bold text-white uppercase tracking-wider">
                  STOREFRONT PREVIEW
                </span>
                <span className="text-xs font-mono-tech text-[#646876] block">vital0.vercel.app</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-white">
                <ShoppingBag className="w-4 h-4 text-[#FF4D15]" />
                <span>Cart ({cartCount})</span>
              </div>
            </div>

            {/* Catalog Selector */}
            <div className="py-5 border-b border-[#22242D]">
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block mb-2">
                Select Catalog Item:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sampleVitaloProducts.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleProductSelect(p)}
                    className={`p-2.5 text-left border rounded-[5px] transition-all text-xs ${
                      selectedProduct.id === p.id
                        ? 'border-[#FF4D15] bg-[#1B1D25] font-bold text-white shadow-sm'
                        : 'border-[#22242D] bg-[#0E0F13] text-[#9FA4B2] hover:border-[#353846]'
                    }`}
                  >
                    <div className="truncate font-sans-ui">{p.name}</div>
                    <div className="text-[11px] text-[#FF4D15] font-mono-tech mt-0.5">{p.price} EGP</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Product Configuration */}
            <div className="py-5 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h4 className="text-xl font-heading font-bold text-white">{selectedProduct.name}</h4>
                  <p className="text-xs text-[#9FA4B2] mt-0.5">{selectedProduct.tagline}</p>
                </div>
                <div className="text-xl font-mono-tech font-bold text-[#FF4D15]">
                  {currentPrice.toLocaleString()} EGP
                </div>
              </div>

              {/* Flavor Selector */}
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block mb-1.5">
                  Flavor: <span className="text-white font-bold">{selectedFlavor}</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.flavors.map(f => (
                    <button
                      key={f}
                      onClick={() => setSelectedFlavor(f)}
                      className={`px-3 py-1 text-xs rounded-[4px] border transition-colors ${
                        selectedFlavor === f
                          ? 'bg-[#FF4D15] text-white border-[#FF4D15] font-semibold'
                          : 'bg-[#0E0F13] text-[#9FA4B2] border-[#22242D] hover:border-[#353846]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#646876] block mb-1.5">
                  Serving Size:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedServingSize('standard')}
                    className={`px-3 py-1.5 text-xs rounded-[4px] border transition-colors ${
                      selectedServingSize === 'standard'
                        ? 'bg-[#1C1E27] text-white border-[#FF4D15] font-semibold'
                        : 'bg-[#0E0F13] text-[#9FA4B2] border-[#22242D]'
                    }`}
                  >
                    Standard ({selectedProduct.size})
                  </button>
                  <button
                    onClick={() => setSelectedServingSize('bulk')}
                    className={`px-3 py-1.5 text-xs rounded-[4px] border transition-colors ${
                      selectedServingSize === 'bulk'
                        ? 'bg-[#1C1E27] text-white border-[#FF4D15] font-semibold'
                        : 'bg-[#0E0F13] text-[#9FA4B2] border-[#22242D]'
                    }`}
                  >
                    Bulk Size (2x)
                  </button>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-[5px] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#FF4D15] hover:bg-[#E63E07] text-white shadow-md shadow-[#FF4D15]/20'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <span>Add to Cart • {currentPrice.toLocaleString()} EGP</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
