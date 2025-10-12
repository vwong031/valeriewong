import React from "react";
import Button from "./Button";

export default function Landing() {
  return (
    <div className="h-screen relative"> 
      <div className='h-3/4 flex flex-col justify-center items-center'>
        <div className='text-black text-4xl flex flex-col justify-center items-center'>
          <div className="mb-2">
            Welcome to
          </div>
          <div>
            VALERIE&apos;S Website
          </div>
        </div>
      </div>
      <div className="absolute bottom-1/4 w-full border-t-2 border-black"></div>
       <div className="h-1/4 flex justify-center items-center">
        <div className="flex gap-40">
          <Button text="EXIT"/>
          <Button text="ENTER" />
        </div>
      </div>
    </div>
  );
}
