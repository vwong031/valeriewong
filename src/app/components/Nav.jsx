"use client";

import { useState } from "react";
import ColorButton from "./ColorButton";
import Link from "next/link";
import { GiTurtle } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between border border-black/5 bg-floralWhite px-8 py-4 text-2xl text-white shadow-sm">
      <div className="flex flex-col items-center justify-center">
        <Link href="#landing">
          <GiTurtle size={35} className="text-palmLeaf" />
        </Link>
      </div>
      <div className="mx-auto hidden w-1/3 rounded-3xl border border-2 border-antiqueWhite border-black/5 bg-antiqueWhite text-black md:block">
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
      <div className="hidden md:block">
        <ColorButton href="#contact" text="Contact Me"></ColorButton>
      </div>
      <button className="block text-black md:hidden">
          <IoMenu className="text-palmLeaf" size={30} />
      </button>
    </div>
  );
}
