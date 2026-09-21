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
      className="py-20 sm:py-28 bg-[#F2EFE8] text-[#171717] border-b border-[#E5E0D6]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Project Information Hierarchy (#13) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block mb-2">
                {vitaloProject.category}
              </span>
              <h3 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
                VITALØ
              </h3>
              <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
                {vitaloProject.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E0D6]">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#66645F] block mb-2">
                Key Capabilities
              </span>
              <p className="text-xs text-[#171717] font-medium leading-relaxed">
                Instant client-side catalog filtering, multi-variant flavor and serving size selectors, slide-out cart, sub-second edge loads.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={vitaloProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>VIEW PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Distinct Visual Composition (Interactive Storefront Surface) */}
          <div className="lg:col-span-7 border border-[#E5E0D6] bg-white p-6 sm:p-8 rounded-[4px]">
            {/* Header bar of the preview */}
            <div className="flex items-center justify-between pb-5 border-b border-[#E5E0D6]">
              <div>
                <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider">
                  STOREFRONT PREVIEW
                </span>
                <span className="text-xs text-[#66645F] block">vital0.vercel.app</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#171717]">
                <ShoppingBag className="w-4 h-4 text-[#C6532E]" />
                <span>Cart ({cartCount})</span>
              </div>
            </div>

            {/* Catalog Selector */}
            <div className="py-5 border-b border-[#E5E0D6]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block mb-2">
                Select Catalog Item:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {sampleVitaloProducts.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleProductSelect(p)}
                    className={`p-2.5 text-left border rounded-[2px] transition-all text-xs ${
                      selectedProduct.id === p.id
                        ? 'border-[#171717] bg-[#F2EFE8] font-bold text-[#171717]'
                        : 'border-[#E5E0D6] text-[#66645F] hover:border-[#171717]'
                    }`}
                  >
                    <div className="truncate font-sans-ui">{p.name}</div>
                    <div className="text-[11px] text-[#C6532E] font-mono mt-0.5">{p.price} EGP</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Product Configuration */}
            <div className="py-5 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h4 className="text-xl font-serif-display text-[#171717]">{selectedProduct.name}</h4>
                  <p className="text-xs text-[#66645F] mt-0.5">{selectedProduct.tagline}</p>
                </div>
                <div className="text-xl font-mono font-bold text-[#171717]">
                  {currentPrice.toLocaleString()} EGP
                </div>
              </div>

              {/* Flavor Selector */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block mb-1.5">
                  Flavor: <span className="text-[#171717] font-bold">{selectedFlavor}</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.flavors.map(f => (
                    <button
                      key={f}
                      onClick={() => setSelectedFlavor(f)}
                      className={`px-3 py-1 text-xs rounded-[2px] border transition-colors ${
                        selectedFlavor === f
                          ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                          : 'bg-white text-[#66645F] border-[#E5E0D6] hover:border-[#171717]'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66645F] block mb-1.5">
                  Serving Size:
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedServingSize('standard')}
                    className={`px-3 py-1.5 text-xs rounded-[2px] border transition-colors ${
                      selectedServingSize === 'standard'
                        ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                        : 'bg-white text-[#66645F] border-[#E5E0D6]'
                    }`}
                  >
                    Standard ({selectedProduct.size})
                  </button>
                  <button
                    onClick={() => setSelectedServingSize('bulk')}
                    className={`px-3 py-1.5 text-xs rounded-[2px] border transition-colors ${
                      selectedServingSize === 'bulk'
                        ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                        : 'bg-white text-[#66645F] border-[#E5E0D6]'
                    }`}
                  >
                    Bulk Size (2x)
                  </button>
                </div>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                  addedSuccess
                    ? 'bg-[#73765A] text-[#F2EFE8]'
                    : 'bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8]'
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
