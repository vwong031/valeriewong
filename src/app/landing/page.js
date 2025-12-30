import ColorButton from "../components/ColorButton";
import BorderButton from "../components/BorderButton";
import Nav from "../components/Nav";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="bg-floralWhite">
      <Nav />
      <div className="mx-auto flex w-11/12 justify-center pt-8 pb-10">
        <Image
          src="/profile-pic.jpeg"
          alt="Picture of me wearing a black leather jacket, a gray shirt, and black pants sitting in front of the VISA sign."
          width={325}
          height={325}
          className="mx-10 rounded-3xl"
        />
        <div className="mx-10">
          <h2 className="text-7xl font-bold">
            Hi, I'm Valerie Wong (animation)
          </h2>
          <p className="text-2xl">Short Description</p>
          <div className="flex">
            <ColorButton text="Resume"></ColorButton>
            <BorderButton text="View More"></BorderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
