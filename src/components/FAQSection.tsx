import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

interface FAQSectionProps {
  onAskQuestionClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskQuestionClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-quote');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Pricing', 'Safety', 'Pune Local', 'Packing'];

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#0052FF]" /> Answers to Moving Queries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Clear, straightforward answers about moving costs, transit insurance claims, packing techniques, and same-day Pune transit.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0052FF] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border-[#0052FF] shadow-xs ring-1 ring-[#0052FF]/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0052FF] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Assistance Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Have a specific question about your Pune move?</h3>
            <p className="text-xs text-slate-500 mt-0.5">Talk directly with our Pune move manager for instant answers.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917276026115"
              className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0052FF] text-xs font-bold border border-blue-200 flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>Call Relocation Desk (+91 72760 26115)</span>
            </a>
            <button
              onClick={onAskQuestionClick}
              className="px-4 py-2 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Get Free Survey
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
