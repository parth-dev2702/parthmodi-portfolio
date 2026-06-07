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
              className="glass-panel glass-panel-hover glow-card p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] hover:border-indigo-500/20"
            >
              <div>


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

