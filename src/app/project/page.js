import SectionTitle from "../components/SectionTitle";
import ProjectCards from "../components/projectCards";

export default function Project() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "The site you see here is more than just a portfolio... It’s a hands-on exploration of modern frontend architecture. Built with Next.js and React, I designed this platform to be a professional yet personality-driven space to share my journey. My goal was to combine aesthetic appeal with technical best practices, like Tailwind CSS for streamlined styling and optimized performance. It represents both my current skillset and my commitment to continuous learning.",
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
      description: "Leveraged Excel, Google Sheets, and Tableau to interpret 150,000+ records of San Francisco crime data. I focused on identifying geographic and chronological patterns to help the city optimize its crime-reduction budget. My analysis uncovered a 5-tier breakdown of the most frequent offenses and a distinct seasonal trend, revealing that crime rates peaked during the summer, a critical insight for strategic police presence and community funding.",
      skills: ["Excel", "Google Sheets", "Tableau", "Pivot Tables", "Formulas"],
      image: "/haku-flying.gif",
      link: "https://www.linkedin.com/in/val-wong/details/projects/",
    },
    {
      title: "Mock Market Analysis Capstone Project",
      description: "Collaborated with a team to serve as a marketing agency for a telecommunications client, developing data-driven strategies across Location, Audience, Creative, and Inventory pillars. As the Creative Analyst, I optimized ad sizes and messaging to maximize ROI and ensure effective engagement with the target audience.",
      skills: ["Excel", "Google Sheets", "Tableau", "Pivot Tables", "Formulas"],
      image: "/haku-flying.gif",
      link: "https://www.linkedin.com/in/val-wong/details/projects/",
    },
    {
      title: "General/Core Hackathon Website",
      description: "Engineered a modular, reusable hackathon framework for UC Riverside, designed to serve as the official digital foundation for all future campus hackathons. Built with Next.js, React, and Tailwind CSS, the platform features a template-driven architecture that allows organizers to rapidly deploy custom homepages, schedules, and resource hubs.",
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
      link: "https://github.com/vwong031/hackathon-website",
    },
    {
      title: "UCR Solar Car Driver Interface",
      description: "Developed a high-performance driver interface for the UCR Solar Car team, utilizing C++ and the Qt framework. My team and I engineered an interactive GUI to visualize real-time, system-critical telemetry, enabling the driver to monitor vehicle health and optimize performance during competition.",
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
      description: "Engineered an Embedded Systems implementation of the classic arcade game Space Invaders. Developed in C++ for the Arduino platform, the project involved managing real-time game logic, collision detection, and peripheral input/output. Players control a spaceship to shoot down descending aliens while avoiding their attacks, with increasing difficulty levels as the game progresses.",
      skills: ["Embedded Systems", "C++", "Arduino", "Arduino IDE"],
      image: "/haku-flying.gif",
      link: "https://github.com/vwong031/CS120B-SpaceInvaders",
    },
    {
      title: "ACM @ UCR Website",
      description: "Collaborated as a team member to build the ACM @ UCR website, a project that served as my deep dive into frontend engineering. Starting with no prior experience, I rapidly mastered Next.js, React, and Tailwind CSS to help develop the site’s core pages. This foundational experience not only allowed me to contribute to a scalable community resource but also ignited my passion for building user-centric web applications.",
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
