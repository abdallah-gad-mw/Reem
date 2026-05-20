import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import projectImg from "../assets/images/project_preview_1779257602193.png";

export default function Projects() {
  const project = {
    name: "RGM Partners",
    categories: ["Finance", "Design", "Development"],
    imageUrl: projectImg,
  };

  return (
    <section 
      className="relative w-full max-w-full overflow-hidden py-24 bg-[#08080a]" 
      id="projects"
    >
      {/* Background oversized word "PARTNER" */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[14vw] md:text-[18vw] font-black tracking-tightest text-[#18181d] opacity-40 uppercase leading-none transform -translate-x-[5%] select-none">
          PARTNER
        </span>
        <span className="text-[14vw] md:text-[18vw] font-black tracking-tightest text-[#18181d] opacity-40 uppercase leading-none transform translate-x-[5%] select-none">
          PARTNER
        </span>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-16 px-6">
        <span className="text-[10px] font-mono tracking-widest text-[#e67e22] uppercase font-bold">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white mt-2">
          Recent Projects
        </h2>
      </div>

      {/* Centered Project Card Container */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl overflow-hidden border border-[#222227] bg-[#101014] shadow-2xl transition-all duration-300 hover:border-[#e67e22]/30"
          id="recent-project-main-card"
        >
          {/* Project Image Frame */}
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-black">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

            {/* Hover overlay CTA button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-black uppercase shadow-xl tracking-wider hover:scale-105 transition-transform">
                Preview Live Site <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          {/* Project Footer Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 bg-[#0b0b0e] border-t border-[#18181d]">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#e67e22] transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-1">
                CORPORATE PLATFORM REDESIGN & BRAND WORK
              </p>
            </div>
            
            {/* Category tags */}
            <div className="flex flex-wrap items-center gap-1.5">
              {project.categories.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#16161a] border border-[#222227] text-[10px] font-mono font-medium tracking-wide text-gray-400 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
