import Image from "next/image";
import { profile, stats } from "@/app/data/portfolio";

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center'>
      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16'>
        <div>
          <p className='text-blue-500 mb-3'>Hello, I'm</p>

          <h1 className='text-6xl font-bold'>{profile.name}</h1>

          <h2 className='text-2xl mt-4 text-gray-400'>{profile.title}</h2>

          <p className='mt-8 text-gray-300 leading-8'>
            Building scalable SaaS products, distributed systems, cloud-native
            applications and high-performance APIs using Node.js, React.js and
            AWS.
          </p>

          <div className='flex gap-4 mt-8'>
            <a
              href='/ParthModi_CV.pdf'
              className='px-6 py-3 bg-blue-600 rounded-lg'
            >
              Download CV
            </a>

            <a
              href={profile.linkedin}
              target='_blank'
              className='px-6 py-3 border border-gray-600 rounded-lg'
            >
              LinkedIn
            </a>
          </div>

          <div className='flex gap-10 mt-12'>
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className='text-3xl font-bold'>{stat.value}</h3>

                <p className='text-gray-400'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center'>
          <Image
            src='/profile.png'
            alt='Parth Modi'
            width={400}
            height={400}
            className='rounded-full border-4 border-blue-500'
          />
        </div>
      </div>
    </section>
  );
}
