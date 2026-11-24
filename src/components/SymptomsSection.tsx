"use client";

import { motion } from "framer-motion";
import { MoonStar, TrendingUp, Sparkles, AlertCircle, HeartCrack, HelpCircle, ArrowRight } from "lucide-react";

interface SymptomsSectionProps {
  onOpenBooking: () => void;
}

export default function SymptomsSection({ onOpenBooking }: SymptomsSectionProps) {
  const symptoms = [
    {
      icon: MoonStar,
      title: "Tired all day, even after a full night's sleep",
      badge: "Chronic Fatigue",
      description:
        "You drag yourself out of bed, hit a severe energy wall by 2 PM, and feel like you are running on 10% battery no matter how many hours you rested.",
      stat: "87% of thyroid clients",
      accent: "from-amber-500/10 to-transparent",
      iconColor: "text-amber-700 bg-amber-50 border-amber-200/80",
    },
    {
      icon: TrendingUp,
      title: "Weight keeps climbing, no matter how clean you eat",
      badge: "Sluggish Metabolism",
      description:
        "You cut carbs, skip dinners, drink green tea, and walk 10,000 steps—yet the scale either creeps upward or remains stubbornly locked in place.",
      stat: "Metabolic Resistance",
      accent: "from-rose-500/10 to-transparent",
      iconColor: "text-rose-700 bg-rose-50 border-rose-200/80",
    },
    {
      icon: Sparkles,
      title: "Hair loss, dull skin, and mood swings",
      badge: "Hormonal Cascade",
      description:
        "Waking up to clumps of hair in the brush, dealing with persistently dry flaky skin, sudden unprovoked irritability, and anxiety that never used to be there.",
      stat: "Follicle & Hormonal Link",
      accent: "from-purple-500/10 to-transparent",
      iconColor: "text-purple-700 bg-purple-50 border-purple-200/80",
    },
    {
      icon: HeartCrack,
      title: "Your daily life seems like an impossible task",
      badge: "Brain Fog & Overwhelm",
      description:
        "Simple routine responsibilities feel like climbing a steep mountain. You feel detached, forgetful, and exhausted trying to keep up with work and home.",
      stat: "Daily Functional Impact",
      accent: "from-teal-500/10 to-transparent",
      iconColor: "text-teal-700 bg-teal-50 border-teal-200/80",
    },
  ];

  return (
    <section id="symptoms" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      {/* Soft background decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-bold text-rose-700 tracking-wide uppercase mb-4"
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Sound Familiar?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#13382e] tracking-tight leading-tight"
          >
            Does Any of This Sound Familiar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#576f67] leading-relaxed max-w-2xl mx-auto"
          >
            When your thyroid slows down, your entire biological engine decelerates. You aren't imagining these struggles—they are real physiological signals.
          </motion.p>
        </div>

        {/* 4 Symptom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {symptoms.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-[#fafaf7] hover:bg-white rounded-3xl p-6 sm:p-8 border border-[#e7ede8] hover:border-teal-300/80 shadow-xs hover:shadow-xl hover:shadow-teal-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${item.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-stone-500 bg-white px-3 py-1 rounded-full border border-stone-200/70 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#13382e] leading-snug group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#576f67] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-medium text-stone-500">
                  <span className="flex items-center gap-1.5 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    {item.stat}
                  </span>
                  <span className="text-teal-700 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Recognize this?
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Reassurance & Empathy Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-teal-50 via-emerald-50/50 to-amber-50/60 border border-teal-200/80 shadow-sm relative overflow-hidden"
        >
          {/* Subtle quotation watermark */}
          <div className="absolute right-4 bottom-2 text-8xl font-serif text-teal-900/5 select-none pointer-events-none">
            ”
          </div>

          <div className="relative z-10 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
              The Fundamental Truth
            </span>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#13382e] leading-snug">
              “You are not lazy. Your body is asking for help, and a tablet alone was never meant to answer all of it.”
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#3d554e] max-w-2xl mx-auto leading-relaxed">
              Thyroid medication supplies synthetic hormone into your bloodstream, but it cannot repair gut inflammation, balance cortisol stress, replenish missing trace minerals, or teach your cells how to absorb energy again. That is where personalized food comes in.
            </p>

            <div className="mt-6">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 rounded-full bg-teal-700 hover:bg-teal-800 text-white px-7 py-3 text-sm font-semibold shadow-md shadow-teal-900/15 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Find Out What Your Body Needs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
