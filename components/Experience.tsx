"use client";

import { experiences } from "@/data/experience";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-[#1F2937] text-[#9CA3AF] relative overflow-hidden bg-grid-pattern-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6B9BD1] mb-2">
              <span className="w-2 h-2 bg-[#3B6EA8] rounded-xs" />
              <span>Section 04 // Career Milestones</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              PROFESSIONAL <span className="text-[#9CA3AF]">EXPERIENCE</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9CA3AF]/70 max-w-sm">
            <span>Demonstrated track record across client-facing software development and high-volume customer service operations.</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pt-16 max-w-4xl mx-auto">
          {/* Central Animated Timeline Stem */}
          <div className="absolute top-16 bottom-8 left-4 md:left-1/2 md:-ml-0.5 w-1 bg-gradient-to-b from-[#3B6EA8] via-[#6B9BD1] to-[#1F2937]" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1F2937] border-4 border-[#334155] flex items-center justify-center z-20 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3B6EA8]" />
                  </div>

                  {/* Left Spacer or Content on Desktop */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"
                    }`}
                  >
                    <ScrollReveal
                      animation={isEven ? "slide-right" : "slide-left"}
                      delay={0.1 * index}
                    >
                      <div className="bg-[#1F2937] p-6 sm:p-8 rounded-2xl border-2 border-white/10 hover:border-[#334155] transition-all duration-300 shadow-xl group">
                        {/* Meta Header */}
                        <div
                          className={`flex flex-wrap gap-2 items-center mb-3 ${
                            isEven ? "md:justify-end" : "justify-start"
                          }`}
                        >
                          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#3B6EA8] text-white font-bold uppercase tracking-wider">
                            {exp.period}
                          </span>
                          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#1F2937] text-[#9CA3AF] border border-[#334155]/30 font-semibold">
                            {exp.location}
                          </span>
                          {exp.badge && (
                            <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-[#6B9BD1] text-[#F3F4F6] font-bold">
                              {exp.badge}
                            </span>
                          )}
                        </div>

                        {/* Role Title */}
                        <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#9CA3AF] transition-colors">
                          {exp.role}
                        </h3>

                        {/* Company */}
                        <div className="font-mono text-sm text-[#6B9BD1] font-semibold mt-1 mb-4">
                          {exp.company}
                        </div>

                        {/* Responsibilities List */}
                        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-sans text-left">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5">
                              <span className="text-[#3B6EA8] font-black shrink-0 mt-0.5">
                                •
                              </span>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
