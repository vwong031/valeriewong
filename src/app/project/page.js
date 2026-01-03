import SectionTitle from "../components/SectionTitle";
import ProjectCards from "../components/projectCards";

export default function Project() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      skills: ["skill1", "skill2", "skill3"],
      image: "/haku-flying.gif",
      link: "https://www.github.com/vwong031",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      skills: ["skill1", "skill2", "skill3"],
      image: "/haku-flying.gif",
      link: "https://www.github.com/vwong031",
    },
    {
      title: "Project 3",
      description: "Description for Project 3",
      skills: ["skill1", "skill2", "skill3"],
      image: "/haku-flying.gif",
      link: "https://www.github.com/vwong031",
    },
    {
      title: "Project 4",
      description: "Description for Project 4",
      skills: ["skill1", "skill2", "skill3"],
      image: "/haku-flying.gif",
      link: "https://www.github.com/vwong031",
    },
  ];
  return (
    <div id="projects" className="min-h-screen bg-white pb-20">
      <SectionTitle title="Projects" />
      <ProjectCards projects={projects} />
    </div>
  );
}
