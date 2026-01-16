import SectionTitle from "../components/SectionTitle";
import ProjectCards from "../components/projectCards";

export default function Project() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "This project is what you are currently viewing! It is a personal portfolio website built using NextJS, ReactJS, and TailwindCSS. It showcases my projects, skills, experience, and personality in a clean and modern design. My goal for this project was to not only create a professional and visually appealing website, but to also practice my frontend development skills. I am proud of how this project turned out and I am excited to continue improving it in the future.",
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
      description: "In this project, my team's goal was to analyze 2018 San Francisco crime data in order to help the city determine how to best allocate new funding to reduce crime in vulnerable neighborhoods. I used Excel, Google Sheets, and Tableau to clean, visualize, and interpret the data. Some of the questions I looked to answer were: 1) What are the top 5 crimes in SF? and 2) Which months does crime occur the most? One insight that I found interesting was that there are higher crime rates during the Summer vs. the Winter.",
      skills: ["Excel", "Google Sheets", "Tableau"],
      image: "/haku-flying.gif",
      link: "https://www.linkedin.com/in/val-wong/details/projects/",
    },
    {
      title: "Mock Market Analysis Capstone Project",
      description: "In this project, my team and I acted as a marketing agency whose client is a telecommunications company. Our client needed us to maximize their future strategies by analyzing their future strategies by analyzing their reporting for Location, Audience, Creative, and Inventory insights and recommendations. As the Creative Analyst, I focused on identifying the best creative sizes and messaging of ads to maximize the client's return on investment and effectively reach their target audience.",
      skills: ["Excel", "Google Sheets", "Tableau"],
      image: "/haku-flying.gif",
      link: "https://www.linkedin.com/in/val-wong/details/projects/",
    },
    {
      title: "General/Core Hackathon Website",
      description: "General/Base Hackathon Website to be used for all future hackathons hosted at UCR. This project is built using NextJS, ReactJS, and TailwindCSS. It includes a homepage, schedule page, and resources page. The website is designed to be easily customizable for future hackathons.",
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
      description: "This project is meant to develop a driver interface for the UCR Solar Car team. The interface is built using C++ and QT Creator to create an interactive GUI display to display various kinds of system critical information.",
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
      description: "This is my final project for my Embedded Systems class. It is a simplified version of the classic arcade game Space Invaders. The game is built using C++ and the Arduino IDE, and it runs on an Arduino microcontroller. The game features a player-controlled spaceship that can move left and right and shoot projectiles at incoming enemies.",
      skills: ["Embedded Systems", "C++", "Arduino", "Arduino IDE"],
      image: "/haku-flying.gif",
      link: "https://github.com/vwong031/CS120B-SpaceInvaders",
    },
    {
      title: "ACM @ UCR Website",
      description: "This website is the very first frontend development project I have ever worked on. It is a website for the ACM @ UCR student organization. The website is built using NextJS, ReactJS, and TailwindCSS. It includes a homepage, about page, projects page, and contact page. The website is designed to be easily customizable for future updates. I learned a lot through this experience and this is the project that sparked my love for frontend development.",
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
