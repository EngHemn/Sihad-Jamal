"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#1F2937] text-[#9CA3AF] relative overflow-hidden bg-grid-pattern-dark"
    >
      {/* Decorative Technical Borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B6EA8] via-[#6B9BD1] to-[#1F2937]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6B9BD1] mb-2">
              <span className="w-2 h-2 bg-[#3B6EA8] rounded-xs" />
              <span>Section 02 // Engineering Background</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              ABOUT <span className="text-[#9CA3AF]">SIHAD JAMAL</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9CA3AF]/70 max-w-xs text-left sm:text-right">
            <span>Salahaddin University // Software & Informatics Engineering</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-center">
          {/* Left Column: Asymmetric Profile Image Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal animation="scale-up" delay={0.1} className="w-full max-w-md">
              <div className="relative group">
                {/* Yellow Offset Accent Frame */}
                <div className="absolute -inset-3 bg-[#111827] rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 pointer-events-none" />

                {/* Orange Drop Accent */}
                <div className="absolute -inset-1.5 bg-[#3B6EA8] rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 pointer-events-none" />

                {/* Image Card Container */}
                <div className="relative bg-[#1F2937] rounded-2xl overflow-hidden border-2 border-[#334155] shadow-2xl">
                  <div className="relative h-[380px] sm:h-[440px] w-full">
                    <Image
                      src={personalInfo.profileImage}
                      alt="Sihad Jamal - Software Engineer"
                      fill
                      className="object-cover object-top filter grayscale-20 contrast-105 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* On-image Meta Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1F2937]/90 backdrop-blur-md p-4 rounded-xl border border-[#334155]/30 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] text-[#6B9BD1] uppercase tracking-wider">
                        Software Engineer
                      </p>
                      <p className="font-bold text-white text-sm">
                        Sihad Jamal
                      </p>
                    </div>
                    <div className="text-right font-mono text-[10px] text-[#9CA3AF]">
                      <span>Erbil, Iraq</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio Narrative & Statistics (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <ScrollReveal animation="fade-up" delay={0.15}>
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded bg-[#3B6EA8]/20 border border-[#3B6EA8] text-[#6B9BD1] font-mono text-xs font-bold uppercase tracking-wider">
                  Profile Overview
                </span>

                <p className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight">
                  Software Engineering student at{" "}
                  <span className="text-[#9CA3AF] underline decoration-[#3B6EA8] decoration-2 underline-offset-4">
                    Salahaddin University
                  </span>{" "}
                  with an uncompromising passion for cross-platform mobile architectures and modern web software.
                </p>

                <p className="text-base text-gray-300 leading-relaxed">
                  Experienced in building responsive applications using{" "}
                  <span className="text-[#9CA3AF] font-semibold">Flutter, React, JavaScript, and Tailwind CSS</span>.
                  Skilled at problem solving, creating clean user interfaces, and developing modern software solutions.
                </p>

                <p className="text-base text-gray-300 leading-relaxed">
                  Currently seeking opportunities to apply technical knowledge, expand professional experience, and contribute to innovative software projects.
                </p>
              </div>
            </ScrollReveal>

            {/* Key Engineering Pillars */}
            <ScrollReveal animation="fade-up" delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1F2937] p-4 rounded-xl border border-white/10 hover:border-[#6B9BD1] transition-colors">
                  <div className="font-mono text-xs text-[#6B9BD1] uppercase tracking-wider mb-1">
                    Architecture
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    Clean Code & Scalability
                  </h4>
                  <p className="text-xs text-gray-400">
                    Applying SOLID principles, OOP patterns, and separation of concerns across every Flutter and React codebase.
                  </p>
                </div>

                <div className="bg-[#1F2937] p-4 rounded-xl border border-white/10 hover:border-[#3B6EA8] transition-colors">
                  <div className="font-mono text-xs text-[#3B6EA8] uppercase tracking-wider mb-1">
                    Execution
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    Responsive UI / UX
                  </h4>
                  <p className="text-xs text-gray-400">
                    Translating complex business flows into ergonomic, fast, accessible user interfaces for mobile and web.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Statistics Grid */}
            <ScrollReveal animation="fade-up" delay={0.35}>
              <div className="pt-4 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-widest text-[#6B9BD1] mb-4">
                  Verified Engineering Metrics
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {personalInfo.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#334155] p-4 rounded-xl border-2 border-[#334155]/30 hover:border-[#334155] transition-colors flex flex-col justify-between"
                    >
                      <div className="text-3xl sm:text-4xl font-black text-[#9CA3AF] font-mono mb-1">
                        {stat.value}
                      </div>
                      <div className="font-bold text-white text-xs sm:text-sm tracking-tight leading-tight mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[10px] font-mono text-gray-400">
                        {stat.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
