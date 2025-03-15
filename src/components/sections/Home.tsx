const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 bg-neutral-900 backdrop-blur-xs py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-b from-primary to-neutral-600 bg-clip-text animate-fade-in">
          <div className="flex text-transparent items-center justify-center lg:text-6xl md:text-5xl text-4xl font-black text-primary">
            Hi,<span className="text-white">👋</span> I'm Vansh Uttam
          </div>
          </div>
          <p className="lg:text-2xl font-semibold md:text-xl text-lg mt-5 text-neutral-200 mb-8 animate-fade-in">
            Full Stack Developer & Web Technology Enthusiast
          </p>
          <p className="lg:text-2xl md:text-xl text-md text-gray-240 mb-5 animate-fade-in" style={{ animationDelay: '300ms' }}>
            I create beautiful, functional, and user-friendly digital experiences. <br />I love to explore new technologies and build new projects
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors border-2 animate-border-color-change shadow-lg"
            style={{ animationDelay: '300ms'}}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;