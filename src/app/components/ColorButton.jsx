import React from "react";

export default function ColorButton({ text, href, target, rel }) {
  return (
    <button className="mr-1 rounded-3xl bg-palmLeaf px-3 text-2xl text-white">
      <a href={href} target={target} rel={rel}>
        {text}
      </a>
    </button>
  );
}
