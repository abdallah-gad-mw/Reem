import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import projectImg1 from "../assets/images/project_preview_1779257602193.png";
import projectImg2 from "../assets/images/saas_landing_page_1779280120394.png";
import projectImg3 from "../assets/images/ai_whatsapp_bot_1779280140690.png";
import projectImg4 from "../assets/images/jewelry_ecommerce_1779280161431.png";
import projectImg5 from "../assets/images/portfolio_website_1779280177519.png";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const prevIndexRef = useRef(0);

  // Initialize scroll tracking on the parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const projectsData = [
    {
      id: 1,
      name: "RGM Partners",
      subtitle: "Strategic Redesign & Investment Dashboard",
      description: "Sleek, high-converting digital presence and asset tracking interface optimized for professional venture capital relationships.",
      imageUrl: projectImg1,
      categories: ["Finance", "Design", "Development"],
      backgroundWord: "PARTNER",
    },
    {
      id: 2,
      name: "SaaS Analytics",
      subtitle: "High-Immediacy Product Ecosystem",
      description: "A conversion-focused product presentation utilizing real-time dashboard visualization models and customized interaction graphs.",
      imageUrl: projectImg2,
      categories: ["SaaS", "Analytics", "Optimization"],
      backgroundWord: "ANALYTICS",
    },
    {
      id: 3,
      name: "AI WhatsApp Bot",
      subtitle: "Automated Lead Pipeline Architecture",
      description: "Multi-modal AI assistant integrated into active WhatsApp Business CRM pipelines for automated meeting locks and real-time response.",
      imageUrl: projectImg3,
      categories: ["AI Automation", "Bots", "n8n"],
      backgroundWord: "AUTOMATE",
    },
    {
      id: 4,
      name: "Lux Boutique",
      subtitle: "High-End Retail E-Commerce",
      description: "Immersive boutique store showcasing high-performance asset loads, flawless checkout structures, and striking visual catalog pairings.",
      imageUrl: projectImg4,
      categories: ["E-commerce", "Luxury", "Development"],
      backgroundWord: "BOUTIQUE",
    },
    {
      id: 5,
      name: "Portfolio Website",
      subtitle: "Interactive Architectural Showcase",
      description: "A detailed custom portfolio with a cinematic warm canvas, interactive booking mechanics, and modern 3D scrolling animations.",
      imageUrl: projectImg5,
      categories: ["Design", "Development", "Creative"],
      backgroundWord: "CRAFTSMAN",
    },
  ];

  // Update active card index based on scroll progress smoothly
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5 projects divided across 0..1 progress scale.
    // e.g. Card 0: 0.0 - 0.2, Card 1: 0.2 - 0.4, Card 2: 0.4 - 0.6, etc.
    const rawVal = latest * projectsData.length;
    let index = Math.floor(rawVal);
    if (index >= projectsData.length) index = projectsData.length - 1;
    if (index < 0) index = 0;

    if (index !== prevIndexRef.current) {
      if (index > prevIndexRef.current) {
        setDirection("forward");
      } else {
        setDirection("backward");
      }
      prevIndexRef.current = index;
      setActiveIndex(index);
    }
  });

  const activeProject = projectsData[activeIndex];

  // Variants for physical Y-axis flip
  const cardVariants = {
    initial: (dir: "forward" | "backward") => ({
      rotateY: dir === "forward" ? 90 : -90,
      opacity: 0,
      scale: 0.94,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 75,
        damping: 15,
        mass: 1.0,
      },
    },
    exit: (dir: "forward" | "backward") => ({
      rotateY: dir === "forward" ? -90 : 90,
      opacity: 0,
      scale: 0.94,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div ref={containerRef} className="relative h-[400vh] sm:h-[450vh] w-full" id="projects">
      {/* Sticky layout container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#08080a] py-6 sm:py-12">
        
        {/* Centered cropped background crop text */}
        <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeProject.backgroundWord}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 0.15, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.15, y: -15 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="text-[14vw] md:text-[16vw] font-black tracking-widest text-[#ffffff] uppercase leading-none select-none pointer-events-none"
            >
              {activeProject.backgroundWord}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Section Heading & Counter */}
        <div className="relative z-10 text-center mb-8 px-6 flex-none">
          <span className="text-[10px] font-mono tracking-widest text-[#e67e22] uppercase font-bold">
            Interactive Showcase
          </span>
          <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white mt-1">
            Recent Projects
          </h2>
          {/* Global Progress Bar */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="text-[11px] font-mono text-[#e67e22]">01</span>
            <div className="relative w-28 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-[#e67e22] rounded-full"
                style={{ width: `${((activeIndex + 1) / projectsData.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-[11px] font-mono text-gray-400">0{projectsData.length}</span>
          </div>
        </div>

        {/* Interactive Floating 3D Card Area */}
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 h-[480px] sm:h-[530px] md:h-[580px] max-h-[70vh] flex items-center justify-center">
          <div style={{ perspective: 1800 }} className="relative w-full h-full flex items-center justify-center">
            
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ transformStyle: "preserve-3d" }}
                className="absolute w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#222227] bg-[#0c0c0f]/95 backdrop-blur-md shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col justify-between hover:border-[#e67e22]/30 transition-colors duration-300"
                id={`recent-project-main-card-${activeProject.id}`}
              >
                {/* Image Frame with Overlay & Quick Stats Counter */}
                <div className="relative w-full h-[55%] sm:h-[60%] overflow-hidden bg-black flex-none">
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.name}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Premium shading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  
                  {/* Pill indicators floating in Image frame */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-black/75 border border-white/10 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#e67e22] font-bold">
                      ACTIVE SHOWCASE
                    </span>
                  </div>

                  {/* Corner card counter */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                    <span className="flex h-8 items-center justify-center rounded-full bg-black/75 border border-white/10 px-3.5 text-xs text-bold font-mono text-white tracking-widest select-none">
                      0{activeProject.id} / 05
                    </span>
                  </div>

                  {/* Absolute Bottom Title Text floating inside Image Frame for elegant overlap */}
                  <div className="absolute bottom-4 left-6 sm:left-8 text-left z-10">
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight text-balance">
                      {activeProject.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#e67e22] font-mono font-medium tracking-wide mt-1 uppercase">
                      {activeProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Frame: Explanations and Tags */}
                <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between bg-[#0b0b0d] border-t border-[#18181d]">
                  
                  {/* Paragraph description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                    {activeProject.description}
                  </p>

                  {/* Row for category tags + Live View link */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 mt-auto">
                    
                    {/* Tags block */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {activeProject.categories.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#222227] text-[10px] font-mono font-bold tracking-wide text-gray-400 hover:text-white transition-colors uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Small action pill button */}
                    <button
                      className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2 px-4.5 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all duration-300"
                      id={`project-preview-btn-${activeProject.id}`}
                    >
                      Preview Live
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowUpRight className="h-2.5 w-2.5" />
                      </span>
                    </button>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>
        </div>

        {/* Vertical Dot Indicators on the Far Right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-20">
          {projectsData.map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`text-[10px] font-mono font-bold tracking-wider transition-colors duration-300 ${
                activeIndex === i ? "text-[#e67e22]" : "text-gray-600"
              }`}>
                0{i + 1}
              </span>
              <button
                onClick={() => {
                  const scrollElement = containerRef.current;
                  if (scrollElement) {
                    const containerHeight = scrollElement.scrollHeight;
                    // Distribute across the scroll coordinate ranges
                    const stepScroll = (i / (projectsData.length - 1)) * (containerHeight - window.innerHeight);
                    window.scrollTo({
                      top: scrollElement.offsetTop + stepScroll,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-[#e67e22] scale-125 shadow-lg shadow-[#e67e22]/50"
                    : "bg-white/25 hover:bg-white/45"
                }`}
                aria-label={`Jump to project ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Small Scroll helper layout element bottom */}
        <div className="absolute bottom-6 flex flex-col items-center gap-1 z-10 pointer-events-none select-none">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            Keep scrolling to reveal next
          </span>
          <div className="w-1.5 h-6 rounded-full bg-white/5 border border-white/10 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 w-full h-2.5 bg-[#e67e22] rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
