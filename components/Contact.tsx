"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { ScrollReveal } from "@/animations/ScrollAnimations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 15) {
      errors.message = "Please provide at least 15 characters";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulated API submission with clear structure for email provider integration (e.g. EmailJS, Resend, SendGrid)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormErrors({});
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#111827] text-[#F3F4F6] relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b-2 border-[#334155]/20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F3F4F6]/80 mb-2">
              <span className="w-2.5 h-2.5 bg-[#3B6EA8] rounded-xs" />
              <span>Section 10 // Initiation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F3F4F6]">
              LET&apos;S BUILD <br className="hidden sm:inline" />
              <span className="underline decoration-[#3B6EA8] decoration-4 underline-offset-4">
                SOMETHING GREAT
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#F3F4F6]/80 max-w-xs">
            <span>Open for software engineering roles, mobile contract development, freelance opportunities, and collaborative tech builds.</span>
          </div>
        </div>

        {/* Content Split: Direct Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Left Column: Contact Channels & Presence (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#F3F4F6] mb-2">
                    Direct Contact Details
                  </h3>
                  <p className="text-sm text-[#F3F4F6]/80 leading-relaxed font-sans">
                    Have an open software engineering role, a mobile application project, or a technical inquiry? Reach out directly via email, phone, or LinkedIn.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F2937] text-[#9CA3AF] hover:bg-[#3B6EA8] hover:text-white transition-all duration-200 border-2 border-[#334155] shadow-md group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] group-hover:bg-white/20 transition-colors shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-[#6B9BD1] uppercase tracking-wider group-hover:text-white/80">
                        Email Address
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold tracking-tight">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+96407819155858"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F2937] text-[#9CA3AF] hover:bg-[#3B6EA8] hover:text-white transition-all duration-200 border-2 border-[#334155] shadow-md group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] group-hover:bg-white/20 transition-colors shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-[#6B9BD1] uppercase tracking-wider group-hover:text-white/80">
                        Direct Phone / WhatsApp
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold tracking-tight">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F2937] text-[#9CA3AF] border-2 border-[#334155] shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-[#6B9BD1] uppercase tracking-wider">
                        Geographic Base
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold tracking-tight">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 flex items-center gap-3 font-mono text-xs">
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#1F2937] text-[#9CA3AF] hover:bg-[#3B6EA8] hover:text-white transition-colors text-center font-bold border-2 border-[#334155] flex items-center justify-center gap-2"
                  >
                    <span>GitHub Profile</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#1F2937] text-[#9CA3AF] hover:bg-[#3B6EA8] hover:text-white transition-colors text-center font-bold border-2 border-[#334155] flex items-center justify-center gap-2"
                  >
                    <span>LinkedIn Network</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="bg-[#1F2937] text-[#9CA3AF] p-8 sm:p-10 rounded-3xl border-3 border-[#334155] shadow-md">
                <div className="pb-6 mb-6 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#6B9BD1] uppercase tracking-wider">
                      Send Transmission
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      Direct Message
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-gray-400">
                    24H Response Time
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#3B6EA8] text-white flex items-center justify-center font-mono font-bold text-2xl">
                      ✓
                    </div>
                    <h4 className="text-2xl font-black text-white">
                      Message Transmitted!
                    </h4>
                    <p className="text-sm text-gray-300 max-w-sm font-sans">
                      Thank you for contacting Sihad Jamal. Your message has been recorded and Sihad will respond promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-[#111827] text-[#F3F4F6] hover:bg-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-1.5"
                      >
                        Your Name <span className="text-[#3B6EA8]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#1F2937] text-white placeholder-gray-400 border border-white/15 focus:border-[#334155] focus:outline-none focus:ring-1 focus:ring-[#111827] text-sm font-sans"
                      />
                      {formErrors.name && (
                        <p className="font-mono text-xs text-[#3B6EA8] mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-1.5"
                      >
                        Email Address <span className="text-[#3B6EA8]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1F2937] text-white placeholder-gray-400 border border-white/15 focus:border-[#334155] focus:outline-none focus:ring-1 focus:ring-[#111827] text-sm font-sans"
                      />
                      {formErrors.email && (
                        <p className="font-mono text-xs text-[#3B6EA8] mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject / Purpose */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-1.5"
                      >
                        Inquiry Scope
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Flutter Mobile Project / Full-time Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-[#1F2937] text-white placeholder-gray-400 border border-white/15 focus:border-[#334155] focus:outline-none focus:ring-1 focus:ring-[#111827] text-sm font-sans"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-mono text-xs uppercase tracking-wider text-white font-semibold mb-1.5"
                      >
                        Message <span className="text-[#3B6EA8]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe your project, team requirements, or collaboration idea..."
                        className="w-full px-4 py-3 rounded-xl bg-[#1F2937] text-white placeholder-gray-400 border border-white/15 focus:border-[#334155] focus:outline-none focus:ring-1 focus:ring-[#111827] text-sm font-sans resize-none"
                      />
                      {formErrors.message && (
                        <p className="font-mono text-xs text-[#3B6EA8] mt-1">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#3B6EA8] hover:bg-[#6B9BD1] hover:text-[#F3F4F6] text-white font-black uppercase tracking-wider text-sm rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Transmission...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
