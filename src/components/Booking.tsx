import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, CheckCircle2, Send, Sparkles, User, Mail, MessageSquare, DollarSign, Briefcase } from "lucide-react";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [brief, setBrief] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !projectType || !budget || !brief) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 1500);
  };

  const projectOptions = [
    { value: "saas", label: "SaaS / Web App" },
    { value: "ecommerce", label: "E-Commerce" },
    { value: "landing", label: "Landing Page / Funnel" },
    { value: "automation", label: "AI & Automation Integration" },
    { value: "custom", label: "Custom Solution" }
  ];

  const budgetOptions = [
    { value: "under-1k", label: "Under $1,000" },
    { value: "1k-3k", label: "$1,000 - $3,000" },
    { value: "3k-5k", label: "$3,000 - $5,000" },
    { value: "custom", label: "$5,000+" }
  ];

  return (
    <section className="relative w-full max-w-[1100px] mx-auto px-6 py-24 text-white" id="booking">
      {/* Headings */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-mono tracking-widest text-[#e67e22] uppercase font-bold">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white mt-1">
          Start Your Project Brief
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
          Let’s Create Something Amazing — Send me your ideas & requirements below!
        </p>
      </div>

      {/* Main interactive inquiry design card */}
      <div className="max-w-[850px] mx-auto rounded-3xl overflow-hidden border border-[#222227] bg-[#111115] shadow-2xl">
        {/* Dark Top Area - Details */}
        <div className="p-6 md:p-8 border-b border-[#222227] bg-[#0c0c0f]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Header / Host details */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#1b1109] border border-[#e67e22]/20 flex items-center justify-center font-bold text-[#e67e22]">
                AG
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-base text-white">Abdallah Gad</h3>
                  <div className="flex items-center gap-0.5 text-xs text-amber-500">
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <Star className="h-3 w-3 fill-amber-500" />
                    <span className="text-[10px] text-gray-400 font-mono ml-1">(5/5 rating)</span>
                  </div>
                </div>
                <p className="text-xs text-[#e67e22] font-mono mt-0.5">Full-Stack Web Developer & AI Specialist</p>
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono font-bold text-gray-300">
              <Sparkles className="h-3.5 w-3.5 text-[#e67e22]" />
              <span>Responses in Under 24 Hours</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-400 leading-relaxed font-light max-w-2xl">
            Providing clear, actionable project scopes is what I do. Fill out the interactive brief below to sketch out your features, timeline, and goals. I will carefully review your requirements and respond with a detailed technical roadmap.
          </p>
        </div>

        {/* Inline Form Area (Gradient Steel Bottom Accent) */}
        <div className="relative bg-gradient-to-b from-[#131b2c] to-[#090d16] p-6 md:p-8 min-h-[340px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-gray-400">
                      <User className="h-3.5 w-3.5 text-[#e67e22]" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      placeholder="e.g. Alice Johnson"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#e67e22] focus:bg-white/10 focus:outline-none transition-all duration-300"
                      id="brief-form-name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-gray-400">
                      <Mail className="h-3.5 w-3.5 text-[#e67e22]" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      placeholder="e.g. alice@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#e67e22] focus:bg-white/10 focus:outline-none transition-all duration-300"
                      id="brief-form-email"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Option Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-gray-400">
                      <Briefcase className="h-3.5 w-3.5 text-[#e67e22]" />
                      <span>Project Category</span>
                    </label>
                    <select
                      value={projectType}
                      required
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white cursor-pointer focus:border-[#e67e22] focus:bg-white/10 focus:outline-none transition-all duration-300 appearance-none bg-no-repeat"
                      style={{ 
                        backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23e67e22\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                        backgroundPosition: 'right 16px center', 
                        backgroundSize: '12px' 
                      }}
                      id="brief-form-type"
                    >
                      <option value="" className="bg-[#0c0c0f] text-gray-500">Select standard project tier...</option>
                      {projectOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#0c0c0f] text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-gray-400">
                      <DollarSign className="h-3.5 w-3.5 text-[#e67e22]" />
                      <span>Comfortable Budget</span>
                    </label>
                    <select
                      value={budget}
                      required
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white cursor-pointer focus:border-[#e67e22] focus:bg-white/10 focus:outline-none transition-all duration-300 appearance-none bg-no-repeat"
                      style={{ 
                        backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23e67e22\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                        backgroundPosition: 'right 16px center', 
                        backgroundSize: '12px' 
                      }}
                      id="brief-form-budget"
                    >
                      <option value="" className="bg-[#0c0c0f] text-gray-500">Pick comfortable tier...</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#0c0c0f] text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Brief details */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-mono uppercase text-gray-400">
                    <MessageSquare className="h-3.5 w-3.5 text-[#e67e22]" />
                    <span>Project Brief & Details</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={brief}
                    maxLength={1000}
                    placeholder="Describe your design inspirations, feature goals, required target deadline, and overall objectives..."
                    onChange={(e) => setBrief(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#e67e22] focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none"
                    id="brief-form-details"
                  />
                  <div className="flex justify-end text-[10px] font-mono text-gray-500">
                    {brief.length}/1000 characters
                  </div>
                </div>

                <div className="flex justify-start pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="rounded-full bg-white px-7 py-3.5 text-xs font-bold text-black uppercase tracking-wider hover:bg-[#e67e22] hover:text-black hover:scale-[1.02] active:scale-[0.98] cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/40"
                    id="submit-brief-btn"
                  >
                    <span>{isSending ? "Analyzing & Submitting..." : "Submit Project Brief"}</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Stage */
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 animate-pulse">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight font-sans">
                  Inquiry Received!
                </h3>
                <p className="mt-2 text-xs text-gray-300 max-w-md leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{name}</span>. Your brief has been submitted successfully. I will carefully analyze your requirements and reach out to you at <span className="font-semibold text-[#e67e22]">{email}</span> within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setProjectType("");
                    setBudget("");
                    setBrief("");
                  }}
                  className="mt-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs text-gray-300 hover:text-white cursor-pointer transition-colors"
                  id="reset-booking-test"
                >
                  Submit Another Brief
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer info line */}
        <div className="py-3.5 px-6 text-center bg-[#0a0a0d] border-t border-[#18181d] text-[10px] font-mono tracking-widest text-gray-500 flex items-center justify-center gap-1.5 uppercase">
          <Sparkles className="h-3 w-3 text-[#e67e22]" />
          <span>secure & compliant end-to-end data processing</span>
        </div>
      </div>
    </section>
  );
}
