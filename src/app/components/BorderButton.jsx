import React from "react";
import Link from "next/link";

export default function BorderButton({ text, href }) {
  return (
    <Link href={href}>
      <button className="ml-1 rounded-3xl border border-2 border-palmLeaf px-3 text-2xl text-black">
        {text}
      </button>
    </Link>
  );
}
