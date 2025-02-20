"use client";
import Typewriter from 'typewriter-effect';

export default function LandingText() {
  return (
    <div className="flex flex-col items-center justify-center font-nunito text-center space-x-5">
      <h1 className='font-bold drop-shadow-lg text-[50px] ml-4'>
        <Typewriter
          options={{
            strings: ['Hi, I\'m Valerie Wong...'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </h1>
      <div className="">
        <div>
          I am a recent computer science graduate from the University of California, Riverside.
        </div>
        <div>
          Currently, I am working as a Software Engineer with a frontend focus for a startup
        </div>
        <div>
          e-commerce company called Artr and am also a Data Analytics fellow for COOP careers.
        </div>
        <div>
          Outside of this, I am actively seeking roles in frontend development, website development,
        </div>
        <div>
           software engineering, and am exploring roles in data analytics.
        </div>
      </div>
    </div>
  );
}
