import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Target, Zap, Sparkles } from 'lucide-react';

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const events = [
    {
      id: 'event1',
      title: 'NanoNexus',
      subtitle: "MBCET's First-Ever Science Festival",
      description:
        'Volunteered, organized, and hosted MBCET’s inaugural science festival aimed at sparking curiosity and scientific spirit among students.',
      image: '/events/nanonexus.jpg',
      period: '2024',
      impact: '50+ Participants',
      category: 'Community',
      role: 'Volunteer, Organizer & Anchor',
      color: 'grayblue',
    },
    {
      id: 'event2',
      title: "Radiance'24",
      subtitle: 'Exclusive Freshers Event by CSI SB MBCET',
      description:
        'Led the entire planning, finance management, and execution of Radiance – an interactive event fostering community building among freshers.',
      image: '/events/radiance.jpg',
      period: '2024',
      impact: '45+ Students',
      category: 'Community',
      role: 'Event Organizer (Planning & Finance)',
      color: 'coral',
    },
    {
      id: 'event3',
      title: 'CSI AGM',
      subtitle: 'Annual General Body Meeting – CSI SB MBCET',
      description:
        'Organized and coordinated the Annual General Body Meeting of CSI SB MBCET, ensuring smooth planning and execution.',
      image: '/events/agm.heic',
      period: '2025',
      impact: '25+ Participants',
      category: 'Leadership',
      role: 'Organizer',
      color: 'burnt',
    },
    {
      id: 'event4',
      title: 'Design Unlocked',
      subtitle: "Kerala's Biggest Design Bootcamp",
      description:
        'Volunteered for South Kerala’s largest design bootcamp, assisting in logistics and ensuring a smooth experience for all participants.',
      image: '/events/de.jpg',
      period: '2025',
      impact: '110+ Participants',
      category: 'Design',
      role: 'Volunteer',
      color: 'grayblue',
    },
    {
      id: 'event5',
      title: 'Game Development Workshop',
      subtitle: 'CSI SB MBCET - Unreal Engine Hands-on',
      description:
        'Organized a game development workshop introducing students to Unreal Engine and interactive game-building fundamentals.',
      image: '/events/gdw.heic',
      period: '2025',
      impact: '40+ Students',
      category: 'Technical',
      role: 'Organizer',
      color: 'coral',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      coral: {
        bg: 'from-coral-500 to-coral-600',
        light: 'bg-coral-100',
        text: 'text-coral-600',
        border: 'border-coral-400',
      },
      burnt: {
        bg: 'from-burnt-500 to-burnt-600',
        light: 'bg-burnt-100',
        text: 'text-burnt-600',
        border: 'border-burnt-400',
      },
      grayblue: {
        bg: 'from-grayblue-500 to-grayblue-600',
        light: 'bg-grayblue-100',
        text: 'text-grayblue-600',
        border: 'border-grayblue-400',
      },
    };
    return colors[color as keyof typeof colors] || colors.coral;
  };

  return (
    <section id="events" className="section bg-beige-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-coral-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-burnt-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
            <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">
              Events Organized
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
          </div>
          <h2 className="section-title text-center">
            From Workshops to Community Events —{' '}
            <span className="gradient-text">Building Meaningful Connections</span>
          </h2>
          <p className="section-subtitle text-center max-w-4xl mx-auto">
            I believe in crafting experiences that bring people together — whether it’s a
            skill-building workshop, a fresher meet-and-greet, or any event that fosters networking
            and shared learning. My goal is to create spaces where participants not only learn and
            collaborate, but also leave with valuable memories, new connections, and a true sense of
            belonging.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
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
                <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-soft-lg group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div
                        className={`px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${colorClasses.bg}`}
                      >
                        {event.category}
                      </div>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
                        <div className="flex items-center space-x-2">
                          <Users size={16} />
                          <span className="font-medium">{event.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute -top-4 -right-4 w-24 h-24 ${colorClasses.light} rounded-full blur-xl opacity-60`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-32 h-32 ${colorClasses.light} rounded-full blur-2xl opacity-40`}
                  ></div>
                </div>

                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className={colorClasses.text} size={20} />
                      <span className={`font-medium ${colorClasses.text}`}>{event.period}</span>
                    </div>
                    <h3 className="font-serif font-semibold text-3xl text-ink-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xl text-ink-600 font-medium mb-4">{event.subtitle}</p>
                  </div>
                  <p className="text-lg text-ink-700 leading-relaxed">{event.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`p-4 rounded-2xl ${colorClasses.light} border ${colorClasses.border}`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className={colorClasses.text} size={20} />
                        <span className="font-medium text-ink-800">Impact</span>
                      </div>
                      <p className="text-ink-600">{event.impact}</p>
                    </div>
                    <div
                      className={`p-4 rounded-2xl ${colorClasses.light} border ${colorClasses.border}`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className={colorClasses.text} size={20} />
                        <span className="font-medium text-ink-800">Role</span>
                      </div>
                      <p className="text-ink-600">{event.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="font-serif font-bold text-4xl text-coral-600 mb-2">15+</div>
                  <div className="text-ink-600 font-medium">Events Organized</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-bold text-4xl text-burnt-600 mb-2">250+</div>
                  <div className="text-ink-600 font-medium">Participants</div>
                </div>
                <div className="text-center">
                  <div className="font-serif font-bold text-4xl text-grayblue-600 mb-2">5+</div>
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
