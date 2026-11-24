"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import SymptomsSection from "@/components/SymptomsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CoachProfileSection from "@/components/CoachProfileSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 500px on mobile/desktop
      setShowFloatingBar(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <main className="min-h-screen bg-[#fafaf7] text-[#19322b] overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation Header */}
      <Navbar onOpenBooking={openBooking} />

      {/* Hero Section */}
      <HeroSection onOpenBooking={openBooking} />

      {/* Trust & Authority Bar */}
      <TrustStrip />

      {/* "Sound Familiar?" Empathy & Symptom Deep-Dive */}
      <SymptomsSection onOpenBooking={openBooking} />

      {/* "How It Works" 3-Phase Process */}
      <HowItWorksSection onOpenBooking={openBooking} />

      {/* "Meet Priyanka" Thyroid-Focused Nutritionist Profile */}
      <CoachProfileSection onOpenBooking={openBooking} />

      {/* "Real Women, Real Change" Transformations & Chats */}
      <TestimonialSection onOpenBooking={openBooking} />

      {/* FAQ Section */}
      <FAQSection onOpenBooking={openBooking} />

      {/* Final Call to Action Section */}
      <FinalCTASection onOpenBooking={openBooking} />

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />

      {/* Floating Sticky Mobile/Desktop Booking Pill */}
      <AnimatePresence>
        {showFloatingBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 z-40 flex items-center justify-center pointer-events-none"
          >
            <div className="pointer-events-auto bg-[#13382e]/95 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full shadow-2xl border border-teal-500/30 flex items-center gap-3">
              <div className="hidden sm:flex flex-col pl-3 pr-1 text-left">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Limited Free Slots
                </span>
                <span className="text-[10px] text-stone-300">
                  Book 1-on-1 with Priyanka
                </span>
              </div>

              <button
                onClick={openBooking}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-[#0f2922] font-bold text-xs sm:text-sm px-5 py-2.5 shadow-md shadow-teal-950/30 transition-transform active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <CalendarCheck className="w-4 h-4 text-[#0f2922]" />
                <span>Book Free Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
