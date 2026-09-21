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
      className="py-20 sm:py-28 bg-[#E5E0D6]/30 text-[#171717] border-b border-[#E5E0D6]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Hierarchy: 1. WHAT IT DOES (#19) */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-[#66645F]">
            <span className="text-[#C6532E] font-bold">REAL DIFFERENTIATOR</span>
            <span>•</span>
            <span>WHATSAPP COMMERCE FLOW</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif-display font-normal text-[#171717] tracking-tight leading-none mb-4">
            Direct WhatsApp Ordering
          </h2>

          <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
            Sell directly to your customers with zero payment gateways, zero transaction fees, and zero software commissions. Customer selections and delivery addresses compile instantly into structured WhatsApp orders.
          </p>
        </div>

        {/* Section Hierarchy: 2. HOW IT WORKS (#19) */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block mb-4">
            How It Works:
          </span>

          {/* Clean 4-Step Flow Sequence */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-[#D5CFC3]">
            <div className="p-4 bg-white border border-[#E5E0D6] rounded-[2px]">
              <span className="font-mono text-xs font-bold text-[#C6532E] block mb-1">01</span>
              <span className="font-sans-ui text-sm font-bold text-[#171717] block">BROWSE</span>
              <span className="text-xs text-[#66645F] mt-1 block">Customer explores your custom catalog</span>
            </div>

            <div className="p-4 bg-white border border-[#E5E0D6] rounded-[2px]">
              <span className="font-mono text-xs font-bold text-[#C6532E] block mb-1">02</span>
              <span className="font-sans-ui text-sm font-bold text-[#171717] block">ADD TO CART</span>
              <span className="text-xs text-[#66645F] mt-1 block">Selects variants, sizes, and quantities</span>
            </div>

            <div className="p-4 bg-white border border-[#E5E0D6] rounded-[2px]">
              <span className="font-mono text-xs font-bold text-[#C6532E] block mb-1">03</span>
              <span className="font-sans-ui text-sm font-bold text-[#171717] block">ENTER DETAILS</span>
              <span className="text-xs text-[#66645F] mt-1 block">Name, phone, delivery address & notes</span>
            </div>

            <div className="p-4 bg-[#171717] text-[#F2EFE8] border border-[#171717] rounded-[2px]">
              <span className="font-mono text-xs font-bold text-[#C6532E] block mb-1">04</span>
              <span className="font-sans-ui text-sm font-bold text-[#F2EFE8] block">ORDER ON WHATSAPP</span>
              <span className="text-xs text-[#E5E0D6]/70 mt-1 block">1-click direct dispatch into your chat</span>
            </div>
          </div>
        </div>

        {/* Practical Simulator: Left form, Right structured WhatsApp message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Customer Input Panel */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-[4px] border border-[#E5E0D6] space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block pb-2 border-b border-[#E5E0D6]">
              Customer Checkout Fields:
            </span>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#171717] block mb-1">
                Select Item
              </label>
              <select
                value={selectedPerfumeId}
                onChange={e => setSelectedPerfumeId(e.target.value)}
                className="w-full p-2.5 bg-[#F2EFE8] border border-[#E5E0D6] rounded-[2px] text-xs font-medium text-[#171717] focus:outline-none focus:border-[#171717]"
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
                <label className="text-xs font-bold uppercase tracking-wider text-[#171717] block mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full p-2.5 bg-[#F2EFE8] border border-[#E5E0D6] rounded-[2px] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#171717] block mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  className="w-full p-2.5 bg-[#F2EFE8] border border-[#E5E0D6] rounded-[2px] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#171717] block mb-1">
                Delivery Address
              </label>
              <input
                type="text"
                value={customerAddress}
                onChange={e => setCustomerAddress(e.target.value)}
                className="w-full p-2.5 bg-[#F2EFE8] border border-[#E5E0D6] rounded-[2px] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#171717] block mb-1">
                Optional Notes
              </label>
              <input
                type="text"
                value={customerNotes}
                onChange={e => setCustomerNotes(e.target.value)}
                placeholder="Gate code, delivery time, etc."
                className="w-full p-2.5 bg-[#F2EFE8] border border-[#E5E0D6] rounded-[2px] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
              />
            </div>

            <div className="pt-2 text-xs font-mono text-[#66645F]">
              Intelligent device routing: opens WhatsApp Web on desktop, native app on mobile.
            </div>
          </div>

          {/* Generated Structured Message Preview */}
          <div className="lg:col-span-6 bg-[#171717] text-[#F2EFE8] p-6 sm:p-8 rounded-[4px] border border-[#171717] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#30312F] mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C6532E]">
                  STRUCTURED MESSAGE OUTPUT
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#E5E0D6] hover:text-[#C6532E] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="font-mono text-xs text-[#E5E0D6] leading-relaxed whitespace-pre-wrap bg-[#1F201F] p-4 rounded-[2px] border border-[#30312F] max-h-72 overflow-y-auto">
                {formattedMessage}
              </pre>
            </div>

            <div className="pt-5 mt-5 border-t border-[#30312F] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleTestWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[2px] bg-[#C6532E] hover:bg-[#b04523] text-[#F2EFE8] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Test Send via WhatsApp</span>
              </button>

              <a
                href="https://noire-store-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#E5E0D6]/70 hover:text-[#F2EFE8] inline-flex items-center gap-1"
              >
                <span>Live in NOIRÉ Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Hierarchy: 3. WHY IT MATTERS (#19) */}
        <div className="pt-8 border-t border-[#D5CFC3]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#66645F] block mb-4">
            Why It Matters:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-l-2 border-[#C6532E] pl-4">
              <span className="font-sans-ui text-sm font-bold text-[#171717] block mb-1">
                0% Gateway Fees
              </span>
              <p className="text-xs text-[#66645F] leading-relaxed">
                Keep 100% of your revenue. No credit card gateway commissions, monthly transaction minimums, or payout delays.
              </p>
            </div>

            <div className="p-4 border-l-2 border-[#171717] pl-4">
              <span className="font-sans-ui text-sm font-bold text-[#171717] block mb-1">
                Direct Customer Dialogue
              </span>
              <p className="text-xs text-[#66645F] leading-relaxed">
                Every order opens an immediate WhatsApp conversation with your customer for instant confirmation, upselling, and relationship building.
              </p>
            </div>

            <div className="p-4 border-l-2 border-[#73765A] pl-4">
              <span className="font-sans-ui text-sm font-bold text-[#171717] block mb-1">
                Higher Conversion in Handheld Markets
              </span>
              <p className="text-xs text-[#66645F] leading-relaxed">
                Customers dislike filling 16-step checkout forms. Sending an order on WhatsApp feels effortless, familiar, and personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
