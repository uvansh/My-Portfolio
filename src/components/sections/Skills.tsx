const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "HTML/CSS" ,"TypeScript", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Jest"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-black bg-white rounded-lg p-2 mx-auto w-fit animate-fade-in">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-secondary/30 backdrop-blur-xs rounded-lg p-6 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-full bg-white/10 rounded-full h-2.5">
                      <div 
                        className="bg-white h-2.5 rounded-full"
                        style={{ 
                          width: `${90 - skillIndex * 6}%`,
                          transition: 'width 2s ease-in-out'
                        }}
                      ></div>
                    </div>
                    <span className="ml-4 text-white min-w-[100px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;