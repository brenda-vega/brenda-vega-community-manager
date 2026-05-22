import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { ServicesContent } from "@/components/portfolio/ServicesContent";
import { Contact, FloatingWhatsApp } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <ServicesContent />
      <Contact />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
