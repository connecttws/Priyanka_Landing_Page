"use client";

import { motion } from "framer-motion";
import { Users, Clock, Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export default function TrustStrip() {
  const credentials = [
    {
      icon: Users,
      highlight: "1000+ Women",
      label: "Guided to Vitality",
    },
    {
      icon: Clock,
      highlight: "5+ Years",
      label: "Specialized Experience",
    },
    {
      icon: Award,
      highlight: "Certified Nutritionist",
      label: "Thyroid-Focused Approach",
    },
    {
      icon: HeartHandshake,
      highlight: "Zero Crash Diets",
      label: "Practical Kitchen Nutrition",
    },
    {
      icon: ShieldCheck,
      highlight: "100% Free First Call",
      label: "No Obligation Consultation",
    },
  ];

  // Repeat for continuous marquee effect if needed or clean responsive grid
  return (
    <section className="bg-gradient-to-b from-[#fafaf7] via-white to-[#fafaf7] py-6 sm:py-8 border-y border-[#e7ede8]/80 relative overflow-hidden">
      {/* Subtle organic light backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#0d94880c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#fafaf7]/80 hover:bg-white border border-[#e7ede8] hover:border-teal-200/80 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#13382e] truncate">
                    {item.highlight}
                  </span>
                  <span className="text-[11px] text-[#576f67] leading-tight truncate">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
