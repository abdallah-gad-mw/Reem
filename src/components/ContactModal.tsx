import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Check } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ContactModal({ isOpen, onClose, initialService = "" }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState("medium");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }
    setIsSending(true);
    // Simulate API request
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      // Clean after submit
      setName("");
      setEmail("");
      setService("");
      setMessage("");
    }, 1200);
  };

  const servicesList = [
    "Website Design & Development",
    "UI/UX Design",
    "Strategic Consultations",
    "AI Automations",
    "Tailored Core Solutions"
  ];

  // Close with Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#08080a]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#222227] bg-[#121215] p-6 text-white shadow-2xl md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#222227] bg-[#16161a] text-gray-400 hover:text-white cursor-pointer transition-colors"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#d97706]">
                    Let's Connect
                  </span>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight">
                    Start Your Project
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Tell me about your vision, goals, or AI automation needs. I typically respond within 12 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-[#222227] bg-[#16161a] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#d97706] focus:outline-none transition-colors"
                      id="contact-name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@company.com"
                      className="w-full rounded-xl border border-[#222227] bg-[#16161a] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#d97706] focus:outline-none transition-colors"
                      id="contact-email"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                        Selected Service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl border border-[#222227] bg-[#16161a] px-3 py-3 text-sm text-white focus:border-[#d97706] focus:outline-none cursor-pointer transition-colors"
                        id="contact-service"
                      >
                        <option value="">General Inquiry</option>
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full rounded-xl border border-[#222227] bg-[#16161a] px-3 py-3 text-sm text-white focus:border-[#d97706] focus:outline-none cursor-pointer transition-colors"
                        id="contact-budget"
                      >
                        <option value="low">Under $1,000</option>
                        <option value="medium">$1,000 - $3,000</option>
                        <option value="high">$3,000 - $5,000</option>
                        <option value="enterprise">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Project Details & Goals
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you would like to achieve..."
                      className="w-full rounded-xl border border-[#222227] bg-[#16161a] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#d97706] focus:outline-none transition-colors resize-none"
                      id="contact-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all hover:bg-opacity-90 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                    id="submit-contact-btn"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                        Analyzing and Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Proposal Brief
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                <p className="mt-2 text-sm text-gray-300 max-w-md">
                  Thank you for reaching out, <span className="text-white font-medium">your brief was recorded</span>. Reem will review it and get back to you with an initial plan.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-6 rounded-full border border-[#222227] bg-[#16161a] px-6 py-2.5 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors"
                  id="done-modal-btn"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
