import { useState, useEffect } from 'react';
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id') || '';

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-xs bg-opacity-70 bg-black z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-primary animate-color-change">.dev | Vansh Uttam</span>
            <div className="flex space-x-8">
            {['home', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize rounded-full px-4 py-1 transition-colors ${
                  activeSection === section
                    ? 'text-white bg-secondary'
                    : 'text-gray-200 hover:text-gray-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;