import Nav from "../components/Nav";
import Landing from "../components/Landing";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Homepage() {
  return (
    <div className="bg-gradient-to-b from-[#057897] via-[#85B79D] to-[#C0E5C8]">
      <Nav />
      <Landing />
      <SocialMediaIcons />
    </div>
  );
}
