import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Languages from "@/components/Languages";
import SoftSkills from "@/components/SoftSkills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111827] text-[#F3F4F6] flex flex-col w-full overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section with 3D Canvas */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Technical Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Formal Education Section */}
      <Education />

      {/* Projects Showcase */}
      <Projects />

      {/* Licenses & Certifications Section */}
      <Certifications />

      {/* Language Proficiency Section */}
      <Languages />

      {/* Soft Skills & Working Habits */}
      <SoftSkills />

      {/* Contact & Initiation Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
