import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center space-x-4 pb-5">
      <Link 
        href="https://www.linkedin.com/in/val-wong/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-4xl" />
      </Link>
      <Link 
        href="https://github.com/vwong031"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-4xl" />
      </Link>
      <Link href="mailto:vkwong825@gmail.com">
        <IoMdMail className="text-4xl" />
      </Link>
    </div>
  );
}
