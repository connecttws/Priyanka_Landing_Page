"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck, CheckCircle2, ShieldCheck, Clock, User, Phone, Mail, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "Hypothyroidism",
    struggle: "Low energy & fatigue",
    slot: "Morning (10 AM - 1 PM)",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate swift network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0f2922]/50 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-[#e2ede8] z-10 my-8"
          >
            {/* Header decor band */}
            <div className="h-2 w-full bg-gradient-to-r from-teal-500 via-emerald-400 to-amber-400" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold tracking-wide uppercase mb-2 border border-teal-200/60">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      100% Free Consultation • No Obligation
                    </div>
                    <h3 className="text-2xl font-bold text-[#13382e] tracking-tight">
                      Book Your Free Thyroid Consultation
                    </h3>
                    <p className="mt-1.5 text-sm text-[#576f67]">
                      Speak with Priyanka to discuss your reports, daily symptoms, and personalized roadmap.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#19322b] uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#19322b] uppercase tracking-wider mb-1.5">
                          WhatsApp Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#19322b] uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                          <input
                            type="email"
                            required
                            placeholder="ananya@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#19322b] uppercase tracking-wider mb-1.5">
                          Thyroid Status
                        </label>
                        <select
                          value={formData.condition}
                          onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all cursor-pointer"
                        >
                          <option value="Hypothyroidism">Hypothyroidism</option>
                          <option value="Hashimoto's">Hashimoto's Thyroiditis</option>
                          <option value="Hyperthyroidism">Hyperthyroidism</option>
                          <option value="Thyroid + PCOS">Thyroid + PCOS</option>
                          <option value="Suspected / Unsure">Suspected / Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#19322b] uppercase tracking-wider mb-1.5">
                          Primary Struggle
                        </label>
                        <select
                          value={formData.struggle}
                          onChange={(e) => setFormData({ ...formData, struggle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all cursor-pointer"
                        >
                          <option value="Low energy & fatigue">Low energy & afternoon crash</option>
                          <option value="Stubborn weight gain">Stubborn weight gain</option>
                          <option value="Hair thinning & mood">Hair loss & mood swings</option>
                          <option value="All of the above">All of the above</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#19322b] uppercase tracking-wider mb-1.5">
                        Preferred Call Window
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Morning", "Afternoon", "Evening"].map((slotName) => (
                          <button
                            type="button"
                            key={slotName}
                            onClick={() => setFormData({ ...formData, slot: slotName })}
                            className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                              formData.slot.startsWith(slotName)
                                ? "bg-teal-50 border-teal-600 text-teal-800 font-semibold shadow-sm"
                                : "bg-stone-50/60 border-stone-200 text-stone-600 hover:bg-stone-100"
                            }`}
                          >
                            {slotName}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base shadow-lg shadow-teal-700/20 hover:shadow-teal-700/30 transition-all active:scale-[0.98] disabled:opacity-75 cursor-pointer"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <CalendarCheck className="w-5 h-5" />
                          <span>Confirm My Free Consultation</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Your details are 100% confidential. Limited weekly slots.</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#13382e] mb-2">
                    Consultation Requested!
                  </h3>
                  <p className="text-sm text-[#576f67] max-w-sm mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.name}</strong>. Priyanka’s care team will reach out to you on WhatsApp at <strong className="text-stone-900">{formData.phone}</strong> within 12 hours with your slot details.
                  </p>

                  <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 text-left mb-6 text-xs text-stone-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span><strong>Duration:</strong> 25 minutes 1-on-1 discovery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      <span><strong>What to keep ready:</strong> Recent thyroid reports (TSH, T3, T4) if available</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-3 px-6 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
