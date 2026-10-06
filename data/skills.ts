export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Core"
    tag: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile & Frontend Engineering",
    description: "Architecting cross-platform apps and modern reactive web applications.",
    skills: [
      { name: "Flutter", level: "Core Specialty", tag: "Mobile", description: "State management, clean architecture, responsive widgets, multi-platform UI" },
      { name: "Dart", level: "Proficient", tag: "Language", description: "Async programming, strong typing, OOP patterns" },
      { name: "React.js", level: "Advanced", tag: "Web", description: "Hooks, component lifecycle, modular state architectures" },
      { name: "JavaScript", level: "Proficient", tag: "Language", description: "ES6+, DOM manipulation, event-driven development" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Styling", description: "Modern utility-first CSS, custom design systems, responsive grids" },
      { name: "Responsive Web Design", level: "Mastered", tag: "UI", description: "Fluid typography, mobile-first design, cross-browser consistency" },
      { name: "UI/UX Design Principles", level: "Proficient", tag: "Design", description: "Visual hierarchy, intuitive navigation, ergonomic user flows" },
    ],
  },
  {
    title: "Backend, Databases & Core CS",
    description: "Engineering data schemas, database integrity, and system problem solving.",
    skills: [
      { name: "MySQL", level: "Proficient", tag: "Database", description: "Relational data modeling, schema design, queries, normalization" },
      { name: "Database Management", level: "Proficient", tag: "Data", description: "CRUD transactions, performance tuning, relational consistency" },
      { name: "Software Development", level: "Core", tag: "Engineering", description: "End-to-end SDLC, clean code principles, modular maintainability" },
      { name: "Object-Oriented Programming", level: "Foundational", tag: "Paradigms", description: "Encapsulation, inheritance, polymorphism, design patterns" },
      { name: "Problem Solving", level: "Strengths", tag: "Analytical", description: "Algorithmic thinking, edge-case analysis, optimization" },
      { name: "Debugging", level: "Experienced", tag: "Practices", description: "Root-cause diagnosis, profiling, browser & mobile devtools" },
    ],
  },
  {
    title: "Developer Tooling & Ecosystem",
    description: "Industry-standard developer workflows, version control, and environments.",
    skills: [
      { name: "Git", level: "Proficient", tag: "Version Control", description: "Branching workflows, atomic commits, merge conflict resolution" },
      { name: "GitHub", level: "Proficient", tag: "Collaboration", description: "Repository management, open-source collaboration, pull requests" },
      { name: "Android Studio", level: "Proficient", tag: "IDE", description: "Emulator debugging, Android SDK configuration, APK build pipelines" },
      { name: "VS Code", level: "Advanced", tag: "Editor", description: "Custom configurations, linting workflows, multi-language extensions" },
    ],
  },
];

export const allTechnicalSkills = [
  "Dart",
  "JavaScript",
  "Tailwind CSS",
  "React.js",
  "Flutter",
  "MySQL",
  "Git",
  "GitHub",
  "VS Code",
  "Android Studio",
  "Responsive Web Design",
  "UI/UX Design Principles",
  "Software Development",
  "Object-Oriented Programming",
  "Problem Solving",
  "Debugging",
  "Database Management",
];
