const projects = [
  {
    title: "SEO SaaS Platform",
    description: "Scaled platform serving 40K+ users globally.",
    tech: ["Node.js", "React", "MongoDB", "AWS", "Redis"],
  },
  {
    title: "Storage Management Platform",
    description: "Microservices architecture using AWS and Kubernetes.",
    tech: ["Node.js", "Docker", "Kubernetes", "SQS"],
  },
  {
    title: "Recruitment Platform",
    description: "ATS workflow, interview scheduling and RBAC.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
];

export default function Projects() {
  return (
    <section className='py-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-10'>Projects</h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='border border-gray-800 rounded-xl p-6'
            >
              <h3 className='text-2xl font-semibold mb-3'>{project.title}</h3>

              <p className='text-gray-400 mb-4'>{project.description}</p>

              <div className='flex flex-wrap gap-2'>
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className='px-3 py-1 rounded-full bg-zinc-800 text-sm'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
