"use client";
import ColorButton from "../components/ColorButton";
import BorderButton from "../components/BorderButton";
import Nav from "../components/Nav";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../../public/Turtle.json";

export default function Landing() {
  return (
    <div className="bg-floralWhite">
      <Nav />
      <div className="mx-auto flex w-11/12 justify-center pb-10 pt-8">
        <Image
          src="/profile-pic.jpeg"
          alt="Picture of me wearing a black leather jacket, a gray shirt, and black pants sitting in front of the VISA sign."
          width={325}
          height={325}
          className="mx-10 rounded-3xl"
        />

        <div>
          <div className="flex text-6xl font-bold">
            <span>Hi, I'm Valerie Wong</span>
            <Lottie
              animationData={animationData}
              loop={true}
              className="-ml-4 -mt-16 -mb-20 h-44 w-44"
            />
          </div>
          <p className="text-2xl">A Frontend Engineer and an aspiring Data Analyst / Data Scientist. I feel passionate about visual experiences, whether that's curating the perfect website for my intended audiences or analyzing data and curating the right visualizations to convey findings and insights.</p>
          <div className="mt-2 flex">
            <ColorButton text="Resume"></ColorButton>
            <BorderButton text="View More"></BorderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
