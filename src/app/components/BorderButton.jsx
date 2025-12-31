import React from "react";

export default function BorderButton({ text }) {
  return (
    <button className="ml-1 rounded-3xl border border-2 border-palmLeaf px-3 text-2xl text-black">
      {text}
    </button>
  );
}
