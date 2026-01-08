"use client";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("vkwong825@gmail.com");

    toast.success("Email copied to clipboard!", {
      style: {
        border: "1px solid #black/5",
        padding: "16px",
        color: "#000",
        background: "#FDF6ED",
        fontFamily: "Dongle, sans-serif",
        fontSize: "20px",
      },
      iconTheme: {
        primary: "#7B8D57",
        secondary: "#FFFAF0",
      },
    });
  };

  return (
    <div
      id="contact"
      /* Changed py-4 to pt-8 pb-6 to balance the tall Dongle font */
      className="flex items-center justify-center gap-4 border-t border-black/5 bg-floralWhite px-8 pb-3 pt-5 shadow-[0_-1px_6px_0px_rgba(0,0,0,0.07)]"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://www.linkedin.com/in/val-wong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin
              size={35}
              className="text-palmLeaf transition-transform hover:scale-110"
            />
          </Link>

          <button
            onClick={copyEmail}
            title="Copy Email"
            className="transition-transform hover:scale-110"
          >
            <IoMdMail size={35} className="text-palmLeaf" />
          </button>

          <Link
            href="https://www.github.com/vwong031"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub
              size={35}
              className="text-palmLeaf transition-transform hover:scale-110"
            />
          </Link>
        </div>

        {/* Leading-none helps remove extra height added by the font's line-height */}
        <div className="mt-2 text-2xl leading-none text-black/60">
          Copyright © 2026 Valerie Wong. Developed with love
        </div>
      </div>
    </div>
  );
}
