const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      tech: ["React", "TypeScript", "Tailwind"],
      image: "/placeholder.svg"
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      tech: ["Next.js", "Node.js", "MongoDB"],
      image: "/placeholder.svg"
    },
    {
      title: "Project 3",
      description: "A brief description of project 3",
      tech: ["Vue", "Express", "PostgreSQL"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center animate-color-change">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/30 backdrop-blur-xs rounded-3xl overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;