import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Medal, AlignCenterVertical as Certificate } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      id: 'cert1',
      title: 'Programming in Java',
      issuer: 'NPTEL',
      type: 'Certification',
      date: '2024',
      description: 'Java Programming : Basics to advanced',
      icon: '☕',
      color: 'coral'
    },
    {
      id: 'cert2',
      title: 'Beginning Python',
      issuer: 'Infosys Springboard',
      type: 'Certification',
      date: '2024',
      description: 'Introduction to Python Programming',
      icon: '🐍',
      color: 'grayblue'
    },
    {
      id: 'cert3',
      title: 'Fundamentals of Digital Marketing',
      issuer: 'Google',
      type: 'Certification',
      date: '2024',
      description: 'Understandign Basics of Digital Marketing and SEO',
      icon: '🎨',
      color: 'burnt'
    },
    {
      id: 'cert4',
      title: 'Project Management',
      issuer: 'LinkedIn',
      type: 'Certification',
      date: '2025',
      description: 'Project planning, execution, and team management',
      icon: '👑',
      color: 'coral'
    },
    {
      id: 'cert5',
      title: 'esponsive Web Design',
      issuer: 'freeCodeCamp',
      type: 'Certification',
      date: '2025',
      description: 'HTML, CSS development with modern frameworks',
      icon: '💻',
      color: 'grayblue'
    },
    {
      id: 'cert6',
      title: 'From Learner to Builder: Become an AI AgentArchitect',
      issuer: 'IBM',
      type: 'Certification',
      date: '2025',
      description: 'Understanding basics of AI',
      icon: '📊',
      color: 'burnt'
    }
  ];

  const recognitions = [
    {
      id: 'rec1',
      title: 'Karma Hunt’2024',
      achievement: 'Winner',
      description: 'Won the first place in the KarmaHunt 2024 organized by Catalyst IEDC in association with MuLearn MBCET',
      icon: Trophy,
      color: 'coral'
    },
    {
      id: 'rec2',
      title: 'Young Wizard Of Science’2024',
      achievement: 'Overall Best First-Year Student',
      description: 'Recognized for consistent performance and active involvement in both academic and community activities during the first year.',
      icon: Medal,
      color: 'coral'
    },
    {
      id: 'rec3',
      title: 'Smart India Hackathon 2024',
      achievement: 'Qualified for Prelims',
      description: 'Supported team through preliminary rounds with innovative disaster management solution',
      icon: Star,
      color: 'burnt'
    },
    {
      id: 'rec4',
      title: "Permute'24",
      achievement: 'Top #12 Karma Miner',
      description: 'Secured a spot among the top 12 Karma Miners for active participation and consistent contributions during the event.',
      icon: Award,
      color: 'burnt'
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
          <motion.div variants={itemVariants}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

