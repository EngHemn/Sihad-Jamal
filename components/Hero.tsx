"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio";
import { ScrollReveal } from "@/animations/ScrollAnimations";

// Dynamic import for Three.js hero experience
const HeroScene = dynamic(() => import("@/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full border-3 border-[#334155] border-t-[#3B6EA8] animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#F3F4F6]/70">
          Initializing 3D Canvas...
        </span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#111827] bg-grid-pattern"
    >
      {/* Decorative Technical Top Accent Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2 border-b-2 border-[#334155]/20 font-mono text-[11px] sm:text-xs text-[#F3F4F6] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#3B6EA8] rounded-xs" />
            <span className="font-bold">ENG.SPEC // 2026</span>
            <span className="text-[#F3F4F6]/50">|</span>
            <span className="hidden sm:inline">FULL-STACK & MOBILE EXPERTISE</span>
          </div>
          <div className="flex items-center gap-3 text-right">
            <span className="hidden md:inline text-[#F3F4F6]/70">LOCATION:</span>
            <span className="font-bold bg-[#1F2937] text-[#9CA3AF] px-2 py-0.5 rounded-sm">
              SORAN, ERBIL, IRAQ
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & Intro (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 z-10">
            {/* Role Pills Banner */}
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-[#1F2937] text-[#9CA3AF] font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-sm font-bold shadow-xs">
                  Software Engineer
                </span>
                <span className="bg-[#3B6EA8] text-white font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-sm font-bold shadow-xs">
                  Flutter Developer
                </span>
                <span className="bg-[#6B9BD1] text-[#F3F4F6] font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-sm font-bold shadow-xs">
                  Frontend Developer
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Bold Grotesque Typography */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#F3F4F6] leading-[0.92]">
                  SIHAD <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1F2937] via-[#3B6EA8] to-[#111827]">
                    JAMAL
                  </span>
                </h1>
                <p className="pt-2 text-xl sm:text-2xl md:text-3xl font-mono font-bold tracking-tight text-[#F3F4F6] flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-[#3B6EA8] inline-block" />
                  SOFTWARE ENGINEER
                </p>
              </div>
            </ScrollReveal>

            {/* Short Bio Statement */}
            <ScrollReveal animation="fade-up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#F3F4F6]/90 max-w-xl font-medium leading-relaxed">
                {personalInfo.bioShort}
              </p>
            </ScrollReveal>

            {/* Roles Marquee / Highlights */}
            <ScrollReveal animation="fade-up" delay={0.35}>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F3F4F6] py-2 border-y border-[#334155]/20">
                <span className="font-bold">ROLES:</span>
                <span>Flutter Developer</span>
                <span className="text-[#3B6EA8] font-black">/</span>
                <span>Frontend Developer</span>
                <span className="text-[#3B6EA8] font-black">/</span>
                <span>IT Professional</span>
                <span className="text-[#3B6EA8] font-black">/</span>
                <span>Customer Service Agent</span>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Primary CTA: View My Work */}
                <button
                  type="button"
                  onClick={() => handleScrollTo("projects")}
                  className="px-6 py-3.5 bg-[#1F2937] text-[#9CA3AF] hover:bg-[#3B6EA8] hover:text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg border-2 border-[#334155] transition-all duration-200 shadow-md hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>View My Work</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                {/* Secondary CTA: Contact Me */}
                <button
                  type="button"
                  onClick={() => handleScrollTo("contact")}
                  className="px-6 py-3.5 bg-[#3B6EA8] text-white hover:bg-[#6B9BD1] hover:text-[#F3F4F6] font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg border-2 border-[#334155] transition-all duration-200 shadow-md hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  Contact Me
                </button>

                {/* Tertiary CTA: Download CV */}
                <a
                  href="/person.png"
                  download="Sihad_Jamal_Resume.png"
                  className="px-5 py-3.5 bg-transparent text-[#F3F4F6] hover:bg-[#1F2937] hover:text-[#9CA3AF] font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg border-2 border-[#334155] transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
                  title="Download Sihad Jamal Profile / CV"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Social Links Bar */}
            <ScrollReveal animation="fade-up" delay={0.45}>
              <div className="flex flex-wrap items-center gap-4 pt-3 font-mono text-xs text-[#F3F4F6]">
                <span className="font-bold uppercase tracking-wider text-[#F3F4F6]/70">
                  Connect:
                </span>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F2937]/10 hover:bg-[#1F2937] hover:text-[#9CA3AF] transition-colors font-medium border border-[#334155]/20"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F2937]/10 hover:bg-[#1F2937] hover:text-[#9CA3AF] transition-colors font-medium border border-[#334155]/20"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1F2937]/10 hover:bg-[#1F2937] hover:text-[#9CA3AF] transition-colors font-medium border border-[#334155]/20"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Three.js Element + Profile Image Badge (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Interactive Three.js Scene */}
            <div className="w-full relative z-0">
              <HeroScene />
            </div>

            {/* Official Profile Image Floating Overlay Card */}
            <div className="relative -mt-16 sm:-mt-20 z-20 w-full max-w-sm">
              <div className="bg-[#1F2937] text-[#9CA3AF] p-4 rounded-2xl border-3 border-[#334155] shadow-[8px_8px_0px_rgba(44,45,52,0.4)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  {/* Actual Profile Image from /public/person.png */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden border-2 border-[#334155] shadow-md bg-[#1F2937]">
                    <Image
                      src={personalInfo.profileImage}
                      alt="Sihad Jamal - Software Engineer"
                      fill
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Profile Summary Info */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#6B9BD1] uppercase tracking-wider font-semibold">
                      Profile Verified
                    </span>
                    <h3 className="font-black text-lg tracking-tight text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-[#9CA3AF]/80 font-medium">
                      Salahaddin University
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-2 h-2 rounded-full bg-[#3B6EA8] animate-pulse" />
                      <span className="font-mono text-[11px] text-white/90">
                        Open for Roles & Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="flex items-center justify-between pt-4 border-t border-[#334155]/20 font-mono text-xs text-[#F3F4F6]">
          <div className="flex items-center gap-2">
            <span className="animate-bounce">↓</span>
            <span className="uppercase tracking-widest font-semibold">
              SCROLL TO EXPLORE PORTFOLIO
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[#F3F4F6]/60">
            <span>SEC.01 // HERO</span>
            <span>→</span>
            <span>SEC.02 // ABOUT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
