const skills = {
  Backend: {
    items: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Microservices",
      "Redis",
      "REST APIs",
    ],
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    description: "Building robust, scalable backends and APIs.",
  },
  Frontend: {
    items: ["React.js", "Next.js", "Vue.js", "Angular", "Ionic"],
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: "Designing fluid, responsive, user-centric interfaces.",
  },
  Cloud: {
    items: ["AWS", "SQS", "Lambda", "S3", "CloudFront", "EventBridge"],
    icon: (
      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    description: "Architecting cloud-native solutions on AWS.",
  },
  DevOps: {
    items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
      </svg>
    ),
    description: "Automating pipelines and managing container systems.",
  },
  "Mobile & Extensions": {
    items: ["Chrome Extensions", "Manifest V3", "Ionic", "Angular", "Browser APIs"],
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    description: "Developing cross-platform mobile apps and browser extensions.",
  },
};

const colorMap: Record<
  string,
  { badge: string; text: string; shadow: string; border: string; iconBg: string }
> = {
  Backend: {
    badge: "bg-indigo-500/5 hover:bg-indigo-500/10 border-indigo-500/10 hover:border-indigo-500/30 text-indigo-300",
    text: "group-hover:text-indigo-300",
    shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]",
    border: "group-hover:border-indigo-500/20",
    iconBg: "group-hover:bg-indigo-500/10 group-hover:text-indigo-300",
  },
  Frontend: {
    badge: "bg-purple-500/5 hover:bg-purple-500/10 border-purple-500/10 hover:border-purple-500/30 text-purple-300",
    text: "group-hover:text-purple-300",
    shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]",
    border: "group-hover:border-purple-500/20",
    iconBg: "group-hover:bg-purple-500/10 group-hover:text-purple-300",
  },
  Cloud: {
    badge: "bg-pink-500/5 hover:bg-pink-500/10 border-pink-500/10 hover:border-pink-500/30 text-pink-300",
    text: "group-hover:text-pink-300",
    shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.08)]",
    border: "group-hover:border-pink-500/20",
    iconBg: "group-hover:bg-pink-500/10 group-hover:text-pink-300",
  },
  DevOps: {
    badge: "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/10 hover:border-emerald-500/30 text-emerald-300",
    text: "group-hover:text-emerald-300",
    shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]",
    border: "group-hover:border-emerald-500/20",
    iconBg: "group-hover:bg-emerald-500/10 group-hover:text-emerald-300",
  },
  "Mobile & Extensions": {
    badge: "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/10 hover:border-amber-500/30 text-amber-300",
    text: "group-hover:text-amber-300",
    shadow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]",
    border: "group-hover:border-amber-500/20",
    iconBg: "group-hover:bg-amber-500/10 group-hover:text-amber-300",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Tech Stack
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([title, { items, icon, description }]) => {
            const colors = colorMap[title] || colorMap.Backend;
            return (
              <div
                key={title}
                className={`glass-panel glass-panel-hover glow-card p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between ${colors.shadow} ${colors.border} ${
                  title === "Backend" ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${colors.iconBg}`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold text-white transition-colors duration-300 ${colors.text}`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`px-4 py-1.5 text-xs font-semibold rounded-xl border transition-all duration-200 cursor-default ${colors.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

