"use client";

import { useState } from "react";
import { projects, ProjectItem } from "@/data/projects";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "Web App", "Mobile", "Python"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Web App") return p.technologies.includes("React");
    if (activeFilter === "Mobile") return p.technologies.includes("Flutter");
    if (activeFilter === "Python") return p.technologies.includes("Python");
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#1F2937] text-[#9CA3AF] relative overflow-hidden bg-grid-pattern-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6B9BD1] mb-2">
              <span className="w-2 h-2 bg-[#3B6EA8] rounded-xs" />
              <span>Section 06 // Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              PROJECT <span className="text-[#9CA3AF]">SHOWCASE</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#111827] text-[#F3F4F6] shadow-md"
                      : "bg-[#1F2937] text-white/80 hover:text-[#9CA3AF] hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade-up"
              delay={index * 0.1}
            >
              <div
                className="group relative h-full bg-[#1F2937] rounded-3xl p-6 sm:p-8 border-2 border-white/10 hover:border-[#334155] transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Decorative Top Accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-1 rounded-t-full transition-all duration-300"
                  style={{
                    backgroundColor: project.accentColor,
                    opacity: 0.8,
                  }}
                />

                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/30 to-white/10 group-hover:from-[#111827] group-hover:to-[#6B9BD1] transition-all duration-300">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#1F2937] text-[#9CA3AF] border border-[#334155]/30 font-semibold">
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Category & Title */}
                  <div className="space-y-1 mb-4">
                    <p className="font-mono text-xs text-[#6B9BD1] uppercase tracking-wider font-semibold">
                      {project.category}
                      {project.role && ` // ${project.role}`}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#9CA3AF] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Core Features Snapshot */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                    <p className="font-mono text-[11px] text-[#9CA3AF] uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-[#3B6EA8] font-bold">›</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#1F2937] text-[#9CA3AF] border border-[#334155]/20 group-hover:border-[#6B9BD1] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Action Link */}
                  <div className="flex items-center justify-between font-mono text-xs pt-2 text-[#9CA3AF] group-hover:text-white">
                    <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span>Explore Specs & Features</span>
                      <span className="transition-transform group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                    {project.metrics && (
                      <span className="hidden sm:inline text-[11px] text-[#6B9BD1]">
                        {project.metrics}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Spec Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-[#1F2937] text-[#9CA3AF] p-6 sm:p-8 rounded-3xl border-3 border-[#334155] shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-[#6B9BD1] uppercase tracking-wider">
                  Project Spec // {selectedProject.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-[#1F2937] text-white hover:bg-[#3B6EA8] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
                  System Overview
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider mb-3">
                  Delivered Architecture & Features
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#3B6EA8] font-black shrink-0 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded bg-[#1F2937] text-[#9CA3AF] border border-[#334155]/30 font-mono text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#6B9BD1]">
                Engineered by Sihad Jamal
              </span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-[#111827] text-[#F3F4F6] hover:bg-[#3B6EA8] hover:text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
