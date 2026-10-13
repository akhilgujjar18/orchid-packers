import React, { useState } from 'react';
import { X, CheckSquare, Square, Printer, Sparkles } from 'lucide-react';

interface MovingChecklistModalProps {
  onClose: () => void;
}

export const MovingChecklistModal: React.FC<MovingChecklistModalProps> = ({ onClose }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'c-1': true,
    'c-2': true,
  });

  const checklistSections = [
    {
      title: '7 Days Before Moving Day',
      items: [
        { id: 'c-1', text: 'Schedule Orchid Packers pre-move video or physical home survey' },
        { id: 'c-2', text: 'Segregate non-essential belongings, old books, and clothes to donate' },
        { id: 'c-3', text: 'Notify apartment society office in Pune (Hinjewadi / Baner / Wakad) for move-out freight lift clearance' },
        { id: 'c-4', text: 'Arrange Wi-Fi / Broadband transfer (JioFiber / Airtel) to new address' },
      ],
    },
    {
      title: '2 Days Before Moving Day',
      items: [
        { id: 'c-5', text: 'Defrost refrigerator, clean freezer, and dry completely' },
        { id: 'c-6', text: 'Pack personal jewelry, cash, laptop, and original property documents in a personal bag' },
        { id: 'c-7', text: 'Disconnect LPG cylinder safety regulator valve' },
        { id: 'c-8', text: 'Prepare an "Essentials Bag" (chargers, medication, change of clothes, toiletries)' },
      ],
    },
    {
      title: 'Moving Day Morning',
      items: [
        { id: 'c-9', text: 'Welcome Orchid Packers supervisor and point out delicate glassware/OLED TV' },
        { id: 'c-10', text: 'Verify item count against the printed consignment inventory note' },
        { id: 'c-11', text: 'Double check all cupboards, loft spaces, and bathroom cabinets' },
        { id: 'c-12', text: 'Receive live WhatsApp driver GPS tracking link before departure' },
      ],
    },
  ];

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-300 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#0052FF]" /> Client Moving Guide
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Pune Moving Day Checklist</h3>
            <p className="text-xs text-slate-500 mt-0.5">Stay 100% organized and stress-free throughout your relocation.</p>
          </div>

          <button
            onClick={handlePrint}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors shrink-0 cursor-pointer"
            title="Print Moving Checklist"
          >
            <Printer className="w-5 h-5" />
          </button>
        </div>

        {/* Checklist Content */}
        <div className="space-y-6">
          {checklistSections.map((sec) => (
            <div key={sec.title} className="bg-slate-50 rounded-xl border border-slate-200 p-4">
              <h4 className="text-xs font-extrabold text-[#0052FF] uppercase tracking-wider mb-3">
                {sec.title}
              </h4>
              <div className="space-y-2.5">
                {sec.items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className="flex items-start gap-3 text-xs cursor-pointer group"
                    >
                      <div className="mt-0.5 text-[#0052FF]">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-[#0052FF]" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                        )}
                      </div>
                      <span className={`leading-relaxed ${isChecked ? 'line-through text-slate-400' : 'text-slate-800 font-medium'}`}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Need custom assistance? Call our Pune move desk: +91 72760 26115</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D4] text-white font-extrabold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
