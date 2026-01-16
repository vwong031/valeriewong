import Image from "next/image";

export default function projectCards({ projects }) {
  return (
    <div className="mx-auto flex grid w-9/12 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative flex flex-col rounded-2xl border border-black/5 bg-antiqueWhite p-8 shadow-sm transition-all hover:border-palmLeaf/40 hover:shadow-md"
        >
          <div className="w-full">
            <Image
              src={project.image}
              alt="placeholder image"
              className="rounded-xl"
              width={300}
              height={300}
            />
            <h2 className="mb-2 mt-3 text-3xl font-bold group-hover:text-palmLeaf">{project.title}</h2>
            <p className="text-xl text-gray-600">{project.description}</p>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="mr-2 rounded border border-black/5 bg-white px-2 py-1 text-sm font-bold uppercase tracking-wider text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-xl hover:text-cornflowerBlue">
            <a href={project.link} target="_blank">
              Learn More →
            </a>
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
