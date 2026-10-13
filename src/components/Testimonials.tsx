import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-[#0052FF] text-[#0052FF]" /> Customer Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified Experiences from Pune Residents
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Read unedited feedback from tech professionals and families who trusted Orchid for their relocation.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs relative group hover:border-blue-300 transition-all"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">{item.date}</span>
                </div>

                {/* Move Type Badge */}
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-[#0052FF] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full inline-block">
                    {item.moveType}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="text-[11px] text-slate-600">{item.designation}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.companyOrLocality}</p>
                </div>
                <div className="p-1.5 rounded-full bg-white border border-slate-200 text-emerald-600 shadow-2xs" title="Verified Moving Customer">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Trust Logos / Entities Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 text-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">
            Trusted by relocation managers and employees at Pune&apos;s leading technology hubs
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-bold text-slate-600">
            <span>Infosys Hinjewadi</span>
            <span>·</span>
            <span>TCS Sahyadri Park</span>
            <span>·</span>
            <span>Cognizant Kharadi</span>
            <span>·</span>
            <span>Wipro Phase 2</span>
            <span>·</span>
            <span>Amanora Park Town</span>
            <span>·</span>
            <span>Magarpatta Cybercity</span>
          </div>
        </div>

      </div>
    </section>
  );
};
