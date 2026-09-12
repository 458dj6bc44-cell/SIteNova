import React, { useState } from 'react';
import {
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Send,
  Smartphone,
  Laptop,
  CheckCircle2,
  Sparkles,
  MapPin,
  ShoppingBag,
  FileText,
  DollarSign,
  User,
  Phone,
  Building
} from 'lucide-react';
import { noireWhatsAppSteps, sampleNoireFragrances } from '../data/portfolioData';

export const NoireWhatsAppSystem: React.FC = () => {
  const [customerName, setCustomerName] = useState('Elena Rostova');
  const [customerPhone, setCustomerPhone] = useState('+1 (555) 389-4421');
  const [customerCity, setCustomerCity] = useState('Beverly Hills, CA');
  const [customerAddress, setCustomerAddress] = useState('742 Evergreen Terrace, Apt 4B');
  const [selectedPerfumeId, setSelectedPerfumeId] = useState(sampleNoireFragrances[0].id);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const currentFragrance =
    sampleNoireFragrances.find(f => f.id === selectedPerfumeId) || sampleNoireFragrances[0];
  const totalPrice = currentFragrance.price * quantity;

  // Generate the formatted WhatsApp message exactly like NOIRÉ's system
  const formattedMessage = `✨ *NEW ORDER REQUEST — NOIRÉ PARFUMS* ✨

*Items Ordered:*
• 1x ${currentFragrance.name} (${currentFragrance.size})
   Price: $${currentFragrance.price} USD each (Qty: ${quantity})

*Order Summary:*
💰 *Subtotal:* $${totalPrice}.00 USD
🚚 *Shipping:* Standard Delivery (Calculated)
💵 *Total Amount:* $${totalPrice}.00 USD

*Customer Delivery Information:*
👤 *Full Name:* ${customerName || '[Name]'}
📞 *Phone Number:* ${customerPhone || '[Phone]'}
🏙️ *City:* ${customerCity || '[City]'}
📍 *Delivery Address:* ${customerAddress || '[Address]'}

-----------------------------
*Please confirm availability and dispatch schedule. Thank you!*`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestWhatsApp = () => {
    const encoded = encodeURIComponent(formattedMessage);
    const url = `https://wa.me/?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="whatsapp-ordering" className="py-24 border-t border-slate-800 relative bg-[#080B10] overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <MessageCircle className="w-4 h-4 fill-emerald-400 text-slate-950" />
            <span>Key Innovation: WhatsApp Social-Commerce System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            How NOIRÉ's <span className="text-emerald-400">WhatsApp Ordering System</span> Works
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            The website does <span className="text-white font-semibold underline decoration-emerald-500/50">NOT</span> require a traditional online payment checkout.
            Instead, it converts customer carts and delivery addresses into structured WhatsApp orders with zero friction and zero payment gateway cuts.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              id="noire-whatsapp-live-link"
              href="https://noire-store-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="text-xs text-slate-400 font-mono">
              Live URL: noire-store-five.vercel.app
            </div>
          </div>
        </div>

        {/* 9-Step Visual Journey Breakdown */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              The 9-Step Customer Ordering Flow
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {noireWhatsAppSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl bg-slate-900/60 border border-slate-800/80 p-5 hover:border-emerald-500/40 transition-all group hover:bg-slate-900/90"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center border border-emerald-500/30">
                    0{step.stepNumber}
                  </span>
                  {step.stepNumber === 7 && (
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                      <Smartphone className="w-3 h-3" /> Mobile
                    </span>
                  )}
                  {step.stepNumber === 8 && (
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium">
                      <Laptop className="w-3 h-3" /> Desktop
                    </span>
                  )}
                  {step.stepNumber === 9 && (
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium">
                      <Sparkles className="w-3 h-3" /> Direct Sale
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {step.description}
                </p>

                {step.highlight && (
                  <div className="mt-3 text-[11px] font-mono text-emerald-400/90 bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-500/20">
                    {step.highlight}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Live Simulator: Potential Clients Can Test the Exact NOIRÉ WhatsApp Engine */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Sparkles className="w-4 h-4" /> Live Interactive Demonstration
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Experience the WhatsApp Order Formatter
            </h3>
            <p className="text-slate-300 text-sm mt-1.5">
              Try adjusting the customer delivery information and product below. Watch how NOIRÉ compiles the data into an
              instant, clean WhatsApp message ready for dispatch with one click.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Simulator Inputs (5 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  1. Select Fragrance & Quantity
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  {sampleNoireFragrances.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedPerfumeId(f.id)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        selectedPerfumeId === f.id
                          ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold truncate">{f.name.split(' ')[0]}</div>
                      <div className="text-[11px] text-emerald-400 font-medium">${f.price} • {f.size}</div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400">Order Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-white px-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery Details Form Simulation */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  2. Customer Delivery Details (Required by NOIRÉ)
                </span>

                <div className="space-y-2.5">
                  <div>
                    <label className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                      <User className="w-3 h-3 text-emerald-400" /> Full Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                        <Phone className="w-3 h-3 text-emerald-400" /> Phone Number
                      </label>
                      <input
                        type="text"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                        <Building className="w-3 h-3 text-emerald-400" /> City
                      </label>
                      <input
                        type="text"
                        value={customerCity}
                        onChange={(e) => setCustomerCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3 text-emerald-400" /> Delivery Address
                    </label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Generated WhatsApp Message Preview & Live Bubble (6 cols) */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="rounded-2xl bg-[#0B141A] border border-[#202C33] overflow-hidden shadow-2xl flex-1 flex flex-col">
                {/* WhatsApp Chat Header */}
                <div className="px-4 py-3 bg-[#202C33] flex items-center justify-between border-b border-[#2A3942]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                      N
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#E9EDEF]">NOIRÉ Parfums Concierge</div>
                      <div className="text-[10px] text-emerald-400">Online • WhatsApp Verified</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    Auto-Formatted Message
                  </span>
                </div>

                {/* WhatsApp Chat Area */}
                <div className="p-4 sm:p-5 flex-1 bg-[radial-gradient(#111b21_1px,transparent_1px)] [background-size:16px_16px] bg-[#0c1317] flex flex-col justify-between">
                  {/* Sent Message Bubble */}
                  <div className="self-end max-w-[92%] rounded-2xl rounded-tr-none bg-[#005C4B] text-[#E9EDEF] p-4 text-xs font-sans shadow-md border border-[#005c4b] relative">
                    <pre className="font-sans whitespace-pre-wrap leading-relaxed text-[11px] sm:text-xs text-slate-100">
                      {formattedMessage}
                    </pre>
                    <div className="text-[9px] text-emerald-200/70 text-right mt-2 flex items-center justify-end gap-1">
                      <span>Just now</span>
                      <Check className="w-3 h-3 text-cyan-300" />
                    </div>
                  </div>

                  {/* Actions to Test or Copy */}
                  <div className="mt-6 pt-4 border-t border-[#202C33] space-y-2.5">
                    <div className="flex gap-2">
                      <button
                        onClick={handleTestWhatsApp}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0B141A] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Test Send to WhatsApp</span>
                      </button>

                      <button
                        onClick={copyToClipboard}
                        className="py-2.5 px-3 rounded-xl bg-[#202C33] hover:bg-[#2A3942] text-[#E9EDEF] font-medium text-xs flex items-center justify-center gap-1.5 transition-all border border-[#2A3942]"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-[#8696A0] text-center">
                      On mobile, this opens the native WhatsApp app. On desktop, it opens WhatsApp Web with the message pre-filled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why this solution converts higher for businesses */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center">
            <span className="text-emerald-400 font-bold text-sm block">0% Payment Merchant Fees</span>
            <span className="text-xs text-slate-400 mt-1 block">Save 3–5% on every single order by bypassing payment processing fees.</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center">
            <span className="text-emerald-400 font-bold text-sm block">Instant Direct Relationship</span>
            <span className="text-xs text-slate-400 mt-1 block">Upsell, recommend fragrances, and build repeat loyalty inside WhatsApp.</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center">
            <span className="text-emerald-400 font-bold text-sm block">100% Reliable Static Setup</span>
            <span className="text-xs text-slate-400 mt-1 block">Zero database to break, zero server downtime, and runs forever on Vercel.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
