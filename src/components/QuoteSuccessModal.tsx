import React from 'react';
import { CheckCircle2, Clock, X } from 'lucide-react';
import { QuoteResponse } from '../types';

interface QuoteSuccessModalProps {
  quote: (QuoteResponse['lead'] & { quoteId: string }) | null;
  onClose: () => void;
}

export const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({ quote, onClose }) => {
  if (!quote) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Orchid Packers, I just requested a quote (Ref #${quote.quoteId}) for shifting from ${quote.movingFrom} to ${quote.movingTo}. Please confirm my survey.`
  );
  const whatsappUrl = `https://wa.me/917276026115?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-300 shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon & Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 border border-blue-200 text-[#0052FF] flex items-center justify-center mb-3 shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono font-bold text-[#0052FF] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
            Booking Ref: {quote.quoteId}
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
            Quote Request Received!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
            Our Pune relocation coordinator will call you on <strong className="text-[#0052FF] font-mono">+91 {quote.mobile}</strong> within 15 minutes.
          </p>
        </div>

        {/* Lead Details Summary */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 mb-6 text-xs space-y-2.5">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Client Name:</span>
            <span className="text-slate-900 font-bold">{quote.fullName}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Service:</span>
            <span className="text-[#0052FF] font-bold">{quote.serviceRequired}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Pickup Location:</span>
            <span className="text-slate-800 font-medium truncate max-w-[200px]">{quote.movingFrom}</span>
          </div>

          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Destination:</span>
            <span className="text-slate-800 font-medium truncate max-w-[200px]">{quote.movingTo}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Inventory Size:</span>
            <span className="text-slate-900 font-bold">{quote.inventorySize || '2 BHK'}</span>
          </div>
        </div>

        {/* Next Steps Info */}
        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3 mb-6 text-xs text-blue-950">
          <Clock className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
          <span>
            Office hours: 7:00 AM – 10:00 PM. For immediate urgent same-day bookings, you can fast-track via WhatsApp below.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] text-white font-extrabold text-xs uppercase tracking-wide transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <span>Fast-Track on WhatsApp →</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            Close & Back to Site
          </button>
        </div>

      </div>
    </div>
  );
};
