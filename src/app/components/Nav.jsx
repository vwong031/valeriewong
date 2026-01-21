"use client";

import { useState } from "react";
import ColorButton from "./ColorButton";
import Link from "next/link";
import { GiTurtle } from "react-icons/gi";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between border border-black/5 bg-floralWhite px-8 py-4 text-2xl text-white shadow-sm">
      <div className="flex flex-col items-center justify-center">
        <Link href="#landing">
          <GiTurtle size={35} className="text-palmLeaf" />
        </Link>
      </div>

      <div className="mx-auto hidden w-2/5 items-center justify-around overflow-hidden rounded-3xl border-2 border-black/5 bg-antiqueWhite text-black md:flex">
        <Link
          href="#landing"
          className="flex-1 py-1 text-center transition-colors hover:bg-black/5"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="flex-1 py-1 text-center transition-colors hover:bg-black/5"
        >
          About
        </Link>
        <Link
          href="#work"
          className="flex-1 py-1 text-center transition-colors hover:bg-black/5"
        >
          Work
        </Link>
        <Link
          href="#projects"
          className="flex-1 py-1 text-center transition-colors hover:bg-black/5"
        >
          Projects
        </Link>
        <Link
          href="#fun"
          className="flex-1 py-1 text-center transition-colors hover:bg-black/5"
        >
          Fun
        </Link>
      </div>

      <div className="hidden md:block">
        <ColorButton href="#contact" text="Contact Me" />
      </div>

      {!isMenuOpen && (
        <button className="block text-black md:hidden" onClick={toggleMenu}>
          <IoMenu className="text-palmLeaf" size={35} />
        </button>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-floralWhite text-black md:hidden">
          <button className="absolute right-8 top-5" onClick={toggleMenu}>
            <IoClose className="text-palmLeaf" size={40} />
          </button>

          <div className="flex flex-col items-center gap-8 text-4xl">
            <Link href="#landing" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#work" onClick={toggleMenu}>
              Work
            </Link>
            <Link href="#projects" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#fun" onClick={toggleMenu}>
              Fun
            </Link>
            <div onClick={toggleMenu} className="mt-4">
              <ColorButton href="#contact" text="Contact Me" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
