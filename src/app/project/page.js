import SectionTitle from "../components/SectionTitle";
import ProjectCards from "../components/projectCards";

export default function Project() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      skills: [],
      image: "/haku-flying.gif",
      link: "github.com/vwong031"
    }
  ]
  return (
    <div id="projects" className="min-h-screen bg-white">
      <SectionTitle title="Projects" />
      <ProjectCards projects={projects} />
    </div>
  );
}
