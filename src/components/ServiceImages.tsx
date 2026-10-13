import React, { useState } from 'react';
import householdShiftingImg from '../assets/images/regenerated_image_1790165581094.png';
import corporateOfficeImg from '../assets/images/regenerated_image_1790166837052.png';
import specializedPackingImg from '../assets/images/regenerated_image_1790168976783.png';
import carTransportationImg from '../assets/images/car_transportation_real.jpg';
import carCarrierMaybachImg from '../assets/images/car_carrier_maybach.jpg';
import bikeTransportationImg from '../assets/images/regenerated_image_1790168975513.webp';
import warehouseStorageImg from '../assets/images/regenerated_image_1790168970737.png';

interface VisualProps {
  className?: string;
}

/**
 * 1. Household Shifting Visual
 * Authentic Orchid Packers & Movers crew in navy blue branded uniforms
 * carefully packing household furniture with bubble wrap, stretch film, and 5-ply cartons.
 */
export const HouseholdShiftingVisual: React.FC<VisualProps> = ({ className = 'w-full h-52' }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const photoSources = [
    householdShiftingImg,
    'https://i.ibb.co/Q3NwbQsh/Codex-Image-Sep-23-2026-04-40-21-PM.png',
    'https://i.ibb.co/jPMX6f7q/Codex-Image-Sep-23-2026-04-40-21-PM.png',
  ];

  const handleImageError = () => {
    if (photoIndex + 1 < photoSources.length) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <div className={`relative ${className} bg-slate-900 overflow-hidden flex items-center justify-center select-none group`}>
        <img
          src={photoSources[photoIndex]}
          alt="Orchid Packers and Movers Household Shifting Crew packing an apartment with bubble wrap and sturdy carton boxes"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark vignette overlay for high-contrast card UI */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />
        
        {/* Verified In-House Crew Tag */}
        <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Real Move: Orchid Crew · 5-Layer Packing</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-gradient-to-b from-amber-50/80 to-slate-100 overflow-hidden flex items-center justify-center select-none`}>
      <svg
        viewBox="0 0 600 340"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="70%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c89d7c" />
            <stop offset="100%" stopColor="#9a6e4d" />
          </linearGradient>
          <linearGradient id="sofaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d9a86c" />
            <stop offset="50%" stopColor="#c79153" />
            <stop offset="100%" stopColor="#ab773e" />
          </linearGradient>
          <linearGradient id="boxTopGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e6ba81" />
            <stop offset="100%" stopColor="#c79153" />
          </linearGradient>
          <linearGradient id="bubbleFilm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#bae6fd" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>
          <pattern id="bubbleDots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="5" fill="#38bdf8" fillOpacity="0.18" stroke="#ffffff" strokeWidth="0.8" />
          </pattern>
          <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Room Background */}
        <rect width="600" height="230" fill="url(#wallGrad)" />
        {/* Modern baseboard */}
        <rect y="222" width="600" height="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
        {/* Parquet wooden floor */}
        <rect y="234" width="600" height="106" fill="url(#floorGrad)" />
        {/* Floor plank lines */}
        <path d="M0 260 H600 M0 290 H600 M0 320 H600" stroke="#784f31" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M120 234 V260 M340 234 V260 M520 234 V260 M220 260 V290 M440 260 V290 M80 290 V320 M380 290 V320" stroke="#784f31" strokeWidth="1" strokeOpacity="0.4" />

        {/* Wall Art Frame (Wrapped ready for shifting) */}
        <g transform="translate(60, 40)" filter="url(#dropShadow)">
          <rect width="130" height="90" rx="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
          <rect x="6" y="6" width="118" height="78" rx="2" fill="#e2e8f0" />
          <path d="M15 70 L45 35 L75 60 L100 25 L120 70 Z" fill="#94a3b8" opacity="0.6" />
          {/* Corner protective foam caps */}
          <rect x="0" y="0" width="22" height="22" fill="#f59e0b" rx="2" />
          <rect x="108" y="0" width="22" height="22" fill="#f59e0b" rx="2" />
          <rect x="0" y="68" width="22" height="22" fill="#f59e0b" rx="2" />
          <rect x="108" y="68" width="22" height="22" fill="#f59e0b" rx="2" />
          <rect x="0" y="0" width="130" height="90" fill="url(#bubbleFilm)" opacity="0.6" />
          <rect x="35" y="38" width="60" height="16" fill="#ef4444" rx="3" />
          <text x="65" y="50" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1">FRAGILE ART</text>
        </g>

        {/* Sofa being wrapped */}
        <g transform="translate(190, 110)" filter="url(#dropShadow)">
          {/* Shadow beneath sofa */}
          <ellipse cx="140" cy="148" rx="135" ry="14" fill="#000000" opacity="0.28" />

          {/* Sofa base */}
          <rect x="20" y="70" width="240" height="65" rx="10" fill="url(#sofaGrad)" />
          {/* Backrest */}
          <rect x="30" y="10" width="220" height="70" rx="12" fill="url(#sofaGrad)" />
          {/* Armrests */}
          <rect x="10" y="40" width="35" height="85" rx="8" fill="#1e3a8a" />
          <rect x="235" y="40" width="35" height="85" rx="8" fill="#1e3a8a" />
          {/* Seat Cushions */}
          <rect x="45" y="68" width="90" height="48" rx="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
          <rect x="145" y="68" width="90" height="48" rx="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />

          {/* Wooden sofa legs */}
          <polygon points="35,135 45,135 48,152 32,152" fill="#78350f" />
          <polygon points="245,135 255,135 258,152 242,152" fill="#78350f" />

          {/* Protective Stretch Film & Bubble Layer Wrapping over Sofa */}
          <rect x="15" y="20" width="160" height="115" rx="10" fill="url(#bubbleFilm)" opacity="0.85" />
          <rect x="15" y="20" width="160" height="115" rx="10" fill="url(#bubbleDots)" opacity="0.7" />
          
          {/* Heavy Packing Tape bands */}
          <rect x="10" y="62" width="260" height="10" fill="#f59e0b" opacity="0.9" />
          <text x="140" y="70" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">ORCHID PACKERS PUNE · SECURE WRAP</text>
          <rect x="80" y="15" width="10" height="120" fill="#f59e0b" opacity="0.9" />
          <rect x="180" y="15" width="10" height="120" fill="#f59e0b" opacity="0.9" />

          {/* Protective Foam Corner Blocks */}
          <polygon points="10,40 30,40 30,70 10,70" fill="#10b981" />
          <polygon points="250,40 270,40 270,70 250,70" fill="#10b981" />
        </g>

        {/* 5-Ply Corrugated Cartons in foreground */}
        {/* Main Center Box */}
        <g transform="translate(420, 160)" filter="url(#dropShadow)">
          {/* Shadow */}
          <ellipse cx="75" cy="125" rx="70" ry="12" fill="#000000" opacity="0.3" />

          {/* Box Body */}
          <polygon points="20,40 100,20 145,55 65,75" fill="url(#boxTopGrad)" stroke="#8d5b27" strokeWidth="1" />
          <polygon points="20,40 65,75 65,130 20,95" fill="url(#boxGrad)" stroke="#8d5b27" strokeWidth="1" />
          <polygon points="65,75 145,55 145,110 65,130" fill="#a06e37" stroke="#8d5b27" strokeWidth="1" />

          {/* Packing Tape on Box */}
          <polygon points="40,35 120,15 125,23 45,43" fill="#ea580c" opacity="0.9" />
          <polygon points="63,75 67,74 67,130 63,130" fill="#ea580c" opacity="0.9" />

          {/* Shipping Label on Box */}
          <g transform="translate(75, 75) rotate(-13)">
            <rect width="45" height="30" fill="#ffffff" rx="2" stroke="#94a3b8" strokeWidth="0.5" />
            <text x="4" y="9" fill="#0f172a" fontSize="5" fontWeight="bold">ORCHID MOVERS</text>
            <text x="4" y="15" fill="#2563eb" fontSize="4.5" fontWeight="bold">BANER ➔ HINJEWADI</text>
            <text x="4" y="21" fill="#475569" fontSize="4">ROOM: MASTER BED</text>
            {/* Barcode lines */}
            <path d="M4 23 V28 M7 23 V28 M9 23 V28 M12 23 V28 M14 23 V28 M17 23 V28 M20 23 V28 M24 23 V28 M28 23 V28 M33 23 V28 M38 23 V28" stroke="#0f172a" strokeWidth="1" />
          </g>

          {/* Fragile Glass Stamp */}
          <g transform="translate(30, 60)">
            <rect width="26" height="15" fill="#fee2e2" rx="1" stroke="#ef4444" strokeWidth="0.5" />
            <text x="13" y="10" fill="#b91c1c" fontSize="4.5" fontWeight="bold" textAnchor="middle">FRAGILE</text>
          </g>
        </g>

        {/* Second Smaller Carton */}
        <g transform="translate(365, 210)" filter="url(#dropShadow)">
          <polygon points="10,25 60,10 90,32 40,47" fill="url(#boxTopGrad)" stroke="#8d5b27" strokeWidth="1" />
          <polygon points="10,25 40,47 40,85 10,63" fill="url(#boxGrad)" stroke="#8d5b27" strokeWidth="1" />
          <polygon points="40,47 90,32 90,70 40,85" fill="#a06e37" stroke="#8d5b27" strokeWidth="1" />
          <rect x="48" y="44" width="30" height="18" fill="#ffffff" rx="1" stroke="#cbd5e1" strokeWidth="0.5" />
          <text x="50" y="52" fill="#0f172a" fontSize="4" fontWeight="bold">BOX #04 / CROCKERY</text>
          <text x="50" y="58" fill="#059669" fontSize="3.5" fontWeight="bold">5-PLY HEAVY DUTY</text>
        </g>

        {/* Industrial Tape Dispenser Gun */}
        <g transform="translate(140, 260)" filter="url(#dropShadow)">
          <ellipse cx="25" cy="18" rx="20" ry="12" fill="#ea580c" />
          <circle cx="25" cy="18" r="9" fill="#fed7aa" stroke="#c2410c" strokeWidth="1" />
          <rect x="35" y="14" width="22" height="8" rx="2" fill="#1e293b" />
          <rect x="20" y="24" width="8" height="16" rx="2" fill="#0f172a" />
        </g>

        {/* Real Badge Bar */}
        <g transform="translate(18, 305)">
          <rect width="210" height="24" rx="12" fill="#0f172a" opacity="0.9" />
          <circle cx="12" cy="12" r="5" fill="#10b981" />
          <text x="24" y="15" fill="#ffffff" fontSize="9.5" fontWeight="600">
            5-Ply Corrugated · Sofa Stretch Film Protected
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 2. Corporate & Office Relocation Visual
 * Pune IT park office (Hinjewadi/Kharadi): Dual monitors wrapped in antistatic ESD bubble covers,
 * server rack flight case, color-coded workstation crates with tamper seals.
 */
export const CorporateRelocationVisual: React.FC<VisualProps> = ({ className = 'w-full h-52' }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const photoSources = [
    corporateOfficeImg,
    '/corporate-office.svg',
    '/corporate-office.png',
    '/assets/images/corporate_office.png',
  ];

  const handleImageError = () => {
    if (photoIndex + 1 < photoSources.length) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <div className={`relative ${className} bg-slate-900 overflow-hidden flex items-center justify-center select-none group`}>
        <img
          src={photoSources[photoIndex]}
          alt="Orchid Packers and Movers Corporate & Office Relocation in Pune - Modern IT park moving crew"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark vignette overlay for high-contrast card UI */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />
        
        {/* Verified Corporate Fleet Tag */}
        <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span>Real Move: Orchid IT Fleet · Zero Downtime</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-gradient-to-b from-slate-100 to-blue-50 overflow-hidden flex items-center justify-center select-none`}>
      <svg
        viewBox="0 0 600 340"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="officeWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="deskTop" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="serverCase" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <pattern id="esdPinkGrid" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#f43f5e" fillOpacity="0.12" />
            <circle cx="6" cy="6" r="3.5" fill="#fda4af" fillOpacity="0.4" stroke="#e11d48" strokeWidth="0.5" />
          </pattern>
          <filter id="corpShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Corporate Office Glass & Wall */}
        <rect width="600" height="220" fill="url(#officeWall)" />
        {/* Glass panel divider */}
        <rect x="360" y="20" width="220" height="190" rx="4" fill="#93c5fd" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="1" strokeDasharray="6 4" />
        <line x1="360" y1="110" x2="580" y2="110" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
        <text x="470" y="60" fill="#64748b" fontSize="8" fontWeight="600" textAnchor="middle" letterSpacing="1">TECH PARK TOWER B · 4TH FL</text>

        {/* Carpet Tile Floor */}
        <rect y="220" width="600" height="120" fill="#334155" />
        <path d="M0 260 H600 M0 300 H600" stroke="#475569" strokeWidth="1" />
        <path d="M100 220 V340 M250 220 V340 M400 220 V340 M550 220 V340" stroke="#475569" strokeWidth="1" />

        {/* Modular Office Desk */}
        <g transform="translate(60, 160)" filter="url(#corpShadow)">
          {/* Desk Surface */}
          <polygon points="20,30 320,30 350,75 50,75" fill="url(#deskTop)" stroke="#94a3b8" strokeWidth="1" />
          {/* Metal Desk Legs */}
          <rect x="55" y="75" width="10" height="95" fill="#64748b" />
          <rect x="335" y="75" width="10" height="95" fill="#64748b" />
          <rect x="55" y="165" width="35" height="5" rx="2" fill="#475569" />
          <rect x="315" y="165" width="35" height="5" rx="2" fill="#475569" />

          {/* Monitor 1 (Wrapped in ESD Antistatic Pink Sleeve) */}
          <g transform="translate(80, -75)">
            {/* Monitor stand */}
            <rect x="42" y="70" width="8" height="35" fill="#0f172a" />
            <ellipse cx="46" cy="105" rx="24" ry="5" fill="#334155" />
            {/* Screen bezel */}
            <rect x="0" y="0" width="92" height="68" rx="4" fill="#0f172a" />
            {/* Pink ESD Wrap layer */}
            <rect x="-3" y="-3" width="98" height="74" rx="6" fill="url(#esdPinkGrid)" stroke="#f43f5e" strokeWidth="1" />
            {/* Security tag */}
            <rect x="18" y="22" width="56" height="24" fill="#ffffff" rx="2" stroke="#e11d48" strokeWidth="0.8" />
            <text x="46" y="32" fill="#9f1239" fontSize="5.5" fontWeight="bold" textAnchor="middle">ESD PROTECTED</text>
            <text x="46" y="40" fill="#0f172a" fontSize="5" fontWeight="bold" textAnchor="middle">DEV-WS-082 (PH-1)</text>
          </g>

          {/* Monitor 2 (Second workstation screen) */}
          <g transform="translate(195, -75)">
            <rect x="42" y="70" width="8" height="35" fill="#0f172a" />
            <ellipse cx="46" cy="105" rx="24" ry="5" fill="#334155" />
            <rect x="0" y="0" width="92" height="68" rx="4" fill="#0f172a" />
            <rect x="-3" y="-3" width="98" height="74" rx="6" fill="url(#esdPinkGrid)" stroke="#f43f5e" strokeWidth="1" />
            <rect x="18" y="22" width="56" height="24" fill="#ffffff" rx="2" stroke="#e11d48" strokeWidth="0.8" />
            <text x="46" y="32" fill="#9f1239" fontSize="5.5" fontWeight="bold" textAnchor="middle">ESD PROTECTED</text>
            <text x="46" y="40" fill="#0f172a" fontSize="5" fontWeight="bold" textAnchor="middle">DEV-WS-083 (PH-1)</text>
          </g>
        </g>

        {/* Heavy-Duty Server Road Case / Flight Case */}
        <g transform="translate(410, 140)" filter="url(#corpShadow)">
          <ellipse cx="70" cy="175" rx="65" ry="12" fill="#000000" opacity="0.35" />
          {/* Main Case Body */}
          <rect width="140" height="150" rx="8" fill="url(#serverCase)" stroke="#64748b" strokeWidth="2" />
          {/* Aluminum Edging & Corner Ball Protectors */}
          <rect x="0" y="0" width="14" height="150" fill="#94a3b8" />
          <rect x="126" y="0" width="14" height="150" fill="#94a3b8" />
          <rect x="0" y="0" width="140" height="12" fill="#94a3b8" />
          <rect x="0" y="138" width="140" height="12" fill="#94a3b8" />
          <rect x="0" y="55" width="140" height="8" fill="#cbd5e1" />
          {/* Industrial butterfly latches */}
          <circle cx="70" cy="59" r="8" fill="#e2e8f0" stroke="#475569" strokeWidth="1" />
          {/* Recessed spring-loaded handles */}
          <rect x="60" y="90" width="20" height="35" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />

          {/* Heavy Server Case Stencil */}
          <g transform="translate(25, 18)">
            <rect width="90" height="26" fill="#fef08a" rx="2" stroke="#ca8a04" strokeWidth="1" />
            <text x="45" y="10" fill="#854d0e" fontSize="5.5" fontWeight="bold" textAnchor="middle">PUNE DATACENTER RACK</text>
            <text x="45" y="18" fill="#0f172a" fontSize="5" fontWeight="bold" textAnchor="middle">HIGH-PRIORITY CRITICAL</text>
            <text x="45" y="24" fill="#475569" fontSize="4" textAnchor="middle">ZERO-DOWNTIME CORRIDOR</text>
          </g>

          {/* Heavy-Duty Castor Wheels */}
          <circle cx="25" cy="158" r="8" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
          <circle cx="115" cy="158" r="8" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
        </g>

        {/* Color-Coded Department Relocation Crate */}
        <g transform="translate(30, 220)" filter="url(#corpShadow)">
          <polygon points="10,25 90,10 135,35 55,50" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
          <polygon points="10,25 55,50 55,100 10,75" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1" />
          <polygon points="55,50 135,35 135,85 55,100" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1" />
          {/* Tamper evident security seal */}
          <rect x="42" y="55" width="26" height="38" fill="#ffffff" rx="1" />
          <text x="55" y="65" fill="#0f172a" fontSize="4" fontWeight="bold" textAnchor="middle">IT ENG</text>
          <text x="55" y="72" fill="#059669" fontSize="4" fontWeight="bold" textAnchor="middle">SEALED</text>
          <text x="55" y="80" fill="#64748b" fontSize="3.5" textAnchor="middle">#SN-9821</text>
        </g>

        {/* Trust Overlay Tag */}
        <g transform="translate(18, 305)">
          <rect width="230" height="24" rx="12" fill="#0f172a" opacity="0.9" />
          <circle cx="12" cy="12" r="5" fill="#38bdf8" />
          <text x="24" y="15" fill="#ffffff" fontSize="9.5" fontWeight="600">
            Anti-Static ESD Wrapping · Flight Case Protection
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 3. Specialized Packing Visual
 * Heavy-duty wooden export crating with stencil marks ("FRAGILE - GLASSWARE", "THIS SIDE UP"),
 * 5-layer foam cross-section, strapping bands, and corner protectors.
 */
export const SpecializedPackingVisual: React.FC<VisualProps> = ({ className = 'w-full h-52' }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const photoSources = [
    specializedPackingImg,
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=85',
  ];

  const handleImageError = () => {
    if (photoIndex + 1 < photoSources.length) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <div className={`relative ${className} bg-slate-900 overflow-hidden flex items-center justify-center select-none group`}>
        <img
          src={photoSources[photoIndex]}
          alt="Orchid Packers and Movers Specialized Packing - Multi-layer protective packaging, bubble wrap and wooden crating"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark vignette overlay for high-contrast card UI */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />
        
        {/* Verified Specialized Packing Tag */}
        <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold shadow-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Real Move: Multi-Layer Packaging · Fragile Care</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-gradient-to-b from-amber-50/60 to-stone-200 overflow-hidden flex items-center justify-center select-none`}>
      <svg
        viewBox="0 0 600 340"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="woodPlank1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="50%" stopColor="#bc8a5f" />
            <stop offset="100%" stopColor="#a47148" />
          </linearGradient>
          <linearGradient id="woodPlank2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e6ba81" />
            <stop offset="100%" stopColor="#b07d4f" />
          </linearGradient>
          <filter id="crateShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="7" stdDeviation="6" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Workshop Background */}
        <rect width="600" height="340" fill="#f5f5f4" />
        <rect y="240" width="600" height="100" fill="#e7e5e4" stroke="#d6d3d1" strokeWidth="1" />

        {/* Background Packaging Material Rolls */}
        <g transform="translate(440, 40)" opacity="0.8">
          {/* Bubble Wrap Mega Roll */}
          <rect x="0" y="20" width="60" height="190" rx="10" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1.5" />
          <ellipse cx="30" cy="20" rx="30" ry="12" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
          <ellipse cx="30" cy="20" r="10" fill="#7dd3fc" />
          <text x="30" y="110" fill="#0284c7" fontSize="7" fontWeight="bold" textAnchor="middle" transform="rotate(-90 30 110)">
            VIRGIN AIR BUBBLE 100M
          </text>
        </g>
        <g transform="translate(515, 60)" opacity="0.8">
          {/* Stretch Film Roll */}
          <rect x="0" y="20" width="45" height="160" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="22" cy="20" rx="22" ry="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
          <ellipse cx="22" cy="20" r="7" fill="#94a3b8" />
        </g>

        {/* Main Hand-Built Treated Pine Wood Crate */}
        <g transform="translate(100, 70)" filter="url(#crateShadow)">
          {/* Shadow */}
          <ellipse cx="140" cy="225" rx="140" ry="16" fill="#000000" opacity="0.3" />

          {/* Crate Outer Frame */}
          <rect width="280" height="210" rx="4" fill="url(#woodPlank1)" stroke="#78350f" strokeWidth="2" />

          {/* Horizontal Planks */}
          <line x1="0" y1="42" x2="280" y2="42" stroke="#78350f" strokeWidth="2" />
          <line x1="0" y1="84" x2="280" y2="84" stroke="#78350f" strokeWidth="2" />
          <line x1="0" y1="126" x2="280" y2="126" stroke="#78350f" strokeWidth="2" />
          <line x1="0" y1="168" x2="280" y2="168" stroke="#78350f" strokeWidth="2" />

          {/* Diagonal Pine Bracing */}
          <line x1="20" y1="15" x2="260" y2="195" stroke="#78350f" strokeWidth="12" strokeLinecap="round" />
          <line x1="20" y1="15" x2="260" y2="195" stroke="url(#woodPlank2)" strokeWidth="8" strokeLinecap="round" />

          <line x1="260" y1="15" x2="20" y2="195" stroke="#78350f" strokeWidth="12" strokeLinecap="round" />
          <line x1="260" y1="15" x2="20" y2="195" stroke="url(#woodPlank2)" strokeWidth="8" strokeLinecap="round" />

          {/* Border Brackets (Steel L-Corners) */}
          <rect x="0" y="0" width="30" height="16" fill="#475569" />
          <rect x="0" y="0" width="16" height="30" fill="#475569" />
          <rect x="250" y="0" width="30" height="16" fill="#475569" />
          <rect x="264" y="0" width="16" height="30" fill="#475569" />
          <rect x="0" y="194" width="30" height="16" fill="#475569" />
          <rect x="0" y="180" width="16" height="30" fill="#475569" />
          <rect x="250" y="194" width="30" height="16" fill="#475569" />
          <rect x="264" y="180" width="16" height="30" fill="#475569" />

          {/* Heavy Duty Poly Strapping Belts */}
          <rect x="60" y="-4" width="14" height="218" fill="#1e293b" />
          <rect x="206" y="-4" width="14" height="218" fill="#1e293b" />
          {/* Metal Tension Buckles */}
          <rect x="58" y="95" width="18" height="16" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
          <rect x="204" y="95" width="18" height="16" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />

          {/* Bold Industrial Stencils */}
          <g transform="translate(85, 30)">
            {/* Wine glass fragile symbol */}
            <path d="M55 20 Q55 35 45 42 L45 52 L35 52 L35 55 L65 55 L65 52 L55 52 L55 42 Q45 35 45 20 Z" fill="#b91c1c" />
            <path d="M48 24 L52 28 L49 32 L53 36" stroke="#ffffff" strokeWidth="1.5" />
            {/* THIS SIDE UP ARROWS */}
            <path d="M85 45 V25 M78 32 L85 24 L92 32" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <path d="M105 45 V25 M98 32 L105 24 L112 32" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

            <text x="75" y="70" fill="#0f172a" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="1">
              FRAGILE · GLASS
            </text>
            <text x="75" y="85" fill="#78350f" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              CUSTOM PINEWOOD CRATE #CR-44
            </text>
          </g>

          {/* Cutaway inspection window showing 5-layer foam inside */}
          <g transform="translate(85, 125)">
            <rect width="110" height="60" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
            <text x="55" y="14" fill="#0f172a" fontSize="6.5" fontWeight="bold" textAnchor="middle">PACKAGING SPECIFICATION</text>
            <text x="8" y="26" fill="#15803d" fontSize="5" fontWeight="bold">✓ Layer 1: EPE Foam Lining (20mm)</text>
            <text x="8" y="36" fill="#15803d" fontSize="5" fontWeight="bold">✓ Layer 2: Virgin Bubble Wrap (Double)</text>
            <text x="8" y="46" fill="#15803d" fontSize="5" fontWeight="bold">✓ Layer 3: Corner Edge Reinforcement</text>
            <text x="8" y="55" fill="#15803d" fontSize="5" fontWeight="bold">✓ Layer 4: Moisture Barrier Sealed</text>
          </g>
        </g>

        {/* Trust Overlay Tag */}
        <g transform="translate(18, 305)">
          <rect width="240" height="24" rx="12" fill="#0f172a" opacity="0.9" />
          <circle cx="12" cy="12" r="5" fill="#f59e0b" />
          <text x="24" y="15" fill="#ffffff" fontSize="9.5" fontWeight="600">
            Custom Pine Wood Crating · Edge Protectors
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 4. Car Transportation Visual
 * Enclosed hydraulic car carrier vehicle trailer with ramp, modern passenger SUV safely secured
 * with yellow ratchet wheel straps, wheel chocks, and scratch guard blankets.
 */
export const CarTransportVisual: React.FC<VisualProps> = ({ className = 'w-full h-52' }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const photoSources = [
    carTransportationImg,
    carCarrierMaybachImg,
  ];

  const handleImageError = () => {
    if (photoIndex + 1 < photoSources.length) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <div className={`relative ${className} bg-slate-900 overflow-hidden flex items-center justify-center select-none group`}>
        <img
          src={photoSources[photoIndex]}
          alt="Orchid Packers and Movers Car Transportation - Enclosed hydraulic multi-vehicle carrier trailer"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark vignette overlay for high-contrast card UI */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />
        
        {/* Verified Car Carrier Tag */}
        <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold shadow-md">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Real Move: Hydraulic Car Carrier · GPS Tracking</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-gradient-to-b from-sky-50 to-slate-200 overflow-hidden flex items-center justify-center select-none`}>
      <svg
        viewBox="0 0 600 340"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="highwaySky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <linearGradient id="trailerBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="carPaint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <filter id="carShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Sky & Logistics Yard Background */}
        <rect width="600" height="230" fill="url(#highwaySky)" />
        {/* Distant Pune Expressway Highway hills silhouette */}
        <path d="M0 210 Q90 170 200 200 T420 180 T600 205 L600 230 L0 230 Z" fill="#94a3b8" opacity="0.3" />

        {/* Asphalt Yard Floor */}
        <rect y="230" width="600" height="110" fill="#334155" />
        <line x1="0" y1="280" x2="600" y2="280" stroke="#facc15" strokeWidth="4" strokeDasharray="25 15" />

        {/* Enclosed Hydraulic Auto Carrier Trailer (Cross Section / Cutaway View) */}
        <g transform="translate(40, 50)" filter="url(#carShadow)">
          {/* Main Enclosed Carrier Frame */}
          <rect x="0" y="20" width="520" height="190" rx="8" fill="url(#trailerBody)" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 0" />
          
          {/* Interior Perforated Steel Deck Platform */}
          <rect x="15" y="150" width="490" height="16" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
          <path d="M25 158 H495" stroke="#0f172a" strokeWidth="3" strokeDasharray="6 4" />

          {/* Hydraulic Lift Mechanism Columns */}
          <rect x="30" y="35" width="16" height="135" fill="#64748b" stroke="#cbd5e1" strokeWidth="1" />
          <rect x="475" y="35" width="16" height="135" fill="#64748b" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="38" cy="85" r="5" fill="#facc15" />
          <circle cx="483" cy="85" r="5" fill="#facc15" />

          {/* Modern SUV Car Secured Inside Trailer */}
          <g transform="translate(100, 52)" filter="url(#carShadow)">
            {/* Shadow beneath car */}
            <ellipse cx="160" cy="108" rx="145" ry="8" fill="#000000" opacity="0.5" />

            {/* Car Lower Body */}
            <path d="M25 75 Q40 50 85 48 L225 48 Q275 52 295 72 L300 85 Q300 95 285 96 L25 96 Q15 96 15 88 Z" fill="url(#carPaint)" />
            {/* Cabin & Windshield */}
            <path d="M75 50 L115 15 L215 15 L248 50 Z" fill="#1e293b" />
            <path d="M120 18 L208 18 L238 48 L88 48 Z" fill="#93c5fd" opacity="0.6" stroke="#ffffff" strokeWidth="0.8" />
            {/* Windows divider */}
            <rect x="160" y="18" width="6" height="30" fill="#0f172a" />

            {/* Front & Rear Lights */}
            <rect x="290" y="65" width="8" height="12" rx="2" fill="#fef08a" stroke="#eab308" strokeWidth="1" />
            <rect x="15" y="66" width="8" height="14" rx="2" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />

            {/* Wheel Arch Cutouts */}
            <circle cx="70" cy="95" r="24" fill="#0f172a" />
            <circle cx="245" cy="95" r="24" fill="#0f172a" />

            {/* Front & Rear Alloy Wheels */}
            <g transform="translate(70, 95)">
              <circle r="20" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
              <circle r="12" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1" />
              <circle r="4" fill="#0f172a" />
            </g>
            <g transform="translate(245, 95)">
              <circle r="20" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
              <circle r="12" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1" />
              <circle r="4" fill="#0f172a" />
            </g>

            {/* Heavy-Duty Yellow Ratchet Tie-Down Straps (Around Tires) */}
            <path d="M42 110 L68 76 L94 110" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
            <circle cx="68" cy="85" r="4" fill="#0f172a" stroke="#ca8a04" strokeWidth="1" />

            <path d="M217 110 L243 76 L269 110" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
            <circle cx="243" cy="85" r="4" fill="#0f172a" stroke="#ca8a04" strokeWidth="1" />

            {/* Heavy Metal Wheel Chocks */}
            <polygon points="40,112 55,112 55,98" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            <polygon points="100,112 85,112 85,98" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            <polygon points="215,112 230,112 230,98" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            <polygon points="275,112 260,112 260,98" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />

            {/* Protective Soft Hood Cover */}
            <path d="M190 48 L285 58 L275 75 L180 52 Z" fill="#ffffff" opacity="0.75" />
            <text x="230" y="64" fill="#1e3a8a" fontSize="4.5" fontWeight="bold" textAnchor="middle">ANTI-SCRATCH HOOD FILM</text>
          </g>

          {/* Trailer Branding & GPS Unit */}
          <rect x="35" y="24" width="220" height="18" fill="#0f172a" rx="4" />
          <text x="45" y="36" fill="#38bdf8" fontSize="8" fontWeight="bold">
            ORCHID CAR CARRIER · GPS LIVE FLEET
          </text>
          <circle cx="500" cy="33" r="4" fill="#10b981" />
        </g>

        {/* Trust Overlay Tag */}
        <g transform="translate(18, 305)">
          <rect width="250" height="24" rx="12" fill="#0f172a" opacity="0.9" />
          <circle cx="12" cy="12" r="5" fill="#38bdf8" />
          <text x="24" y="15" fill="#ffffff" fontSize="9.5" fontWeight="600">
            Enclosed Hydraulic Trailer · 4-Wheel Ratchet Lock
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 5. Bike Transportation Visual
 * Royal Enfield motorcycle clamped securely onto a dedicated steel vehicle stand chock,
 * handlebars and mirrors wrapped in thick protective foam and scratch-proof film.
 */
export const BikeTransportVisual: React.FC<VisualProps> = ({ className = 'w-full h-52' }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const photoSources = [
    bikeTransportationImg,
  ];

  const handleImageError = () => {
    if (photoIndex + 1 < photoSources.length) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <div className={`relative ${className} bg-slate-900 overflow-hidden flex items-center justify-center select-none group`}>
        <img
          src={photoSources[photoIndex]}
          alt="Orchid Packers and Movers Bike Transportation - Two wheeler securely clamped on dedicated trailer"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark vignette overlay for high-contrast card UI */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />
        
        {/* Verified Bike Carrier Tag */}
        <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Real Move: Secured Bike Trailer · Zero-Scratch Stand</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-gradient-to-b from-amber-50/70 to-slate-200 overflow-hidden flex items-center justify-center select-none`}>
      <svg
        viewBox="0 0 600 340"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bikeSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="tankGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="50%" stopColor="#166534" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <filter id="bikeShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* Background Depot Environment */}
        <rect width="600" height="230" fill="url(#bikeSky)" />
        <rect y="230" width="600" height="110" fill="#334155" />
        <line x1="0" y1="280" x2="600" y2="280" stroke="#64748b" strokeWidth="2" strokeDasharray="10 10" />

        {/* Dedicated Heavy-Duty Steel Bike Transport Stand / Frame */}
        <g transform="translate(110, 60)" filter="url(#bikeShadow)">
          {/* Base Stand Plinth */}
          <rect x="0" y="165" width="380" height="24" rx="4" fill="#0f172a" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="20" cy="177" r="4" fill="#facc15" />
          <circle cx="360" cy="177" r="4" fill="#facc15" />

          {/* Front Wheel Chock Clamping Tower */}
          <polygon points="260,165 310,165 295,95 275,95" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
          <rect x="280" y="110" width="12" height="40" fill="#facc15" />

          {/* Motorcycle Illustration */}
          <g transform="translate(40, 20)">
            {/* Wheels */}
            {/* Rear Wheel */}
            <circle cx="55" cy="130" r="38" fill="#1e293b" stroke="#0f172a" strokeWidth="8" />
            <circle cx="55" cy="130" r="26" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            {/* Wheel spokes */}
            <line x1="55" y1="104" x2="55" y2="156" stroke="#64748b" strokeWidth="1.5" />
            <line x1="29" y1="130" x2="81" y2="130" stroke="#64748b" strokeWidth="1.5" />
            <line x1="37" y1="112" x2="73" y2="148" stroke="#64748b" strokeWidth="1.5" />
            <line x1="37" y1="148" x2="73" y2="112" stroke="#64748b" strokeWidth="1.5" />

            {/* Front Wheel (Clamped in Chock) */}
            <circle cx="245" cy="130" r="38" fill="#1e293b" stroke="#0f172a" strokeWidth="8" />
            <circle cx="245" cy="130" r="26" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <line x1="245" y1="104" x2="245" y2="156" stroke="#64748b" strokeWidth="1.5" />
            <line x1="219" y1="130" x2="271" y2="130" stroke="#64748b" strokeWidth="1.5" />
            <line x1="227" y1="112" x2="263" y2="148" stroke="#64748b" strokeWidth="1.5" />
            <line x1="227" y1="148" x2="263" y2="112" stroke="#64748b" strokeWidth="1.5" />

            {/* Motorcycle Engine Block & Frame */}
            <rect x="110" y="100" width="55" height="42" rx="4" fill="#334155" stroke="#0f172a" strokeWidth="2" />
            <line x1="115" y1="110" x2="160" y2="110" stroke="#94a3b8" strokeWidth="2" />
            <line x1="115" y1="120" x2="160" y2="120" stroke="#94a3b8" strokeWidth="2" />
            <line x1="115" y1="130" x2="160" y2="130" stroke="#94a3b8" strokeWidth="2" />

            {/* Chrome Exhaust Pipe (Padded with Protective Foam) */}
            <path d="M140 135 L200 135 L60 135" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
            {/* Protective Foam Sleeve on Silencer */}
            <rect x="70" y="129" width="80" height="12" rx="4" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
            <text x="110" y="138" fill="#ffffff" fontSize="5" fontWeight="bold" textAnchor="middle">SILENCER GUARD</text>

            {/* Fuel Tank (Classic Teardrop) */}
            <path d="M130 75 Q160 55 190 70 Q180 90 145 90 Z" fill="url(#tankGrad)" stroke="#14532d" strokeWidth="1.5" />
            {/* Scratch barrier film over tank */}
            <path d="M135 73 Q160 58 185 70 Q175 85 148 85 Z" fill="#ffffff" opacity="0.6" stroke="#22c55e" strokeWidth="1" strokeDasharray="3 2" />

            {/* Leather Single Seat */}
            <path d="M75 75 Q105 70 135 78 L130 90 L80 88 Z" fill="#78350f" stroke="#451a03" strokeWidth="1" />

            {/* Handlebar & Chrome Mirrors (Wrapped in protective foam) */}
            <line x1="195" y1="70" x2="215" y2="35" stroke="#475569" strokeWidth="5" />
            <circle cx="215" cy="35" r="14" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
            <text x="215" y="38" fill="#78350f" fontSize="5.5" fontWeight="bold" textAnchor="middle">FOAM</text>

            {/* Heavy-Duty Ratchet Belts Securing Bike to Stand */}
            {/* Front tie-down */}
            <path d="M210 55 L280 165" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />
            <rect x="238" y="100" width="12" height="16" fill="#1e293b" rx="2" stroke="#ea580c" strokeWidth="1" />
            
            {/* Rear tie-down */}
            <path d="M100 80 L30 165" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />
            <rect x="58" y="115" width="12" height="16" fill="#1e293b" rx="2" stroke="#ea580c" strokeWidth="1" />
          </g>

          {/* Stand Safety Badge */}
          <rect x="130" y="167" width="120" height="20" fill="#0f172a" rx="4" />
          <text x="190" y="180" fill="#eab308" fontSize="6.5" fontWeight="bold" textAnchor="middle">
            ZERO-TILT STEEL CHOCK CRADLE
          </text>
        </g>

        {/* Trust Overlay Tag */}
        <g transform="translate(18, 305)">
          <rect width="255" height="24" rx="12" fill="#0f172a" opacity="0.9" />
          <circle cx="12" cy="12" r="5" fill="#f59e0b" />
          <text x="24" y="15" fill="#ffffff" fontSize="9.5" fontWeight="600">
            Dedicated Steel Chock Stand · Scratch-Free Guarantee
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 6. Warehousing & Secure Storage Visual
 * Clean, modern logistics storage facility with pallet racking, stacked wooden vaults,
 * 24/7 CCTV surveillance, barcode tags, and climate/pest monitor.
 */
export const WarehouseStorageVisual: React.FC<VisualProps> = ({ className = 'w-full h-52' }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const photoSources = [
    warehouseStorageImg,
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
  ];

  const handleImageError = () => {
    if (photoIndex + 1 < photoSources.length) {
      setPhotoIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <div className={`relative ${className} bg-slate-900 overflow-hidden flex items-center justify-center select-none group`}>
        <img
          src={photoSources[photoIndex]}
          alt="Orchid Packers and Movers Warehousing & Storage - Modern pallet rack storage facility with 24/7 CCTV surveillance"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle dark vignette overlay for high-contrast card UI */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />
        
        {/* Verified Warehouse Facility Tag */}
        <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold shadow-md">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>Real Facility: Modern Pallet Racks · 24/7 CCTV Monitored</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center select-none`}>
      <svg
        viewBox="0 0 600 340"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="whCeiling" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="epoxyFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="metalRack" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <filter id="whShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Warehouse Ceiling Structure & Skylight */}
        <rect width="600" height="150" fill="url(#whCeiling)" />
        {/* Overhead Steel Truss Girders */}
        <line x1="0" y1="30" x2="600" y2="30" stroke="#334155" strokeWidth="4" />
        <line x1="0" y1="60" x2="600" y2="60" stroke="#334155" strokeWidth="4" />
        <path d="M50 30 L100 60 L150 30 L200 60 L250 30 L300 60 L350 30 L400 60 L450 30 L500 60 L550 30" stroke="#475569" strokeWidth="2" />

        {/* High-Bay Overhead LED Lights */}
        <g transform="translate(180, 55)">
          <polygon points="15,0 25,0 35,15 5,15" fill="#f8fafc" />
          <polygon points="0,15 40,15 65,95 -25,95" fill="#f8fafc" opacity="0.12" />
        </g>
        <g transform="translate(420, 55)">
          <polygon points="15,0 25,0 35,15 5,15" fill="#f8fafc" />
          <polygon points="0,15 40,15 65,95 -25,95" fill="#f8fafc" opacity="0.12" />
        </g>

        {/* Polished Epoxy Warehouse Floor */}
        <rect y="150" width="600" height="190" fill="url(#epoxyFloor)" />
        {/* Floor safety demarcation lines */}
        <line x1="60" y1="340" x2="220" y2="150" stroke="#facc15" strokeWidth="3" />
        <line x1="540" y1="340" x2="380" y2="150" stroke="#facc15" strokeWidth="3" />

        {/* Industrial Heavy Pallet Racking System */}
        <g transform="translate(80, 60)" filter="url(#whShadow)">
          {/* Vertical Orange Steel Uprights */}
          <rect x="0" y="20" width="14" height="230" fill="url(#metalRack)" />
          <rect x="220" y="20" width="14" height="230" fill="url(#metalRack)" />
          <rect x="440" y="20" width="14" height="230" fill="url(#metalRack)" />

          {/* Horizontal Yellow Cross Beams */}
          <rect x="0" y="90" width="454" height="12" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
          <rect x="0" y="165" width="454" height="12" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
          <rect x="0" y="240" width="454" height="12" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />

          {/* Top Level Pallet & Stored Vaults */}
          <g transform="translate(25, 25)">
            <rect width="180" height="60" rx="3" fill="#d97706" stroke="#b45309" strokeWidth="1" />
            <text x="90" y="25" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
              STORAGE VAULT #PUN-884
            </text>
            <text x="90" y="38" fill="#fef3c7" fontSize="6.5" textAnchor="middle">
              CLIENT: ACCENTURE IT RESIDENCE
            </text>
            <rect x="65" y="44" width="50" height="12" fill="#ffffff" rx="2" />
            <text x="90" y="52" fill="#0f172a" fontSize="5" fontWeight="bold" textAnchor="middle">SEALED INVENTORY</text>
          </g>

          <g transform="translate(245, 25)">
            <rect width="180" height="60" rx="3" fill="#0284c7" stroke="#0369a1" strokeWidth="1" />
            <text x="90" y="25" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
              STORAGE VAULT #PUN-885
            </text>
            <text x="90" y="38" fill="#e0f2fe" fontSize="6.5" textAnchor="middle">
              3 BHK HOUSEHOLD (12 MONTHS)
            </text>
            <rect x="65" y="44" width="50" height="12" fill="#ffffff" rx="2" />
            <text x="90" y="52" fill="#0f172a" fontSize="5" fontWeight="bold" textAnchor="middle">PEST REGULATED</text>
          </g>

          {/* Middle Level Palletized Cartons */}
          <g transform="translate(25, 106)">
            {/* Wooden pallet base */}
            <rect x="0" y="52" width="180" height="8" fill="#a16207" />
            {/* Stacked cartons wrapped in clear stretch film */}
            <rect x="10" y="0" width="75" height="52" fill="#d4a373" stroke="#9a6e4d" strokeWidth="1" />
            <rect x="95" y="0" width="75" height="52" fill="#d4a373" stroke="#9a6e4d" strokeWidth="1" />
            <rect x="5" y="-2" width="170" height="56" fill="#bae6fd" opacity="0.35" stroke="#38bdf8" strokeWidth="0.8" />
          </g>

          <g transform="translate(245, 106)">
            <rect x="0" y="52" width="180" height="8" fill="#a16207" />
            <rect x="10" y="0" width="75" height="52" fill="#d4a373" stroke="#9a6e4d" strokeWidth="1" />
            <rect x="95" y="0" width="75" height="52" fill="#d4a373" stroke="#9a6e4d" strokeWidth="1" />
            <rect x="5" y="-2" width="170" height="56" fill="#bae6fd" opacity="0.35" stroke="#38bdf8" strokeWidth="0.8" />
          </g>
        </g>

        {/* 24/7 CCTV Camera with Blinking Indicator */}
        <g transform="translate(540, 20)">
          <rect x="15" y="0" width="6" height="25" fill="#64748b" />
          <ellipse cx="18" cy="28" rx="16" ry="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
          <circle cx="18" cy="28" r="6" fill="#1e293b" />
          <circle cx="18" cy="28" r="3" fill="#38bdf8" />
          {/* Live LED */}
          <circle cx="28" cy="24" r="2.5" fill="#ef4444" />
        </g>

        {/* Wall Climate & Humidity Gauge */}
        <g transform="translate(20, 80)">
          <rect width="55" height="60" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <text x="27" y="14" fill="#94a3b8" fontSize="4.5" textAnchor="middle">CLIMATE MONITOR</text>
          <text x="27" y="30" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">21°C</text>
          <text x="27" y="44" fill="#38bdf8" fontSize="7.5" fontWeight="bold" textAnchor="middle">45% RH</text>
          <text x="27" y="54" fill="#facc15" fontSize="4.5" textAnchor="middle">OPTIMAL</text>
        </g>

        {/* Trust Overlay Tag */}
        <g transform="translate(18, 305)">
          <rect width="250" height="24" rx="12" fill="#0f172a" opacity="0.9" />
          <circle cx="12" cy="12" r="5" fill="#10b981" />
          <text x="24" y="15" fill="#ffffff" fontSize="9.5" fontWeight="600">
            24/7 CCTV Monitored · Climate & Pest Controlled
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * 7. Hero Moving Truck & Uniformed Crew Visual
 * Authentic Indian logistics scene: Eicher closed container truck with Orchid livery,
 * uniformed packers handling furniture and cartons in front of a modern Pune high-rise.
 */
export const HeroMovingTruckVisual: React.FC<VisualProps> = ({ className = 'w-full h-64' }) => {
  return (
    <div className={`relative ${className} bg-gradient-to-b from-sky-100/60 to-slate-100 overflow-hidden flex items-center justify-center select-none rounded-2xl border border-slate-200 shadow-md`}>
      <svg
        viewBox="0 0 650 360"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="70%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="truckCab" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="truckCargo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <filter id="heroShadow" x="-5%" y="-5%" width="115%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Sky Background */}
        <rect width="650" height="240" fill="url(#heroSky)" />

        {/* Modern Pune High-Rise Apartments Silhouette in background */}
        <g opacity="0.3" fill="#94a3b8">
          <rect x="60" y="70" width="55" height="170" rx="2" />
          <rect x="130" y="40" width="70" height="200" rx="2" />
          <rect x="220" y="80" width="60" height="160" rx="2" />
          <rect x="480" y="50" width="80" height="190" rx="2" />
          <rect x="580" y="90" width="60" height="150" rx="2" />
          {/* Windows on buildings */}
          <path d="M145 60 H185 M145 80 H185 M145 100 H185 M145 120 H185 M145 140 H185" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M500 70 H540 M500 95 H540 M500 120 H540 M500 145 H540" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 6" />
        </g>

        {/* Asphalt Road & Driveway */}
        <rect y="240" width="650" height="120" fill="#334155" />
        <line x1="0" y1="285" x2="650" y2="285" stroke="#facc15" strokeWidth="3" strokeDasharray="20 15" />
        <rect y="235" width="650" height="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* The Closed-Container Moving Truck (Eicher 14ft Pro) */}
        <g transform="translate(140, 85)" filter="url(#heroShadow)">
          {/* Shadow beneath truck */}
          <ellipse cx="230" cy="175" rx="220" ry="14" fill="#000000" opacity="0.4" />

          {/* Truck Chassis Frame */}
          <rect x="25" y="150" width="410" height="15" rx="2" fill="#1e293b" />

          {/* Closed Container Cargo Body */}
          <rect x="25" y="20" width="285" height="135" rx="4" fill="url(#truckCargo)" stroke="#38bdf8" strokeWidth="2" />

          {/* Container Ribs / Corrugation vertical lines */}
          <path d="M60 20 V155 M95 20 V155 M130 20 V155 M165 20 V155 M200 20 V155 M235 20 V155 M270 20 V155" stroke="#1d4ed8" strokeWidth="2" />

          {/* Container Branding Livery */}
          <g transform="translate(45, 45)">
            <rect width="245" height="42" fill="#091733" rx="4" stroke="#0052FF" strokeWidth="2" />
            <text x="122" y="22" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
              ORCHID PACKERS & MOVERS
            </text>
            <text x="122" y="35" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1">
              PUNE · ALL INDIA RELOCATION · IBA APPROVED
            </text>
          </g>

          <g transform="translate(45, 100)">
            <rect width="135" height="20" fill="#1e3a8a" rx="3" />
            <text x="67" y="14" fill="#67e8f9" fontSize="7.5" fontWeight="bold" textAnchor="middle">
              GPS LIVE TRACKING ENABLED
            </text>
          </g>

          <g transform="translate(195, 100)">
            <rect width="95" height="20" fill="#15803d" rx="3" />
            <text x="47" y="14" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">
              100% INSURED TRANSIT
            </text>
          </g>

          {/* Truck Driver Cabin (Front) */}
          <g transform="translate(305, 38)">
            <path d="M5 25 L35 0 L80 0 Q110 5 115 35 L120 115 L5 115 Z" fill="url(#truckCab)" stroke="#94a3b8" strokeWidth="2" />
            {/* Windshield */}
            <path d="M40 8 L75 8 Q100 12 102 38 L40 38 Z" fill="#38bdf8" opacity="0.6" stroke="#0284c7" strokeWidth="1" />
            {/* Side window */}
            <path d="M12 28 L34 10 L34 45 L12 45 Z" fill="#93c5fd" opacity="0.5" stroke="#0284c7" strokeWidth="1" />
            {/* Door handle */}
            <rect x="25" y="60" width="12" height="4" rx="1" fill="#475569" />
            {/* Headlights */}
            <rect x="105" y="85" width="12" height="18" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            {/* Front Bumper */}
            <rect x="85" y="112" width="40" height="22" rx="3" fill="#0f172a" />
            {/* Rear View Mirror */}
            <rect x="95" y="25" width="5" height="20" rx="1" fill="#0f172a" />
          </g>

          {/* Truck Wheels */}
          {/* Rear Wheels Dual Set */}
          <g transform="translate(85, 160)">
            <circle r="26" fill="#0f172a" stroke="#475569" strokeWidth="6" />
            <circle r="14" fill="#cbd5e1" stroke="#0f172a" strokeWidth="2" />
            <circle r="5" fill="#0f172a" />
          </g>
          <g transform="translate(155, 160)">
            <circle r="26" fill="#0f172a" stroke="#475569" strokeWidth="6" />
            <circle r="14" fill="#cbd5e1" stroke="#0f172a" strokeWidth="2" />
            <circle r="5" fill="#0f172a" />
          </g>
          {/* Front Steer Wheel */}
          <g transform="translate(375, 160)">
            <circle r="26" fill="#0f172a" stroke="#475569" strokeWidth="6" />
            <circle r="14" fill="#cbd5e1" stroke="#0f172a" strokeWidth="2" />
            <circle r="5" fill="#0f172a" />
          </g>

          {/* Rear Loading Ramp Unfolded */}
          <polygon points="25,120 -40,172 -40,178 25,126" fill="#64748b" stroke="#334155" strokeWidth="1" />
        </g>

        {/* Uniformed Moving Crew Team */}
        {/* Supervisor with Clipboard */}
        <g transform="translate(45, 160)" filter="url(#heroShadow)">
          {/* Head & Safety Helmet */}
          <circle cx="25" cy="22" r="11" fill="#fbcfe8" />
          <ellipse cx="25" cy="14" rx="13" ry="6" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          {/* Uniform Polo Shirt */}
          <path d="M12 33 L20 33 L25 40 L30 33 L38 33 L44 75 L6 75 Z" fill="#1e3a8a" />
          {/* Company Badge on uniform */}
          <rect x="14" y="42" width="8" height="6" fill="#facc15" />
          {/* Clipboard */}
          <rect x="28" y="45" width="20" height="26" rx="2" fill="#78350f" stroke="#e2e8f0" strokeWidth="0.8" />
          <rect x="30" y="47" width="16" height="22" fill="#ffffff" />
          <line x1="32" y1="52" x2="44" y2="52" stroke="#0f172a" strokeWidth="1" />
          <line x1="32" y1="57" x2="44" y2="57" stroke="#0f172a" strokeWidth="1" />
          <line x1="32" y1="62" x2="40" y2="62" stroke="#059669" strokeWidth="1" />
          {/* Trousers */}
          <rect x="12" y="75" width="10" height="45" fill="#0f172a" />
          <rect x="28" y="75" width="10" height="45" fill="#0f172a" />
          {/* Safety Boots */}
          <ellipse cx="15" cy="120" rx="8" ry="4" fill="#451a03" />
          <ellipse cx="33" cy="120" rx="8" ry="4" fill="#451a03" />
        </g>

        {/* Stack of Packed Cartons on Trolley */}
        <g transform="translate(85, 210)" filter="url(#heroShadow)">
          {/* Hand Trolley */}
          <polygon points="5,70 45,70 45,65 10,20 5,20" fill="#dc2626" />
          <circle cx="15" cy="72" r="8" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          {/* Stacked Box */}
          <rect x="15" y="15" width="45" height="35" fill="#c79153" stroke="#8d5b27" strokeWidth="1" />
          <rect x="20" y="24" width="35" height="8" fill="#ea580c" />
          <rect x="18" y="0" width="38" height="18" fill="#d9a86c" stroke="#8d5b27" strokeWidth="1" />
          <text x="37" y="10" fill="#0f172a" fontSize="4.5" fontWeight="bold" textAnchor="middle">FRAGILE</text>
        </g>

        {/* Real Bottom Trust Bar */}
        <g transform="translate(20, 320)">
          <rect width="360" height="26" rx="13" fill="#0f172a" opacity="0.95" />
          <circle cx="14" cy="13" r="5" fill="#10b981" />
          <text x="28" y="17" fill="#ffffff" fontSize="10.5" fontWeight="600">
            Pune Central Hub · 100% Closed Containers · IBA Code OPM-7821
          </text>
        </g>
      </svg>
    </div>
  );
};

