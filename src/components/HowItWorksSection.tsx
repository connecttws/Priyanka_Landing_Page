"use client";

import { motion } from "framer-motion";
import { Search, UtensilsCrossed, RefreshCw, CalendarCheck, Check, Sparkles, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export default function HowItWorksSection({ onOpenBooking }: HowItWorksProps) {
  const steps = [
    {
      step: "01",
      badge: "Phase 1: Root Cause Analysis",
      title: "IDENTIFY: What might be affecting you",
      icon: Search,
      tagline: "Your struggles, your story",
      description:
        "We start by listening deeply to your health journey. We analyze your medical blood panels (TSH, T3, T4, Anti-TPO), evaluate gut microbiome digestion, identify hidden nutrient deficiencies (Iron, Vitamin D, B12, Zinc), and pinpoint chronic stress and sleep patterns that block thyroid cellular conversion.",
      deliverables: [
        "In-depth analysis of your recent medical reports",
        "Digestive & gut symptom mapping",
        "Lifestyle & metabolic rate assessment",
        "Identification of inflammatory food triggers",
      ],
      accent: "teal",
    },
    {
      step: "02",
      badge: "Phase 2: Custom Nutrition Blueprint",
      title: "PERSONALISE: A personalised food and lifestyle plan that fits your life",
      icon: UtensilsCrossed,
      tagline: "Fits your life and kitchen",
      description:
        "No crash diets, starvation, or exotic expensive powders. Priyanka crafts a realistic, nutrient-dense Indian meal plan tailored to your food culture, kitchen ingredients, daily office or family schedule, and taste buds—designed specifically to optimize thyroid function.",
      deliverables: [
        "Simple, wholesome Indian kitchen recipes",
        "Targeted thyroid-nourishing macronutrient ratios",
        "Practical dining-out and travel guidelines",
        "Circadian rhythm and sleep-support routines",
      ],
      accent: "emerald",
    },
    {
      step: "03",
      badge: "Phase 3: Continuous Guidance",
      title: "SUSTAIN: Regular follow-ups so you are never alone",
      icon: RefreshCw,
      tagline: "Never feel abandoned",
      description:
        "Healing hormones takes time, adaptability, and unwavering support. We maintain consistent communication, monitor your energy shifts and symptom relief, celebrate your milestones, and fine-tune your meal plan week by week as your body repairs.",
      deliverables: [
        "Weekly 1-on-1 progress reviews & tweaks",
        "Direct WhatsApp access for questions & meal feedback",
        "Energy, mood, and inch-loss tracking",
        "Long-term habit integration for lifelong wellness",
      ],
      accent: "amber",
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-[#fafaf7] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold text-teal-800 tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>The Personalized Protocol</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#13382e] tracking-tight leading-tight"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-xl text-[#3d554e] font-serif italic"
          >
            Your struggles, your story. Designed around your real everyday routine.
          </motion.p>
        </div>

        {/* 3 Steps Vertical Progression */}
        <div className="space-y-8 max-w-4xl mx-auto relative">
          
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative bg-white rounded-3xl p-6 sm:p-10 border border-[#e7ede8] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center md:flex-col gap-4 shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-700 text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md shadow-teal-700/20 font-serif">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 hidden md:flex">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="flex-1">
                    <div className="inline-block text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50/80 px-3 py-1 rounded-full mb-3 border border-teal-200/50">
                      {item.badge}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#13382e] tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#576f67] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Deliverable Checkpoints */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-stone-100">
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Section Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0d9488] hover:bg-[#0f766e] px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-teal-700/20 hover:shadow-teal-700/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Book Your Free Thyroid Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-2.5 text-xs text-stone-500">
            Free 25-minute consultation • No obligation • 100% confidential
          </p>
        </motion.div>

      </div>
    </section>
  );
}
