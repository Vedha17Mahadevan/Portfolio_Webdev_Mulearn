import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, AlignCenterVertical as Certificate, Users, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      id: 'cert1',
      title: 'Google Cloud Platform Fundamentals',
      issuer: 'Google Cloud',
      type: 'Certification',
      date: '2023',
      description: 'Core cloud computing concepts and GCP services',
      icon: '☁️',
      color: 'coral'
    },
    {
      id: 'cert2',
      title: 'Python for Data Science',
      issuer: 'Coursera',
      type: 'Certification',
      date: '2023',
      description: 'Data analysis and visualization with Python',
      icon: '🐍',
      color: 'burnt'
    },
    {
      id: 'cert3',
      title: 'UI/UX Design Principles',
      issuer: 'Adobe',
      type: 'Certification',
      date: '2023',
      description: 'User experience design and interface development',
      icon: '🎨',
      color: 'grayblue'
    },
    {
      id: 'cert4',
      title: 'Leadership in Technology',
      issuer: 'Infosys Springboard',
      type: 'Certification',
      date: '2022',
      description: 'Leading technical teams and projects',
      icon: '👑',
      color: 'coral'
    },
    {
      id: 'cert5',
      title: 'Web Development Bootcamp',
      issuer: 'freeCodeCamp',
      type: 'Certification',
      date: '2022',
      description: 'Full-stack web development with modern frameworks',
      icon: '💻',
      color: 'burnt'
    },
    {
      id: 'cert6',
      title: 'Project Management Essentials',
      issuer: 'PMI',
      type: 'Certification',
      date: '2022',
      description: 'Project planning, execution, and team management',
      icon: '📊',
      color: 'grayblue'
    }
  ];

  const recognitions = [
    {
      id: 'rec1',
      title: 'Smart India Hackathon 2023',
      achievement: 'Qualified for Prelims',
      description: 'Led team through preliminary rounds with innovative disaster management solution',
      icon: Trophy,
      color: 'coral'
    },
    {
      id: 'rec2',
      title: 'Design: Unlocked 2025',
      achievement: 'Event Excellence Award',
      description: 'Recognized for organizing South Kerala\'s largest college design bootcamp',
      icon: Award,
      color: 'burnt'
    },
    {
      id: 'rec3',
      title: 'CSI Student Branch',
      achievement: 'Outstanding Leadership',
      description: 'Acknowledged for exceptional leadership as Vice-Chairperson',
      icon: Star,
      color: 'grayblue'
    }
  ];

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

  const getColorClasses = (color: string) => {
    const colors = {
      coral: {
        bg: 'bg-coral-100',
        text: 'text-coral-600',
        border: 'border-coral-200',
        gradient: 'from-coral-400 to-coral-600'
      },
      burnt: {
        bg: 'bg-burnt-100',
        text: 'text-burnt-600',
        border: 'border-burnt-200',
        gradient: 'from-burnt-400 to-burnt-600'
      },
      grayblue: {
        bg: 'bg-grayblue-100',
        text: 'text-grayblue-600',
        border: 'border-grayblue-200',
        gradient: 'from-grayblue-400 to-grayblue-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.coral;
  };

  return (
    <section id="achievements" className="section bg-beige-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-coral-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-burnt-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
            <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">
              Achievements
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
          </div>
          <h2 className="section-title text-center">
            Certifications &{' '}
            <span className="gradient-text">Recognition</span>
          </h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            A collection of certifications, awards, and recognitions that mark my journey of continuous learning and growth.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-4">
                Professional Certifications
              </h3>
              <p className="text-ink-600 text-lg">
                Continuous learning through industry-recognized programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((cert) => {
                const colorClasses = getColorClasses(cert.color);
                
                return (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    className="card card-hover p-6 text-center"
                  >
                    <div className={`w-20 h-20 ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 ${colorClasses.border}`}>
                      <span className="text-3xl">{cert.icon}</span>
                    </div>
                    
                    <h4 className="font-serif font-semibold text-xl text-ink-900 mb-2">
                      {cert.title}
                    </h4>
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${colorClasses.bg} ${colorClasses.text}`}>
                      <Certificate size={14} className="mr-1" />
                      {cert.issuer}
                    </div>
                    
                    <p className="text-ink-600 mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="text-sm text-ink-500 font-medium">
                      Completed {cert.date}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Recognition Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-4">
                Awards & Recognition
              </h3>
              <p className="text-ink-600 text-lg">
                Acknowledgments for leadership, innovation, and community impact
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {recognitions.map((recognition) => {
                const colorClasses = getColorClasses(recognition.color);
                const IconComponent = recognition.icon;
                
                return (
                  <motion.div
                    key={recognition.id}
                    variants={itemVariants}
                    className={`card card-hover p-8 border-l-4 ${colorClasses.border}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={colorClasses.text} size={28} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-serif font-semibold text-xl text-ink-900 mb-2">
                          {recognition.title}
                        </h4>
                        
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${colorClasses.bg} ${colorClasses.text}`}>
                          {recognition.achievement}
                        </div>
                        
                        <p className="text-ink-600 leading-relaxed">
                          {recognition.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-8">
                Impact by Numbers
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Certificate className="text-coral-600" size={28} />
                  </div>
                  <div className="font-serif font-bold text-4xl text-coral-600 mb-2">6+</div>
                  <div className="text-ink-600 font-medium">Certifications</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-burnt-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="text-burnt-600" size={28} />
                  </div>
                  <div className="font-serif font-bold text-4xl text-burnt-600 mb-2">3+</div>
                  <div className="text-ink-600 font-medium">Awards</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-grayblue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="text-grayblue-600" size={28} />
                  </div>
                  <div className="font-serif font-bold text-4xl text-grayblue-600 mb-2">500+</div>
                  <div className="text-ink-600 font-medium">Lives Impacted</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-coral-600" size={28} />
                  </div>
                  <div className="font-serif font-bold text-4xl text-coral-600 mb-2">3+</div>
                  <div className="text-ink-600 font-medium">Years Learning</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;