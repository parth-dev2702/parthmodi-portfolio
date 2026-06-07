const projects = [
  {
    title: "SEO SaaS Platform",
    description: "Scaled platform serving 40K+ users globally with low-latency optimizations.",
    tech: ["Node.js", "React", "MongoDB", "AWS", "Redis"],
    link: "https://github.com/parth-dev2702",
  },
  {
    title: "Storage Management Platform",
    description: "High-performance microservices architecture using AWS and Kubernetes for asset lifecycle management.",
    tech: ["Node.js", "Docker", "Kubernetes", "SQS"],
    link: "https://github.com/parth-dev2702",
  },
  {
    title: "Recruitment Platform",
    description: "Enterprise applicant tracking system (ATS) workflow, automated interview scheduling, and fine-grained RBAC.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    link: "https://github.com/parth-dev2702",
  },
  {
    title: "Chrome Extensions",
    description: "Successfully migrated enterprise browser extensions from Manifest V2 to V3. Optimized service workers and background scripts.",
    tech: ["Vue.js", "JavaScript", "Browser APIs", "Webpack"],
    link: "https://github.com/parth-dev2702",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description: "Shipped Android & iOS applications from a unified Ionic/Angular codebase, achieving under 2-second screen loading times.",
    tech: ["Ionic", "Angular", "REST APIs", "Capacitor"],
    link: "https://github.com/parth-dev2702",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-panel glass-panel-hover p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-2"
            >
              <div>
                {/* Project Header Icons */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-indigo-500/30 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
                    aria-label="View Source Code"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500/10 transition-colors"
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

