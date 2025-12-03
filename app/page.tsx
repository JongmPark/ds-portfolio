import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col">
        <Hero />
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}

