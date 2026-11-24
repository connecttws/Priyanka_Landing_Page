"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, Sparkles, MessageCircle, Heart, X, Video, Image as ImageIcon, CheckCircle2, ArrowRight } from "lucide-react";

interface TestimonialSectionProps {
  onOpenBooking: () => void;
}

export default function TestimonialSection({ onOpenBooking }: TestimonialSectionProps) {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  // 3 Primary Testimonial Video / Screenshot Frames as specified in the content
  const testimonialFrames = [
    {
      id: 1,
      type: "video",
      label: "Testimonial Video 1",
      badgeText: "[ Testimonial Video 1 ]",
      clientName: "Pooja M.",
      ageCity: "34 yrs • Bengaluru",
      condition: "Hypothyroidism (5 Years)",
      title: "“From needing a 3 PM nap everyday to working full shifts with zero fatigue”",
      duration: "1m 45s",
      metricBeforeAfter: {
        metric: "Energy Levels",
        before: "3/10 (Exhausted)",
        after: "9/10 (All-day vitality)",
      },
      quote:
        "For 5 years, my doctor said my thyroid medicine is normal, but I could barely make dinner for my family. In just 5 weeks with Priyanka's kitchen meal adjustments, my gut bloat disappeared and my energy surged back.",
      accentGradient: "from-teal-600/90 to-emerald-800/90",
    },
    {
      id: 2,
      type: "screenshot",
      label: "Testimonial Screenshot / Video 2",
      badgeText: "[ Testimonial Screenshot 2 ]",
      clientName: "Neha R.",
      ageCity: "42 yrs • Delhi NCR",
      condition: "Hashimoto's & High Anti-TPO",
      title: "“Lost 7.5 kg sustainably without giving up my rotis or starving”",
      duration: "Verified Chat",
      metricBeforeAfter: {
        metric: "Weight & Antibodies",
        before: "74.5 kg & High Antibodies",
        after: "67 kg & Normalized TSH",
      },
      quote:
        "I had tried keto, intermitten fasting, and detox juices—all of which ruined my thyroid further. Priyanka built a simple Indian plate plan for me. My hair fall stopped in month 2, and I dropped 7.5 kg without feeling deprived.",
      accentGradient: "from-emerald-700/90 to-teal-900/90",
    },
    {
      id: 3,
      type: "video",
      label: "Testimonial Video 3",
      badgeText: "[ Testimonial Video 3 ]",
      clientName: "Shweta G.",
      ageCity: "29 yrs • Mumbai",
      condition: "Thyroid + PCOS Overlap",
      title: "“Overcame mood irritability, skin dullness & irregular menstrual cycles”",
      duration: "2m 10s",
      metricBeforeAfter: {
        metric: "Cycle & Mood",
        before: "Irregular 50-day cycles",
        after: "Regular 30-day natural cycle",
      },
      quote:
        "Thyroid combined with PCOS made my life miserable. Priyanka looks at cortisol, gut bacteria, and kitchen herbs. Within 3 months, my cycles normalized, my skin cleared up, and I finally felt in control of my body.",
      accentGradient: "from-teal-700/90 to-slate-900/90",
    },
  ];

  // Dummy chat messages showing authentic WhatsApp check-ins
  const dummyChatWins = [
    {
      sender: "Ritu Sharma (Pune)",
      time: "Yesterday, 10:45 AM",
      message:
        "Priyanka mam, got my latest blood report today! TSH came down to 2.4 from 6.8!! Even my doctor was surprised and asked what diet I’m following 😊 Thank you so so much!",
      status: "TSH Stabilized",
    },
    {
      sender: "Ananya Deshmukh (Hyd)",
      time: "2 days ago, 4:15 PM",
      message:
        "Good afternoon Priyanka! Just wanted to share that for the first whole week I didn’t have any afternoon sugar cravings or brain fog. Hair fall in the shower is also noticeably less!",
      status: "Energy & Hair Win",
    },
    {
      sender: "Kavita Verma (Gurugram)",
      time: "Monday, 9:20 AM",
      message:
        "Weighed myself today after completing Month 1 — down 2.8 kg and 1.5 inches off my waist! And the best part is I am eating proper parathas and daal like you planned ❤️",
      status: "Inch Loss & Vitality",
    },
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#fafaf7] to-white relative overflow-hidden">
      {/* Background ambient blooms */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800 tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Documented Results</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#13382e] tracking-tight leading-tight"
          >
            Real Women, Real Change
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#576f67] max-w-2xl mx-auto"
          >
            See how women stopped battling chronic thyroid exhaustion and reclaimed their natural rhythm through personalized nutrition.
          </motion.p>
        </div>

        {/* 3 Prominent Testimonial Video / Screenshot Frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonialFrames.map((frame, index) => (
            <motion.div
              key={frame.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#e7ede8] shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Frame Container */}
                <div 
                  onClick={() => setActiveModal(frame.id)}
                  className="relative aspect-[16/10] bg-gradient-to-br from-[#0f2922] to-[#164e40] p-5 flex flex-col justify-between text-white cursor-pointer overflow-hidden"
                >
                  {/* Subtle decorative grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#2dd4bf20_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Frame Top Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold text-emerald-200 border border-white/20">
                      {frame.type === "video" ? <Video className="w-3 h-3 text-teal-300" /> : <ImageIcon className="w-3 h-3 text-teal-300" />}
                      <span>{frame.badgeText}</span>
                    </span>
                    <span className="text-[10px] text-stone-300 bg-black/30 px-2 py-0.5 rounded-md">
                      {frame.duration}
                    </span>
                  </div>

                  {/* Center Play / Preview Trigger */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-teal-500 transition-all shadow-lg">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                    <span className="text-xs font-medium text-stone-200 mt-2">
                      Click to watch dummy testimonial
                    </span>
                  </div>

                  {/* Bottom bar of frame */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-stone-300 border-t border-white/10 pt-2">
                    <span className="font-semibold text-white">{frame.clientName}</span>
                    <span className="text-emerald-300">{frame.condition}</span>
                  </div>
                </div>

                {/* Testimonial Card Body */}
                <div className="p-6">
                  {/* Star Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                      Verified Client
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#13382e] leading-snug mb-3">
                    {frame.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3d554e] leading-relaxed italic mb-4">
                    "{frame.quote}"
                  </p>
                </div>
              </div>

              {/* Metric Callout Footer */}
              <div className="p-4 mx-6 mb-6 rounded-2xl bg-[#fafaf7] border border-stone-200/80 text-xs">
                <div className="flex items-center justify-between font-medium text-stone-600 mb-1">
                  <span>{frame.metricBeforeAfter.metric}:</span>
                  <span className="text-emerald-700 font-bold">{frame.metricBeforeAfter.after}</span>
                </div>
                <div className="text-[11px] text-stone-400 flex items-center gap-1">
                  <span>Starting point:</span>
                  <span className="line-through">{frame.metricBeforeAfter.before}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dummy Client WhatsApp Conversation Screenshots & Check-in Cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e7ede8] shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Client Check-in Logs [Dummy Messages]</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#13382e]">
                Real Daily Wins Shared with Priyanka
              </h3>
              <p className="text-xs sm:text-sm text-[#576f67]">
                Weekly progress messages demonstrating consistent symptom relief across energy, digestion, and thyroid labs.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Real Indian Kitchen Meal Protocol</span>
            </div>
          </div>

          {/* Dummy WhatsApp Message Bubbles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dummyChatWins.map((chat, idx) => (
              <div
                key={idx}
                className="bg-[#fafaf7] rounded-2xl p-5 border border-stone-200/80 flex flex-col justify-between shadow-xs hover:border-teal-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-[#13382e]">{chat.sender}</span>
                    <span className="text-[10px] text-stone-400">{chat.time}</span>
                  </div>

                  {/* Chat bubble styling */}
                  <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm border border-stone-200/60 text-xs sm:text-sm text-stone-800 leading-relaxed shadow-xs relative">
                    <p>{chat.message}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-stone-500 font-medium">Outcome:</span>
                  <span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 font-semibold border border-teal-200/50">
                    {chat.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pt-4 border-t border-stone-100">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 group cursor-pointer"
            >
              <span>Ready to write your own transformation story?</span>
              <span className="underline">Book Your Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Modal for Dummy Video/Screenshot Playback Preview */}
        <AnimatePresence>
          {activeModal !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200"
              >
                {/* Header decor */}
                <div className="p-4 bg-gradient-to-r from-teal-700 to-emerald-700 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-emerald-300" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Dummy Testimonial Preview #{activeModal}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 fill-teal-700 ml-1" />
                  </div>
                  <h4 className="text-xl font-bold text-[#13382e] mb-2 font-serif">
                    {testimonialFrames.find(f => f.id === activeModal)?.title}
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {testimonialFrames.find(f => f.id === activeModal)?.quote}
                  </p>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500 mb-6">
                    💡 <em>This is a placeholder preview for client demonstration. You can link real video files or wistia/vimeo/youtube embeds here anytime.</em>
                  </div>

                  <button
                    onClick={() => {
                      setActiveModal(null);
                      onOpenBooking();
                    }}
                    className="w-full py-3 px-6 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors cursor-pointer"
                  >
                    Book Free Consultation With Priyanka
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
