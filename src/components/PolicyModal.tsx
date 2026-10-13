import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  title: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ title, onClose }) => {
  if (!title) return null;

  const getContent = () => {
    switch (title) {
      case 'Transit Insurance & Damage Claims':
        return (
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <p>
              Orchid Packers & Movers provides comprehensive Goods-In-Transit Insurance underwritten by authorized public general insurance companies across India.
            </p>
            <h4 className="text-sm font-bold text-slate-900">1. Scope of Coverage</h4>
            <p>
              Coverage applies from the moment goods are loaded into Orchid&apos;s sealed container vehicle until delivery and room placement at the destination premises. It protects against accidental road mishaps, vehicle overturning, fire, explosion, flash floods, and physical transit shocks.
            </p>
            <h4 className="text-sm font-bold text-slate-900">2. Claims Process & Timelines</h4>
            <p>
              In the rare event of damage, the customer must note the discrepancy on the delivery consignment receipt and submit photographic evidence within 48 hours of delivery. A claims adjudicator will review the report and issue resolution or compensation settlement within 7 business days.
            </p>
            <h4 className="text-sm font-bold text-slate-900">3. Exclusions</h4>
            <p>
              Cash, currency notes, personal bullion, jewelry, unverified items packed by owner without Orchid inspection, and perishable provisions are strictly excluded from transit claims.
            </p>
          </div>
        );

      case 'Terms of Service & Carriage Contract':
        return (
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <h4 className="text-sm font-bold text-slate-900">1. Booking & Surveys</h4>
            <p>
              All quotations issued by Orchid Packers & Movers Pune are based upon the inventory disclosed during the pre-move virtual or physical survey. Any additional items introduced on moving day may incur a proportional revision in vehicle capacity and labor charges.
            </p>
            <h4 className="text-sm font-bold text-slate-900">2. Payment Schedule</h4>
            <p>
              Local Pune moves: 20% advance upon booking confirmation, 80% upon completion of delivery and basic reassembly.
              Inter-city domestic moves: 20% booking token, 60% upon loading and vehicle dispatch, 20% upon delivery at destination.
            </p>
            <h4 className="text-sm font-bold text-slate-900">3. Cancellation & Rescheduling</h4>
            <p>
              Free rescheduling is permitted up to 24 hours prior to scheduled move time. Cancellations within 12 hours may be subject to a nominal mobilization fee.
            </p>
          </div>
        );

      default:
        return (
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <h4 className="text-sm font-bold text-slate-900">1. Data Collection & Privacy</h4>
            <p>
              Orchid Packers and Movers Pune respects your personal data. We collect your name, phone number, pickup/destination addresses, and inventory details strictly for providing relocation estimates, dispatching moving crews, and coordinating logistics.
            </p>
            <h4 className="text-sm font-bold text-slate-900">2. Zero Spam Commitment</h4>
            <p>
              We do not sell, rent, or trade your contact information to third-party telemarketers or advertisers. You will only receive communication regarding your moving quote, survey updates, and live GPS transit tracking.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-300 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-slate-900">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0052FF]" /> Legal & Compliance
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
        </div>

        <div className="py-2 border-y border-slate-200 my-4">
          {getContent()}
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
