import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight, ChevronLeft, Code, Palette, Zap } from 'lucide-react';
import { projects } from '../data';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentProject, setCurrentProject] = useState(0);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'basic', 'software', 'hardware', 'hackathon'];
  
  const filteredProjects = filter === 'all'
  ? projects
  : projects.filter(project => project.categories?.includes(filter));


  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'basic': return Code;
    case 'software': return Code;
    case 'hardware': return Zap;
    case 'hackathon': return Palette;
    default: return Code;
  }
};


  return (
    <section id="projects" className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-coral-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-tl from-burnt-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
            <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">
              Projects
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
          </div>
          <h2 className="section-title text-center">
            Featured Work &{' '}
            <span className="gradient-text">Creative Solutions</span>
          </h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            A showcase of my technical projects, design work, and leadership initiatives.
          </p>
        </div>

        {/* Featured Project Slider */}
        <div className="mb-20">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/40 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <div className="max-w-4xl">
                      <h3 className="font-serif font-semibold text-3xl md:text-4xl mb-4">
                        {projects[currentProject].title}
                      </h3>
                      <p className="text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">
                        {projects[currentProject].description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {projects[currentProject].tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {projects[currentProject].livewebsite && (
                          <a href={projects[currentProject].livewebsite} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Live Website <ExternalLink size={18} />
                          </a>
                        )}
                        {projects[currentProject].github && (
                          <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            GitHub <Github size={18} />
                          </a>
                        )}
                        {projects[currentProject].presentation && (
                          <a href={projects[currentProject].presentation} target="_blank" rel="noopener noreferrer" className="btn btn-secondary bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            Presentation <ExternalLink size={18} />
                          </a>
                        )}
                        {projects[currentProject].simulation && (
                          <a href={projects[currentProject].simulation} target="_blank" rel="noopener noreferrer" className="btn btn-secondary bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            Simulation <ExternalLink size={18} />
                          </a>
                        )}
                        {projects[currentProject].video && (
                          <a href={projects[currentProject].video} target="_blank" rel="noopener noreferrer" className="btn btn-secondary bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            Video <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={prevProject}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentProject(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentProject ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 p-2 bg-beige-100 rounded-2xl">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    filter === category
                      ? 'bg-white text-coral-600 shadow-soft'
                      : 'text-ink-600 hover:text-coral-500'
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="capitalize">{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="card card-hover group h-full flex flex-col"
              >
                <div className="relative overflow-hidden h-48 rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3 flex-wrap justify-center">
                      {project.livewebsite && (
                        <a
                          href={project.livewebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.presentation && (
                        <a
                          href={project.presentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Code size={18} />
                        </a>
                      )}
                      {project.simulation && (
                        <a
                          href={project.simulation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Zap size={18} />
                        </a>
                      )}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Palette size={18} />
                        </a>
                      )}
                    </div>
                  </div>


                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif font-semibold text-xl mb-3 text-ink-900 group-hover:text-coral-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-ink-600 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-beige-100 text-ink-600 border border-beige-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-coral-100 text-coral-600">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-coral-600 font-medium hover:text-coral-700 transition-colors group"
                      >
                        View Details 
                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif font-semibold text-2xl text-ink-900 mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-ink-600 mb-8 leading-relaxed">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's create something amazing together.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Connect <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
