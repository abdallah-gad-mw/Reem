import { Laptop, Palette, Compass, Bot, ArrowUpRight } from "lucide-react";

interface ServicesProps {
  onContactClick: () => void;
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onContactClick, onServiceSelect }: ServicesProps) {
  const services = [
    {
      id: "web-dev",
      title: "Website Design & Development",
      description: "Get a unique website built by a hybrid designer-developer. I combine modern aesthetics with robust coding and advanced SEO to create a fast, sales-focused digital experience.",
      icon: Laptop,
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Elevate your user experience. I design intuitive, high-converting interfaces for web and mobile apps that strengthen your brand value and engagement mechanics.",
      icon: Palette,
    },
    {
      id: "consultation",
      title: "Strategic Consultations",
      description: "Get clarity on your next digital move. Whether it's a website audit, a redesign roadmap, or brainstorming custom AI workflows, I provide actionable insights tailored to your goals.",
      icon: Compass,
    },
    {
      id: "ai-automation",
      title: "AI Automations",
      description: "Streamline your operations. I build custom AI chatbots and smart n8n/Make workflows to automate your marketing, lead capture, CRM syncing, and repetitive backend tasks.",
      icon: Bot,
    },
  ];

  const skillPills = [
    "Code", 
    "SEO", 
    "Framer Expert", 
    "WhatsApp Bots", 
    "Landing Pages", 
    "Optimization", 
    "Custom Design"
  ];

  return (
    <section className="relative w-full max-w-[1100px] mx-auto px-6 py-20 text-white" id="services">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
        <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white">
          How I Can Help Your Business
        </h2>
        <div>
          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300"
            id="get-in-touch-services-btn"
          >
            Get In Touch
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#e67e22] group-hover:text-black transition-all">
              <ArrowUpRight className="h-3 w-3 group-hover:rotate-45 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Services Grid (2x2 on desktop, stacks on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => onServiceSelect(service.title)}
              className="group relative rounded-3xl border border-[#1e1e24] bg-[#0e0e11] p-8 hover:border-[#e67e22]/50 hover:bg-[#121217] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#e67e22]/5"
              id={`service-card-${service.id}`}
            >
              {/* Service Icon with soft glowing bg */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a0f08] border border-[#d97706]/20 text-[#e67e22] mb-6 group-hover:bg-[#e67e22] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                <IconComponent className="h-5 w-5" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[#e67e22] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Subtle hover link indicator */}
              <div className="absolute top-8 right-8 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono font-bold text-[#e67e22]">SELECT & START</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Horizontal row of skill pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[900px] mx-auto pt-4">
        {skillPills.map((skill, index) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full border border-[#1e1e24] bg-[#0c0c0e] text-xs font-medium text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
            id={`skill-pill-${index}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
