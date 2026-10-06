"use client";

import { languages } from "@/data/languages";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function Languages() {
  return (
    <section
      id="languages"
      className="py-20 md:py-28 bg-[#111827] text-[#F3F4F6] relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b-2 border-[#334155]/20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3F4F6]/80 mb-2">
              <span className="w-2.5 h-2.5 bg-[#3B6EA8] rounded-xs" />
              <span>Section 08 // Communication & Fluency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F3F4F6]">
              LANGUAGES & <span className="underline decoration-[#3B6EA8] decoration-4 underline-offset-4">PROFICIENCY</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#F3F4F6]/80 max-w-xs">
            <span>Multilingual capabilities enabling seamless regional collaboration and international English engineering workflows.</span>
          </div>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {languages.map((lang, index) => (
            <ScrollReveal
              key={lang.id}
              animation="fade-up"
              delay={index * 0.1}
            >
              <div className="h-full bg-[#1F2937] text-[#9CA3AF] p-6 sm:p-8 rounded-3xl border-3 border-[#334155] shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#3B6EA8] text-white">
                      {lang.badge}
                    </span>
                    <span className="font-mono text-xl font-black text-[#9CA3AF]">
                      {lang.percentage}%
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                    {lang.name}
                  </h3>

                  <div className="font-mono text-xs text-[#6B9BD1] font-semibold mb-4">
                    {lang.level}
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                    {lang.description}
                  </p>
                </div>

                {/* Animated Indicator Bar */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="w-full h-2.5 bg-[#1F2937] rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-[#3B6EA8] to-[#6B9BD1] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-gray-400">
                    <span>PROFICIENCY</span>
                    <span className="text-[#9CA3AF] font-bold">{lang.level}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
