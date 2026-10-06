export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  instructor?: string;
  focus: string;
  skillsLearned: string[];
}

export const certifications: CertificationItem[] = [
  {
    id: "flutter-dart-complete",
    title: "Flutter & Dart — The Complete Guide",
    issuer: "Udemy",
    instructor: "Maximilian Schwarzmüller",
    focus: "Cross-Platform Mobile Application Development",
    skillsLearned: [
      "Flutter widget trees & layout composition",
      "Dart object-oriented programming & type system",
      "State management & reactive data propagation",
      "Native device hardware integration & API communication",
      "Publishing and optimizing Android & iOS builds",
    ],
  },
  {
    id: "js-fundamentals",
    title: "JavaScript Fundamentals — From Basics to Brilliance",
    issuer: "Udemy",
    focus: "Core Language Mechanics & Modern JavaScript",
    skillsLearned: [
      "ECMAScript 6+ syntax & functional programming",
      "Asynchronous JS: Promises, async/await, and the Event Loop",
      "DOM manipulation and event delegation patterns",
      "Object prototypes, scope chains, and memory management",
    ],
  },
  {
    id: "web-dev-course",
    title: "CSS, Bootstrap, JavaScript, Web Development Course",
    issuer: "Udemy",
    focus: "Comprehensive Responsive Web Engineering",
    skillsLearned: [
      "Modern CSS layouts: Flexbox, CSS Grid, and media queries",
      "Bootstrap responsive grid system and reusable UI patterns",
      "Interactive DOM behaviors and user feedback handling",
      "Cross-browser testing and performance audits",
    ],
  },
  {
    id: "html-css-supersimpledev",
    title: "HTML & CSS Full Course — Beginner to Pro",
    issuer: "SuperSimpleDev",
    focus: "Semantic Markup & CSS Architecture",
    skillsLearned: [
      "Semantic HTML5 structures for SEO & accessibility",
      "Precision box model, spacing, and CSS positioning",
      "Fluid responsive design techniques without frameworks",
      "Clean CSS naming conventions and reusable layout primitives",
    ],
  },
];
