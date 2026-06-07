const skills = {
  Backend: [
    "Node.js",
    "Express.js",
    "TypeScript",
    "Microservices",
    "Redis",
    "REST APIs",
  ],
  Frontend: ["React.js", "Next.js", "Vue.js", "Angular", "Ionic"],
  Cloud: ["AWS", "SQS", "Lambda", "S3", "CloudFront", "EventBridge"],
  DevOps: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
};

export default function Skills() {
  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-12'>Tech Stack</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {Object.entries(skills).map(([title, items]) => (
            <div key={title} className='bg-zinc-900 p-6 rounded-xl'>
              <h3 className='text-xl font-semibold mb-4'>{title}</h3>

              <div className='flex flex-wrap gap-2'>
                {items.map((item) => (
                  <span
                    key={item}
                    className='bg-zinc-800 px-3 py-1 rounded-full'
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
