import React from "react";

export default function ColorButton({ text, href }) {
  return (
    <button className="mr-1 rounded-3xl bg-palmLeaf px-3 text-2xl text-white">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
}
