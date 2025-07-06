import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Users, Zap, Target, Heart } from 'lucide-react';
import { skills } from '../data';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
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

  // Group skills by category
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'technical':
        return {
          bg: 'bg-coral-500',
          light: 'bg-coral-100',
          text: 'text-coral-800',
          border: 'border-coral-200',
          gradient: 'from-coral-400 to-coral-600'
        };
      case 'design':
        return {
          bg: 'bg-burnt-500',
          light: 'bg-burnt-100',
          text: 'text-burnt-800',
          border: 'border-burnt-200',
          gradient: 'from-burnt-400 to-burnt-600'
        };
      case 'soft':
        return {
          bg: 'bg-grayblue-500',
          light: 'bg-grayblue-100',
          text: 'text-grayblue-800',
          border: 'border-grayblue-200',
          gradient: 'from-grayblue-400 to-grayblue-600'
        };
      default:
        return {
          bg: 'bg-ink-500',
          light: 'bg-ink-100',
          text: 'text-ink-800',
          border: 'border-ink-200',
          gradient: 'from-ink-400 to-ink-600'
        };
    }
  };

  const SkillBar = ({ skill }: { skill: typeof skills[0] }) => {
    const colors = getSkillColor(skill.category);

    return (
      <motion.div
        variants={itemVariants}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-ink-800 text-lg">{skill.name}</span>
          <span className={`text-sm font-semibold ${colors.text}`}>{skill.level}%</span>
        </div>
        <div className={`w-full h-3 ${colors.light} rounded-full overflow-hidden border ${colors.border}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative`}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const SkillCategory = ({ 
    title, 
    skills, 
    icon,
    description,
    color
  }: { 
    title: string; 
    skills: typeof skills; 
    icon: React.ReactNode;
    description: string;
    color: string;
  }) => {
    const colorClasses = getSkillColor(color);
    
    return (
      <motion.div variants={itemVariants} className="card p-8 h-full">
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 ${colorClasses.light} rounded-2xl flex items-center justify-center mr-4 border ${colorClasses.border}`}>
            {icon}
          </div>
          <div>
            <h3 className="font-serif font-semibold text-2xl text-ink-900">{title}</h3>
            <p className="text-ink-600 text-sm">{description}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          {skills.map(skill => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-coral-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-burnt-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
            <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">
              Skills & Tools
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
          </div>
          <h2 className="section-title text-center">
            Technical Expertise &{' '}
            <span className="gradient-text">Creative Abilities</span>
          </h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, design capabilities, and leadership qualities.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Technical Skills */}
          <SkillCategory 
            title="Technical Skills" 
            skills={technicalSkills}
            description="Programming & Development"
            color="technical"
            icon={<Code className="text-coral-600" size={28} />}
          />

          {/* Design Skills */}
          <SkillCategory 
            title="Design Skills" 
            skills={designSkills}
            description="Creative & Visual Design"
            color="design"
            icon={<Palette className="text-burnt-600" size={28} />}
          />

          {/* Soft Skills */}
          <SkillCategory 
            title="Leadership Skills" 
            skills={softSkills}
            description="Communication & Management"
            color="soft"
            icon={<Users className="text-grayblue-600" size={28} />}
          />
        </motion.div>

        {/* Skills Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-4">
              Technology Stack & Tools
            </h3>
            <p className="text-ink-600 text-lg">
              The technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python', icon: '🐍', category: 'technical' },
              { name: 'Java', icon: '☕', category: 'technical' },
              { name: 'JavaScript', icon: '⚡', category: 'technical' },
              { name: 'HTML/CSS', icon: '🎨', category: 'technical' },
              { name: 'FastAPI', icon: '🚀', category: 'technical' },
              { name: 'Figma', icon: '🎯', category: 'design' },
              { name: 'Adobe Suite', icon: '🎪', category: 'design' },
              { name: 'Canva', icon: '✨', category: 'design' },
              { name: 'Leadership', icon: '👑', category: 'soft' },
              { name: 'Public Speaking', icon: '🎤', category: 'soft' },
              { name: 'Team Building', icon: '🤝', category: 'soft' },
              { name: 'Event Planning', icon: '📅', category: 'soft' }
            ].map((tool, index) => {
              const colorClasses = getSkillColor(tool.category);
              
              return (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className={`card card-hover p-6 text-center border-2 ${colorClasses.border} hover:${colorClasses.light}`}
                >
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <div className="font-medium text-ink-800">{tool.name}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="text-6xl text-coral-200 absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Heart />
            </div>
            <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-6">
              My Approach to Learning & Growth
            </h3>
            <p className="text-xl text-ink-600 leading-relaxed mb-8">
              I believe in continuous learning and the power of combining technical skills with creative thinking. 
              Every project is an opportunity to grow, every challenge a chance to innovate, and every collaboration 
              a step towards building something meaningful.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="text-coral-600" size={28} />
                </div>
                <h4 className="font-serif font-semibold text-xl mb-2">Goal-Oriented</h4>
                <p className="text-ink-600">
                  Every skill I develop serves a purpose in creating better solutions and experiences.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-burnt-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-burnt-600" size={28} />
                </div>
                <h4 className="font-serif font-semibold text-xl mb-2">Adaptive</h4>
                <p className="text-ink-600">
                  I embrace new technologies and methodologies to stay at the forefront of innovation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-grayblue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-grayblue-600" size={28} />
                </div>
                <h4 className="font-serif font-semibold text-xl mb-2">Collaborative</h4>
                <p className="text-ink-600">
                  The best solutions emerge when diverse skills and perspectives come together.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;