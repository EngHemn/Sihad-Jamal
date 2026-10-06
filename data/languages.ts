export interface LanguageItem {
  id: string;
  name: string;
  level: string;
  percentage: number;
  description: string;
  badge: string;
}

export const languages: LanguageItem[] = [
  {
    id: "kurdish",
    name: "Kurdish",
    level: "Native",
    percentage: 100,
    description: "Primary native language for daily communication and collaboration.",
    badge: "Native / Mother Tongue",
  },
  {
    id: "english",
    name: "English",
    level: "Upper Intermediate",
    percentage: 82,
    description: "Professional technical working proficiency for engineering documentation, code reviews, and remote international team collaboration.",
    badge: "Upper Intermediate (B2/C1)",
  },
  {
    id: "arabic",
    name: "Arabic",
    level: "Intermediate",
    percentage: 65,
    description: "Effective conversational and written comprehension for regional communication and customer interactions.",
    badge: "Intermediate (B1)",
  },
];
