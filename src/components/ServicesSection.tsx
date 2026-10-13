import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Truck, 
  Box, 
  FileCheck2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RELOCATION_SERVICES } from '../data/mockData';
import { RelocationService } from '../types';
import { 
  HouseholdShiftingVisual,
  CorporateRelocationVisual,
  SpecializedPackingVisual,
  CarTransportVisual,
  BikeTransportVisual,
  WarehouseStorageVisual
} from './ServiceImages';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenServiceModal: (service: RelocationService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenServiceModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Vehicles',
    'Specialized',
    'Storage',
  ];

  const filteredServices = RELOCATION_SERVICES.filter((svc) => {
    if (selectedCategory === 'All') return true;
    return svc.category === selectedCategory;
  });

  const renderServiceVisual = (serviceId: string) => {
    switch (serviceId) {
      case 'household-shifting':
        return <HouseholdShiftingVisual className="w-full h-52 sm:h-56" />;
      case 'corporate-office':
        return <CorporateRelocationVisual className="w-full h-52 sm:h-56" />;
      case 'specialized-packing':
        return <SpecializedPackingVisual className="w-full h-52 sm:h-56" />;
      case 'car-transportation':
        return <CarTransportVisual className="w-full h-52 sm:h-56" />;
      case 'bike-transport':
        return <BikeTransportVisual className="w-full h-52 sm:h-56" />;
      case 'warehousing-storage':
        return <WarehouseStorageVisual className="w-full h-52 sm:h-56" />;
      default:
        return <HouseholdShiftingVisual className="w-full h-52 sm:h-56" />;
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 24,
      },
    },
  };

  return (
    <section id="services" className="bg-slate-50 py-20 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <Truck className="w-3.5 h-3.5 text-[#0052FF]" /> Certified Relocation Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Moving Services in Pune
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Tailored logistics solutions executed by full-time vetted crew members using industrial-grade protective materials and dedicated closed-container vehicles.
          </p>
        </motion.div>

        {/* Filter Navigation with Subtle Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0052FF] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Services Cards Grid with Scroll-Triggered Stagger & Motion */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition-colors shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Visual Image Render for each section */}
                  <div className="relative overflow-hidden bg-slate-100 border-b border-slate-200">
                    {renderServiceVisual(service.id)}

                    {/* Badges Overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      {service.badge && (
                        <span className="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider bg-[#0052FF] text-white rounded-md shadow-xs">
                          {service.badge}
                        </span>
                      )}
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-white/95 text-slate-800 rounded border border-slate-200">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2.5 py-1 text-xs font-mono font-extrabold text-blue-900 bg-white/95 rounded-md border border-slate-200 shadow-2xs">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-blue-900 font-bold mt-0.5">
                        Ideal for: {service.idealFor}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Bullet features */}
                    <div className="space-y-2 mb-4 pt-3 border-t border-slate-100">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Materials Deployed */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-blue-600" />
                        <span>Packaging Standards Deployed</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.packingMaterials.map((mat, i) => (
                          <span key={i} className="text-[10px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons (Porter-style Blue) */}
                <div className="p-6 pt-0 mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] active:bg-[#0038B8] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Move</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenServiceModal(service)}
                      className="py-2.5 px-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0052FF] font-bold text-xs border border-blue-200 transition-colors flex items-center gap-1 cursor-pointer"
                      title="View Detailed Checklist"
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Details</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Local Guarantee Callout with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full In-Transit Protection Included</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Need custom shifting assistance or same-day Pune dispatch?
            </h3>
            <p className="text-xs text-slate-500 max-w-xl">
              We dispatch within 30 minutes from our Baner, Hinjewadi, Wakad, and Kharadi hubs with dedicated supervisors.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectService('Specialized Packing Services')}
              className="px-6 py-3 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
            >
              Request Custom Survey
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
