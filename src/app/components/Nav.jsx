import ColorButton from "./ColorButton";
import Link from "next/link";
import { GiTurtle } from "react-icons/gi";

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between border border-black/5 bg-floralWhite px-8 py-4 text-2xl text-white shadow-sm">
      <div className="flex flex-col justify-center items-center">
        <GiTurtle size={35} className="text-palmLeaf" />
      </div>
      <div className="mx-auto w-1/3 rounded-3xl border border-2 border-antiqueWhite border-black/5 bg-antiqueWhite text-black">
        <Link href="#landing">
          <button className="w-1/5">Home</button>
        </Link>
        <Link href="#about">
          <button className="w-1/5">About</button>
        </Link>
        <Link href="#work">
          <button className="w-1/5">Work</button>
        </Link>
        <Link href="#projects">
          <button className="w-1/5">Projects</button>
        </Link>
        <Link href="#fun">
          <button className="w-1/5">Fun</button>
        </Link>
      </div>
      <div>
        <ColorButton href="#contact" text="Contact Me"></ColorButton>
      </div>
    </div>
  );
}
