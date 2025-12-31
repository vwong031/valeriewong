"use client";
import ColorButton from "../components/ColorButton";
import BorderButton from "../components/BorderButton";
import Nav from "../components/Nav";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../../public/Turtle.json";

export default function Landing() {
  return (
    <div id="landing" className="flex min-h-screen flex-col bg-floralWhite">
      <Nav />

      <div className="flex flex-grow items-center justify-center">
        <div className="mx-auto mb-20 flex w-11/12 flex-col items-center justify-center pb-10 pt-8 sm:w-10/12 md:w-9/12 lg:w-10/12 lg:flex-row xl:w-9/12">
          <Image
            src="/profile-pic.jpeg"
            alt="Picture of me wearing a black leather jacket, a gray shirt, and black pants sitting in front of the VISA sign."
            width={325}
            height={325}
            className="mx-10 rounded-3xl"
          />

          <div className="">
            <div className="flex text-6xl font-bold">
              <span>Hi, I'm Valerie Wong</span>
              <Lottie
                animationData={animationData}
                loop={true}
                className="-mb-20 -ml-4 -mt-16 h-40 w-40"
              />
            </div>
            <p className="mt-2 text-2xl">
              I&apos;m a Frontend Engineer with a deep interest in Data Science
              and Analytics. I&apos;m passionate about visual storytelling,
              whether that&apos;s engineering a seamless user interface or
              distilling complex data into clear, actionable insights. I love
              the intersection of logic and design, and I strive to build
              intuitive experiences that solve real-world problems.
            </p>
            <p className="mt-4 text-2xl">
              When I&apos;m not at my desk, I&apos;m usually moving. As a
              lifelong student-athlete, I&apos;ve traded the court for
              weightlifting, Jiu-Jitsu, and Muay Thai. If I&apos;m not training,
              you&apos;ll find me hiking, crocheting, or getting lost in a good
              book. I&apos;m a firm believer in staying curious—whether
              it&apos;s a developing a new skill or a new hobby, I&apos;m always
              open to new experiences.
            </p>
            <div className="mt-5 flex">
              <ColorButton
                text="Resume"
                href="/ValerieWong_Resume.pdf"
              ></ColorButton>
              <BorderButton text="View More"></BorderButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
