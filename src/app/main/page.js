import About from "../about/page";
import Contact from "../contact/page";
import Fun from "../fun/page";
import Landing from "../landing/page";
import Project from "../project/page";
import Work from "../work/page";

export default function Main() {
  return (
    <div>
      <Landing />
      <About />
      <Work />
      <Project />
      <Fun />
      <Contact />
    </div>
  );
}
