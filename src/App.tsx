/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { CostCalculator } from './components/CostCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MovingProcess } from './components/MovingProcess';
import { PuneLocalities } from './components/PuneLocalities';
import { PuneCoverageMap } from './components/PuneCoverageMap';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { QuoteSuccessModal } from './components/QuoteSuccessModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MovingChecklistModal } from './components/MovingChecklistModal';
import { PolicyModal } from './components/PolicyModal';
import { RelocationService, QuoteResponse } from './types';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [successQuote, setSuccessQuote] = useState<(QuoteResponse['lead'] & { quoteId: string }) | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledSize, setPrefilledSize] = useState<string | undefined>(undefined);
  const [prefilledPickupLocation, setPrefilledPickupLocation] = useState<string | undefined>(undefined);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<RelocationService | null>(null);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [activePolicyTitle, setActivePolicyTitle] = useState<string | null>(null);

  const scrollToQuoteForm = (focusPickup = false) => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (focusPickup) {
          const pickupEl = document.getElementById('pickup-location-input') as HTMLInputElement | null;
          if (pickupEl) {
            pickupEl.focus();
            pickupEl.select();
            return;
          }
        }
        const firstInput = el.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      }, 600);
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToQuoteForm(false);
  };

  const handleApplyEstimate = (service: string, size: string) => {
    setPrefilledService(service);
    setPrefilledSize(size);
    scrollToQuoteForm(false);
  };

  const handleSelectLocality = (localityName: string) => {
    setPrefilledPickupLocation(`${localityName}, Pune`);
    scrollToQuoteForm(true);
  };

  const handleBookServiceInArea = (areaName: string) => {
    setPrefilledPickupLocation(`${areaName}, Pune`);
    scrollToQuoteForm(true);
  };

  const handleSelectIntercityRoute = (routeDest: string) => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0052FF] selection:text-white">
      
      {/* Top Trust Notice Bar */}
      <div className="bg-[#091733] border-b border-blue-900 text-[11px] sm:text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="truncate">
              <strong>Pune Relocation Desk Live:</strong> Same-day shifting booking open for Hinjewadi, Wakad, Baner, Kharadi & PCMC.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-300 shrink-0">
            <span className="flex items-center gap-1 text-sky-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              IBA Approved: OPM-7821
            </span>
            <span>·</span>
            <a href="tel:+917276026115" className="hover:text-white font-medium transition-colors">
              Direct Helpline: +91 72760 26115
            </a>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <Navbar onQuoteClick={scrollToQuoteForm} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section & Lead Capture Engine */}
        <Hero
          onQuoteSuccess={(lead) => setSuccessQuote(lead)}
          prefilledService={prefilledService}
          prefilledSize={prefilledSize}
          prefilledPickupLocation={prefilledPickupLocation}
        />

        {/* 2. Key Achievements & Trust Counters Bar */}
        <TrustBar />

        {/* 3. Relocation Services Grid (6 Interactive Cards with Realistic Visuals) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenServiceModal={(service) => setSelectedServiceDetail(service)}
        />

        {/* 4. Instant Pune Relocation Cost Estimator */}
        <CostCalculator onApplyEstimate={handleApplyEstimate} />

        {/* 5. Why Choose Orchid Packers (Value Props & 5-Layer Packing) */}
        <WhyChooseUs />

        {/* 6. Transparent 4-Step Moving Roadmap */}
        <MovingProcess onBookSurveyClick={scrollToQuoteForm} />

        {/* 7. Pune Localities Explorer & Inter-City Corridors */}
        <PuneLocalities
          onSelectLocality={handleSelectLocality}
          onSelectIntercityRoute={handleSelectIntercityRoute}
        />

        {/* 7b. Interactive Live Google Map with Operational Hub Switching */}
        <PuneCoverageMap onBookServiceInArea={handleBookServiceInArea} />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Interactive FAQ Accordion */}
        <FAQSection onAskQuestionClick={scrollToQuoteForm} />
      </main>

      {/* Footer */}
      <Footer
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenPolicy={(title) => setActivePolicyTitle(title)}
        onQuoteClick={scrollToQuoteForm}
      />

      {/* Floating Action Widgets (WhatsApp & Sticky Mobile Call) */}
      <FloatingWidgets onQuoteClick={scrollToQuoteForm} />

      {/* Confirmation & Information Modals */}
      <QuoteSuccessModal
        quote={successQuote}
        onClose={() => setSuccessQuote(null)}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={handleSelectService}
      />

      {isChecklistOpen && (
        <MovingChecklistModal onClose={() => setIsChecklistOpen(false)} />
      )}

      <PolicyModal
        title={activePolicyTitle}
        onClose={() => setActivePolicyTitle(null)}
      />

    </div>
  );
}
