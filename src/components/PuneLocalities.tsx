import React, { useState } from 'react';
import { MapPin, Search, Clock, ArrowRight } from 'lucide-react';
import { PUNE_LOCALITIES, INTERCITY_ROUTES } from '../data/mockData';

interface PuneLocalitiesProps {
  onSelectLocality: (localityName: string) => void;
  onSelectIntercityRoute: (routeDest: string) => void;
}

export const PuneLocalities: React.FC<PuneLocalitiesProps> = ({
  onSelectLocality,
  onSelectIntercityRoute,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const zones = ['All', 'West Pune', 'East Pune', 'PCMC / North', 'Central Pune'];

  const filteredLocalities = PUNE_LOCALITIES.filter((loc) => {
    const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || loc.pincode.includes(searchQuery);
    const matchesZone = selectedZone === 'All' || loc.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  return (
    <section id="localities" className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#0052FF]" /> Full Pune City & Pan-India Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pune Localities & Inter-City Moving Corridors
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Fast 30-minute dispatch from our strategic branch hubs across Pune, plus scheduled container departures to major metros nationwide.
          </p>
        </div>

        {/* Part 1: Pune Localities Explorer */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-16 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Pune City Branch Hubs & Same-Day Coverage</h3>
              <p className="text-xs text-slate-500 mt-1">Select your area to check instant dispatch availability.</p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search Hinjewadi, Wakad, Baner..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052FF] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Zone Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedZone === zone
                    ? 'bg-[#0052FF] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* Localities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredLocalities.map((loc) => (
              <div
                key={loc.name}
                onClick={() => onSelectLocality(loc.name)}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0052FF] hover:bg-blue-50/20 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#0052FF] bg-blue-100 px-2 py-0.5 rounded border border-blue-200">
                      {loc.pincode}
                    </span>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1 font-semibold">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {loc.avgPickupTime}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                    {loc.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 block mt-0.5">{loc.zone}</span>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-[#0052FF] font-bold group-hover:underline">
                  <span>Book in {loc.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredLocalities.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-xs">
              No specific locality found matching &ldquo;{searchQuery}&rdquo;. We provide relocation across all of Pune, PCMC, and suburban hubs!
            </div>
          )}
        </div>

        {/* Part 2: Inter-City Moving Routes from Pune */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF]">
                Domestic Relocation Fleets
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Popular Inter-City Shifting Routes from Pune
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Dedicated and consolidated container vehicles departing daily with zero transshipment risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERCITY_ROUTES.map((route) => (
              <div
                key={route.destination}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 transition-all shadow-xs hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {route.distance}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {route.transitTime}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#0052FF] transition-colors">
                    {route.destination}
                  </h4>
                  <p className="text-[11px] font-bold text-[#0052FF] mb-3">
                    {route.frequency}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {route.highlights}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectIntercityRoute(route.destination)}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-[#0052FF] text-[#0052FF] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Get {route.destination.split('to')[1]} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
