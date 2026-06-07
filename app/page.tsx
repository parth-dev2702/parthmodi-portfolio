import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <main className='bg-black text-white'>
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
