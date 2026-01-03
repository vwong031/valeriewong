import Image from "next/image";

export default function projectCards({ projects }) {
  return (
    <div className="mx-auto mt-20 flex grid w-9/12 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-2xl border border-black/5 bg-antiqueWhite p-8 shadow-sm transition-all hover:border-palmLeaf/40 hover:shadow-md"
        >
          <div className="">
            <Image
              src={project.image}
              alt="placeholder image"
              className="rounded-xl"
              width={300}
              height={300}
            />
            <h2 className="mt-3 text-3xl font-bold">{project.title}</h2>
            <p className="text-xl text-gray-600">{project.description}</p>
            <div className="mt-2 flex">
              {project.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="mr-2 rounded border border-black/5 bg-white px-2 py-1 text-sm font-bold uppercase tracking-wider text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="hover:text-cornflowerBlue mt-4 text-xl">
              <a href={project.link} target="_blank">
                Learn More →
              </a>
            </button>
          </div>
        </div>
      ))}
      {/* <Image 
        src={projects[0].image}
        alt="example image"
        width={300}
        height={300}
      /> */}
    </div>
  );
}
