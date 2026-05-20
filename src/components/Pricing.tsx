import { motion } from "motion/react";
import { Check, ArrowRight, ArrowUpRight, HelpCircle, Sparkles, Globe } from "lucide-react";

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

export default function Pricing({ onPlanSelect }: PricingProps) {
  const starterFeatures = [
    "Premium Template Design",
    "Up to 3 Pages",
    "2 Rounds of Revisions",
    "Basic SEO Setup (Get found on Google)",
    "Fully Responsive (Mobile, Tablet & Desktop)",
    "Email Support",
  ];

  const premiumFeatures = [
    "100% Custom Design",
    "5 Pages included",
    "3 Rounds of Revisions",
    "Technical SEO & Speed Optimization",
    "Fully Responsive (Mobile, Tablet & Large Screens)",
    "Advanced Animations & Interactions",
    "Complex Functionality (CMS, Integrations)",
    "WhatsApp & Email Support",
  ];

  return (
    <section className="relative w-full max-w-[1100px] mx-auto px-6 py-24 text-white" id="pricing">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-mono tracking-widest text-[#e67e22] uppercase font-bold">
          Transparent Cost
        </span>
        <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white mt-2">
          Flexible Pricing for Every Stage
        </h2>
        <p className="text-sm text-gray-400 mt-2.5 max-w-lg mx-auto">
          Whether you're launching an MVP or scaling a brand, I have a plan for you. Let's build something beautiful.
        </p>
      </div>

      {/* Two Main Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-[960px] mx-auto mb-12">
        {/* Card 1: Starter Kit (Dark) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between rounded-3xl border border-[#222227] bg-[#111115] p-8 lg:p-10 shadow-xl relative"
          id="pricing-starter"
        >
          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                Starter Kit
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400">
                <Globe className="h-4.5 w-4.5" />
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">$999</span>
              <span className="text-xs text-gray-400 font-mono ml-2">Flat Rate</span>
            </div>

            <p className="text-xs text-gray-400 mb-8 leading-relaxed font-light">
              Premium templates & essential features for businesses ready to launch fast.
            </p>

            <div className="border-t border-white/5 my-6" />

            {/* Feature lists */}
            <ul className="space-y-4 mb-8">
              {starterFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-xs leading-relaxed text-gray-300">
                  <ArrowRight className="h-3.5 w-3.5 text-[#e67e22] mt-0.5 flex-none" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onPlanSelect("Starter Kit ($999)")}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 active:scale-[0.98] transition-all"
            id="order-starter-btn"
          >
            Choose Starter Kit
            <ArrowUpRight className="h-3 w-3 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </motion.div>

        {/* Card 2: Premium (White) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between rounded-3xl bg-white p-8 lg:p-10 shadow-2xl relative text-black"
          id="pricing-premium"
        >
          {/* Flame glowing accent behind White Card */}
          <div className="absolute inset-0 rounded-3xl border border-amber-500/10 pointer-events-none" />

          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase">
                Premium Elite
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight">Starts at $2,000</span>
            </div>

            <p className="text-xs text-gray-500 mb-8 leading-relaxed font-light">
              Tailored design & advanced tech for businesses seeking deep impact and automation pipelines.
            </p>

            <div className="border-t border-black/5 my-6" />

            {/* Feature lists */}
            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-xs leading-relaxed text-gray-800">
                  <ArrowRight className="h-3.5 w-3.5 text-black mt-0.5 flex-none" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => onPlanSelect("Premium Elite (Starts at $2,000)")}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-black/90 active:scale-[0.98] transition-all"
            id="order-premium-btn"
          >
            Choose Premium
            <ArrowUpRight className="h-3 w-3 text-white group-hover:rotate-45 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Custom Quote small row below */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[700px] mx-auto rounded-3xl border border-[#1e1e24] bg-[#0c0c0f] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12"
        id="pricing-quote-card"
      >
        <div className="text-left">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <HelpCircle className="h-4 w-4 text-[#e67e22]" /> Custom Quote Needed?
          </h4>
          <p className="text-xs text-gray-400 mt-1 max-w-[420px] leading-relaxed font-light">
            *These prices cover standard Web Design & Dev projects. For complex AI Pipelines, Custom Web Apps, WhatsApp integrations, or custom requirements, let's agree on custom milestones.
          </p>
        </div>

        <button
          onClick={() => onPlanSelect("Custom Customization Quote")}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300 flex-none"
          id="quote-custom-btn"
        >
          Contact Me
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#e67e22] group-hover:text-black transition-all">
            <ArrowUpRight className="h-3 w-3 group-hover:rotate-45 transition-transform" />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
