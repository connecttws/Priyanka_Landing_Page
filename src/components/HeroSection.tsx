"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CalendarCheck, ShieldCheck, Sparkles, CheckCircle2, HeartPulse, Activity } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#f5f9f6] via-[#fafaf7] to-[#fafaf7] pt-28 pb-12 sm:pt-36 sm:pb-20">
      {/* Light Delicate Ambient Blooms */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-br from-teal-100/50 via-emerald-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-24 right-[-100px] w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Subtle Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-teal-200/70 shadow-xs mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-ping" />
            <span className="text-xs sm:text-sm font-semibold text-teal-800 tracking-wide">
              Thyroid & Hormonal Nutrition Support
            </span>
            <span className="text-xs text-stone-300">|</span>
            <span className="text-xs font-medium text-stone-600 hidden sm:inline">
              Evidence-Based Indian Nutrition
            </span>
          </motion.div>

          {/* Primary Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#13382e] leading-[1.15] sm:leading-[1.12]"
          >
            Taking Thyroid Medication,{" "}
            <span className="block mt-2 sm:mt-1 font-sans text-teal-700 font-extrabold italic">
              But Not Feeling Like Yourself Again?
            </span>
          </motion.h1>

          {/* Human-crafted Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-[#3d554e] font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Discover how <strong className="font-semibold text-[#13382e]">Priyanka</strong>, a Thyroid-Focused Nutritionist, helps women manage thyroid symptoms, boost energy, and work toward healthy weight management through personalised nutrition—so they can feel like themselves again.
          </motion.p>

          {/* VSL Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 sm:mt-12 relative w-full max-w-3xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-teal-950/10 border-4 border-white bg-[#0f2922]"
          >
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-[#0d2a23] via-[#133e33]/90 to-[#15463a]/80">
                {/* Background decorative pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf20_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                {/* Video Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-emerald-200 mb-4 border border-white/15">
                  <HeartPulse className="w-3.5 h-3.5 text-teal-300" />
                  <span>Free 8-Minute Masterclass by Priyanka</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-xl mb-3 leading-snug drop-shadow-sm font-serif">
                  Why A Thyroid Tablet Alone Leaves You Exhausted & The 3-Step Nutrition Fix
                </h3>
                
                <p className="text-xs sm:text-sm text-stone-200/90 max-w-md mb-6 leading-relaxed">
                  Learn how customized nutrition unblocks thyroid cellular conversion, revitalizes sluggish metabolism, and restores your daily drive.
                </p>

                {/* Big Animated Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold shadow-lg shadow-teal-900/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play VSL video"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  </div>
                  <span className="text-sm sm:text-base tracking-wide">Watch Video Now</span>
                </button>

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] text-stone-300/80">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>Watch with sound on</span>
                  </span>
                  <span>Duration: 8m 42s</span>
                </div>
              </div>
            ) : (
              <iframe
                src="https://fast.wistia.net/embed/iframe/sppu5h7owc?seo=false&videoFoam=true&autoplay=1"
                title="Priyanka Thyroid Nutrition VSL Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            )}
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 sm:mt-10 flex flex-col items-center"
          >
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#0d9488] hover:bg-[#0f766e] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-teal-700/25 hover:shadow-teal-700/35 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer w-full sm:w-auto"
            >
              <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Book Your Free Consultation</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-teal-500/40 ring-offset-2 ring-offset-[#fafaf7] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Micro reassurance lines */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#576f67]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1000+ women guided</span>
              </span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>5+ years of experience</span>
              </span>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified nutritionist / Thyroid-Focused</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}
