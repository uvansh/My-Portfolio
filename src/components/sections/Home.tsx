const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 bg-neutral-900 backdrop-blur-xs py-12">
        <div className="max-w-3xl mx-auto text-center ">
          <h1 className="text-5xl font-bold mb-6 text-primary overflow-hidden animate-fade-in-right">
            Hi, I'm <span className="text-black bg-slate-100 p-2">Vansh Uttam</span>
          </h1>
          <p className="text-2xl text-accent mb-8 animate-fade-in">
            Full Stack Developer & Web Technology Enthusiast
          </p>
          <p className="text-lg text-gray-240 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            I create beautiful, functional, and user-friendly digital experiences
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