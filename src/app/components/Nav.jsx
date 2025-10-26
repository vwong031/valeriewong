import Link from "next/link";
import WebName from "./WebName";
import NavButtons from "./NavButtons";
import Image from "next/image";

export default function Nav() {
  return (
    <div 
      className="flex items-center justify-between bg-skyBlue bg-no-repeat w-full py-4 px-10"
      style={{ 
        backgroundImage: "url('/haku-flying.gif')",
        backgroundPosition: "right -95px",
        backgroundSize: "30% auto"
      }}  
    >
      {/* Web Name on the left */}
      <Link href="/">
        <WebName />
      </Link>

      {/* Nav Buttons on the right */}
      <div className="flex space-x-8">
        <Link href="/about">
          <NavButtons text="About Me" />
        </Link>
        <Link href="/experience">
          <NavButtons text="Experience" />
        </Link>
        <Link href="/contact">
          <NavButtons text="Contact Me" />
        </Link>
      </div>
    </div>
  );
}
