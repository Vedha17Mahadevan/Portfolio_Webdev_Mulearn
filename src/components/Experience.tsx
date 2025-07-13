import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Building, Award, Users, Zap, Target } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Class Representative',
    organization: 'MBCET',
    period: '2023 - Present',
    description: ['Representing the class in academic and administrative matters.', 'Facilitating communication between faculty and students.'],
    tags: ['Leadership', 'Coordination']
  },
  {
    id: 2,
    title: 'Volunteer',
    organization: 'Science & Humanities Club',
    period: '2023 - 2024',
    description: ['Assisted in coordinating club activities.', 'Supported student engagement in science and humanities-related events.'],
    tags: ['Volunteering']
  },
  {
    id: 3,
    title: 'Event Organiser',
    organization: 'CSI SB MBCET',
    period: '2024',
    description: ['Planned and executed impactful technical events.', 'Collaborated with team members to manage logistics and communication.'],
    tags: ['Event Management', 'CSI']
  },
  {
    id: 4,
    title: 'Cultural Team Member',
    organization: 'NSS MBCET',
    period: '2024',
    description: ['Contributed to cultural initiatives and NSS activities.', 'Encouraged student participation in social programs.'],
    tags: ['NSS', 'Culture']
  },
  {
    id: 5,
    title: 'Vice Chairperson',
    organization: 'CSI SB MBCET',
    period: '2024 - Present',
    description: ['Leading initiatives and teams to foster technical growth.', 'Organizing events and mentoring juniors.'],
    tags: ['Leadership', 'CSI']
  },
  {
    id: 6,
    title: 'Membership Development Subhead',
    organization: 'IEEE SB MBCET',
    period: '2023 - Present',
    description: ['Driving membership campaigns and outreach.', 'Strategizing recruitment and engagement plans.'],
    tags: ['IEEE', 'Outreach']
  },
  {
    id: 7,
    title: 'Campus Co-Lead',
    organization: 'MuLearn MBCET',
    period: '2024 - Present',
    description: ['Co-leading campus activities and microlearning sessions.', 'Enabling peer-based learning through structured tracks.'],
    tags: ['MuLearn', 'Leadership']
  }
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const getIconForRole = (title: string) => {
    if (title.includes('CTO') || title.includes('Technical')) return Zap;
    if (title.includes('Vice') || title.includes('Lead')) return Users;
    if (title.includes('Head') || title.includes('Coordinator') || title.includes('Representative') || title.includes('Organiser')) return Target;
    return Building;
  };

  return (
    <section id="experience" className="section bg-beige-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-coral-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-burnt-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
            <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">Experience</span>
            <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
          </div>
          <h2 className="section-title text-center">Leadership Journey & <span className="gradient-text">Professional Growth</span></h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            My path through various leadership roles and experiences that have shaped my professional identity.
          </p>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="relative max-w-6xl mx-auto">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral-300 via-burnt-300 to-coral-300"></div>

          {experiences.map((exp, index) => {
            const IconComponent = getIconForRole(exp.title);
            const isEven = index % 2 === 0;

            return (
              <motion.div key={exp.id} variants={cardVariants} className={`mb-16 relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-white shadow-soft border-4 border-coral-200 z-10 flex items-center justify-center top-8">
                  <IconComponent className="text-coral-600" size={24} />
                </div>

                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className={`card card-hover p-8 ${isEven ? 'border-l-4 border-coral-400' : 'border-r-4 border-burnt-400'}`}>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${isEven ? 'bg-coral-100 text-coral-800' : 'bg-burnt-100 text-burnt-800'}`}>
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <h3 className="font-serif font-semibold text-2xl text-ink-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center text-ink-600 mb-6">
                      <Building size={18} className="mr-2" />
                      <span className="font-medium">{exp.organization}</span>
                    </div>
                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${isEven ? 'bg-coral-400' : 'bg-burnt-400'}`}></div>
                          <p className="text-ink-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                    {exp.tags && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-beige-200 text-ink-600 border border-beige-300">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div variants={cardVariants} className="text-center">
            <div className="w-16 h-16 bg-coral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-coral-600" size={28} />
            </div>
            <div className="font-serif font-bold text-3xl text-ink-900 mb-1">5+</div>
            <div className="text-ink-600 font-medium">Leadership Roles</div>
          </motion.div>

          <motion.div variants={cardVariants} className="text-center">
            <div className="w-16 h-16 bg-burnt-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building className="text-burnt-600" size={28} />
            </div>
            <div className="font-serif font-bold text-3xl text-ink-900 mb-1">5+</div>
            <div className="text-ink-600 font-medium">Organizations</div>
          </motion.div>

          <motion.div variants={cardVariants} className="text-center">
            <div className="w-16 h-16 bg-grayblue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="text-grayblue-600" size={28} />
            </div>
            <div className="font-serif font-bold text-3xl text-ink-900 mb-1">15+</div>
            <div className="text-ink-600 font-medium">Events Organized</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
