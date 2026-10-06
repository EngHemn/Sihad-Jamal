"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracking
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#111827]/95 backdrop-blur-md border-b border-[#334155]/15 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3F4F6] rounded-lg p-1"
              aria-label="Sihad Jamal - Portfolio Home"
            >
              <div className="w-10 h-10 bg-[#1F2937] rounded-lg flex items-center justify-center font-mono font-bold text-[#9CA3AF] text-lg border-2 border-[#334155] group-hover:bg-[#3B6EA8] group-hover:border-[#3B6EA8] transition-colors shadow-sm">
                SJ
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm tracking-wider uppercase text-[#F3F4F6] group-hover:text-[#3B6EA8] transition-colors">
                  {personalInfo.name}
                </span>
                <span className="font-mono text-[11px] text-[#F3F4F6]/70 tracking-tight">
                  Software Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 bg-[#1F2937] px-4 py-1.5 rounded-full shadow-md border border-[#334155]"
              aria-label="Primary Navigation"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "text-[#F3F4F6] bg-[#111827] font-bold shadow-xs"
                        : "text-[#9CA3AF]/80 hover:text-[#9CA3AF] hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA & Status */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 font-mono text-[11px] text-[#F3F4F6]/80 px-2.5 py-1 rounded-full border border-[#334155]/20 bg-[#1F2937]/5">
                <span className="w-2 h-2 rounded-full bg-[#3B6EA8] animate-pulse" />
                <span>Available for Hire</span>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-4 py-2 bg-[#1F2937] text-[#9CA3AF] hover:bg-[#3B6EA8] text-xs font-bold tracking-wider uppercase rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#1F2937] text-[#9CA3AF] hover:bg-[#3B6EA8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F3F4F6]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#1F2937] text-[#9CA3AF] transition-all duration-300 lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
        style={{ top: "64px" }}
      >
        <div className="flex flex-col gap-2 pt-4">
          <p className="font-mono text-xs text-[#6B9BD1] uppercase tracking-widest mb-2">
            Navigation Index
          </p>
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between py-3 border-b border-white/10 text-xl font-bold tracking-tight transition-colors ${
                  isActive
                    ? "text-[#9CA3AF] pl-2 border-l-4 border-l-[#3B6EA8]"
                    : "text-white/80 hover:text-[#9CA3AF]"
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#9CA3AF]/50">
                  0{index + 1}
                </span>
              </a>
            );
          })}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs text-white/70">
            <span>Soran, Erbil, Iraq</span>
            <span className="text-[#9CA3AF]">+964 0781 915 5858</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="w-full py-3 bg-[#3B6EA8] hover:bg-[#6B9BD1] text-white text-center font-bold uppercase tracking-wider text-sm rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
}
