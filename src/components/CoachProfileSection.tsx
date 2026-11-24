"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Award, Heart, CheckCircle2, ShieldCheck, Sparkles, Salad, Activity, Camera, User } from "lucide-react";

interface CoachProfileProps {
  onOpenBooking: () => void;
}

export default function CoachProfileSection({ onOpenBooking }: CoachProfileProps) {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      {/* Light soft ambient backdrop */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-teal-50/60 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container with Light Warm Finish */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#fafaf7] via-white to-[#f4f8f5] border border-[#e2ede8] p-6 sm:p-10 lg:p-14 shadow-xl shadow-teal-950/5">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            
            {/* Coach Photo Placeholder Frame Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 flex flex-col items-center"
            >
              {/* Elegant Portrait Frame */}
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-teal-50 via-emerald-50/70 to-teal-100/50 flex flex-col items-center justify-between p-6 sm:p-8 text-center group">
                
                {/* Background decorative concentric rings */}
                <div className="absolute inset-0 bg-[radial-gradient(#0d948815_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-teal-200/40 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-teal-200/80 text-[11px] font-bold text-teal-800 uppercase tracking-wider shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-teal-600" />
                  <span>[Photo Frame]</span>
                </div>

                {/* Center Silhouette / Avatar Illustration */}
                <div className="relative z-10 my-auto flex flex-col items-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-teal-600 to-emerald-400 p-1 shadow-xl shadow-teal-900/15">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-teal-700">
                      <User className="w-16 h-16 sm:w-18 sm:h-18 stroke-[1.25]" />
                    </div>
                  </div>
                  <h4 className="mt-4 font-serif font-bold text-xl sm:text-2xl text-[#13382e]">
                    Priyanka
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-teal-700 mt-0.5">
                    Thyroid-Focused Nutritionist
                  </p>
                  <p className="text-[11px] text-stone-500 mt-1 max-w-[220px] leading-tight">
                    [Priyanka Photo Frame • 800 × 1000px]
                  </p>
                </div>

                {/* Bottom Overlaid Credentials Tag */}
                <div className="relative z-10 w-full p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-teal-100 text-[#13382e]">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-teal-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>5+ Years Experience</span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                    Certified Nutritionist • Hormonal Specialist
                  </p>
                </div>
              </div>

              {/* Trust Tag under frame */}
              <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200/80 text-xs font-semibold text-teal-800 shadow-xs">
                <Award className="w-4 h-4 text-teal-600" />
                <span>5+ Years Helping Women Reclaim Their Health</span>
              </div>
            </motion.div>

            {/* Coach Narrative & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full lg:w-7/12"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-200/60">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Your Partner in Hormone Health</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13382e]">
                Meet <span className="font-signature font-normal text-4xl sm:text-5xl md:text-6xl text-teal-700 ml-1">Priyanka</span>,
              </h2>

              <h3 className="text-sm sm:text-base font-semibold text-teal-800 uppercase tracking-wider mt-2 mb-6">
                THYROID-FOCUSED NUTRITIONIST
              </h3>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-[#3d554e] leading-relaxed">
                <p>
                  With <strong className="text-[#13382e] font-semibold">5+ years of experience</strong>, Priyanka has helped women with thyroid, PCOS, and other hormonal issues understand what their bodies have been trying to tell them.
                </p>
                
                <p>
                  She does not believe in crash diets or one-size-fits-all charts. She looks at your reports, your gut, your stress, and your daily routine, then builds a plan that fits your life and your kitchen to help you progress.
                </p>
              </div>

              {/* Mission Statement Box */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-teal-50/70 border-l-4 border-teal-600 border border-teal-200/50">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block mb-1">
                  My Mission
                </span>
                <p className="text-base sm:text-lg font-serif italic font-medium text-[#13382e] leading-snug">
                  “My mission is to help every woman with thyroid feel energetic, confident, and in control of her health again.”
                </p>
              </div>

              {/* Core Philosophy Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e7ede8]">
                  <Salad className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Real home-cooked meals, zero starvation</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e7ede8]">
                  <Activity className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Focus on gut & cellular thyroid conversion</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e7ede8]">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Aligns with your doctor's medical prescriptions</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e7ede8]">
                  <Heart className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Ongoing WhatsApp accountability & care</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="mt-8 pt-6 border-t border-stone-200/70 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0d9488] hover:bg-[#0f766e] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-teal-700/20 hover:shadow-teal-700/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book Your Free Consultation</span>
                </button>
                <span className="text-xs text-stone-500">
                  No payment required • 25 mins 1-on-1
                </span>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
