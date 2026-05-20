import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative w-full max-w-[1100px] mx-auto px-6 pt-24 pb-12 text-white border-t border-[#131316]/50 bg-[#08080a]" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-16">
        
        {/* Left Side: Inquiry details styling */}
        <div className="space-y-4">
          <p className="text-[10px] font-mono tracking-widest text-[#e67e22] uppercase font-bold">Inquiries</p>
          <a
            href="mailto:reemtech0@gmail.com"
            className="group flex items-center gap-2 text-xl font-bold hover:text-[#e67e22] transition-colors"
          >
            reemtech0@gmail.com
            <Mail className="h-4.5 w-4.5 text-gray-500 group-hover:text-[#e67e22] transition-colors" />
          </a>
        </div>

        {/* Right Side: Columns for Socials & Nav options */}
        <div className="flex flex-row gap-12 sm:gap-16">
          {/* Social connections */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold mb-4">(socials)</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1 text-sm font-semibold hover:text-[#e67e22] transition-colors"
                >
                  Instagram
                  <ArrowUpRight className="h-3 w-3 text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1 text-sm font-semibold hover:text-[#e67e22] transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1 text-sm font-semibold hover:text-[#e67e22] transition-colors"
                >
                  X / Twitter
                  <ArrowUpRight className="h-3 w-3 text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick navigation links */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold mb-4">(navigation)</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                  className="text-sm font-semibold hover:text-[#e67e22] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleSmoothScroll(e, "#pricing")}
                  className="text-sm font-semibold hover:text-[#e67e22] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  onClick={(e) => handleSmoothScroll(e, "#booking")}
                  className="text-sm font-semibold hover:text-[#e67e22] transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Elegant, mammoth, bold center wordmark: reem.tech */}
      <div className="w-full text-center border-t border-white/5 pt-12 mt-12 select-none">
        <span className="block text-[14vw] sm:text-[14vw] md:text-[15vw] font-black tracking-tighter leading-none text-white transition-opacity select-none duration-500 hover:opacity-[0.85]">
          reem.tech
        </span>
        
        {/* Copyright details */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 uppercase tracking-widest gap-2">
          <span>© {currentYear} REEM. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED & HANDCRAFTED WITH PRECISION</span>
        </div>
      </div>
    </footer>
  );
}
