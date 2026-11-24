"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles, MessageCircleQuestion } from "lucide-react";

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export default function FAQSection({ onOpenBooking }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I have to stop my medicine?",
      answer:
        "No. Any change in medication is decided only with your doctor. Nutrition and medical treatment work together hand-in-hand. Personalized nutrition supports your liver, gut, and cellular receptors so your body can utilize hormones effectively.",
    },
    {
      question: "How soon will I see results?",
      answer:
        "Most women notice better energy in 3 to 6 weeks. Results vary from person to person depending on factors like gut health, how long you've had thyroid symptoms, and your consistency with the meal guidelines.",
    },
    {
      question: "Is the consultation really free?",
      answer:
        "Yes. Your first consultation is free, with no obligation. It is a genuine 1-on-1 strategy conversation with Priyanka to understand your symptoms, review your health history, and explain the roadmap ahead.",
    },
    {
      question: "Will I have to eat expensive exotic foods or follow crash diets?",
      answer:
        "Never. Priyanka's philosophy is rooted in wholesome, accessible Indian home cooking. You will use everyday ingredients from your own kitchen—daals, seasonal vegetables, healthy fats, and regional spices tailored to nourish your thyroid.",
    },
    {
      question: "Can I join if I have both Thyroid and PCOS or Diabetes?",
      answer:
        "Yes, absolutely. Thyroid and PCOS frequently overlap due to insulin resistance and hormonal crosstalk. Priyanka's protocol is customized to address multi-hormonal imbalances simultaneously.",
    },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      {/* Light subtle decor */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold text-teal-800 tracking-wide uppercase mb-4"
          >
            <MessageCircleQuestion className="w-3.5 h-3.5 text-teal-600" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#13382e] tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#576f67] max-w-2xl mx-auto"
          >
            Clear, honest answers to help you take your next step with confidence.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#fafaf7] border-teal-300 shadow-sm"
                    : "bg-white border-stone-200/80 hover:border-stone-300"
                }`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#13382e]">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-teal-600 text-white rotate-180"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-[#3d554e] leading-relaxed border-t border-stone-200/50 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle question prompt */}
        <div className="mt-10 text-center">
          <p className="text-sm text-stone-500">
            Have a specific question about your thyroid reports?{" "}
            <button
              onClick={onOpenBooking}
              className="text-teal-700 font-semibold underline hover:text-teal-900 cursor-pointer"
            >
              Ask Priyanka during your free consultation.
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
