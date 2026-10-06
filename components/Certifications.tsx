"use client";

import { certifications } from "@/data/certifications";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 md:py-32 bg-[#111827] text-[#F3F4F6] relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b-2 border-[#334155]/20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3F4F6]/80 mb-2">
              <span className="w-2.5 h-2.5 bg-[#3B6EA8] rounded-xs" />
              <span>Section 07 // Continuous Professional Learning</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F3F4F6]">
              LICENSES & <span className="underline decoration-[#3B6EA8] decoration-4 underline-offset-4">CERTIFICATIONS</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#F3F4F6]/80 max-w-sm">
            <span>Industry accredited coursework covering modern mobile architecture, JavaScript core mechanics, and responsive CSS engineering.</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={cert.id}
              animation="fade-up"
              delay={index * 0.1}
            >
              <div className="h-full bg-[#1F2937] text-[#9CA3AF] p-8 rounded-3xl border-3 border-[#334155] shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Issuer & Instructor Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#3B6EA8] text-white">
                      {cert.issuer}
                    </span>
                    {cert.instructor && (
                      <span className="font-mono text-xs text-[#6B9BD1] font-semibold">
                        Instructor: {cert.instructor}
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#9CA3AF] transition-colors mb-2">
                    {cert.title}
                  </h3>

                  {/* Focus Domain */}
                  <div className="font-mono text-xs text-[#6B9BD1] font-semibold mb-6">
                    {cert.focus}
                  </div>

                  {/* Curriculum Mastery Points */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <p className="font-mono text-[11px] text-[#9CA3AF] uppercase tracking-wider">
                      Core Topics Mastered:
                    </p>
                    <ul className="space-y-2 text-xs text-gray-300 font-sans">
                      {cert.skillsLearned.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-[#6B9BD1] font-bold">✓</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Verification Footer */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span>CURRICULUM COMPLETED</span>
                  <span className="text-[#9CA3AF] font-bold">VERIFIED COURSEWORK</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
