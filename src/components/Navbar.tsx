"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CalendarCheck, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#fafaf7]/90 backdrop-blur-md shadow-sm border-b border-[#e7ede8] py-2.5 sm:py-3.5"
            : "bg-transparent py-3 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-teal-700/15 group-hover:scale-105 transition-transform shrink-0">
                <span className="text-xl font-bold font-serif leading-none">P</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-signature text-2xl sm:text-3xl text-[#13382e] leading-tight">
                  Priyanka
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#576f67]">
              <a
                href="#symptoms"
                className="hover:text-[#0d9488] transition-colors relative py-1"
              >
                Sound Familiar?
              </a>
              <a
                href="#how-it-works"
                className="hover:text-[#0d9488] transition-colors relative py-1"
              >
                How It Works
              </a>
              <a
                href="#about"
                className="hover:text-[#0d9488] transition-colors relative py-1"
              >
                Meet Priyanka
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#0d9488] transition-colors relative py-1"
              >
                Client Stories
              </a>
              <a
                href="#faq"
                className="hover:text-[#0d9488] transition-colors relative py-1"
              >
                FAQs
              </a>
            </div>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-medium text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Slots Open This Week</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center gap-2 rounded-full bg-[#0d9488] hover:bg-[#0f766e] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-teal-700/20 hover:shadow-teal-700/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#0d9488] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm"
              >
                <span>Book Free</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-[#fafaf7] border-b border-[#e7ede8] shadow-xl p-5 sm:hidden"
          >
            <div className="flex flex-col gap-4 text-base font-medium text-[#19322b]">
              <a
                href="#symptoms"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-stone-100 hover:text-teal-700"
              >
                Sound Familiar? (Symptoms)
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-stone-100 hover:text-teal-700"
              >
                How It Works
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-stone-100 hover:text-teal-700"
              >
                Meet Priyanka
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-stone-100 hover:text-teal-700"
              >
                Real Women, Real Change
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-stone-100 hover:text-teal-700"
              >
                Frequently Asked Questions
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0d9488] py-3 text-white font-semibold text-sm shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Your Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
