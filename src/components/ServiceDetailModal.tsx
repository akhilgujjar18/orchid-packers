import React from 'react';
import { X, Check, ShieldCheck, Package, ArrowRight } from 'lucide-react';
import { RelocationService } from '../types';
import { 
  HouseholdShiftingVisual,
  CorporateRelocationVisual,
  SpecializedPackingVisual,
  CarTransportVisual,
  BikeTransportVisual,
  WarehouseStorageVisual
} from './ServiceImages';

interface ServiceDetailModalProps {
  service: RelocationService | null;
  onClose: () => void;
  onBookService: (title: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  const renderServiceVisual = (id: string) => {
    switch (id) {
      case 'household-shifting':
        return <HouseholdShiftingVisual className="w-full h-56 rounded-xl border border-slate-200" />;
      case 'corporate-office':
        return <CorporateRelocationVisual className="w-full h-56 rounded-xl border border-slate-200" />;
      case 'specialized-packing':
        return <SpecializedPackingVisual className="w-full h-56 rounded-xl border border-slate-200" />;
      case 'car-transportation':
        return <CarTransportVisual className="w-full h-56 rounded-xl border border-slate-200" />;
      case 'bike-transport':
        return <BikeTransportVisual className="w-full h-56 rounded-xl border border-slate-200" />;
      case 'warehousing-storage':
        return <WarehouseStorageVisual className="w-full h-56 rounded-xl border border-slate-200" />;
      default:
        return <HouseholdShiftingVisual className="w-full h-56 rounded-xl border border-slate-200" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-300 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0052FF]" /> Orchid Certified Logistics
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">{service.title}</h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{service.detailedDesc}</p>
        </div>

        {/* Realistic Service Visual representation */}
        <div className="mb-5">
          {renderServiceVisual(service.id)}
        </div>

        {/* Pricing & Ideal For */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs">
          <div>
            <span className="text-slate-500 block text-[11px] uppercase font-bold">Starting Estimate</span>
            <span className="text-lg font-extrabold text-[#0052FF] font-mono">{service.startingPrice}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[11px] uppercase font-bold">Ideal For</span>
            <span className="text-slate-800 font-bold">{service.idealFor}</span>
          </div>
        </div>

        {/* Inclusions & Features */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
            What&apos;s Included in This Service
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Packaging Materials Deployed */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>Industrial Packaging Materials Deployed</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.packingMaterials.map((mat, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200">
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onBookService(service.title);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md shadow-blue-500/25 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book {service.title.split(' ')[0]} Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
