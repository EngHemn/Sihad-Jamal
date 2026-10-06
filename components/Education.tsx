"use client";

import { educationList } from "@/data/education";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 bg-[#111827] text-[#F3F4F6] relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b-2 border-[#334155]/20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3F4F6]/80 mb-2">
              <span className="w-2.5 h-2.5 bg-[#3B6EA8] rounded-xs" />
              <span>Section 05 // Academic Progression</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F3F4F6]">
              FORMAL <span className="underline decoration-[#3B6EA8] decoration-4 underline-offset-4">EDUCATION</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#F3F4F6]/80 max-w-sm">
            <span>Rigorous foundation in computer science theory, algorithms, software engineering principles, and informatics.</span>
          </div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {educationList.map((edu, index) => (
            <ScrollReveal
              key={edu.id}
              animation="fade-up"
              delay={index * 0.15}
            >
              <div className="h-full bg-[#1F2937] text-[#9CA3AF] p-8 rounded-3xl border-3 border-[#334155] shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#3B6EA8] text-white">
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs text-[#6B9BD1] font-semibold">
                      {edu.status}
                    </span>
                  </div>

                  {/* University Name */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                    {edu.institution}
                  </h3>

                  {/* Degree & Major */}
                  <div className="space-y-1 mb-6">
                    <div className="font-mono text-sm text-[#9CA3AF] font-bold">
                      {edu.major}
                    </div>
                    <div className="text-xs text-gray-400">
                      {edu.degree} · {edu.location}
                    </div>
                  </div>

                  {/* Academic Highlights */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <p className="font-mono text-[11px] text-[#6B9BD1] uppercase tracking-wider font-semibold">
                      Focus Areas & Highlights:
                    </p>
                    <ul className="space-y-2 text-xs text-gray-300 font-sans">
                      {edu.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#3B6EA8] font-black shrink-0 mt-0.5">
                            •
                          </span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Verification Stamp */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span>ACCREDITED INSTITUTION</span>
                  <span className="text-[#9CA3AF] font-bold">SOFTWARE CURRICULUM</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
