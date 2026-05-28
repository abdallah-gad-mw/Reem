import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  // Track scroll position to update active visual link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = el.getBoundingClientRect().height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#contact") {
      onContactClick();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] sm:w-auto min-w-[320px] sm:min-w-[480px] rounded-full bg-[#1b1109]/70 backdrop-blur-xl border border-white/10 px-6 py-2.5 flex items-center justify-between sm:justify-center gap-1 sm:gap-6 shadow-2xl transition-all duration-300"
        id="main-navbar"
      >
        {/* Desktop Links (and compact mobile wrapper) */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase cursor-pointer transition-all duration-300 ${
                activeSection === link.href
                  ? "bg-white text-black"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navbar Content */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <span className="text-xs font-mono font-bold tracking-wider text-[#e69b5c]">ABDALLAH.</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#e69b5c] transition-colors p-1 cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center sm:hidden">
          <div className="space-y-8 text-center structure-nav">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="block text-2xl font-bold tracking-tight text-white hover:text-[#e69b5c] active:scale-95 transition-all animate-fade-in cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
