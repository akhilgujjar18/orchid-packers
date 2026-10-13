import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  XCircle, 
  FileCheck, 
  Award,
  Box,
  Truck
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const packingLayers = [
    {
      title: 'Layer 1: Cling & Stretch Wrap',
      subtitle: 'Zero Dust, Scratch & Moisture Barrier',
      desc: 'High-micron stretch film tightly sealed directly over polished wood, leather sofas, mattresses, and glass to seal out Pune monsoon dampness, dust, and transit friction.',
    },
    {
      title: 'Layer 2: Heavy Air Bubble Wrap',
      subtitle: 'Shock Absorption & Impact Cushioning',
      desc: 'Virgin multi-cell bubble roll wrapped around delicate edges, glassware, microwave ovens, refrigerators, and television screens to dissipate kinetic road bumps.',
    },
    {
      title: 'Layer 3: 5-Ply Corrugated Cartons',
      subtitle: 'Structural Armor & Rigidity',
      desc: 'Pre-creased heavy industrial 5-ply Kraft fiberboard sheets wrapped around modular wardrobes, dining tabletops, and packed cartons for unyielding crush resistance.',
    },
    {
      title: 'Layer 4: Reinforced Foam Corner Guards',
      subtitle: 'Point-Impact Edge Defense',
      desc: 'Custom-fit high-density polyethylene edge protectors placed on all 4 corners of glass cabinets, marble tops, and flat-panel TV screens.',
    },
    {
      title: 'Layer 5: Industrial Poly-Strapping & Seal',
      subtitle: 'Tamper-Evident Lock',
      desc: 'Heat-sealed tension strapping tapes that secure the entire bundle tightly, finished with room-coded Pune destination labels and inventory barcodes.',
    },
  ];

  const differentiators = [
    {
      feature: 'Packing Crew Employment',
      orchid: '100% In-house, full-time uniformed staff (vetted & trained)',
      local: 'Unvetted daily-wage casual laborers hired off the street',
    },
    {
      feature: 'Pricing Transparency',
      orchid: 'Binding written contract with 0% moving-day price revisions',
      local: 'Low verbal quotes followed by hostage extortion on delivery',
    },
    {
      feature: 'Vehicle Fleet Standards',
      orchid: 'Dedicated closed-body GPS waterproof container trucks',
      local: 'Open tarpaulin trucks prone to rainwater seepage and theft',
    },
    {
      feature: 'Transit Insurance Settlement',
      orchid: 'Nationalized IBA-approved insurance policy with 7-day claim audit',
      local: 'No policy or empty promises with zero compensation for broken items',
    },
    {
      feature: 'Furniture Assembly & Tools',
      orchid: 'Motorized screwdrivers, Allen keys, and reassembly included',
      local: 'Unskilled workers force-fitting bolts or refusing reassembly',
    },
  ];

  return (
    <section id="why-us" className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0052FF]" /> The Orchid Safety Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Pune Families & IT Professionals Choose Us
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            In an unregulated moving industry full of aggregators and middlemen, we own our containers, train our crew, and guarantee your peace of mind.
          </p>
        </div>

        {/* 5-Layer Superior Packing Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-16 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF]">
                Engineered Damage Prevention
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Our Signature 5-Layer Protective Shield
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Every delicate antique, 65-inch OLED TV, and modular wardrobe receives this multi-stage packaging treatment before loading into our Pune containers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Layer Selector Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {packingLayers.map((layer, idx) => {
                const isActive = activeLayer === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveLayer(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-50/70 border-[#0052FF] shadow-xs ring-1 ring-[#0052FF]'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-extrabold block ${isActive ? 'text-[#0052FF]' : 'text-slate-900'}`}>
                        {layer.title}
                      </span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {layer.subtitle}
                      </span>
                    </div>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ml-3 ${
                      isActive ? 'bg-[#0052FF] text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Layer Details */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#0052FF] bg-blue-100 px-2.5 py-1 rounded border border-blue-200">
                  Step {activeLayer + 1} of 5
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5 text-[#0052FF]" />
                  Zero Transit Abrasion
                </span>
              </div>

              <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                {packingLayers[activeLayer].title}
              </h4>
              <p className="text-sm font-semibold text-blue-900 mb-3">
                {packingLayers[activeLayer].subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {packingLayers[activeLayer].desc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom edge guards on glassware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Room-coded label organization</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Real Comparison Table: Orchid vs Local Aggregators */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Orchid Packers vs. Typical Unverified Movers
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Compare our verified operating standards against random roadside brokers in Pune.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-700">
                  <th className="py-4 px-6 font-extrabold">Operating Standards</th>
                  <th className="py-4 px-6 font-extrabold text-[#0052FF] bg-blue-50/50">Orchid Packers Pune</th>
                  <th className="py-4 px-6 font-extrabold text-slate-600">Local Movers / Aggregators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {differentiators.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-800 bg-blue-50/30 font-semibold">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                        <span>{row.orchid}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.local}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
