import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'Why Orchid', href: '#why-us' },
    { label: 'Moving Process', href: '#process' },
    { label: 'Pune Localities', href: '#localities' },
    { label: 'Live Map', href: '#pune-map' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Wordmark (Porter-inspired Electric Blue) */}
          <div className="flex items-center">
            <a 
              href="#hero" 
              className="flex items-center gap-3 text-slate-900 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0052FF] flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-extrabold text-xl tracking-tighter">
                OP
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                  Orchid <span className="text-[#0052FF]">Packers</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-0.5">
                  Pune & All India Relocation
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#0052FF] transition-colors py-1 hover:border-b-2 hover:border-[#0052FF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Contact & Quote CTA */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="tel:+917276026115"
              className="flex items-center gap-2.5 text-sm font-bold text-slate-800 hover:text-[#0052FF] transition-colors"
              title="Call Pune Dispatch Helpline"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0052FF] border border-blue-200">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-500 font-semibold uppercase leading-none">Pune Desk</span>
                <span className="whitespace-nowrap tracking-wide text-sm font-extrabold text-slate-900">+91 72760 26115</span>
              </div>
            </a>

            <button
              onClick={onQuoteClick}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#0052FF] hover:bg-[#0042D4] rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-95 whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+917276026115"
              className="p-2.5 text-[#0052FF] bg-blue-50 rounded-lg border border-blue-200 sm:hidden"
              aria-label="Call Orchid Packers"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-[#0052FF] text-base font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
              <a
                href="tel:+917276026115"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-50 text-[#0052FF] font-bold border border-blue-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Pune Office: +91 72760 26115</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#0052FF] text-white font-extrabold text-center shadow-md shadow-blue-500/20 active:scale-98"
              >
                Get Free Moving Quote →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
