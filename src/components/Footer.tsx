import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle,
  Heart,
} from 'lucide-react';

interface FooterProps {
  onOpenChecklist: () => void;
  onOpenPolicy: (title: string) => void;
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenChecklist,
  onOpenPolicy,
  onQuoteClick,
}) => {
  return (
    <footer className="bg-[#091733] text-slate-300 border-t border-blue-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-blue-900/80">
          
          {/* Col 1 & 2: Brand Info & Licenses */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0052FF] flex items-center justify-center shadow-md shadow-blue-500/20">
                <span className="font-extrabold text-xl tracking-tighter text-white">OP</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Orchid <span className="text-sky-400 font-extrabold">Packers</span> & Movers
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pune&apos;s trusted relocation specialist delivering stress-free home and office shifting with 5-layer superior packing, live WhatsApp GPS tracking, and guaranteed zero hidden charges since 2011.
            </p>

            {/* License & Certification Credentials */}
            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IBA Approved Transporter (Code: OPM-7821)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span>GST Registered: 27AAFCO8945Q1ZS (SAC: 9965)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ISO 9001:2015 Quality Relocation Certified</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-sky-300 transition-colors">
                  Get Instant Quote
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Relocation Services
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-sky-300 transition-colors">
                  Pune Cost Estimator
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-300 transition-colors">
                  5-Layer Packing Safety
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-sky-300 transition-colors">
                  4-Step Moving Process
                </a>
              </li>
              <li>
                <a href="#localities" className="hover:text-sky-300 transition-colors">
                  Pune Localities Covered
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-sky-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Customer Tools */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Customer Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenChecklist}
                  className="hover:text-sky-300 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  <span>Moving Day Checklist (Printable)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Transit Insurance & Damage Claims')}
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer"
                >
                  Transit Insurance Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Terms of Service & Carriage Contract')}
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer"
                >
                  Terms of Carriage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('Privacy Policy')}
                  className="hover:text-sky-300 transition-colors text-left cursor-pointer"
                >
                  Privacy & Data Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onQuoteClick}
                  className="hover:text-sky-300 transition-colors text-left font-bold text-sky-400 cursor-pointer"
                >
                  Schedule Virtual Survey →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Both Office Locations & Contact */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Pune Office Locations &amp; Helpline
            </h4>

            {/* Office 1: Tathawade */}
            <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-900/80 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-400 text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  Office 1 (Tathawade / PCMC)
                </span>
                <span className="text-[10px] bg-sky-950 text-sky-300 border border-sky-800/60 px-1.5 py-0.5 rounded font-medium">
                  Head Office
                </span>
              </div>
              <p className="leading-relaxed text-slate-300 text-[11px]">
                Survey No. 78, 2/2, opp. Laxmi Niwas, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033
              </p>
              <div className="flex items-center gap-2 pt-1.5 border-t border-blue-900/50 text-xs">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="tel:+917276026115" className="text-white hover:text-sky-300 font-bold transition-colors">
                  +91 72760 26115
                </a>
                <span className="text-slate-400 text-[10px]">(Direct &amp; WhatsApp)</span>
              </div>
            </div>

            {/* Office 2: Karvenagar */}
            <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-900/80 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-400 text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  Office 2 (Karvenagar / Pune)
                </span>
                <span className="text-[10px] bg-sky-950 text-sky-300 border border-sky-800/60 px-1.5 py-0.5 rounded font-medium">
                  City Branch
                </span>
              </div>
              <p className="leading-relaxed text-slate-300 text-[11px]">
                S. No 53, Madan Market, Wadarwasti, Sramik Vasahat, Karvenagar, Pune, Maharashtra 411052
              </p>
              <div className="flex items-center gap-2 pt-1.5 border-t border-blue-900/50 text-xs">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="tel:+917276026115" className="text-white hover:text-sky-300 font-bold transition-colors">
                  +91 72760 26115
                </a>
                <span className="text-slate-400 text-[10px]">(Direct &amp; WhatsApp)</span>
              </div>
            </div>

            {/* General Contact & Hours */}
            <div className="pt-1 flex flex-col sm:flex-row lg:flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:orchidmoverspackers@gmail.com" className="text-slate-300 hover:text-sky-300 text-[11px] truncate">
                  orchidmoverspackers@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Working Hours: Mon – Sun: 7:00 AM – 10:00 PM</span>
              </div>
            </div>

          </div>

        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Payment Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
              Accepted Payments:
            </span>
            <div className="flex items-center gap-2 text-slate-300 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900">UPI (GPay / PhonePe / Paytm)</span>
              <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900">Net Banking</span>
              <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900">Credit / Debit Cards</span>
              <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900">NEFT / RTGS</span>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="text-slate-400 text-center md:text-right text-[11px]">
            © {new Date().getFullYear()} Orchid Packers and Movers Pune. All rights reserved.
          </div>

        </div>

        {/* Developer Credit at the ending of the website */}
        <div className="mt-6 pt-4 border-t border-blue-900/50 flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <span>Designed and Developed with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block shrink-0 animate-pulse" />
          <span className="font-medium text-slate-200">By Akhil Gujjar</span>
        </div>

      </div>
    </footer>
  );
};
