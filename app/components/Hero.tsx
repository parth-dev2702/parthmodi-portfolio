import Image from "next/image";
import { profile, stats } from "@/app/data/portfolio";

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center pt-24 overflow-hidden'>
      {/* Immersive background decoration */}
      <div className='absolute inset-0 grid-bg grid-mask opacity-40 z-0 pointer-events-none' />
      <div className='absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-blob-1 pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-blob-2 pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full py-12'>
        {/* Left column - Content */}
        <div className='flex flex-col justify-center animate-float'>
          {/* Availability Badge */}
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/10 w-fit mb-6 text-sm text-indigo-300'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
            </span>
            <span>Available for new opportunities</span>
          </div>

          <p className='text-sm uppercase tracking-widest text-indigo-400 font-semibold mb-3'>
            Hello, I'm
          </p>

          <h1 className='text-5xl md:text-7xl font-bold tracking-tight'>
            {profile.name}
          </h1>

          <h2 className='text-2xl md:text-3xl mt-4 font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent w-fit'>
            {profile.title}
          </h2>

          <p className='mt-8 text-slate-300 leading-relaxed text-lg max-w-xl'>
            Building scalable SaaS products, distributed systems, cloud-native
            applications, and high-performance APIs using Node.js, React.js, and
            AWS.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-wrap gap-4 mt-10'>
            <a
              href='/ParthModi_CV.pdf'
              className='glow-btn px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 text-center'
            >
              Download CV
            </a>

            <a
              href={profile.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-3.5 glass-panel text-slate-200 hover:text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 transform hover:-translate-y-0.5 text-center'
            >
              LinkedIn
            </a>
          </div>

          {/* Stat counters */}
          <div className='grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-lg'>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className='glass-panel glass-panel-hover glow-card p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 group'
              >
                <span className='text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all'>
                  {stat.value}
                </span>
                <span className='text-xs md:text-sm text-slate-400 mt-1 font-medium'>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Visual Profile */}
        <div className='flex justify-center items-center lg:justify-end'>
          <div className='relative group w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px]'>
            {/* Pulsing glow under picture */}
            <div className='absolute inset-0 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full blur-[30px] opacity-40 group-hover:opacity-60 transition-all duration-500' />

            {/* Spinning decorative border */}
            <div className='absolute inset-0 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 rounded-full p-[3px] animate-spin-slow opacity-80' />

            {/* Main Picture Wrapper */}
            <div className='absolute inset-[6px] rounded-full overflow-hidden bg-[#030014] flex items-center justify-center border-4 border-slate-950'>
              <Image
                src='/profile.png'
                alt='Parth Modi'
                width={400}
                height={400}
                priority
                quality={75}
                className='object-cover w-full h-full transform scale-105 group-hover:scale-110 transition-transform duration-500 ease-out'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
