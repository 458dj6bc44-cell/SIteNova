import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Smartphone,
  Layers,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Shirt,
  Sparkles,
  Zap,
  Tag,
  ArrowRight
} from 'lucide-react';
import { gstoreProject } from '../data/portfolioData';

export const ProjectGStore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'variants' | 'cart' | 'mobile'>('catalog');
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('M');
  const [selectedColor, setSelectedColor] = useState<'black' | 'blue' | 'volt'>('black');
  const [cartCount, setCartCount] = useState(2);
  const [sampleAdded, setSampleAdded] = useState(false);

  const handleAddToCart = () => {
    setSampleAdded(true);
    setCartCount(prev => prev + 1);
    setTimeout(() => setSampleAdded(false), 2000);
  };

  return (
    <section id="gstore" className="py-24 border-t border-slate-800/80 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Case Study 01 • Sportswear E-Commerce
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              GStore <span className="text-blue-400">Sportswear</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A high-octane sportswear e-commerce storefront engineered with instant responsive filtering,
              interactive variant selectors, live shopping cart, and a modern athletic UI.
            </p>
          </div>

          {/* Primary View Live Website CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              id="gstore-view-live-btn"
              href={gstoreProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-400 block sm:inline">
              Deployed on Vercel: <span className="text-slate-300 font-mono">gstore-static.vercel.app</span>
            </span>
          </div>
        </div>

        {/* Two-Column Showcase: Left Features & Specs, Right Interactive UI Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Highlighted Features Grid (6 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white font-heading mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Highlighted E-Commerce Features</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {gstoreProject.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="mt-0.5 p-1 rounded bg-blue-500/10 text-blue-400 flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Hosting & Architecture</span>
                <span className="text-sm font-semibold text-white">100% Static React • Vercel Edge CDN</span>
              </div>
              <div className="flex gap-2">
                {['React 19', 'Vite', 'Tailwind', 'Zero Backend'].map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive UI Showcase Mockup Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl shadow-black/60">
              {/* Browser Mockup Top Bar */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    gstore-static.vercel.app
                  </span>
                </div>

                {/* View switcher tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveTab('catalog')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      activeTab === 'catalog'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Catalog & Filter
                  </button>
                  <button
                    onClick={() => setActiveTab('variants')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      activeTab === 'variants'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Variant Picker
                  </button>
                  <button
                    onClick={() => setActiveTab('cart')}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      activeTab === 'cart'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cart ({cartCount})
                  </button>
                </div>
              </div>

              {/* Mockup Canvas Screen */}
              <div className="p-5 sm:p-6 bg-[#0B0F17] min-h-[440px] flex flex-col justify-between">
                {activeTab === 'catalog' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    {/* Top filter bar simulation */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <Shirt className="w-4 h-4 text-blue-400" />
                        <span>Sportswear Catalog</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium border border-blue-500/30">
                          Men
                        </span>
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-medium">
                          Women
                        </span>
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-medium">
                          Footwear
                        </span>
                      </div>
                    </div>

                    {/* Product Grid Mockup */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {/* Product 1 */}
                      <div className="group rounded-xl bg-slate-900/90 border border-slate-800 p-3 hover:border-blue-500/50 transition-all">
                        <div className="aspect-square rounded-lg bg-gradient-to-tr from-slate-950 to-blue-950/40 p-3 flex flex-col items-center justify-center relative overflow-hidden">
                          <div className="absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500 text-slate-950">
                            NEW
                          </div>
                          <div className="w-16 h-16 rounded-full bg-blue-500/20 blur-xl absolute" />
                          <Shirt className="w-10 h-10 text-blue-400 relative z-10 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="mt-2.5">
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">AeroTech Dry</span>
                          <h4 className="text-xs font-bold text-white truncate">Pro Training Tee</h4>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-blue-400">$48.00</span>
                            <span className="text-[10px] text-slate-400">Sizes S–XL</span>
                          </div>
                        </div>
                      </div>

                      {/* Product 2 */}
                      <div className="group rounded-xl bg-slate-900/90 border border-slate-800 p-3 hover:border-blue-500/50 transition-all">
                        <div className="aspect-square rounded-lg bg-gradient-to-tr from-slate-950 to-emerald-950/40 p-3 flex flex-col items-center justify-center relative overflow-hidden">
                          <div className="w-16 h-16 rounded-full bg-emerald-500/20 blur-xl absolute" />
                          <div className="text-emerald-400 font-extrabold text-lg tracking-wider relative z-10 group-hover:scale-110 transition-transform">
                            RUN-X
                          </div>
                        </div>
                        <div className="mt-2.5">
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">Footwear</span>
                          <h4 className="text-xs font-bold text-white truncate">Velocity Runner V2</h4>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-blue-400">$130.00</span>
                            <span className="text-[10px] text-emerald-400">In Stock</span>
                          </div>
                        </div>
                      </div>

                      {/* Product 3 */}
                      <div className="group rounded-xl bg-slate-900/90 border border-slate-800 p-3 hover:border-blue-500/50 transition-all">
                        <div className="aspect-square rounded-lg bg-gradient-to-tr from-slate-950 to-amber-950/40 p-3 flex flex-col items-center justify-center relative overflow-hidden">
                          <div className="w-16 h-16 rounded-full bg-amber-500/20 blur-xl absolute" />
                          <div className="text-amber-400 font-extrabold text-sm tracking-wider relative z-10 group-hover:scale-110 transition-transform">
                            HYDRO
                          </div>
                        </div>
                        <div className="mt-2.5">
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">Outerwear</span>
                          <h4 className="text-xs font-bold text-white truncate">StormShield Windbreaker</h4>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-blue-400">$95.00</span>
                            <span className="text-[10px] text-slate-400">Waterproof</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-xs text-blue-300">
                      <span>✨ Instant client-side search & filtering with zero delay</span>
                      <button
                        onClick={() => setActiveTab('variants')}
                        className="font-semibold underline hover:text-white flex items-center gap-1"
                      >
                        Try variant picker →
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'variants' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex flex-col sm:flex-row gap-5 items-center p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      {/* Product Visual */}
                      <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-slate-950 to-blue-950 flex items-center justify-center flex-shrink-0 border border-slate-800 relative">
                        <Shirt className={`w-16 h-16 transition-all duration-300 ${
                          selectedColor === 'black'
                            ? 'text-slate-200'
                            : selectedColor === 'blue'
                            ? 'text-blue-400'
                            : 'text-lime-400'
                        }`} />
                        <span className="absolute bottom-2 text-[10px] font-mono text-slate-400 uppercase">
                          {selectedColor} / Size {selectedSize}
                        </span>
                      </div>

                      {/* Variant Options Form */}
                      <div className="flex-1 w-full space-y-3">
                        <div>
                          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                            Select Color Variant:
                          </span>
                          <div className="flex items-center gap-2 mt-1.5">
                            <button
                              onClick={() => setSelectedColor('black')}
                              className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                                selectedColor === 'black'
                                  ? 'bg-slate-800 border-white text-white'
                                  : 'bg-slate-900 border-slate-700 text-slate-400'
                              }`}
                            >
                              Obsidian
                            </button>
                            <button
                              onClick={() => setSelectedColor('blue')}
                              className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                                selectedColor === 'blue'
                                  ? 'bg-blue-600/30 border-blue-400 text-blue-300'
                                  : 'bg-slate-900 border-slate-700 text-slate-400'
                              }`}
                            >
                              Electric Blue
                            </button>
                            <button
                              onClick={() => setSelectedColor('volt')}
                              className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                                selectedColor === 'volt'
                                  ? 'bg-lime-500/20 border-lime-400 text-lime-300'
                                  : 'bg-slate-900 border-slate-700 text-slate-400'
                              }`}
                            >
                              Volt Lime
                            </button>
                          </div>
                        </div>

                        <div>
                          <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                            Select Size:
                          </span>
                          <div className="flex items-center gap-2 mt-1.5">
                            {(['S', 'M', 'L', 'XL'] as const).map(size => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-9 h-8 rounded-lg text-xs font-bold border transition-all ${
                                  selectedSize === size
                                    ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-base font-bold text-white">$48.00</span>
                          <button
                            onClick={handleAddToCart}
                            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-blue-500/30 active:scale-95 flex items-center gap-1.5"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>{sampleAdded ? 'Added to Cart!' : 'Add to Cart'}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 text-center">
                      Interactive variant switching handles instant SKU state with smooth CSS animations.
                    </p>
                  </div>
                )}

                {activeTab === 'cart' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 font-bold text-xs">
                          GS
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white">Pro Training Tee</h5>
                          <span className="text-[11px] text-slate-400">Size: {selectedSize} • Color: {selectedColor}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-white">$48.00</span>
                        <span className="text-[10px] text-slate-400 block">Qty: 1</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 font-bold text-xs">
                          VR
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white">Velocity Runner V2</h5>
                          <span className="text-[11px] text-slate-400">Size: US 10.5 • Phantom Black</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-white">$130.00</span>
                        <span className="text-[10px] text-slate-400 block">Qty: 1</span>
                      </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Subtotal:</span>
                        <span className="text-white font-medium">$178.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Shipping:</span>
                        <span className="text-emerald-400 font-medium">Free Worldwide</span>
                      </div>
                      <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white">
                        <span>Total:</span>
                        <span className="text-blue-400">$178.00</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom link to actual live deployment */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <span>Experience the full sportswear catalog on the live site:</span>
                  <a
                    href={gstoreProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span>Open Live GStore Experience</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
