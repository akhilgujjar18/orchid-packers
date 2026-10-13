import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Truck, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Navigation,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PuneCoverageMapProps {
  onBookServiceInArea: (areaName: string) => void;
}

interface HubDetail {
  id: string;
  name: string;
  branchName: string;
  landmark: string;
  response: string;
  fleetCount: string;
  surveyStatus: string;
  supervisor: string;
  serviceRadius: string;
  directPhone: string;
}

const PUNE_HUBS: Record<string, HubDetail> = {
  'Tathawade': {
    id: 'tathawade',
    name: 'Tathawade (Office 1)',
    branchName: 'Orchid Relocations - Tathawade Head Office',
    landmark: 'Survey No. 78, 2/2, opp. Laxmi Niwas, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033',
    response: '10 mins',
    fleetCount: '8 Dedicated Carriers',
    surveyStatus: 'Free Immediate Doorstep Survey',
    supervisor: 'Head Office Supervisor: Sachin M.',
    serviceRadius: 'Covers Tathawade, Wakad, Hinjewadi, Punawale & Ravet',
    directPhone: '+91 72760 26115',
  },
  'Karvenagar': {
    id: 'karvenagar',
    name: 'Karvenagar (Office 2)',
    branchName: 'Orchid Relocations - Karvenagar Branch Office',
    landmark: 'S. No 53, Madan Market, Wadarwasti, Sramik Vasahat, Karvenagar, Pune, Maharashtra 411052',
    response: '12 mins',
    fleetCount: '7 Dedicated Carriers',
    surveyStatus: 'Physical Doorstep Survey Available',
    supervisor: 'Branch Supervisor: Vikram D.',
    serviceRadius: 'Covers Karvenagar, Kothrud, Warje, Sinhagad Road & Bavdhan',
    directPhone: '+91 72760 26115',
  },
  'Baner': {
    id: 'baner',
    name: 'Baner',
    branchName: 'Orchid Relocations - Baner Central Hub (HQ)',
    landmark: 'Near Balewadi High Street & Mumbai-Bangalore Highway Bypass',
    response: '15 mins',
    fleetCount: '8 Dedicated Carriers',
    surveyStatus: 'Free Immediate Doorstep Survey',
    supervisor: 'Senior Hub Supervisor: Rajesh S.',
    serviceRadius: 'Covers Baner, Balewadi, Mahalunge, Sus & Pashan',
    directPhone: '+91 72760 26115',
  },
  'Hinjewadi': {
    id: 'hinjewadi',
    name: 'Hinjewadi',
    branchName: 'Orchid Relocations - Hinjewadi IT Park Hub',
    landmark: 'Phase 1 Chowk, Near Infosys & Rajiv Gandhi Infotech Park',
    response: '15 mins',
    fleetCount: '7 Container Trucks',
    surveyStatus: 'IT Employee Priority Survey Available',
    supervisor: 'Tech Corridor Lead: Amit K.',
    serviceRadius: 'Covers Phase 1, Phase 2, Phase 3, Marunji & Maan',
    directPhone: '+91 72760 26115',
  },
  'Wakad': {
    id: 'wakad',
    name: 'Wakad',
    branchName: 'Orchid Relocations - Wakad Express Branch',
    landmark: 'Datta Mandir Road / Bhumkar Chowk Junction',
    response: '12 mins',
    fleetCount: '6 Closed Carriers',
    surveyStatus: 'Evening & Weekend Survey Slots Open',
    supervisor: 'PCMC Logistics Lead: Sachin M.',
    serviceRadius: 'Covers Wakad, Tathawade, Thergaon & Dange Chowk',
    directPhone: '+91 72760 26115',
  },
  'Kothrud': {
    id: 'kothrud',
    name: 'Kothrud',
    branchName: 'Orchid Relocations - Kothrud Old Pune Hub',
    landmark: 'Near Chandani Chowk Flyover & Paud Road Junction',
    response: '20 mins',
    fleetCount: '5 Closed Carriers',
    surveyStatus: 'Doorstep Physical Survey Available',
    supervisor: 'Central Moves Lead: Vikram D.',
    serviceRadius: 'Covers Kothrud, Karve Nagar, Warje & Bavdhan',
    directPhone: '+91 72760 26115',
  },
  'Viman Nagar': {
    id: 'viman-nagar',
    name: 'Viman Nagar',
    branchName: 'Orchid Relocations - Viman Nagar East Hub',
    landmark: 'Near Phoenix Marketcity & Pune Airport Road',
    response: '18 mins',
    fleetCount: '6 Closed Carriers',
    surveyStatus: 'Airport Corridor Survey Available',
    supervisor: 'East Zone Officer: Pradeep N.',
    serviceRadius: 'Covers Viman Nagar, Tingre Nagar, Kalyani Nagar & Yerawada',
    directPhone: '+91 72760 26115',
  },
  'Kharadi': {
    id: 'kharadi',
    name: 'Kharadi',
    branchName: 'Orchid Relocations - Kharadi EON Free Zone Hub',
    landmark: 'World Trade Center & EON IT Park Corridor',
    response: '15 mins',
    fleetCount: '7 Container Carriers',
    surveyStatus: 'Same-Day Packaging & Survey Ready',
    supervisor: 'EON Hub Supervisor: Santosh P.',
    serviceRadius: 'Covers Kharadi, Wadgaon Sheri, Wagholi & Mundhwa',
    directPhone: '+91 72760 26115',
  },
  'Pimple Saudagar': {
    id: 'pimple-saudagar',
    name: 'Pimple Saudagar',
    branchName: 'Orchid Relocations - Pimple Saudagar Hub',
    landmark: 'Near Kunal Icon Road & Linear Garden',
    response: '15 mins',
    fleetCount: '5 Heavy Carriers',
    surveyStatus: 'Gated Society Inspection Survey Available',
    supervisor: 'Residential Fleet Lead: Rahul T.',
    serviceRadius: 'Covers Pimple Saudagar, Pimple Nilakh, Rahatani & Kalewadi',
    directPhone: '+91 72760 26115',
  },
  'Hadapsar': {
    id: 'hadapsar',
    name: 'Hadapsar',
    branchName: 'Orchid Relocations - Hadapsar & Magarpatta Hub',
    landmark: 'Magarpatta South Gate & Solapur Highway Junction',
    response: '18 mins',
    fleetCount: '6 Carriers',
    surveyStatus: 'Mega-Township Survey Available',
    supervisor: 'Township Relocation Specialist: Nitin G.',
    serviceRadius: 'Covers Hadapsar, Magarpatta City, Amanora & Fursungi',
    directPhone: '+91 72760 26115',
  },
  'Aundh': {
    id: 'aundh',
    name: 'Aundh',
    branchName: 'Orchid Relocations - Aundh & University Hub',
    landmark: 'Near Bremen Chowk & Pune University Road',
    response: '15 mins',
    fleetCount: '5 Closed Trucks',
    surveyStatus: 'Doorstep Survey Available',
    supervisor: 'Premium Relocation Lead: Ganesh K.',
    serviceRadius: 'Covers Aundh, Bopodi, Pashan & Range Hills',
    directPhone: '+91 72760 26115',
  },
};

