"use client";

const experiences = [
  {
    role: "Sr. MERN Stack Developer & Team Lead",
    company: "Qodic Technosoft LLP",
    location: "Ahmedabad, India",
    duration: "Oct 2019 – Present",
    highlights: [
      "Sole architect of SEOSpace SaaS platform, scaling from 0 to 40K+ active users globally with 99% uptime via Kubernetes.",
      "Designed high-performance microservices architecture from scratch (4 decoupled services) utilizing Docker, Kubernetes, AWS SQS, and EventBridge.",
      "Led and mentored a team of 4 engineers, running sprint planning in Jira, code reviews, and standardizing CI/CD pipelines via GitHub Actions.",
      "Migrated enterprise Chrome Extensions from Manifest V2 to V3, optimizing background service workers and lazy-loaded components.",
      "Achieved sub-2s load times on Ionic/Angular cross-platform mobile apps by optimizing REST payloads and compressing transfer sizes."
    ],
    tech: ["Node.js", "React.js", "AWS", "Kubernetes", "Docker", "Redis", "MongoDB", "Chrome Extensions", "Ionic", "Angular"]
  },
  {
    role: "Senior Software Engineer",
    company: "Techno Adviser Technologies Pvt. Ltd",
    location: "Ahmedabad, India",
    duration: "Jan 2018 – Sep 2019",
    highlights: [
      "Cut QA-reported frontend bugs by ~40% through strict cross-browser testing guidelines and common library shared React components.",
      "Designed and proposed modular WordPress plugin structures for client configurations, slashing ongoing maintenance times by 30%."
    ],
    tech: ["PHP", "JavaScript", "WordPress", "jQuery", "CSS3", "MySQL"]
  },
  {
    role: "Backend Developer",
    company: "Webcore Solutions",
    location: "Ahmedabad, India",
    duration: "Jan 2017 – Dec 2017",
    highlights: [
      "Built custom CodeIgniter REST API backends for 3 live mobile applications on iOS & Android, ensuring stable server interfaces with zero post-launch bugs."
    ],
    tech: ["PHP", "CodeIgniter", "MySQL", "REST APIs", "Apache"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 md:border-l-0 max-w-5xl mx-auto">
          {/* Vertical center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet marker */}
                  <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#030014] border-4 border-indigo-500 -translate-x-[17px] md:-translate-x-4 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>

                  {/* Left Column Spacer / Timeline Side */}
                  <div className="hidden md:block w-1/2" />

                  {/* Right Column / Content Card */}
                  <div className="w-full md:w-1/2 pl-8 md:pl-12 md:pr-0">
                    <div className="glass-panel glass-panel-hover p-8 rounded-3xl transition-all duration-300 relative group">
                      {/* Floating accent shadow glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-indigo-400 font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-slate-300 w-fit">
                          {exp.duration}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6 text-slate-300 text-sm leading-relaxed list-none">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <span className="text-indigo-400 font-bold mt-0.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {exp.tech.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-300 hover:bg-indigo-500/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
