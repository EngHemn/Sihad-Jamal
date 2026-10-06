export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  status: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "salahaddin-university",
    institution: "Salahaddin University",
    degree: "Bachelor of Science",
    major: "Software and Informatics Engineering",
    period: "2023 — 2026",
    location: "Erbil, Iraq",
    status: "In Progress / Senior Years",
    highlights: [
      "Rigorous core curriculum in Algorithms, Data Structures, Software Architecture, and Database Systems.",
      "Practical project-based coursework in modern web development, software verification, and network computing.",
      "Active participant in technical student engineering forums and collaborative software labs.",
    ],
  },
  {
    id: "koya-university",
    institution: "Koya University",
    degree: "Undergraduate Studies",
    major: "Software Engineering",
    period: "2022 — 2023",
    location: "Koya, Kurdistan Region, Iraq",
    status: "Completed Foundational Year",
    highlights: [
      "Established foundational programming paradigms in C++ and Object-Oriented Programming.",
      "Discrete Mathematics, Computer Architecture fundamentals, and Logic Design.",
      "Transitioned to Salahaddin University to pursue specialized Software and Informatics Engineering tracks.",
    ],
  },
];
