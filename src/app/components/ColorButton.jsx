import React from "react";

export default function ColorButton({ text }) {
  return (
    <button className="mr-1 rounded-3xl bg-palmLeaf px-3 text-2xl text-white">
      {text}
    </button>
  );
}
