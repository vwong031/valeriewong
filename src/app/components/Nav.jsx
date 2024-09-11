import Link from "next/link";
import WebName from "./WebName";
import NavButtons from "./NavButtons";

export default function Nav() {
  return (
    <div className="flex items-center justify-between mt-3 w-11/12 mx-auto">
      <Link href="/">
        <WebName />
      </Link>
      <Link href="/pages/about">
        <NavButtons text="About Me" />
      </Link>
      <Link href="/pages/experience">
        <NavButtons text="Experience" />
      </Link>
      <Link href="/pages/education">
        <NavButtons text="Education" />
      </Link>
      <Link href="/pages/portfolio">
        <NavButtons text="Portfolio" />
      </Link>
      <Link href="/pages/contact">
        <NavButtons text="Contact Me" />
      </Link>
    </div>
  );
}
