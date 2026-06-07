"use client";

const experiences = [
  {
    role: "Sr. MERN Stack Developer & Team Lead",
    company: "Qodic Technosoft LLP",
    location: "Ahmedabad, India",
    duration: "Oct 2019 – Present",
    highlights: [
      "Architected and scaled SEOSpace SaaS platform to 40,000+ active users globally with 99% uptime via Kubernetes.",
      "Designed event-driven microservices from scratch using Docker, Kubernetes, AWS SQS, and EventBridge, eliminating processing bottlenecks.",
      "Led and mentored a 4-developer team, running weekly code reviews, sprint planning in Jira, and automating independent CI/CD pipelines.",
      "Migrated enterprise browser extensions to Manifest V3, optimizing background service workers and lazy-loading components.",
      "Shipped Android & iOS cross-platform mobile apps (Ionic/Angular) achieving sub-2s screen load times by compressing REST payloads."
    ],
    tech: [
      "Node.js",
      "React.js",
      "AWS",
      "Kubernetes",
      "Docker",
      "Redis",
      "MongoDB",
      "Chrome Extensions",
      "Ionic",
      "Angular",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Techno Adviser Technologies Pvt. Ltd",
    location: "Ahmedabad, India",
    duration: "Jan 2018 – Sep 2019",
    highlights: [
      "Developed and maintained advanced PHP web applications for high-traffic service portals, collaborating with a 6-member team under Agile methodology.",
      "Ensured cross-browser compatibility and code consistency across HTML, CSS, and JavaScript codebases, reducing QA-reported front-end bugs.",
      "Evaluated and integrated emerging technologies into the development workflow, proposing adoption of wordpress for new projects.",
    ],
    tech: ["PHP", "JavaScript", "WordPress", "jQuery", "CSS3", "MySQL"],
  },
  {
    role: "Backend Developer",
    company: "Webcore Solutions",
    location: "Ahmedabad, India",
    duration: "Jan 2017 – Dec 2017",
    highlights: [
      "Built secure, scalable server-side logic for Android and iOS applications using CodeIgniter, enabling seamless app-to-server communication for 3 live products.",
    ],
    tech: ["PHP", "CodeIgniter", "MySQL", "REST APIs", "Apache"],
  },
];

export default function Experience() {
  return (
    <section id='experience' className='py-28 relative overflow-hidden'>
      {/* Background ambient radial gradients */}
      <div className='absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='flex flex-col items-center text-center mb-20'>
          <span className='text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2'>
            Journey
          </span>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
            Work Experience
          </h2>
          <div className='h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4' />
        </div>

        {/* Timeline Container */}
        <div className='relative border-l border-white/10 md:border-l-0 max-w-5xl mx-auto'>
          {/* Vertical center line for desktop */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2' />

          <div className='space-y-16'>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-stretch group/item ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet marker */}
                  <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#030014] border-2 border-cyan-400/80 -translate-x-[17px] md:-translate-x-4 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover/item:shadow-[0_0_25px_rgba(34,211,238,0.7)] group-hover/item:border-cyan-300 transition-all duration-300 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover/item:scale-125 transition-transform" />
                  </div>

                  {/* Left Column Spacer / Timeline Side */}
                  <div className='hidden md:block w-1/2' />

                  {/* Right Column / Content Card */}
                  <div className='w-full md:w-1/2 pl-8 md:pl-12 md:pr-0'>
                    <div className='glass-panel glass-panel-hover glow-card p-8 rounded-3xl transition-all duration-300 relative group'>
                      {/* Floating accent shadow glow */}
                      <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none' />

                      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6'>
                        <div>
                          <h3 className='text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors'>
                            {exp.role}
                          </h3>
                          <p className='text-indigo-400 font-medium mt-1'>
                            {exp.company}
                          </p>
                        </div>
                        <span className='text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-slate-300 w-fit'>
                          {exp.duration}
                        </span>
                      </div>

                      <ul className='space-y-3 mb-6 text-slate-300 text-sm leading-relaxed list-none'>
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className='flex gap-2.5 items-start'>
                            <span className='text-indigo-400 font-bold mt-0.5'>
                              •
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className='flex flex-wrap gap-2 pt-4 border-t border-white/5'>
                        {exp.tech.map((tag) => (
                          <span
                            key={tag}
                            className='px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-300 hover:bg-indigo-500/10 transition-colors'
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
