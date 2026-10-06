"use client";

import { softSkills } from "@/data/softSkills";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="py-24 md:py-32 bg-[#1F2937] text-[#9CA3AF] relative overflow-hidden bg-grid-pattern-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6B9BD1] mb-2">
              <span className="w-2 h-2 bg-[#3B6EA8] rounded-xs" />
              <span>Section 09 // Professional Attributes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              ENGINEERING <span className="text-[#9CA3AF]">SOFT SKILLS</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#9CA3AF]/70 max-w-sm">
            <span>Essential collaborative, analytical, and execution habits driving high-performance software team dynamics.</span>
          </div>
        </div>

        {/* Soft Skills Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12">
          {softSkills.map((skill, index) => (
            <ScrollReveal
              key={skill.id}
              animation="fade-up"
              delay={index * 0.04}
            >
              <div className="h-full bg-[#1F2937] p-6 rounded-2xl border-2 border-white/10 hover:border-[#334155] transition-all duration-300 shadow-md hover:-translate-y-1 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#3B6EA8] text-white font-bold">
                      {skill.category}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400">
                      #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white tracking-tight group-hover:text-[#9CA3AF] transition-colors mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    {skill.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#6B9BD1]">
                  <span>PRACTICED DAILY</span>
                  <span>ACTIVE</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
