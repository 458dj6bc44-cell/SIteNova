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
import { motion, AnimatePresence } from 'motion/react';
import { gstoreProject } from '../data/portfolioData';

export const ProjectGStore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'variants' | 'cart'>('catalog');
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('M');
  const [selectedColor, setSelectedColor] = useState<'black' | 'blue' | 'olive'>('black');
  const [cartCount, setCartCount] = useState(2);
  const [sampleAdded, setSampleAdded] = useState(false);

  const handleAddToCart = () => {
    setSampleAdded(true);
    setCartCount(prev => prev + 1);
    setTimeout(() => setSampleAdded(false), 2000);
  };

  return (
    <section id="gstore" className="py-24 sm:py-32 border-b border-[#E5E0D6] bg-[#E5E0D6]/40 text-[#171717] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#D5CFC3]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#66645F]">
              <span className="text-[#C6532E] font-bold">PROJECT 03 / 04</span>
              <span>•</span>
              <span className="text-[#171717] font-semibold">{gstoreProject.category}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
              GStore Sportswear
            </h2>
            <p className="text-lg text-[#66645F] font-normal leading-relaxed">
              {gstoreProject.description}
            </p>
          </div>

          {/* Primary View Live Website CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              id="gstore-view-live-btn"
              href={gstoreProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[8px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm group"
            >
              <span>VIEW LIVE PROJECT</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Two-Column Showcase: Left Features & Specs, Right Interactive UI Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Highlighted Features Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-[8px] bg-[#F2EFE8] border border-[#D5CFC3]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C6532E]" />
                <span>Performance Storefront Features</span>
              </h3>

              <div className="space-y-2.5">
                {gstoreProject.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-[6px] bg-white border border-[#E5E0D6] text-xs text-[#171717] font-medium leading-snug"
                  >
                    <div className="mt-0.5 text-[#C6532E] flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            <div className="p-6 rounded-[8px] bg-[#F2EFE8] border border-[#D5CFC3] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#66645F] block">
                    Hosting & Architecture
                  </span>
                  <span className="text-sm font-bold text-[#171717]">
                    100% Static React • Vercel Global Edge
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#C6532E]/15 text-[#C6532E] font-mono font-bold">
                  &lt; 0.9s FCP
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['React 19', 'TypeScript', 'Tailwind', 'Zero Backend Overhead'].map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-[4px] bg-white text-[#66645F] border border-[#D5CFC3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive UI Showcase Mockup Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] bg-white border border-[#D5CFC3] shadow-lg overflow-hidden flex flex-col">
              {/* Browser Mockup Top Bar */}
              <div className="px-5 py-3.5 bg-[#E5E0D6] border-b border-[#D5CFC3] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66645F]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66645F]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66645F]/40" />
                  <span className="ml-2 text-xs font-mono text-[#66645F] hidden sm:inline">
                    gstore-static.vercel.app • Performance Sportswear
                  </span>
                </div>

                {/* View switcher tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('catalog')}
                    className={`px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === 'catalog'
                        ? 'bg-[#171717] text-[#F2EFE8]'
                        : 'text-[#66645F] hover:text-[#171717]'
                    }`}
                  >
                    Catalog
                  </button>
                  <button
                    onClick={() => setActiveTab('variants')}
                    className={`px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === 'variants'
                        ? 'bg-[#171717] text-[#F2EFE8]'
                        : 'text-[#66645F] hover:text-[#171717]'
                    }`}
                  >
                    Variant Picker
                  </button>
                  <button
                    onClick={() => setActiveTab('cart')}
                    className={`px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === 'cart'
                        ? 'bg-[#171717] text-[#F2EFE8]'
                        : 'text-[#66645F] hover:text-[#171717]'
                    }`}
                  >
                    Cart ({cartCount})
                  </button>
                </div>
              </div>

              {/* Mockup Canvas Screen */}
              <div className="p-5 sm:p-6 min-h-[400px] flex flex-col justify-between bg-[#FAFAF8]">
                {activeTab === 'catalog' && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5E0D6]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#171717] uppercase tracking-wider">
                        <Shirt className="w-4 h-4 text-[#C6532E]" />
                        <span>Sportswear Catalog</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] px-2.5 py-1 rounded-[4px] bg-[#171717] text-[#F2EFE8] font-bold">
                          Men
                        </span>
                        <span className="text-[11px] px-2.5 py-1 rounded-[4px] bg-[#E5E0D6] text-[#66645F] font-medium">
                          Women
                        </span>
                        <span className="text-[11px] px-2.5 py-1 rounded-[4px] bg-[#E5E0D6] text-[#66645F] font-medium">
                          Footwear
                        </span>
                      </div>
                    </div>

                    {/* Product Grid Mockup */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div
                        onClick={() => setActiveTab('variants')}
                        className="rounded-[6px] bg-white border border-[#E5E0D6] hover:border-[#171717] p-3 cursor-pointer transition-all"
                      >
                        <div className="aspect-square rounded-[4px] bg-[#F2EFE8] p-3 flex flex-col items-center justify-center relative">
                          <span className="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#C6532E] text-white">
                            NEW
                          </span>
                          <Shirt className="w-10 h-10 text-[#171717]" />
                        </div>
                        <div className="mt-2.5">
                          <span className="text-[9px] text-[#66645F] uppercase tracking-wider font-mono">AeroTech</span>
                          <h4 className="text-xs font-bold text-[#171717] truncate">Pro Training Tee</h4>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#C6532E] font-mono">850 EGP</span>
                            <span className="text-[10px] text-[#66645F]">Sizes S–XL</span>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => setActiveTab('variants')}
                        className="rounded-[6px] bg-white border border-[#E5E0D6] hover:border-[#171717] p-3 cursor-pointer transition-all"
                      >
                        <div className="aspect-square rounded-[4px] bg-[#F2EFE8] p-3 flex flex-col items-center justify-center relative">
                          <span className="font-serif-display text-xl font-bold text-[#73765A]">RUN-X</span>
                        </div>
                        <div className="mt-2.5">
                          <span className="text-[9px] text-[#66645F] uppercase tracking-wider font-mono">Footwear</span>
                          <h4 className="text-xs font-bold text-[#171717] truncate">Velocity Runner V2</h4>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#171717] font-mono">2,450 EGP</span>
                            <span className="text-[10px] text-[#73765A] font-medium">In Stock</span>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => setActiveTab('variants')}
                        className="rounded-[6px] bg-white border border-[#E5E0D6] hover:border-[#171717] p-3 cursor-pointer transition-all"
                      >
                        <div className="aspect-square rounded-[4px] bg-[#F2EFE8] p-3 flex flex-col items-center justify-center relative">
                          <span className="font-serif-display text-xl font-bold text-[#C6532E]">HYDRO</span>
                        </div>
                        <div className="mt-2.5">
                          <span className="text-[9px] text-[#66645F] uppercase tracking-wider font-mono">Outerwear</span>
                          <h4 className="text-xs font-bold text-[#171717] truncate">StormShield Jacket</h4>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#171717] font-mono">1,650 EGP</span>
                            <span className="text-[10px] text-[#66645F]">Waterproof</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-[6px] bg-[#E5E0D6]/60 border border-[#D5CFC3] flex items-center justify-between text-xs text-[#171717]">
                      <span>Instant client-side catalog filtering with zero network lag</span>
                      <button
                        onClick={() => setActiveTab('variants')}
                        className="font-bold text-[#C6532E] hover:underline"
                      >
                        Try variant picker →
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'variants' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-5 items-center p-4 rounded-[6px] bg-[#F2EFE8] border border-[#D5CFC3]">
                      <div className="w-28 h-28 rounded-[6px] bg-white flex items-center justify-center border border-[#D5CFC3] relative">
                        <Shirt className={`w-14 h-14 transition-colors ${
                          selectedColor === 'black'
                            ? 'text-[#171717]'
                            : selectedColor === 'blue'
                            ? 'text-[#2563EB]'
                            : 'text-[#73765A]'
                        }`} />
                        <span className="absolute bottom-1.5 text-[9px] font-mono text-[#66645F] uppercase">
                          {selectedColor} / {selectedSize}
                        </span>
                      </div>

                      <div className="flex-1 w-full space-y-3">
                        <div>
                          <span className="text-xs text-[#66645F] uppercase tracking-wider font-bold block mb-1">
                            Colorway:
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedColor('black')}
                              className={`px-3 py-1 rounded-[4px] text-xs font-medium border transition-all ${
                                selectedColor === 'black'
                                  ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                                  : 'bg-white text-[#171717] border-[#D5CFC3]'
                              }`}
                            >
                              Obsidian
                            </button>
                            <button
                              onClick={() => setSelectedColor('blue')}
                              className={`px-3 py-1 rounded-[4px] text-xs font-medium border transition-all ${
                                selectedColor === 'blue'
                                  ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                                  : 'bg-white text-[#171717] border-[#D5CFC3]'
                              }`}
                            >
                              Electric Blue
                            </button>
                            <button
                              onClick={() => setSelectedColor('olive')}
                              className={`px-3 py-1 rounded-[4px] text-xs font-medium border transition-all ${
                                selectedColor === 'olive'
                                  ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                                  : 'bg-white text-[#171717] border-[#D5CFC3]'
                              }`}
                            >
                              Dusty Olive
                            </button>
                          </div>
                        </div>

                        <div>
                          <span className="text-xs text-[#66645F] uppercase tracking-wider font-bold block mb-1">
                            Size:
                          </span>
                          <div className="flex items-center gap-2">
                            {(['S', 'M', 'L', 'XL'] as const).map(size => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-8 h-8 rounded-[4px] text-xs font-bold border transition-all ${
                                  selectedSize === size
                                    ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                                    : 'bg-white text-[#171717] border-[#D5CFC3]'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-base font-bold text-[#171717] font-mono">850 EGP</span>
                          <button
                            onClick={handleAddToCart}
                            className="px-4 py-2 rounded-[6px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>{sampleAdded ? 'Added to Cart!' : 'Add to Cart'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'cart' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-[6px] bg-[#F2EFE8] border border-[#D5CFC3] flex items-center justify-between">
                      <div>
                        <h5 className="text-xs font-bold text-[#171717]">Pro Training Tee</h5>
                        <span className="text-[11px] text-[#66645F]">Size: {selectedSize} • Color: {selectedColor}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-[#171717] font-mono">850 EGP</span>
                        <span className="text-[10px] text-[#66645F] block">Qty: 1</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-[6px] bg-[#F2EFE8] border border-[#D5CFC3] flex items-center justify-between">
                      <div>
                        <h5 className="text-xs font-bold text-[#171717]">Velocity Runner V2</h5>
                        <span className="text-[11px] text-[#66645F]">Size: US 10.5 • Phantom Black</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-[#171717] font-mono">2,450 EGP</span>
                        <span className="text-[10px] text-[#66645F] block">Qty: 1</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-[6px] bg-[#E5E0D6]/60 border border-[#D5CFC3] space-y-1.5 text-xs">
                      <div className="flex justify-between text-[#66645F]">
                        <span>Subtotal:</span>
                        <span className="text-[#171717] font-medium font-mono">3,300 EGP</span>
                      </div>
                      <div className="flex justify-between text-[#66645F]">
                        <span>Shipping:</span>
                        <span className="text-[#73765A] font-medium">Free Across Egypt</span>
                      </div>
                      <div className="pt-2 border-t border-[#D5CFC3] flex justify-between font-bold text-[#171717]">
                        <span>Total:</span>
                        <span className="text-[#C6532E] font-bold font-mono">3,300 EGP</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom link to actual live deployment */}
                <div className="pt-4 border-t border-[#E5E0D6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#66645F]">
                  <span>Experience the sportswear catalog on the live site:</span>
                  <a
                    href={gstoreProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#171717] hover:text-[#C6532E] font-bold transition-colors"
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
