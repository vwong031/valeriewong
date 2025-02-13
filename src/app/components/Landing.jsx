import React from "react";
import Image from "next/image";
import LandingText from "./LandingText";

export default function Landing() {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex items-center justify-center w-11/12 mx-auto">
        <Image 
          src="/grad_photo.jpg"
          alt="Graduation photo head shot"
          width={250}
          height={250}
          className="rounded-full"
        />
        <LandingText />
      </div>
      
    </div>
  );
}
