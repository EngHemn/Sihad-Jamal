"use client";

import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1F2937] text-[#9CA3AF] border-t-4 border-[#334155] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Top Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B6EA8] via-[#6B9BD1] to-[#1F2937]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#111827] text-[#F3F4F6] rounded-lg flex items-center justify-center font-mono font-black text-lg shadow-sm">
                SJ
              </div>
              <div>
                <span className="font-black text-lg tracking-wider uppercase text-white block">
                  {personalInfo.name}
                </span>
                <span className="font-mono text-xs text-[#9CA3AF]/80">
                  Software Engineer & Flutter Developer
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 max-w-sm leading-relaxed font-sans">
              Dedicated to building resilient cross-platform mobile systems and modern responsive web interfaces with rigorous engineering standards.
            </p>

            <div className="font-mono text-xs text-[#6B9BD1]">
              Soran, Erbil, Kurdistan Region, Iraq
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-[#6B9BD1] font-bold">
              Site Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a href="#home" className="hover:text-white transition-colors">
                › Home
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                › About Me
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                › Technical Skills
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                › Experience
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                › Projects
              </a>
              <a href="#education" className="hover:text-white transition-colors">
                › Education
              </a>
              <a href="#certifications" className="hover:text-white transition-colors">
                › Certifications
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                › Contact Form
              </a>
            </div>
          </div>

          {/* Connect & Action (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end">
            <p className="font-mono text-xs uppercase tracking-widest text-[#6B9BD1] font-bold">
              Direct Channels
            </p>
            <div className="flex flex-col gap-2 w-full max-w-[200px]">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-[#1F2937] hover:bg-[#3B6EA8] hover:text-white text-xs font-mono font-semibold transition-colors flex items-center justify-between"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-[#1F2937] hover:bg-[#3B6EA8] hover:text-white text-xs font-mono font-semibold transition-colors flex items-center justify-between"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-2 px-3 py-1.5 rounded-lg border border-[#334155]/30 hover:border-[#334155] text-[11px] font-mono text-[#9CA3AF] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>↑ BACK TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-gray-400">
          <div>
            © {new Date().getFullYear()} Sihad Jamal. All engineering rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>BUILT WITH NEXT.JS · TAILWIND CSS · THREE.JS · GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