const AREA_PILLS = [
  'Tathawade',
  'Karvenagar',
  'Baner',
  'Hinjewadi',
  'Wakad',
  'Kothrud',
  'Viman Nagar',
  'Kharadi',
  'Pimple Saudagar',
  'Hadapsar',
  'Aundh',
];

export const PuneCoverageMap: React.FC<PuneCoverageMapProps> = ({ onBookServiceInArea }) => {
  const [selectedArea, setSelectedArea] = useState<string>('Tathawade');

  const currentHub = PUNE_HUBS[selectedArea] || PUNE_HUBS['Tathawade'];

  const mapSearchQuery = currentHub.landmark && (currentHub.landmark.includes('Survey No.') || currentHub.landmark.includes('Madan Market'))
    ? currentHub.landmark
    : `Orchid Packers and Movers ${selectedArea} Pune`;

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapSearchQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const externalGoogleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(mapSearchQuery)}`;

  return (
    <section id="pune-map" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#0052FF]" />
            <span>Verified Local Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Operational Presence Across Pune &amp; PCMC
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Click on any Pune locality below to view our service hub on the live interactive map.
          </p>
        </div>

        {/* Interactive Area Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {AREA_PILLS.map((area) => {
            const isActive = selectedArea === area;
            return (
              <button
                key={area}
                type="button"
                onClick={() => setSelectedArea(area)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#0052FF] text-white shadow-md shadow-blue-500/25 border border-[#0052FF] scale-102'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-2xs'
                }`}
              >
                <Navigation className={`w-3 h-3 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{area}</span>
              </button>
            );
          })}
        </div>

        {/* Map & Live Branch Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Live Google Map Interactive Frame */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col">
            {/* Map Frame Header Bar */}
            <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white">Live Hub View:</span>
                <span className="text-sky-300 font-semibold">{currentHub.branchName}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 hidden sm:inline">Pinch/scroll to zoom, drag to pan</span>
                <a
                  href={externalGoogleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-300 hover:text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Responsive Iframe Container */}
            <div className="relative w-full h-[420px] sm:h-[460px] lg:h-[500px] bg-slate-100">
              <iframe
                title={`Google Map - Orchid Packers & Movers in ${selectedArea}, Pune`}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Floating/Side Branch Information Card */}
          <motion.div 
            key={currentHub.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              {/* Branch Title & Verification Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0052FF] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>IBA &amp; GST Registered Hub</span>
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Active Dispatch
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                {currentHub.branchName}
              </h3>

              <p className="text-xs text-slate-500 mt-2 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                <span>{currentHub.landmark}</span>
              </p>

              {/* Quick Hub Stats */}
              <div className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4 text-[#0052FF]" />
                    <span className="font-semibold text-slate-800">Avg. Response Time</span>
                  </div>
                  <span className="font-mono font-extrabold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                    {currentHub.response}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Truck className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold text-slate-800">Daily Fleet Allocated</span>
                  </div>
                  <span className="font-mono font-extrabold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                    {currentHub.fleetCount}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-slate-800">Survey Service</span>
                  </div>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                    Doorstep Ready
                  </span>
                </div>
              </div>

              {/* Radius & Supervisor Info */}
              <div className="mt-5 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1.5">
                <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                  Service Radius Coverage
                </div>
                <div className="text-slate-600 leading-relaxed">
                  {currentHub.serviceRadius}
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  {currentHub.supervisor}
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={() => onBookServiceInArea(selectedArea)}
                className="w-full py-3 px-4 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] active:bg-[#0038B8] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Service in {selectedArea}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+917276026115"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                <span>Call {selectedArea} Desk: +91 72760 26115</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
