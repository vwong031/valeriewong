import ColorButton from "./ColorButton";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-8 py-8 text-2xl text-white">
      <div className="bg-palmLeaf">VKW</div>
      <div className="bg-antiqueWhite border-antiqueWhite mx-auto w-1/3 rounded-3xl border border-2 text-black">
        <Link href="#landing"><button className="w-1/5">Home</button></Link>
        <Link href="#about"><button className="w-1/5">About</button></Link>
        <Link href="#work"><button className="w-1/5">Work</button></Link>
        <Link href="#projects"><button className="w-1/5">Projects</button></Link>
        <Link href="#fun"><button className="w-1/5">Fun</button></Link>
      </div>
      <div>
        <ColorButton text="Contact Me"></ColorButton>
      </div>
    </div>
  );
}
