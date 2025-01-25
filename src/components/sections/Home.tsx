const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            Hi, I'm <span className="text-secondary">Your Name</span>
          </h1>
          <p className="text-2xl text-accent mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-gray-600 mb-12">
            I create beautiful, functional, and user-friendly digital experiences
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;