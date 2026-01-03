import SectionTitle from "../components/SectionTitle";
import ProjectCards from "../components/projectCards";

export default function Project() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Description for Project 1",
      skills: [
        "ReactJS",
        "JavaScript",
        "NextJS",
        "TailwindCSS",
        "ESLint",
        "Prettier",
        "Aceternity UI",
      ],
      image: "/haku-flying.gif",
      link: "https://github.com/vwong031/valeriewong",
    },
    {
      title: "2018 SF Crime Data Analysis",
      description: "Description for Project 2",
      skills: ["Excel", "Google Sheets", "Tableau"],
      image: "/haku-flying.gif",
      link: "https://www.linkedin.com/in/val-wong/details/projects/",
    },
    {
      title: "Mock Market Analysis Capstone Project",
      description: "Description for Project 2",
      skills: ["Excel", "Google Sheets", "Tableau"],
      image: "/haku-flying.gif",
      link: "https://www.linkedin.com/in/val-wong/details/projects/",
    },
    {
      title: "Designverse 2024 Website",
      description: "Description for Project 3",
      skills: [
        "JavaScript",
        "TailwindCSS",
        "ReactJS",
        "NextJS",
        "Prettier",
        "ESLint",
        "Figma",
        "Cypress",
      ],
      image: "/haku-flying.gif",
      link: "https://github.com/vwong031/designverse2024/tree/dev",
    },
    {
      title: "UCR Solar Car Driver Interface",
      description: "Description for Project 4",
      skills: [
        "C++",
        "Qt Creator",
        "Python",
        "Raspberry Pi",
        "GitHub",
        "PI Wiring",
      ],
      image: "/haku-flying.gif",
      link: "https://github.com/vwong031/DriverInterface",
    },
    {
      title: "Space Invaders - Simplified Version",
      description: "Description for Project 4",
      skills: ["Embedded Systems", "C++", "Arduino", "Arduino IDE"],
      image: "/haku-flying.gif",
      link: "https://github.com/vwong031/CS120B-SpaceInvaders",
    },
    {
      title: "ACM @ UCR Website",
      description: "Description for Project 4",
      skills: [
        "NextJS",
        "JavaScript",
        "TailwindCSS",
        "ESLint",
        "Prettier",
        "ShadCN/UI",
      ],
      image: "/haku-flying.gif",
      link: "https://github.com/vwong031/acm-hydra/tree/dev",
    },
  ];
  return (
    <div id="projects" className="min-h-screen bg-white pb-20">
      <SectionTitle title="Projects" />
      <ProjectCards projects={projects} />
    </div>
  );
}
