import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, MapPin, Award, Zap, Target, Sparkles } from 'lucide-react';

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const events = [
    {
      id: 'event1',
      title: 'RELEVENT\'25',
      subtitle: 'Chief Technical Officer Vision',
      description: 'Strategizing to develop 60 developers, designers, and makers by the end of 2025. Leading technical initiatives and fostering innovation within the organization.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      period: '2023 - Present',
      impact: '60+ Developers',
      category: 'Leadership',
      color: 'coral'
    },
    {
      id: 'event2',
      title: 'Design: Unlocked 2025',
      subtitle: 'South Kerala\'s Largest College Design Bootcamp',
      description: 'Organized and executed South Kerala\'s biggest college-based design bootcamp, collaborating with industry experts to provide quality learning experiences.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      period: '2023',
      impact: '200+ Participants',
      category: 'Design',
      color: 'burnt'
    },
    {
      id: 'event3',
      title: 'RADIANCE\'24',
      subtitle: 'Community Building for Freshers',
      description: 'Conceptualized and executed a comprehensive community-building event for freshers, handling all aspects from planning and budgeting to execution.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      period: '2023',
      impact: '150+ Freshers',
      category: 'Community',
      color: 'grayblue'
    },
    {
      id: 'event4',
      title: 'Game Development Workshop',
      subtitle: 'Unreal Engine Workshop Series',
      description: 'Brought Unreal Engine workshops to fruition for students, providing hands-on experience in game development and coordinating with expert instructors.',
      image: 'https://images.pexels.com/photos/2949172/pexels-photo-2949172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      period: '2023',
      impact: '80+ Developers',
      category: 'Technical',
      color: 'coral'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      coral: {
        bg: 'from-coral-500 to-coral-600',
        light: 'bg-coral-100',
        text: 'text-coral-600',
        border: 'border-coral-400'
      },
      burnt: {
        bg: 'from-burnt-500 to-burnt-600',
        light: 'bg-burnt-100',
        text: 'text-burnt-600',
        border: 'border-burnt-400'
      },
      grayblue: {
        bg: 'from-grayblue-500 to-grayblue-600',
        light: 'bg-grayblue-100',
        text: 'text-grayblue-600',
        border: 'border-grayblue-400'
      }
    };
    return colors[color as keyof typeof colors] || colors.coral;
  };

  return (
    <section id="events" className="section bg-beige-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-coral-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-burnt-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
            <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">
              Events Organized
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
          </div>
          <h2 className="section-title text-center">
            From Bootcamps to Hackathons —{' '}
            <span className="gradient-text">Building Communities</span>
          </h2>
          <p className="section-subtitle text-center max-w-4xl mx-auto">
            Creating impactful events that bring together developers, designers, and innovators 
            to learn, collaborate, and build the future together.
          </p>
        </div>

        {/* Events Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {events.map((event, index) => {
            const colorClasses = getColorClasses(event.color);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Image */}
                <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-soft-lg group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${colorClasses.bg}`}>
                        {event.category}
                      </div>
                    </div>

                    {/* Impact badge */}
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
                        <div className="flex items-center space-x-2">
                          <Users size={16} />
                          <span className="font-medium">{event.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 ${colorClasses.light} rounded-full blur-xl opacity-60`}></div>
                  <div className={`absolute -bottom-4 -left-4 w-32 h-32 ${colorClasses.light} rounded-full blur-2xl opacity-40`}></div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className={colorClasses.text} size={20} />
                      <span className={`font-medium ${colorClasses.text}`}>{event.period}</span>
                    </div>
                    
                    <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-xl text-ink-600 font-medium mb-4">
                      {event.subtitle}
                    </p>
                  </div>

                  <p className="text-lg text-ink-700 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Key highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-2xl ${colorClasses.light} border ${colorClasses.border}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className={colorClasses.text} size={20} />
                        <span className="font-medium text-ink-800">Impact</span>
                      </div>
                      <p className="text-ink-600">{event.impact}</p>
                    </div>

                    <div className={`p-4 rounded-2xl ${colorClasses.light} border ${colorClasses.border}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className={colorClasses.text} size={20} />
                        <span className="font-medium text-ink-800">Role</span>
                      </div>
                      <p className="text-ink-600">Lead Organizer</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="text-6xl text-coral-200 absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Sparkles />
              </div>
              <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-6">
                Building Communities That Build Themselves
              </h3>
              <p className="text-xl text-ink-600 leading-relaxed mb-8">
                Every event I organize is designed to create lasting connections, foster learning, 
                and empower individuals to become leaders in their own right. The goal isn't just 
                to host an event—it's to build a community that continues to grow and thrive.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="font-serif font-bold text-4xl text-coral-600 mb-2">15+</div>
                  <div className="text-ink-600 font-medium">Events Organized</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-bold text-4xl text-burnt-600 mb-2">500+</div>
                  <div className="text-ink-600 font-medium">Participants</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-bold text-4xl text-grayblue-600 mb-2">6+</div>
                  <div className="text-ink-600 font-medium">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-bold text-4xl text-coral-600 mb-2">3</div>
                  <div className="text-ink-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;