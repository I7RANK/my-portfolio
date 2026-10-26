/** Public portfolio content lives here so it can be updated in one place. */
export const HANDLE = "francisco.guzman";
export const NAME = "Francisco Guzmán";

export const HERO = {
  headline: "— Fullstack Software Engineer.",
  headlineAccent: "I build scalable web experiences.",
  sub: "4 years of experience developing web applications with Vue, Nuxt, React, Next.js, and TypeScript. I focus on frontend architecture, performance optimization, automated testing, and human-centered user experiences.",
  cta: "Contact me",
  status: ["Frontend-heavy", "Vue · React · TypeScript · Node.js"],
};

export const QUOTE = {
  text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
  author: "John F. Woods",
};

export const SKILLS = [
  "Vue / Nuxt",
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Frontend Architecture",
  "IA assisted Development",
  "Automated tests",
  "Web performance",
];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Jun 2022 — May 2025",
    role: "Frontend Developer",
    company: "Allan Solutions S.A.S",
    description:
      "Developed applications for enterprise clients using Vue, Nuxt, React, Next.js, and TypeScript. I participated in the migration of two applications from Vue 2 to Vue 3, built dashboards with Chart.js, and integrated REST APIs, GraphQL, and headless CMS. I migrated end-to-end tests from Cypress to Playwright, reducing CI/CD time from 30 to 15 minutes.",
    tags: [
      "Vue 3",
      "Nuxt",
      "React",
      "Next.js",
      "TypeScript",
      "Playwright",
      "GraphQL",
    ],
  },
  {
    period: "Dec 2020 — Dec 2021",
    role: "Junior Software Developer",
    company: "Holberton School",
    description:
      "Contributed to the development of internal tools for Holberton Colombia. I delivered more than 20 programming workshops and talks and collaborated in the training of new developers.",
    tags: ["Web Development", "Mentorship", "Communication"],
  },
];

export const EDUCATION = {
  institution: "Holberton School",
  period: "Jun 2020 — Dic 2021",
  program:
    "Computer Science and Software Engineering · Web stack specialization",
};

export const CONTACT_EMAIL = "franfgh2000@hotmail.com";
export const CONTACT_PHONE = "+57 3025468345";
export const CONTACT_PHONE_HREF = "tel:+573025468345";
export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/I7RANK", icon: "github" },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: "mail" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/francisco-guzman-herrera/",
    icon: "linkedin",
  },
] as const;
