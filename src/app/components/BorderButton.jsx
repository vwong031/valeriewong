import React from "react";

export default function BorderButton({ text }) {
  return (
    <button className="rounded-3xl border border-2 border-palmLeaf px-3 text-black">
      {text}
    </button>
  );
}
