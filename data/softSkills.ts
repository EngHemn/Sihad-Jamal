export interface SoftSkillItem {
  id: string;
  name: string;
  category: string;
  summary: string;
}

export const softSkills: SoftSkillItem[] = [
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "Engineering Mindset",
    summary: "Deconstructing complex bugs and architectural challenges into systematic, testable solutions.",
  },
  {
    id: "critical-thinking",
    name: "Critical Thinking",
    category: "Engineering Mindset",
    summary: "Evaluating technical trade-offs between speed, scalability, code elegance, and client budget.",
  },
  {
    id: "communication",
    name: "Communication",
    category: "Interpersonal",
    summary: "Conveying technical ideas with clarity to stakeholders, engineers, and non-technical clients.",
  },
  {
    id: "teamwork",
    name: "Teamwork",
    category: "Interpersonal",
    summary: "Thriving in shared Git workflows, pair programming, and peer code review environments.",
  },
  {
    id: "time-management",
    name: "Time Management",
    category: "Execution",
    summary: "Prioritizing high-leverage milestones, managing project deadlines, and meeting sprint goals.",
  },
  {
    id: "fast-learning",
    name: "Fast Learning",
    category: "Growth",
    summary: "Quickly assimilating modern SDK updates, new frontend frameworks, and developer paradigms.",
  },
  {
    id: "attention-to-detail",
    name: "Attention to Detail",
    category: "Quality",
    summary: "Inspecting pixel precision, edge-case validation, smooth transitions, and clean code hygiene.",
  },
  {
    id: "adaptability",
    name: "Adaptability",
    category: "Growth",
    summary: "Pivoting smoothly when requirements shift or new technical constraints emerge mid-development.",
  },
  {
    id: "project-management",
    name: "Project Management",
    category: "Execution",
    summary: "Breaking larger initiatives down into structured deliverable tasks and clear roadmaps.",
  },
  {
    id: "analytical-thinking",
    name: "Analytical Thinking",
    category: "Engineering Mindset",
    summary: "Examining metrics, user flows, and error stacks to diagnose bottlenecks empirically.",
  },
  {
    id: "leadership",
    name: "Leadership",
    category: "Interpersonal",
    summary: "Taking ownership of feature branches, mentoring peers, and championing best practices.",
  },
  {
    id: "creativity",
    name: "Creativity",
    category: "Design & UX",
    summary: "Crafting distinct interactive visual details and innovative solutions to ergonomic user problems.",
  },
];
