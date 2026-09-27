import React, { useState } from 'react';
import { MessageCircle, ExternalLink, Copy, Check, Send } from 'lucide-react';
import { sampleNoireFragrances } from '../data/portfolioData';

export const NoireWhatsAppSystem: React.FC = () => {
  const [customerName, setCustomerName] = useState('Ahmed Mansour');
  const [customerPhone, setCustomerPhone] = useState('01012345678');
  const [customerAddress, setCustomerAddress] = useState('Street 90 North, Villa 14, New Cairo');
  const [customerNotes, setCustomerNotes] = useState('Please deliver after 4 PM');
  const [selectedPerfumeId, setSelectedPerfumeId] = useState(sampleNoireFragrances[0].id);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const currentFragrance =
    sampleNoireFragrances.find(f => f.id === selectedPerfumeId) || sampleNoireFragrances[0];
  const totalPrice = currentFragrance.price * quantity;

  // Real formatted WhatsApp message
  const formattedMessage = `✨ *NEW ORDER — NOIRÉ PARFUMS* ✨
-----------------------------
*Items Ordered:*
• 1x ${currentFragrance.name} (${currentFragrance.size})
   Qty: ${quantity} • ${totalPrice.toLocaleString()} EGP

*Customer Delivery Information:*
👤 Name: ${customerName || '[Name]'}
📞 Phone: ${customerPhone || '[Phone]'}
📍 Address: ${customerAddress || '[Address]'}
📝 Notes: ${customerNotes || 'None'}

*Total:* ${totalPrice.toLocaleString()} EGP
-----------------------------
Please confirm availability and dispatch schedule. Thank you!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestWhatsApp = () => {
    const encoded = encodeURIComponent(formattedMessage);
    const url = `https://wa.me/201555380043?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="whatsapp-ordering"
      className="py-20 sm:py-28 bg-[#0E0F13] text-[#F4F4F6] border-b border-[#1E2028]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Real Differentiator */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3 text-xs font-mono-tech uppercase tracking-widest text-[#9FA4B2]">
            <span className="text-[#FF4D15] font-bold">REAL DIFFERENTIATOR</span>
            <span>•</span>
            <span>WHATSAPP COMMERCE ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
            Direct WhatsApp Ordering
          </h2>

          <p className="text-base sm:text-lg text-[#9FA4B2] font-normal leading-relaxed">
            Sell directly to your customers with zero payment gateways, zero transaction fees, and zero third-party commissions. Customer selections and delivery addresses compile instantly into structured WhatsApp orders.
          </p>
        </div>

        {/* Section Steps Flow */}
        <div className="mb-12">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#646876] block mb-4">
            How The Engine Works:
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-[#22242D]">
            <div className="p-4 bg-[#121318] border border-[#22242D] rounded-[6px]">
              <span className="font-mono-tech text-xs font-bold text-[#FF4D15] block mb-1">01</span>
              <span className="font-heading text-sm font-bold text-white block">BROWSE</span>
              <span className="text-xs text-[#9FA4B2] mt-1 block">Customer explores your custom catalog</span>
            </div>

            <div className="p-4 bg-[#121318] border border-[#22242D] rounded-[6px]">
              <span className="font-mono-tech text-xs font-bold text-[#FF4D15] block mb-1">02</span>
              <span className="font-heading text-sm font-bold text-white block">ADD TO CART</span>
              <span className="text-xs text-[#9FA4B2] mt-1 block">Selects variants, sizes, and quantities</span>
            </div>

            <div className="p-4 bg-[#121318] border border-[#22242D] rounded-[6px]">
              <span className="font-mono-tech text-xs font-bold text-[#FF4D15] block mb-1">03</span>
              <span className="font-heading text-sm font-bold text-white block">ENTER DETAILS</span>
              <span className="text-xs text-[#9FA4B2] mt-1 block">Name, phone, delivery address & notes</span>
            </div>

            <div className="p-4 bg-[#1B1D25] text-white border border-[#FF4D15]/50 rounded-[6px]">
              <span className="font-mono-tech text-xs font-bold text-[#FF4D15] block mb-1">04</span>
              <span className="font-heading text-sm font-bold text-white block">ORDER ON WHATSAPP</span>
              <span className="text-xs text-[#9FA4B2] mt-1 block">1-tap direct dispatch into your chat</span>
            </div>
          </div>
        </div>

        {/* Practical Simulator: Left form, Right structured WhatsApp message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Customer Input Panel */}
          <div className="lg:col-span-6 bg-[#121318] p-6 sm:p-8 rounded-[8px] border border-[#22242D] space-y-4 shadow-xl">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#646876] block pb-2 border-b border-[#22242D]">
              Customer Checkout Fields:
            </span>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-1 font-mono-tech">
                Select Item
              </label>
              <select
                value={selectedPerfumeId}
                onChange={e => setSelectedPerfumeId(e.target.value)}
                className="w-full p-2.5 bg-[#0E0F13] border border-[#22242D] rounded-[5px] text-xs font-medium text-white focus:outline-none focus:border-[#FF4D15]"
              >
                {sampleNoireFragrances.map(f => (
                  <option key={f.id} value={f.id}>
                    {f.name} ({f.size}) — {f.price.toLocaleString()} EGP
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white block mb-1 font-mono-tech">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full p-2.5 bg-[#0E0F13] border border-[#22242D] rounded-[5px] text-xs text-white focus:outline-none focus:border-[#FF4D15]"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white block mb-1 font-mono-tech">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  className="w-full p-2.5 bg-[#0E0F13] border border-[#22242D] rounded-[5px] text-xs text-white focus:outline-none focus:border-[#FF4D15]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-1 font-mono-tech">
                Delivery Address
              </label>
              <input
                type="text"
                value={customerAddress}
                onChange={e => setCustomerAddress(e.target.value)}
                className="w-full p-2.5 bg-[#0E0F13] border border-[#22242D] rounded-[5px] text-xs text-white focus:outline-none focus:border-[#FF4D15]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white block mb-1 font-mono-tech">
                Optional Notes
              </label>
              <input
                type="text"
                value={customerNotes}
                onChange={e => setCustomerNotes(e.target.value)}
                placeholder="Gate code, delivery time, etc."
                className="w-full p-2.5 bg-[#0E0F13] border border-[#22242D] rounded-[5px] text-xs text-white focus:outline-none focus:border-[#FF4D15]"
              />
            </div>

            <div className="pt-2 text-xs font-mono-tech text-[#646876]">
              Intelligent device routing: opens WhatsApp Web on desktop, native app on mobile.
            </div>
          </div>

          {/* Generated Structured Message Preview */}
          <div className="lg:col-span-6 bg-[#08090B] text-[#F4F4F6] p-6 sm:p-8 rounded-[8px] border border-[#22242D] flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2028] mb-4">
                <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF4D15] font-bold">
                  STRUCTURED MESSAGE OUTPUT
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 text-xs font-mono-tech text-[#9FA4B2] hover:text-[#FF4D15] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="font-mono-tech text-xs text-[#E1E4EB] leading-relaxed whitespace-pre-wrap bg-[#101116] p-4 rounded-[6px] border border-[#1E2028] max-h-72 overflow-y-auto">
                {formattedMessage}
              </pre>
            </div>

            <div className="pt-5 mt-5 border-t border-[#1E2028] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleTestWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[5px] bg-[#FF4D15] hover:bg-[#E63E07] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#FF4D15]/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Test Send via WhatsApp</span>
              </button>

              <a
                href="https://noire-store-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-tech text-[#9FA4B2] hover:text-white inline-flex items-center gap-1"
              >
                <span>Live in NOIRÉ Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Footer: Why It Matters */}
        <div className="pt-8 border-t border-[#22242D]">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-[#646876] block mb-4">
            Why It Matters:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-l-2 border-[#FF4D15] bg-[#121318]/50 rounded-r-[6px] pl-4">
              <span className="font-heading text-sm font-bold text-white block mb-1">
                0% Gateway Fees
              </span>
              <p className="text-xs text-[#9FA4B2] leading-relaxed font-sans-ui">
                Keep 100% of your revenue. No credit card gateway commissions, monthly transaction minimums, or payout delays.
              </p>
            </div>

            <div className="p-4 border-l-2 border-[#3B82F6] bg-[#121318]/50 rounded-r-[6px] pl-4">
              <span className="font-heading text-sm font-bold text-white block mb-1">
                Direct Customer Dialogue
              </span>
              <p className="text-xs text-[#9FA4B2] leading-relaxed font-sans-ui">
                Every order opens an immediate WhatsApp conversation with your customer for instant confirmation, upselling, and relationship building.
              </p>
            </div>

            <div className="p-4 border-l-2 border-emerald-500 bg-[#121318]/50 rounded-r-[6px] pl-4">
              <span className="font-heading text-sm font-bold text-white block mb-1">
                Higher Mobile Conversion
              </span>
              <p className="text-xs text-[#9FA4B2] leading-relaxed font-sans-ui">
                Customers dislike filling 16-step checkout forms. Sending an order on WhatsApp feels effortless, familiar, and personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
