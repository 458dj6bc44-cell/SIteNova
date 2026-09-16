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
  Layers,
  Database
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

  const sampleOrderTotal = 3200; // 1850 + 1350

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
    <section id="vital0" className="py-24 border-t border-slate-800/80 relative overflow-hidden bg-gradient-to-b from-[#06080B] via-[#070B0E] to-[#06080B]">
      {/* Background neon emerald glow */}
      <div className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4 shadow-sm shadow-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Featured Project • Case Study 01 • Precision Supplements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
              VITALØ <span className="text-emerald-400 font-sans tracking-normal font-semibold">— Precision Performance Supplements</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              VITALØ is a premium supplement e-commerce experience engineered around performance, visual storytelling, and frictionless WhatsApp ordering.
            </p>
            <p className="text-xs sm:text-sm text-emerald-400/90 mt-2 font-mono">
              Mobile-first e-commerce • Product discovery • Cart system • WhatsApp ordering • Premium interactions
            </p>
          </div>

          {/* Primary View Live Website CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <motion.a
              id="vital0-view-live-btn"
              href={vitaloProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-colors group"
            >
              <span>VIEW LIVE PROJECT</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            <span className="text-xs text-slate-400 block">
              Live Website: <span className="text-slate-200 font-mono font-medium">vital0.vercel.app</span>
            </span>
          </div>
        </motion.div>

        {/* Two-Column Showcase: Left Features & Tech Specs, Right Interactive UI Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Highlighted Capabilities (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white font-heading mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Advanced E-Commerce Capabilities</span>
              </h3>

              <div className="space-y-2.5">
                {vitaloProject.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="mt-0.5 p-1 rounded bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Static & Serverless Architecture</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Zero Database
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Demonstrates SiteNova's ability to build ultra-fast, custom e-commerce experiences with persistent localStorage carts and direct WhatsApp order dispatch without costly backend maintenance.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {vitaloProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 hover:border-emerald-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Stat Summary */}
            <div className="grid grid-cols-3 gap-3">
              <motion.div whileHover={{ y: -3 }} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-center transition-colors hover:border-emerald-500/30">
                <div className="text-xl font-bold text-emerald-400 font-heading">0%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Gateway Fees</div>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-center transition-colors hover:border-slate-700">
                <div className="text-xl font-bold text-white font-heading">Local</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Cart Storage</div>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-center transition-colors hover:border-teal-500/30">
                <div className="text-xl font-bold text-teal-400 font-heading">1-Click</div>
                <div className="text-[11px] text-slate-400 mt-0.5">WhatsApp Order</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Interactive VITALØ App Simulation & Preview (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 shadow-2xl overflow-hidden flex flex-col transition-colors duration-300">
              {/* Device / Browser Top Bar */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2 truncate">
                    vital0.vercel.app • Precision Performance Supplements
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Interactive Simulator
                  </span>
                  <a
                    href={vitaloProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Showcase Navigation Tabs */}
              <div className="p-3 bg-slate-900/50 border-b border-slate-800/80 flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab('catalog')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 active:scale-95 ${
                    activeTab === 'catalog'
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Catalog & Products</span>
                </button>
                <button
                  onClick={() => setActiveTab('variants')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 active:scale-95 ${
                    activeTab === 'variants'
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Variant Selectors</span>
                </button>
                <button
                  onClick={() => setActiveTab('cart')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 active:scale-95 ${
                    activeTab === 'cart'
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Cart ({cartItemsCount})</span>
                </button>
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 active:scale-95 ${
                    activeTab === 'whatsapp'
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
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
                        <span className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                          Precision Catalog
                        </span>
                        <h4 className="text-sm font-bold text-white">Select a Supplement to Inspect</h4>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">4 Formulas Loaded</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sampleVitaloProducts.map(product => (
                        <div
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            selectedProduct.id === product.id
                              ? 'bg-emerald-500/10 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                              : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-medium">
                              {product.category}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">{product.rating} ★</span>
                          </div>
                          <h5 className="text-xs font-bold text-white truncate">{product.name}</h5>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{product.tagline}</p>
                          <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-400">{product.price.toLocaleString()} EGP</span>
                            <span className="text-[10px] text-slate-400 font-mono">{product.size}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                      <div className="text-xs text-slate-300">
                        Selected: <span className="text-white font-bold">{selectedProduct.name}</span>
                      </div>
                      <button
                        onClick={() => setActiveTab('variants')}
                        className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                      >
                        <span>Configure Variants</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 2: FLAVOR & SERVING VARIANTS */}
                {activeTab === 'variants' && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                          Custom Formulation Options
                        </span>
                        <h4 className="text-base font-bold text-white">{selectedProduct.name}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{selectedProduct.tagline}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-extrabold text-emerald-400 font-mono">
                          {currentPrice.toLocaleString()} EGP
                        </span>
                        <span className="text-[10px] text-slate-400 block">Taxes included</span>
                      </div>
                    </div>

                    {/* Flavor Variant Selector */}
                    <div>
                      <span className="text-xs text-slate-300 font-semibold block mb-2">
                        Select Flavor: <span className="text-emerald-400 font-normal">{selectedFlavor}</span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.flavors.map(flavor => (
                          <button
                            key={flavor}
                            onClick={() => setSelectedFlavor(flavor)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                              selectedFlavor === flavor
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-semibold shadow-sm'
                                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                            }`}
                          >
                            {flavor}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Serving Size Variant Selector */}
                    <div>
                      <span className="text-xs text-slate-300 font-semibold block mb-2">
                        Serving Package Size:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedServingSize('standard')}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            selectedServingSize === 'standard'
                              ? 'bg-emerald-500/15 border-emerald-500 text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          <div className="text-xs font-bold">Standard Size</div>
                          <div className="text-[11px] text-slate-400">{selectedProduct.size}</div>
                          <div className="text-xs font-bold text-emerald-400 mt-1">
                            {selectedProduct.price.toLocaleString()} EGP
                          </div>
                        </button>

                        <button
                          onClick={() => setSelectedServingSize('bulk')}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            selectedServingSize === 'bulk'
                              ? 'bg-emerald-500/15 border-emerald-500 text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          <div className="text-xs font-bold flex items-center justify-between">
                            <span>Bulk Pro Athlete</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                              Save 15%
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400">Double Volume</div>
                          <div className="text-xs font-bold text-emerald-400 mt-1">
                            {Math.round(selectedProduct.price * 1.8).toLocaleString()} EGP
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Add to Cart CTA */}
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={handleAddToCart}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                      >
                        {addedSuccess ? (
                          <>
                            <Check className="w-4 h-4 text-slate-950" />
                            <span>Added to LocalStorage Cart!</span>
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
                        className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold"
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
                        <span className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                          Client-Side State Engine
                        </span>
                        <h4 className="text-sm font-bold text-white">Browser LocalStorage Shopping Cart</h4>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        Saved in Browser
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">ISO-Whey Native Isolate</div>
                            <div className="text-[10px] text-slate-400">Double Rich Chocolate • 1.0 kg</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-white">1,850 EGP</div>
                          <div className="text-[10px] text-slate-400 font-mono">Qty: 1</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                            <Flame className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">SURGE Pre-Workout Elite</div>
                            <div className="text-[10px] text-slate-400">Arctic Blue Raspberry • 420g</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-white">1,350 EGP</div>
                          <div className="text-[10px] text-slate-400 font-mono">Qty: 1</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Cart Subtotal:</span>
                        <span className="text-white font-medium">3,200 EGP</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Shipping to Egypt:</span>
                        <span className="text-emerald-400 font-medium">Free Express Delivery</span>
                      </div>
                      <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-white">
                        <span>Order Total:</span>
                        <span className="text-emerald-400 font-bold font-mono">3,200 EGP</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab('whatsapp')}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
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
                        <span className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                          Zero-Friction Checkout
                        </span>
                        <h4 className="text-sm font-bold text-white">Generated Structured WhatsApp Order</h4>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">0% Merchant Fees</span>
                    </div>

                    {/* Customer Inputs Preview */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Name</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={e => setCustomerName(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-0.5">Phone</label>
                        <input
                          type="text"
                          value={customerPhone}
                          onChange={e => setCustomerPhone(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    {/* Formatted Order String */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-[11px] text-slate-300 max-h-36 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                      {generatedWhatsAppOrder}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={vitaloProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Try Live on vital0.vercel.app</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Bottom Bar inside the preview card */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>A complete frontend e-commerce experience turning discovery into direct orders.</span>
                  </div>
                  <a
                    href={vitaloProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors flex-shrink-0"
                  >
                    <span>Open Live Store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
