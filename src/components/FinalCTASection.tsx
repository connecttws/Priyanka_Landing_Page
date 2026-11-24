"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, Clock, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export default function FinalCTASection({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#fafaf7] via-white to-[#f4f8f5] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-teal-100/40 via-emerald-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Luminous High-Impact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-[#13382e] via-[#0f2d25] to-[#0b231d] text-white p-8 sm:p-12 md:p-16 shadow-2xl shadow-teal-950/20 overflow-hidden text-center"
        >
          {/* Subtle background radial pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Glowing orb in corner */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Urgency / Caring Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-6">
              <Clock className="w-3.5 h-3.5 text-teal-300" />
              <span>Limited Slots Available Every Week</span>
            </div>

            {/* Content Headline directly from user request */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-white">
              How many more years will you live tired and frustrated?
            </h2>

            {/* Subheadline from user request */}
            <p className="mt-6 text-base sm:text-xl text-stone-200/90 font-light leading-relaxed max-w-2xl mx-auto">
              Take the first step today and find out what your thyroid is really telling you.
            </p>

            {/* Primary Action Button */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#0f2922] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-extrabold shadow-xl shadow-teal-950/40 hover:scale-105 active:scale-98 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#0f2922]" />
                <span>Book My Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-[#0f2922] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Line from user request */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-300/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Your details are 100% safe. Limited slots every week.</span>
            </div>

            {/* Reassurance points */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-stone-300/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                <span>Zero Sales Pressure</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                <span>1-on-1 with Priyanka</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
                <span>Report Evaluation Included</span>
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
