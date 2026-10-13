import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Building,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { PUNE_LOCALITIES } from '../data/mockData';

interface CostCalculatorProps {
  onApplyEstimate: (service: string, size: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyEstimate }) => {
  const [moveType, setMoveType] = useState<'local' | 'domestic'>('local');
  const [homeSize, setHomeSize] = useState<string>('2 BHK');
  const [sourceArea, setSourceArea] = useState<string>('Hinjewadi (Phase 1, 2, 3)');
  const [destArea, setDestArea] = useState<string>('Baner');
  const [domesticCity, setDomesticCity] = useState<string>('Bangalore');
  const [hasElevatorSource, setHasElevatorSource] = useState<boolean>(true);
  const [hasElevatorDest, setHasElevatorDest] = useState<boolean>(true);
  const [includeVehicle, setIncludeVehicle] = useState<boolean>(false);
  const [packingTier, setPackingTier] = useState<'standard' | 'premium'>('premium');

  const domesticDestinations = [
    { city: 'Mumbai / Navi Mumbai / Thane', dist: '150 km', base: 12000 },
    { city: 'Bangalore (Electronic City / Whitefield)', dist: '840 km', base: 26000 },
    { city: 'Hyderabad (Hitec City / Gachibowli)', dist: '560 km', base: 22000 },
    { city: 'Delhi NCR (Gurgaon / Noida)', dist: '1450 km', base: 34000 },
    { city: 'Chennai / Coimbatore', dist: '1180 km', base: 31000 },
    { city: 'Ahmedabad / Surat', dist: '660 km', base: 19000 },
  ];

  const calculateEstimate = () => {
    let min = 0;
    let max = 0;

    if (moveType === 'local') {
      const sizeRates: Record<string, [number, number]> = {
        '1 RK': [3800, 5200],
        '1 BHK': [5200, 7500],
        '2 BHK': [7800, 11500],
        '3 BHK': [11800, 16500],
        '4+ BHK / Villa': [16500, 24000],
      };
      const [bMin, bMax] = sizeRates[homeSize] || [7500, 11000];
      min = bMin;
      max = bMax;

      if (!hasElevatorSource) {
        min += 600;
        max += 1000;
      }
      if (!hasElevatorDest) {
        min += 600;
        max += 1000;
      }
      if (includeVehicle) {
        min += 1800;
        max += 3000;
      }
      if (packingTier === 'premium') {
        min += 1200;
        max += 1800;
      }
    } else {
      const cityData = domesticDestinations.find((c) => c.city === domesticCity) || domesticDestinations[0];
      const sizeMultipliers: Record<string, number> = {
        '1 RK': 0.75,
        '1 BHK': 0.9,
        '2 BHK': 1.15,
        '3 BHK': 1.45,
        '4+ BHK / Villa': 1.85,
      };
      const mult = sizeMultipliers[homeSize] || 1.15;
      min = Math.round(cityData.base * mult);
      max = Math.round(min * 1.25);

      if (includeVehicle) {
        min += 5000;
        max += 8000;
      }
    }

    return { min, max };
  };

  const { min, max } = calculateEstimate();

  const handleBookEstimate = () => {
    const serviceName = moveType === 'local' ? 'Household Shifting' : `Domestic Move (${domesticCity})`;
    onApplyEstimate(serviceName, homeSize);
  };

  return (
    <section id="estimator" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#0052FF]" /> Transparent Pune Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Instant Relocation Cost Estimator
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Transparent pricing based on actual Pune mileage, floor levels, dedicated truck volume, and premium multi-layer packing materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* Move Scope Switch (Porter Blue Toggle) */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                Select Relocation Scope
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMoveType('local')}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all border flex items-center justify-center gap-2 cursor-pointer ${
                    moveType === 'local'
                      ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-md shadow-blue-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Within Pune / PCMC</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMoveType('domestic')}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all border flex items-center justify-center gap-2 cursor-pointer ${
                    moveType === 'domestic'
                      ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-md shadow-blue-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Pune to Other Indian Cities</span>
                </button>
              </div>
            </div>

            {/* Inventory Size */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                Home Size / Inventory Volume
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {['1 RK', '1 BHK', '2 BHK', '3 BHK', '4+ BHK / Villa'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setHomeSize(size)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                      homeSize === size
                        ? 'bg-[#0052FF] text-white border-[#0052FF] shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Route Selection */}
            {moveType === 'local' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Pickup Locality (Pune)
                  </label>
                  <select
                    value={sourceArea}
                    onChange={(e) => setSourceArea(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  >
                    {PUNE_LOCALITIES.map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name} ({loc.zone})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Destination Locality (Pune)
                  </label>
                  <select
                    value={destArea}
                    onChange={(e) => setDestArea(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  >
                    {PUNE_LOCALITIES.map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name} ({loc.zone})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Destination Metro Corridor from Pune
                </label>
                <select
                  value={domesticCity}
                  onChange={(e) => setDomesticCity(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#0052FF]"
                >
                  {domesticDestinations.map((d) => (
                    <option key={d.city} value={d.city}>
                      {d.city} (Approx {d.dist})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Additional Customizations */}
            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                Building Access & Vehicle Options
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                
                {/* Source Lift Checkbox */}
                <label className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-slate-300">
                  <input
                    type="checkbox"
                    checked={hasElevatorSource}
                    onChange={(e) => setHasElevatorSource(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0052FF] focus:ring-[#0052FF]"
                  />
                  <span className="text-slate-800 font-semibold">Service Lift at Pickup</span>
                </label>

                {/* Dest Lift Checkbox */}
                <label className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-slate-300">
                  <input
                    type="checkbox"
                    checked={hasElevatorDest}
                    onChange={(e) => setHasElevatorDest(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0052FF] focus:ring-[#0052FF]"
                  />
                  <span className="text-slate-800 font-semibold">Service Lift at Drop</span>
                </label>

                {/* Add Two-Wheeler */}
                <label className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-slate-300">
                  <input
                    type="checkbox"
                    checked={includeVehicle}
                    onChange={(e) => setIncludeVehicle(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0052FF] focus:ring-[#0052FF]"
                  />
                  <span className="text-slate-800 font-semibold">Include Bike / Scooter</span>
                </label>

              </div>
            </div>

            {/* Packing Materials Quality Tier */}
            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                Packing Material Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPackingTier('standard')}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    packingTier === 'standard'
                      ? 'border-[#0052FF] bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <span className="font-extrabold text-xs text-slate-900 block">Standard 3-Layer Packing</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    Corrugated carton sheets, stretch wrap, plastic film.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPackingTier('premium')}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    packingTier === 'premium'
                      ? 'border-[#0052FF] bg-blue-50/50 shadow-xs ring-1 ring-[#0052FF]'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs text-slate-900 block">Premium 5-Layer Shield</span>
                    <span className="text-[10px] font-extrabold text-[#0052FF] bg-blue-100 px-1.5 py-0.5 rounded">Recommended</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    Heavy air bubble wrap, foam corner guards, waterproof crate.
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Pricing Output Card (4 Cols - Clean Dark Navy Card with Porter Blue Button) */}
          <div className="lg:col-span-4 bg-[#0d2149] rounded-2xl border border-blue-900 p-6 sm:p-7 text-white shadow-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Calculated Pune Estimate
            </div>
            
            <h3 className="text-xl font-extrabold text-white">Estimated Moving Cost</h3>
            <p className="text-xs text-slate-300 mt-1">Based on selected inventory and Pune route.</p>

            {/* Estimated Price Range (Electric Blue / Sky Highlight) */}
            <div className="my-6 p-4 rounded-xl bg-[#091733] border border-blue-800">
              <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">Estimated Total</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-300 font-mono mt-1">
                ₹{min.toLocaleString()} – ₹{max.toLocaleString()}
              </div>
              <span className="text-[11px] text-slate-400 block mt-1">
                Includes GST Invoice, Transit Insurance & Tolls
              </span>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-2.5 text-xs text-slate-300 pb-6 border-b border-blue-800/60">
              <div className="flex justify-between">
                <span>Inventory:</span>
                <span className="text-white font-bold">{homeSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Route:</span>
                <span className="text-white font-bold truncate max-w-[170px]">
                  {moveType === 'local' ? `${sourceArea.split(' ')[0]} → ${destArea.split(' ')[0]}` : `Pune → ${domesticCity.split(' ')[0]}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Packing Tier:</span>
                <span className="text-sky-300 font-bold capitalize">{packingTier} 5-Layer</span>
              </div>
              <div className="flex justify-between">
                <span>Vehicle In Transit:</span>
                <span className="text-white font-semibold">{includeVehicle ? 'Yes (Bike / Scooter)' : 'No'}</span>
              </div>
            </div>

            {/* Trust Points */}
            <div className="py-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero hidden charges on moving day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Free cancellation up to 24 hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live WhatsApp GPS tracking included</span>
              </div>
            </div>

            {/* Book Rate Button (Porter-Style Blue) */}
            <button
              onClick={handleBookEstimate}
              className="w-full mt-2 py-3.5 px-4 bg-[#0052FF] hover:bg-[#0042D4] active:bg-[#0038B8] text-white font-extrabold text-sm uppercase tracking-wide rounded-xl transition-all shadow-md shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Rate Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-slate-400 mt-3">
              Need a physical survey first? Our Pune surveyor visits free.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
