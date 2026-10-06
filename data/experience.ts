export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  badge?: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "freelance-dev",
    role: "Freelance Software Developer",
    company: "Self-Employed / Independent Contractor",
    period: "2023 — Present",
    location: "Remote",
    type: "Contract / Freelance",
    badge: "Active",
    responsibilities: [
      "Developed responsive web and mobile applications using Flutter and React.",
      "Designed intuitive and user-friendly interfaces using HTML, CSS, and Tailwind CSS.",
      "Built scalable software solutions based on client requirements.",
      "Integrated REST APIs for seamless asynchronous data synchronization.",
      "Implemented modern UI/UX practices ensuring accessible and fluid user journeys.",
      "Collaborated remotely with clients, translating business requirements into technical specs.",
      "Gathered requirements and provided frequent milestone updates and demos.",
      "Managed source code and version control using Git and GitHub.",
      "Optimized application performance, asset loading, and runtime speeds.",
      "Fixed bugs and maintained clean, reliable, and refactored codebases.",
    ],
  },
  {
    id: "customer-service",
    role: "Customer Service Agent",
    company: "High Performance Company",
    period: "2025 — 2026",
    location: "On-site / Soran, Erbil",
    type: "Professional Service",
    responsibilities: [
      "Delivered excellent customer support under high-volume operations.",
      "Maintained consistently high customer satisfaction benchmarks and positive reviews.",
      "Resolved customer inquiries efficiently with quick turnaround times.",
      "Worked in a fast-paced, high-standard call center environment.",
      "Maintained accurate customer records and service logs using CRM systems.",
      "Collaborated with cross-functional team members to streamline incident escalation.",
      "Worked diligently toward demanding performance and service-quality targets.",
      "Demonstrated strong interpersonal communication, problem-solving, and active listening skills.",
    ],
  },
];
