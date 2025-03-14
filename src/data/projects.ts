import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Chess-Engine",
    description: "A chess engine built in C++. Implements the minimax algorithm with alpha-beta pruning.",
    image: "/chess-engine-v7.png",
    technologies: ["C++"],
    github: "https://github.com/MaximilianKniely/chess-engine"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/portfolio-website-v1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/MaximilianKniely/portfolio-website"
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "A new project currently in development. Check back later for updates.",
    image: "/file.svg",
    technologies: ["Under Development"],
  }
];