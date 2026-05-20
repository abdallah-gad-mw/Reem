import { motion } from "motion/react";
import { MousePointerClick, ListTodo, CodeXml, HeartHandshake } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: 1,
      title: "Let's Get In Touch",
      description: "Start by reaching out through our contact page. Fill out our simple brief form or secure a private slot on the calendar to discuss your web project, performance targets, and ideas.",
      icon: MousePointerClick,
    },
    {
      step: 2,
      title: "Grab Your Designs",
      description: "Tell me your unique business goals, and I'll create stunning, high-converting interactive wireframes that perfectly align with your digital branding. Ready to scale and test easily.",
      icon: ListTodo,
    },
    {
      step: 3,
      title: "Kickstart Development",
      description: "I expertly translate approved wireframes into rapid, clean code. Optimized with lightning performance, SEO compliance, customized motion design, and intelligent AI integration.",
      icon: CodeXml,
    },
  ];

  return (
    <section className="relative w-full max-w-[1100px] mx-auto px-6 py-24 text-white" id="process">
      {/* Headings */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-mono tracking-widest text-[#e67e22] uppercase font-bold">
          High Standards
        </span>
        <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white mt-2">
          Process is Everything
        </h2>
        <p className="text-sm text-gray-400 mt-2.5 max-w-lg mx-auto">
          Simple, streamlined process is what gets you results.
        </p>
      </div>

      {/* 3 Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col justify-between rounded-3xl border border-[#1a1a20] bg-[#0c0c0f] p-8 hover:border-gray-700 hover:bg-[#111116] transition-all duration-300 min-h-[320px] shadow-lg group"
              id={`process-card-step-${item.step}`}
            >
              <div>
                {/* Icon wrapper */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:bg-[#e67e22]/10 group-hover:text-[#e67e22] group-hover:border-[#e67e22]/20 transition-all mb-6">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#e67e22] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors">
                  Step {item.step}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Small dark supporting CTA card below */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[550px] mx-auto rounded-2xl border border-[#1c1c22] bg-[#0a0a0d] px-6 py-4 flex items-center justify-center gap-3 text-center text-sm shadow-md"
        id="process-bottom-helper"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <HeartHandshake className="h-4 w-4" />
        </div>
        <div className="text-xs text-gray-400 leading-none">
          <span className="font-semibold text-white">I am with you in every step</span> alongside you at each stage for a seamless experience
        </div>
      </motion.div>
    </section>
  );
}
