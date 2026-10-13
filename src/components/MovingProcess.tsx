import React, { useState } from 'react';
import { CalendarCheck, PackageOpen, Truck, CheckCheck, Clock, ArrowRight } from 'lucide-react';

interface MovingProcessProps {
  onBookSurveyClick: () => void;
}

export const MovingProcess: React.FC<MovingProcessProps> = ({ onBookSurveyClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Free Move Survey',
      subtitle: 'Virtual or On-Site Inspection',
      timeframe: 'Same Day / Within 2 Hours',
      description: 'Schedule a 15-minute video call survey or request our Pune relocation executive to inspect your home in Hinjewadi, Baner, Wakad, or Kharadi. We evaluate inventory volume, fragile items, dismantling needs, and provide a binding written quote.',
      icon: CalendarCheck,
      keyHighlights: ['100% Free & No Obligation', 'Exact itemized quotation', 'Custom packing advice'],
    },
    {
      number: '02',
      title: 'Quality Packing Day',
      subtitle: '5-Layer Bubble Protection',
      timeframe: 'Morning of Move Day (8:30 AM)',
      description: 'Our full-time crew arrives on time with fresh 5-ply cartons and air bubble wrap. We dismantle modular beds and wardrobes, wrap your 65" TV in custom protective shields, label each carton with room numbers, and inventory every single piece.',
      icon: PackageOpen,
      keyHighlights: ['Color-coded box labels', 'Specialized TV & crockery packing', 'Modular bed dismantling'],
    },
    {
      number: '03',
      title: 'Safe Closed Transit',
      subtitle: 'GPS Container Fleet',
      timeframe: 'Real-time live tracking',
      description: 'Your cargo is securely loaded into our waterproof closed-body container trucks. Wheel chocks and straps keep furniture completely immobilized. You receive a live WhatsApp GPS tracking link and driver contact details.',
      icon: Truck,
      keyHighlights: ['100% Weatherproof containers', 'Driver WhatsApp contact', 'Direct express route'],
    },
    {
      number: '04',
      title: 'Unpacking & Setup',
      subtitle: 'Room-by-Room Placement',
      timeframe: 'Afternoon / Same Day',
      description: 'At your new home, our crew unloads, unboxes, and arranges furniture in your respective rooms. We reassemble your modular beds, place heavy appliances, and clear away all debris and used carton scraps so your home is move-in ready.',
      icon: CheckCheck,
      keyHighlights: ['Furniture reassembly', 'Debris & carton disposal', 'Final condition sign-off'],
    },
  ];

  return (
    <section id="process" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5 text-[#0052FF]" /> Seamless Relocation Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent 4-Step Moving Process
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From the initial pre-move home survey to setting up your living room in your new residence, experience total peace of mind every step of the way.
          </p>
        </div>

        {/* Step Track Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative bg-slate-50 rounded-2xl border p-6 flex flex-col justify-between transition-all cursor-pointer group ${
                  isSelected
                    ? 'border-[#0052FF] bg-blue-50/40 shadow-md ring-1 ring-[#0052FF]/30'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono tracking-tighter text-[#0052FF]">
                      {step.number}
                    </span>
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isSelected ? 'bg-[#0052FF] text-white' : 'bg-white border border-slate-200 text-slate-700 group-hover:text-[#0052FF]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-bold text-[#0052FF] mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="space-y-1.5">
                    {step.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Banner beneath Process (Porter Blue Banner & Button) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#091e45] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-extrabold text-white">
              Ready to schedule your free pre-move home survey in Pune?
            </h3>
            <p className="text-xs text-slate-300">
              Our Pune relocation coordinator is available 7 days a week from 7:00 AM to 10:00 PM for video or physical surveys.
            </p>
          </div>
          <button
            onClick={onBookSurveyClick}
            className="px-6 py-3.5 bg-[#0052FF] hover:bg-[#0042D4] active:bg-[#0038B8] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-500/25 active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Book Free Survey Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
