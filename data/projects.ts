export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  role?: string;
  technologies: string[];
  description: string;
  features: string[];
  metrics?: string;
  accentColor: string;
  badge: string;
}

export const projects: ProjectItem[] = [
  {
    id: "pos-management",
    number: "01",
    title: "POS & Cashier Management System",
    category: "Full-Featured Web Application",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    description:
      "Designed and developed a modern Point of Sale and Cashier Management System built for high-throughput retail checkout, precise stock tracking, and instantaneous transaction recording.",
    features: [
      "Product management with categorizations, SKU tracking, and real-time pricing",
      "Dynamic inventory management with stock thresholds and automated reorder alerts",
      "Sales management dashboard featuring daily/weekly summaries and cash flow insights",
      "Transaction management with instant digital receipt generation and payment auditing",
      "Ultra-responsive touch-first interface engineered for rapid cashier inputs",
      "Performance optimization minimizing re-renders and client memory consumption",
    ],
    metrics: "Sub-second checkout & robust offline-ready UI",
    accentColor: "#3B6EA8",
    badge: "Enterprise Web App",
  },
  {
    id: "flutter-mobile-app",
    number: "02",
    title: "Flutter Mobile Application",
    category: "Cross-Platform Mobile App",
    technologies: ["Flutter", "Dart"],
    description:
      "Engineered an expressive, high-performance cross-platform mobile application providing seamless native experiences, buttery-smooth 60fps animations, and dependable state management.",
    features: [
      "Responsive UI dynamically adapted to diverse screen aspect ratios and tablets",
      "Deep Android support with hardware-accelerated rendering and native permissions",
      "Clean architecture separation (Domain, Data, Presentation layers)",
      "Performance-focused development with optimized widget tree rebuilds",
      "User-friendly, ergonomic design language prioritizing frictionless single-hand usage",
    ],
    metrics: "60 FPS native smoothness & multi-screen support",
    accentColor: "#6B9BD1",
    badge: "Native Mobile Experience",
  },
  {
    id: "gym-management-system",
    number: "03",
    title: "Gym Management System",
    category: "Health & Fitness Management Platform",
    role: "Frontend Developer",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    description:
      "Developed the modular frontend architecture of an end-to-end Gym Management System, connecting trainers, members, and administrators through unified, role-based visual dashboards.",
    features: [
      "Gym member interface for booking workout slots, checking subscriptions, and monitoring attendance",
      "Administrator control panel for plan management, revenue monitoring, and staff shifts",
      "Reusable UI component system built with strict design token standards",
      "Fully responsive design accommodating mobile check-ins and desktop admin panels",
      "RESTful backend integration handling asynchronous member status updates",
      "Significant UX improvements reducing booking friction and onboarding drop-offs",
    ],
    metrics: "Modular reusable component system & role-based UI",
    accentColor: "#111827",
    badge: "Client SaaS System",
  },
  {
    id: "stealth-grid-game",
    number: "04",
    title: "Stealth Grid Game",
    category: "Interactive 2D Game Logic",
    technologies: ["Python"],
    description:
      "Engineered a 2D stealth-based grid tactics game utilizing Python, incorporating ray-cast line-of-sight algorithms, pathfinding obstacles, and state-machine enemy behavioral trees.",
    features: [
      "Fluid grid-based player movement with smooth interpolation and keybindings",
      "Dynamic enemy detection cone algorithms simulating field-of-view and hearing radius",
      "Intelligent obstacle navigation and strategic cover mechanics",
      "Interactive game logic with modular turn and real-time state machines",
      "Performance optimization maintaining high frame ticks during multi-entity scans",
      "Team collaboration utilizing Git workflows for asset and level script integration",
    ],
    metrics: "Custom stealth AI cones & real-time pathfinding logic",
    accentColor: "#3B6EA8",
    badge: "Game Engineering",
  },
];
