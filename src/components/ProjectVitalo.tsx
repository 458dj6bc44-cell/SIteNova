import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Zap,
  ShoppingCart,
  SlidersHorizontal,
  Smartphone,
  MessageSquare,
  ShieldCheck,
  Flame,
  ArrowRight,
  Send,
  User,
  Phone,
  MapPin,
  FileText,
  Search,
  Check,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { vitaloProject, sampleVitaloProducts } from '../data/portfolioData';

export const ProjectVitalo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'variants' | 'cart' | 'whatsapp'>('catalog');
  const [selectedProduct, setSelectedProduct] = useState(sampleVitaloProducts[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(sampleVitaloProducts[0].flavors[0]);
  const [selectedServingSize, setSelectedServingSize] = useState<'standard' | 'bulk'>('standard');
  const [cartItemsCount, setCartItemsCount] = useState(2);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // WhatsApp checkout form state preview
  const [customerName, setCustomerName] = useState('Omar El-Sherif');
  const [customerPhone, setCustomerPhone] = useState('01123456789');
  const [customerCity, setCustomerCity] = useState('Sheikh Zayed, Giza');
  const [customerAddress, setCustomerAddress] = useState('Beverly Hills Compound, Villa 28');
  const [customerNotes, setCustomerNotes] = useState('Please deliver after 4 PM');

  const handleProductSelect = (product: typeof sampleVitaloProducts[0]) => {
    setSelectedProduct(product);
    setSelectedFlavor(product.flavors[0]);
  };

  const handleAddToCart = () => {
    setAddedSuccess(true);
    setCartItemsCount(prev => prev + 1);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const currentPrice = selectedServingSize === 'bulk' ? Math.round(selectedProduct.price * 1.8) : selectedProduct.price;

  const generatedWhatsAppOrder = `*NEW ORDER — VITALØ Precision Supplements*
----------------------------------------
*Customer Delivery Details:*
👤 *Name:* ${customerName}
📞 *Phone:* ${customerPhone}
🏙️ *City/Area:* ${customerCity}
📍 *Address:* ${customerAddress}
📝 *Notes:* ${customerNotes}

*Order Items:*
• 1x ${selectedProduct.name} (${selectedServingSize === 'bulk' ? 'Bulk 2.0 kg' : selectedProduct.size})
   Flavor: ${selectedFlavor}
   Price: ${currentPrice.toLocaleString()} EGP
• 1x SURGE Pre-Workout Elite (420g / 30 Servings)
   Flavor: Arctic Blue Raspberry
   Price: 1,350 EGP

*Order Summary:*
💰 *Subtotal:* ${(currentPrice + 1350).toLocaleString()} EGP
🚚 *Shipping:* Fast Delivery Across Egypt
💵 *Total Amount:* ${(currentPrice + 1350).toLocaleString()} EGP
----------------------------------------
_Generated seamlessly from vital0.vercel.app_`;

  return (
    <section id="vital0" className="py-24 sm:py-32 border-b border-[#E5E0D6] bg-[#F2EFE8] text-[#171717] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E5E0D6]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#66645F]">
              <span className="text-[#73765A] font-bold">PROJECT 02 / 04</span>
              <span>•</span>
              <span className="text-[#171717] font-semibold">{vitaloProject.category}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
              VITALØ
            </h2>
            <p className="text-lg text-[#66645F] font-normal leading-relaxed">
              {vitaloProject.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs font-mono text-[#73765A]">
              <span>Mobile-First</span>
              <span>•</span>
              <span>Local Cart</span>
              <span>•</span>
              <span>WhatsApp Direct Checkout</span>
              <span>•</span>
              <span>Edge Performance</span>
            </div>
          </div>

          {/* Primary View Live Website CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              id="vital0-view-live-btn"
              href={vitaloProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[8px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm group"
            >
              <span>VIEW LIVE PROJECT</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Two-Column Showcase: Left Features & Specs, Right Interactive UI Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Highlighted Capabilities (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#73765A]" />
                <span>E-Commerce Capabilities</span>
              </h3>

              <div className="space-y-2.5">
                {vitaloProject.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-[6px] bg-[#F2EFE8] border border-[#E5E0D6] text-xs text-[#171717] font-medium leading-snug"
                  >
                    <div className="mt-0.5 text-[#73765A] flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            <div className="p-6 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#171717] font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#73765A]" />
                  <span>100% Static Edge Architecture</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#73765A]/15 text-[#73765A] font-mono font-bold">
                  Zero Database
                </span>
              </div>
              <p className="text-xs text-[#66645F] leading-relaxed">
                Demonstrates SiteNova's ability to build ultra-fast, custom e-commerce experiences with persistent localStorage carts and direct WhatsApp order dispatch without costly backend maintenance.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {vitaloProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-[4px] bg-[#F2EFE8] border border-[#D5CFC3] text-[11px] font-mono text-[#66645F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stat Summary */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3] text-center">
                <div className="font-serif-display text-2xl font-bold text-[#C6532E]">0%</div>
                <div className="text-[11px] font-semibold text-[#66645F] mt-1">Gateway Fees</div>
              </div>
              <div className="p-4 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3] text-center">
                <div className="font-serif-display text-2xl font-bold text-[#171717]">Local</div>
                <div className="text-[11px] font-semibold text-[#66645F] mt-1">Cart Storage</div>
              </div>
              <div className="p-4 rounded-[8px] bg-[#E5E0D6]/60 border border-[#D5CFC3] text-center">
                <div className="font-serif-display text-2xl font-bold text-[#73765A]">1-Click</div>
                <div className="text-[11px] font-semibold text-[#66645F] mt-1">WhatsApp Order</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive VITALØ App Simulation & Preview (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#D5CFC3] shadow-lg overflow-hidden flex flex-col">
              {/* Device / Browser Top Bar */}
              <div className="px-5 py-3.5 bg-[#E5E0D6] border-b border-[#D5CFC3] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66645F]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66645F]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66645F]/40" />
                  <span className="text-xs text-[#66645F] font-mono ml-2 truncate">
                    vital0.vercel.app • Precision Performance Supplements
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#73765A] bg-[#73765A]/10 px-2 py-0.5 rounded-[4px] border border-[#73765A]/20 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#73765A] animate-pulse" />
                    Interactive Simulator
                  </span>
                  <a
                    href={vitaloProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-[#66645F] hover:text-[#171717] transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Showcase Navigation Tabs */}
              <div className="p-3 bg-[#F2EFE8] border-b border-[#E5E0D6] flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab('catalog')}
                  className={`px-3 py-1.5 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'catalog'
                      ? 'bg-[#171717] text-[#F2EFE8]'
                      : 'bg-transparent text-[#66645F] hover:text-[#171717]'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Catalog</span>
                </button>
                <button
                  onClick={() => setActiveTab('variants')}
                  className={`px-3 py-1.5 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'variants'
                      ? 'bg-[#171717] text-[#F2EFE8]'
                      : 'bg-transparent text-[#66645F] hover:text-[#171717]'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Variants</span>
                </button>
                <button
                  onClick={() => setActiveTab('cart')}
                  className={`px-3 py-1.5 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'cart'
                      ? 'bg-[#171717] text-[#F2EFE8]'
                      : 'bg-transparent text-[#66645F] hover:text-[#171717]'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Cart ({cartItemsCount})</span>
                </button>
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`px-3 py-1.5 rounded-[6px] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'whatsapp'
                      ? 'bg-[#C6532E] text-[#F2EFE8]'
                      : 'bg-transparent text-[#66645F] hover:text-[#171717]'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Checkout</span>
                </button>
              </div>

              {/* Main Interactive Preview Body */}
              <div className="p-5 sm:p-6 min-h-[380px] flex flex-col justify-between">
                {/* TAB 1: PRODUCT CATALOG & FILTERING */}
                {activeTab === 'catalog' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-[#73765A] uppercase tracking-wider font-semibold">
                          Interactive Supplement Catalog
                        </span>
                        <h4 className="text-base font-bold text-[#171717]">Clinical Formulas & Pure Actives</h4>
                      </div>
                      <span className="text-xs text-[#66645F] font-mono">4 Products Loaded</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sampleVitaloProducts.map(product => (
                        <div
                          key={product.id}
                          onClick={() => {
                            handleProductSelect(product);
                            setActiveTab('variants');
                          }}
                          className={`p-3.5 rounded-[6px] border text-left cursor-pointer transition-all ${
                            selectedProduct.id === product.id
                              ? 'bg-[#F2EFE8] border-[#171717]'
                              : 'bg-white border-[#E5E0D6] hover:border-[#73765A]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#73765A] font-bold">
                              {product.category}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#E5E0D6] text-[#171717]">
                              {product.badge}
                            </span>
                          </div>
                          <div className="font-bold text-xs text-[#171717]">{product.name}</div>
                          <p className="text-[11px] text-[#66645F] mt-1 line-clamp-1">{product.tagline}</p>
                          <div className="mt-3 pt-2 border-t border-[#E5E0D6] flex items-center justify-between">
                            <span className="text-xs font-bold text-[#171717] font-mono">
                              {product.price.toLocaleString()} EGP
                            </span>
                            <span className="text-[10px] font-bold text-[#C6532E] hover:underline">
                              Select Variants →
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: VARIANT SELECTORS */}
                {activeTab === 'variants' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-[#73765A] uppercase tracking-wider font-semibold">
                          Custom Variant Engine
                        </span>
                        <h4 className="text-base font-bold text-[#171717]">{selectedProduct.name}</h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#171717]">
                        {currentPrice.toLocaleString()} EGP
                      </span>
                    </div>

                    {/* Serving Size Selector */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#66645F] block mb-1.5">
                        Serving Size:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedServingSize('standard')}
                          className={`p-2.5 rounded-[6px] text-xs font-semibold border transition-all ${
                            selectedServingSize === 'standard'
                              ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                              : 'bg-white text-[#171717] border-[#E5E0D6]'
                          }`}
                        >
                          <div>Standard Size</div>
                          <div className="text-[10px] opacity-80">{selectedProduct.size}</div>
                        </button>
                        <button
                          onClick={() => setSelectedServingSize('bulk')}
                          className={`p-2.5 rounded-[6px] text-xs font-semibold border transition-all ${
                            selectedServingSize === 'bulk'
                              ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                              : 'bg-white text-[#171717] border-[#E5E0D6]'
                          }`}
                        >
                          <div>Bulk Value Size</div>
                          <div className="text-[10px] opacity-80">Bulk 2.0 kg (+80%)</div>
                        </button>
                      </div>
                    </div>

                    {/* Flavor Selector */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#66645F] block mb-1.5">
                        Flavor Selection:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.flavors.map(flavor => (
                          <button
                            key={flavor}
                            onClick={() => setSelectedFlavor(flavor)}
                            className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold border transition-all ${
                              selectedFlavor === flavor
                                ? 'bg-[#73765A] text-[#F2EFE8] border-[#73765A]'
                                : 'bg-white text-[#171717] border-[#E5E0D6]'
                            }`}
                          >
                            {flavor}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={handleAddToCart}
                        className="flex-1 py-3 px-4 rounded-[6px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        {addedSuccess ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>Added to Local Cart!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4" />
                            <span>Add to Cart ({currentPrice.toLocaleString()} EGP)</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => setActiveTab('cart')}
                        className="py-3 px-4 rounded-[6px] bg-white hover:bg-[#F2EFE8] text-[#171717] border border-[#D5CFC3] text-xs font-bold uppercase tracking-wider"
                      >
                        View Cart ({cartItemsCount})
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 3: CART & LOCALSTORAGE PERSISTENCE */}
                {activeTab === 'cart' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-[#73765A] uppercase tracking-wider font-semibold">
                          Client-Side State Engine
                        </span>
                        <h4 className="text-base font-bold text-[#171717]">Browser LocalStorage Shopping Cart</h4>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-[4px] bg-[#E5E0D6] text-[#171717] font-mono font-bold">
                        Saved in Browser
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-[6px] bg-[#F2EFE8] border border-[#E5E0D6] flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#171717]">ISO-Whey Native Isolate</div>
                          <div className="text-[10px] text-[#66645F]">Double Rich Chocolate • 1.0 kg</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-[#171717]">1,850 EGP</div>
                          <div className="text-[10px] text-[#66645F] font-mono">Qty: 1</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-[6px] bg-[#F2EFE8] border border-[#E5E0D6] flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-[#171717]">SURGE Pre-Workout Elite</div>
                          <div className="text-[10px] text-[#66645F]">Arctic Blue Raspberry • 420g</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-[#171717]">1,350 EGP</div>
                          <div className="text-[10px] text-[#66645F] font-mono">Qty: 1</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-[6px] bg-[#E5E0D6]/50 border border-[#D5CFC3] space-y-1.5 text-xs">
                      <div className="flex justify-between text-[#66645F]">
                        <span>Cart Subtotal:</span>
                        <span className="text-[#171717] font-medium">3,200 EGP</span>
                      </div>
                      <div className="flex justify-between text-[#66645F]">
                        <span>Shipping to Egypt:</span>
                        <span className="text-[#73765A] font-medium">Free Express Delivery</span>
                      </div>
                      <div className="pt-2 border-t border-[#D5CFC3] flex justify-between font-bold text-[#171717]">
                        <span>Order Total:</span>
                        <span className="text-[#C6532E] font-bold font-mono">3,200 EGP</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab('whatsapp')}
                      className="w-full py-3 px-4 rounded-[6px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Proceed to WhatsApp Checkout Form</span>
                    </button>
                  </div>
                )}

                {/* TAB 4: WHATSAPP ORDER DISPATCH */}
                {activeTab === 'whatsapp' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-[#C6532E] uppercase tracking-wider font-semibold">
                          Zero-Friction Checkout
                        </span>
                        <h4 className="text-base font-bold text-[#171717]">Generated Structured WhatsApp Order</h4>
                      </div>
                      <span className="text-[10px] text-[#73765A] font-mono font-bold">0% Gateway Fees</span>
                    </div>

                    {/* Customer Inputs Preview */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[10px] text-[#66645F] block mb-0.5 font-bold uppercase">Name</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={e => setCustomerName(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-[4px] bg-[#F2EFE8] border border-[#D5CFC3] text-[11px] text-[#171717] focus:outline-none focus:border-[#C6532E]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-[#66645F] block mb-0.5 font-bold uppercase">Phone</label>
                        <input
                          type="text"
                          value={customerPhone}
                          onChange={e => setCustomerPhone(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-[4px] bg-[#F2EFE8] border border-[#D5CFC3] text-[11px] text-[#171717] focus:outline-none focus:border-[#C6532E]"
                        />
                      </div>
                    </div>

                    {/* Formatted Order String */}
                    <div className="p-3 rounded-[6px] bg-[#F2EFE8] border border-[#D5CFC3] font-mono text-[11px] text-[#171717] max-h-36 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                      {generatedWhatsAppOrder}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={vitaloProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-[6px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Try Live on vital0.vercel.app</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Bottom Bar inside the preview card */}
                <div className="mt-5 pt-3 border-t border-[#E5E0D6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="text-[#66645F] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#73765A]" />
                    <span>A complete frontend e-commerce experience turning discovery into direct orders.</span>
                  </div>
                  <a
                    href={vitaloProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#171717] hover:text-[#C6532E] inline-flex items-center gap-1 transition-colors flex-shrink-0"
                  >
                    <span>Open Live Store</span>
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
