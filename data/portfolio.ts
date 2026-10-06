export interface PersonalInfo {
  name: string;
  titles: string[];
  location: string;
  phone: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  profileImage: string;
  bioShort: string;
  bioFull: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Sihad Jamal",
  titles: [
    "Software Engineer",
    "Flutter Developer",
    "Frontend Developer",
    "IT Professional",
    "Customer Service Agent",
  ],
  location: "Soran, Erbil, Iraq",
  phone: "+964 0781 915 5858",
  email: "sihadjamal11@gmail.com",
  github: "github.com/sihadjamal",
  githubUrl: "https://github.com/sihadjamal",
  linkedin: "linkedin.com/in/sihad-jamal/953b97282",
  linkedinUrl: "https://linkedin.com/in/sihad-jamal/953b97282/",
  profileImage: "/person.png",
  bioShort:
    "Software Engineering student and developer passionate about creating robust mobile architectures, responsive web interfaces, and high-performance software systems.",
  bioFull:
    "Sihad Jamal is a Software Engineering student at Salahaddin University with a strong passion for software development, mobile applications, and web technologies. Experienced in building responsive applications using Flutter, React, JavaScript, and Tailwind CSS. Skilled at problem solving, creating clean user interfaces, and developing modern software solutions. Currently seeking opportunities to apply technical knowledge, expand professional experience, and contribute to innovative software projects.",
  stats: [
    { value: "4+", label: "Major Projects", sublabel: "Production-ready & Academic" },
    { value: "2+", label: "Years of Dev", sublabel: "Continuous Learning" },
    { value: "3", label: "Core Languages", sublabel: "Dart, JS/TS, Python" },
    { value: "5+", label: "Key Technologies", sublabel: "Flutter, React, Tailwind, MySQL, Git" },
  ],
};
