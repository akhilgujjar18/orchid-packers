import React from 'react';
import { Home, ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustBar: React.FC = () => {
  const metrics = [
    {
      value: '12,500+',
      label: 'Homes Shifted',
      detail: 'Across Pune, PCMC & All Major Metros',
      icon: Home,
    },
    {
      value: '99.4%',
      label: 'Damage-Free Record',
      detail: 'Protected by 5-Layer Bubble Packing',
      icon: ShieldCheck,
    },
    {
      value: '15+ Years',
      label: 'Pune Track Record',
      detail: 'Local branch hubs in Baner, Hinjewadi & Wakad',
      icon: Award,
    },
    {
      value: '100%',
      label: 'Verified Permanent Crew',
      detail: 'Police verified crew & live truck GPS',
      icon: Users,
    },
  ];

  const badges = [
    'IBA Approved Moving Company (Code: OPM-7821)',
    'ISO 9001:2015 Certified Quality Relocation',
    'Govt. GST Registered (27AAFCO8945Q1ZS)',
    'Comprehensive ₹10L Transit Insurance Policy',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 24,
      },
    },
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.35,
        staggerChildren: 0.08,
      },
    },
  };

  const badgeItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-white border-y border-slate-200 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid with Scroll-Triggered Entrance Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all shadow-2xs group cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-mono tabular-nums group-hover:text-[#0052FF] transition-colors">
                    {m.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0052FF] border border-blue-200 shadow-xs group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{m.label}</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{m.detail}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quiet Trust Credentials Banner with Smooth Scroll Reveal */}
        <motion.div
          variants={badgeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-600"
        >
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              variants={badgeItemVariants}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0" />
              <span className="font-semibold text-slate-800">{badge}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
