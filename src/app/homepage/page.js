import Nav from "../components/Nav";
import Landing from "../components/Landing";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Homepage() {
  return (
    <div className="bg-gradient-to-b from-[#057897] to-[#a0e7e5]">
      <Nav />
      <Landing />
      <SocialMediaIcons />
    </div>
  );
}
