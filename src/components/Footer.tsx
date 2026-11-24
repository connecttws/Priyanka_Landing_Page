"use client";

import { Leaf, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fafaf7] text-[#576f67] py-12 sm:py-16 border-t border-[#e7ede8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-stone-200/70">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold font-serif">
                P
              </div>
              <span className="font-signature text-3xl text-[#13382e]">
                Priyanka
              </span>
            </div>
            <p className="text-xs font-semibold tracking-wider text-teal-800 uppercase mt-1">
              Thyroid-Focused Nutritionist & Women's Health
            </p>
            <p className="mt-2 text-xs text-[#576f67] max-w-md">
              Helping women manage thyroid symptoms, boost energy, and work toward healthy weight management through personalised nutrition.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-stone-600">
            <a href="#symptoms" className="hover:text-teal-700 transition-colors">
              Sound Familiar?
            </a>
            <a href="#how-it-works" className="hover:text-teal-700 transition-colors">
              How It Works
            </a>
            <a href="#about" className="hover:text-teal-700 transition-colors">
              Meet Priyanka
            </a>
            <a href="#testimonials" className="hover:text-teal-700 transition-colors">
              Client Stories
            </a>
            <a href="#faq" className="hover:text-teal-700 transition-colors">
              FAQs
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center md:text-left">
          <p className="max-w-2xl leading-relaxed">
            <strong>Medical Disclaimer:</strong> The nutritional guidance provided by Priyanka is intended to complement, not replace, medical treatment. Always consult your prescribing physician before making changes to any thyroid medication.
          </p>

          <p className="shrink-0">
            &copy; {new Date().getFullYear()} Priyanka Nutrition. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
