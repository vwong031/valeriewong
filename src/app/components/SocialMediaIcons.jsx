import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center space-x-4 pb-5">
      <FaLinkedinIn className="text-4xl" />
      <FaGithub className="text-4xl" />
      <IoMdMail className="text-4xl" />
    </div>
  );
}
