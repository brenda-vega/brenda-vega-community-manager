import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { ServicesContent } from "@/components/portfolio/ServicesContent";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <ServicesContent />
      <Contact />
    </main>
  );
};

export default Index;
