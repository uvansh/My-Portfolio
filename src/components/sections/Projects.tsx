import project2 from "/src/images/project2.png"
import project1 from "/src/images/project1.png"
import placeholder from '/placeholder.svg'

const Projects = () => {
  const projects = [
    {
      title: "Student management system",
      description: "A brief description of project 1",
      tech: ["Flask", "Python", "Bootstrap","HTML","SQLite"],
      image: project2,
      linktoweb:"https://student-attendance-production-4b34.up.railway.app/"
    },
    {
      title: "AI summarizer",
      description: "A brief description of project 2",
      tech: ["Python","Flask","Tensor-Flow","Beautiful Soupe","MongoDB","Bootstrap"],
      image: project1,
      linktoweb:"#"
    },
    {
      title: "X clone",
      description: "A brief description of project 3",
      tech: ["React", "Express", "PostgreSQL","MongoDB"],
      image: placeholder,
      linktoweb:"#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center underline-offset-4 underline">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-secondary/30 backdrop-blur-xs rounded-3xl overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}
                <a href={project.linktoweb} className="bg-white text-black px-3 ml-3 py-1 rounded-full text-sm hover:bg-white/90">
                    View
                  </a>
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
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