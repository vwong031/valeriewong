import Link from "next/link";
import WebName from "./WebName";
import NavButtons from "./NavButtons";

export default function Nav() {
  return (
    <div className="flex items-center justify-between bg-darkGray py-3 px-10">
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
