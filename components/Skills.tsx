"use client";

import { useState } from "react";
import { skillCategories, allTechnicalSkills } from "@/data/skills";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#111827] text-[#F3F4F6] relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b-2 border-[#334155]/20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3F4F6]/80 mb-2">
              <span className="w-2.5 h-2.5 bg-[#3B6EA8] rounded-xs" />
              <span>Section 03 // Technical Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F3F4F6]">
              SKILLS & <span className="underline decoration-[#3B6EA8] decoration-4 underline-offset-4">STACK</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#F3F4F6]/80 max-w-sm">
            <span>Specializing in multi-platform client applications, clean software design, and database integrity.</span>
          </div>
        </div>

        {/* Floating Technology Badge Cloud */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="py-8 my-6 bg-[#1F2937] rounded-2xl p-6 shadow-md border-2 border-[#334155] text-[#9CA3AF]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs uppercase tracking-wider text-[#6B9BD1]">
              <span>Quick Tech Cloud // 17 Core Competencies</span>
              <span className="hidden sm:inline text-white/50">Interactive Focus</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {allTechnicalSkills.map((skill) => {
                const isHovered = hoveredSkill === skill;
                return (
                  <button
                    key={skill}
                    type="button"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-tight transition-all duration-200 cursor-default ${
                      isHovered
                        ? "bg-[#3B6EA8] text-white scale-105 shadow-md"
                        : "bg-[#1F2937] text-[#9CA3AF] hover:bg-[#6B9BD1] hover:text-[#F3F4F6]"
                    } border border-white/10`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-4 pb-8">
          {skillCategories.map((category, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer border-2 border-[#334155] ${
                  isActive
                    ? "bg-[#1F2937] text-[#9CA3AF] shadow-md -translate-y-0.5"
                    : "bg-[#111827] text-[#F3F4F6] hover:bg-[#1F2937]/10"
                }`}
              >
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content: Active Category Skills Grid */}
        <div className="pt-2">
          <p className="font-mono text-xs text-[#F3F4F6]/80 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#3B6EA8] rounded-full" />
            <span>{skillCategories[activeTab].description}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeTab].skills.map((skill, sIdx) => (
              <ScrollReveal
                key={skill.name}
                animation="fade-up"
                delay={sIdx * 0.05}
              >
                <div className="h-full bg-[#1F2937] text-[#9CA3AF] p-6 rounded-2xl border-2 border-[#334155] shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
                  <div>
                    {/* Top tags */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#3B6EA8] text-white font-bold">
                        {skill.tag}
                      </span>
                      <span className="font-mono text-[11px] text-[#6B9BD1] font-semibold">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-xl font-black text-white tracking-tight mb-2">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Micro Visual Status Bar */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]/70">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-[#6B9BD1]">VERIFIED</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
