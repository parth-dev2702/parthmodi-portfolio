import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#030014] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

