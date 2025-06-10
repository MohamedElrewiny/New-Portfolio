import { useState } from 'react'; 
import { motion } from 'framer-motion'; 
import { projects } from '../constants/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Available filters
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'react', name: 'React' },
    { id: 'next', name: 'Next.js' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'htmlcss', name: 'HTML/CSS' }
  ];
  
  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'react') return project.technologies.includes('React');
    if (activeFilter === 'next') return project.technologies.includes('Next.js');
    if (activeFilter === 'javascript') return project.technologies.includes('JavaScript');
    if (activeFilter === 'htmlcss') return (
      project.technologies.includes('HTML5') || 
      project.technologies.includes('CSS3') ||
      project.technologies.includes('HTML') ||
      project.technologies.includes('CSS')
    );
    return true;
  });

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center "
      >
        <h2 className="text-3xl font-bold mb-6 text-[#143D95]">Featured Projects</h2>

      </motion.div>
      
      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {filters.map(filter => (
          <motion.button
            key={filter.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 cursor-pointer py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter.id
                ? 'bg-primary text-white border bg-gray-900'
                : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {filter.name}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.demoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 border-white border rounded font-medium text-[#143D95] bg-white"
                >
                  Live Demo
                </a>
                <a 
                  href={project.codeUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 border-[#143D95] border rounded font-medium bg-[#143D95] text-white"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 dark:text-gray-400">No projects found for this filter.</p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;