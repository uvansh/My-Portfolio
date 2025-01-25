import Navigation from "@/components/Navigation";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;