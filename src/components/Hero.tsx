import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import heroBg from "../assets/images/abdallah-gad.webp";

interface HeroProps {
  onStartProjectClick: () => void;
}

export default function Hero({ onStartProjectClick }: HeroProps) {
  return (
    <header className="relative w-full bg-[#08080a]" id="hero">
      {/* Outer Hero Frame with Rounded Bottom Corners */}
      <div 
        className="relative w-full h-[85vh] sm:h-[90vh] min-h-[580px] sm:min-h-[700px] overflow-hidden rounded-b-[40px] md:rounded-b-[64px] bg-no-repeat bg-cover bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Cinematic gradient warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#1f1005]/50 to-[#120a05]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/60 via-transparent to-transparent" />
        
        {/* Soft Radial Warm Glow in Center-Right */}
        <div className="absolute right-[10%] top-[20%] w-[350px] h-[350px] rounded-full bg-[#e67e22]/15 blur-[120px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative w-full max-w-[1100px] mx-auto px-6 pb-20 md:pb-32 z-10">
          <div className="max-w-[500px] text-left">
            {/* Small introduction label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#e67e22] rounded-full animate-ping" />
              <span className="text-[10px] font-mono tracking-widest text-[#f39c12] uppercase font-bold">
                Available for Q2 2026/2027
              </span>
            </motion.div>

            {/* Main Intro Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight text-white leading-[1.25] text-balance"
            >
              I design and build high converting websites and save your time with AI automations
            </motion.h1>

            {/* CTA Pill button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8"
            >
              <button
                onClick={onStartProjectClick}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/35 cursor-pointer"
                id="start-project-hero-btn"
              >
                Start Your Project
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/5 text-black group-hover:bg-[#1a0f08] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="h-3 w-3 group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gigantic OVERLAPPING Name Wordmark */}
      <div className="relative pointer-events-none w-full z-20 select-none overflow-hidden -mt-16 md:-mt-32 lg:-mt-44 pb-3 sm:pb-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="flex justify-center items-center text-center px-4 w-full"
        >
          <span 
            className="inline-flex text-[16vw] sm:text-[16vw] md:text-[12vw] font-extrabold tracking-tight leading-none text-white text-center select-none abdallah-hero-Wordmark"
            style={{ textShadow: "0 25px 50px rgba(0,0,0,0.65)" }}
          >
            {"Abdallah".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    scale: 3.5, 
                    filter: "blur(15px)",
                    color: "#e67e22" 
                  },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    filter: "blur(0px)",
                    color: "#ffffff",
                    transition: { 
                      type: "spring",
                      damping: 15,
                      stiffness: 75,
                      duration: 0.95
                    }
                  }
                }}
                className="inline-block origin-center hover:text-[#e67e22] transition-colors duration-200"
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </div>
    </header>
  );
}
