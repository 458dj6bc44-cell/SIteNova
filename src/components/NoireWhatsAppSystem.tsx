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
  const [customerName, setCustomerName] = useState('Ahmed Mansour');
  const [customerPhone, setCustomerPhone] = useState('01012345678');
  const [customerCity, setCustomerCity] = useState('New Cairo, Cairo');
  const [customerAddress, setCustomerAddress] = useState('Street 90 North, Villa 14, Fifth Settlement');
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
   Price: ${currentFragrance.price.toLocaleString()} EGP each (Qty: ${quantity})

*Order Summary:*
💰 *Subtotal:* ${totalPrice.toLocaleString()} EGP
🚚 *Shipping:* Fast Delivery Across Egypt (Calculated)
💵 *Total Amount:* ${totalPrice.toLocaleString()} EGP

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
    <section id="whatsapp-ordering" className="py-24 sm:py-32 border-b border-[#E5E0D6] bg-[#E5E0D6]/40 text-[#171717] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#66645F]">
            <span className="text-[#C6532E] font-bold">SOCIAL-COMMERCE INNOVATION</span>
            <span>•</span>
            <span>NOIRÉ ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
            The WhatsApp Ordering Engine
          </h2>

          <p className="text-lg text-[#66645F] font-normal leading-relaxed">
            The website does not require traditional credit card forms or payment gateways. Instead, it compiles customer selections and delivery addresses into structured WhatsApp orders with zero transaction fees and immediate customer dialogue.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              id="noire-whatsapp-live-link"
              href="https://noire-store-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#171717] hover:bg-[#C6532E] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm group"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="text-xs font-mono text-[#66645F]">
              Direct store: noire-store-five.vercel.app
            </span>
          </div>
        </div>

        {/* 9-Step Visual Journey Breakdown */}
        <div className="mb-16">
          <div className="mb-6 pb-4 border-b border-[#D5CFC3]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#66645F]">
              9-Step Customer Conversion Flow
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {noireWhatsAppSteps.map(step => (
              <div
                key={step.stepNumber}
                className="rounded-[8px] bg-[#F2EFE8] border border-[#D5CFC3] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-[4px] bg-[#171717] text-[#F2EFE8] font-mono text-xs font-bold flex items-center justify-center">
                      0{step.stepNumber}
                    </span>
                    {step.stepNumber === 7 && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#73765A]/15 text-[#73765A] font-mono font-bold">
                        <Smartphone className="w-3 h-3" /> Mobile
                      </span>
                    )}
                    {step.stepNumber === 8 && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#C6532E]/15 text-[#C6532E] font-mono font-bold">
                        <Laptop className="w-3 h-3" /> Desktop
                      </span>
                    )}
                    {step.stepNumber === 9 && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#171717] text-[#F2EFE8] font-mono font-bold">
                        Direct Close
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#171717]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#66645F] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {step.highlight && (
                  <div className="mt-4 text-[11px] font-mono text-[#73765A] bg-white px-2.5 py-1.5 rounded-[4px] border border-[#E5E0D6]">
                    {step.highlight}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Live Simulator */}
        <div className="rounded-[8px] bg-white border border-[#D5CFC3] p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E] font-bold block mb-2">
              Interactive Simulation
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-display font-normal text-[#171717]">
              Test the WhatsApp Order Formatter
            </h3>
            <p className="text-[#66645F] text-sm mt-2">
              Adjust delivery details and item quantities to see how the engine instantly parses inputs into an error-free WhatsApp message payload.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Simulator Inputs (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 rounded-[6px] bg-[#F2EFE8] border border-[#D5CFC3] space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#171717] block">
                  1. Select Fragrance & Quantity
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {sampleNoireFragrances.map(f => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedPerfumeId(f.id)}
                      className={`p-2.5 rounded-[4px] text-left border text-xs transition-all ${
                        selectedPerfumeId === f.id
                          ? 'bg-[#171717] text-[#F2EFE8] border-[#171717]'
                          : 'bg-white text-[#171717] border-[#D5CFC3] hover:border-[#73765A]'
                      }`}
                    >
                      <div className="font-bold truncate">{f.name.split(' ')[0]}</div>
                      <div className={`text-[11px] font-mono mt-0.5 ${selectedPerfumeId === f.id ? 'text-[#C6532E]' : 'text-[#66645F]'}`}>
                        {f.price.toLocaleString()} EGP • {f.size}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#D5CFC3]">
                  <span className="text-xs font-medium text-[#66645F]">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-[4px] bg-white border border-[#D5CFC3] text-[#171717] flex items-center justify-center font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-[#171717] px-2">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-[4px] bg-white border border-[#D5CFC3] text-[#171717] flex items-center justify-center font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery Details Form Simulation */}
              <div className="p-5 rounded-[6px] bg-[#F2EFE8] border border-[#D5CFC3] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#171717] block">
                  2. Customer Delivery Details
                </span>

                <div className="space-y-2.5">
                  <div>
                    <label className="text-[11px] text-[#66645F] flex items-center gap-1 mb-1 font-bold uppercase">
                      <User className="w-3 h-3 text-[#73765A]" /> Full Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-[4px] bg-white border border-[#D5CFC3] text-xs text-[#171717] focus:outline-none focus:border-[#C6532E]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-[#66645F] flex items-center gap-1 mb-1 font-bold uppercase">
                        <Phone className="w-3 h-3 text-[#73765A]" /> Phone Number
                      </label>
                      <input
                        type="text"
                        value={customerPhone}
                        onChange={e => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-[4px] bg-white border border-[#D5CFC3] text-xs text-[#171717] focus:outline-none focus:border-[#C6532E]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#66645F] flex items-center gap-1 mb-1 font-bold uppercase">
                        <Building className="w-3 h-3 text-[#73765A]" /> City
                      </label>
                      <input
                        type="text"
                        value={customerCity}
                        onChange={e => setCustomerCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-[4px] bg-white border border-[#D5CFC3] text-xs text-[#171717] focus:outline-none focus:border-[#C6532E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-[#66645F] flex items-center gap-1 mb-1 font-bold uppercase">
                      <MapPin className="w-3 h-3 text-[#73765A]" /> Delivery Address
                    </label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={e => setCustomerAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-[4px] bg-white border border-[#D5CFC3] text-xs text-[#171717] focus:outline-none focus:border-[#C6532E]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Generated WhatsApp Message Preview & Live Bubble (6 cols) */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="rounded-[8px] bg-[#171717] border border-[#2A2B29] overflow-hidden shadow-xl flex-1 flex flex-col">
                {/* WhatsApp Chat Header */}
                <div className="px-4 py-3 bg-[#20211F] flex items-center justify-between border-b border-[#30312F]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#73765A] flex items-center justify-center text-white font-bold text-xs">
                      N
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#F2EFE8]">NOIRÉ Parfums Concierge</div>
                      <div className="text-[10px] text-[#E5E0D6]/60">Verified Business Channel</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#73765A]/20 text-[#E5E0D6] font-mono">
                    Formatted Payload
                  </span>
                </div>

                {/* WhatsApp Chat Area */}
                <div className="p-4 sm:p-5 flex-1 bg-[#141514] flex flex-col justify-between">
                  {/* Sent Message Bubble */}
                  <div className="self-end max-w-[95%] rounded-[6px] bg-[#20211F] border border-[#383A37] text-[#F2EFE8] p-4 text-xs font-sans shadow-md">
                    <pre className="font-mono whitespace-pre-wrap leading-relaxed text-[11px] text-[#E5E0D6]">
                      {formattedMessage}
                    </pre>
                  </div>

                  {/* Actions to Test or Copy */}
                  <div className="mt-6 pt-4 border-t border-[#30312F] space-y-2.5">
                    <div className="flex gap-2">
                      <button
                        onClick={handleTestWhatsApp}
                        className="flex-1 py-2.5 px-3 rounded-[6px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Test Send to WhatsApp</span>
                      </button>

                      <button
                        onClick={copyToClipboard}
                        className="py-2.5 px-3 rounded-[6px] bg-[#20211F] hover:bg-[#30312F] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-[#383A37]"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-[#66645F] text-center">
                      Opens native WhatsApp on mobile or WhatsApp Web on desktop with pre-filled message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why this solution converts higher for businesses */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-[8px] bg-[#F2EFE8] border border-[#D5CFC3] text-center">
            <span className="font-serif-display text-2xl font-bold text-[#C6532E] block">0%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171717] mt-1 block">Merchant Gateway Fees</span>
            <span className="text-xs text-[#66645F] mt-1 block">Saves 3–5% on transaction fees per order.</span>
          </div>
          <div className="p-5 rounded-[8px] bg-[#F2EFE8] border border-[#D5CFC3] text-center">
            <span className="font-serif-display text-2xl font-bold text-[#171717] block">1:1</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171717] mt-1 block">Direct Client Chat</span>
            <span className="text-xs text-[#66645F] mt-1 block">Build direct relationships and repeat loyalty.</span>
          </div>
          <div className="p-5 rounded-[8px] bg-[#F2EFE8] border border-[#D5CFC3] text-center">
            <span className="font-serif-display text-2xl font-bold text-[#73765A] block">100%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#171717] mt-1 block">Edge Reliability</span>
            <span className="text-xs text-[#66645F] mt-1 block">Zero database maintenance, 99.99% uptime.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
