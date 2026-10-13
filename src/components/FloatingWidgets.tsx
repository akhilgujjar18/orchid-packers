import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface FloatingWidgetsProps {
  onQuoteClick: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onQuoteClick }) => {
  const whatsappUrl = `https://wa.me/917276026115?text=${encodeURIComponent(
    'Hello Orchid Packers, I need a moving quote in Pune.'
  )}`;

  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Mobile) */}
      <aside aria-label="Quick contact" className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-2.5 px-3.5 sm:px-4 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all group border border-emerald-500"
          title="Chat on WhatsApp with Pune Coordinator"
          aria-label="Chat with Orchid Packers on WhatsApp"
        >
          {/* Custom WhatsApp SVG icon */}
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.148-.54-1.745-.722-2.868-2.518-2.955-2.634-.087-.116-.709-.944-.709-1.8 0-.855.449-1.277.608-1.451.16-.175.348-.219.464-.219.116 0 .232.001.333.006.107.006.251-.041.392.299.145.349.493 1.205.536 1.293.044.087.073.19.015.305-.058.117-.087.19-.174.291-.087.102-.183.228-.261.306-.087.087-.179.182-.077.357.102.175.452.747.969 1.209.666.594 1.228.778 1.402.865.174.088.276.073.378-.044.102-.116.435-.509.551-.684.116-.174.232-.145.392-.087.16.058 1.015.479 1.189.566.174.087.29.131.333.204.043.072.043.42-.101.825z" />
          </svg>
          <span className="hidden sm:inline">WhatsApp Instant Quote</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </aside>

      {/* Sticky Bottom Bar for Mobile Only */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg">
        <a
          href="tel:+917276026115"
          className="flex-1 py-2 px-3 rounded-xl bg-blue-50 border border-blue-200 text-[#0052FF] font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Desk</span>
        </a>

        <button
          onClick={onQuoteClick}
          className="flex-1 py-2 px-3 rounded-xl bg-[#0052FF] text-white font-extrabold text-xs flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-md shadow-blue-500/25"
        >
          <span>Get Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </aside>
    </>
  );
};
