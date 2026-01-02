import Image from "next/image";

export default function projectCards({ projects }) {
  return (
    <div className="w-9/12 mx-auto mt-20">
      <Image 
        src={projects[0].image}
        alt="example image"
        width={300}
        height={300}
      />
    </div>
  );
}
