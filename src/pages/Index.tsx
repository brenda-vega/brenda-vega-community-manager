import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { ServicesContent } from "@/components/portfolio/ServicesContent";
import { Systems } from "@/components/portfolio/Systems";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <ServicesContent />
      <Systems />
      <Contact />
    </main>
  );
};

export default Index;
