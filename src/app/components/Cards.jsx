export default function Cards({ data }) {
  return (
    <div className="mx-auto mt-20 w-9/12 space-y-6 px-6 pb-20">
      {data.map((job, index) => (
        <div
          key={index}
          className="group relative rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all hover:border-palmLeaf/40 hover:shadow-md"
        >
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-palmLeaf">
              {job.position}
            </h3>
            <span className="rounded-full bg-gray-100 px-3 py-1 font-mono text-sm text-gray-500">
              {job.duration}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xl font-medium text-gray-600">
            <span>{job.company}</span>
            <span className="text-gray-300">•</span>
            <span className="italic">{job.location}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {job.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="rounded border border-black/5 bg-antiqueWhite px-2 py-1 text-sm font-bold uppercase tracking-wider text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <button className="hover:text-cornflowerBlue mt-7 text-xl">
            <a href={job.link} target="_blank">
              Learn More →
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}
