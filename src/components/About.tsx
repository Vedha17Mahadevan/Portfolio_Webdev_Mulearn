import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Heart, Sparkles, Users, Code, Palette } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-coral-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-burnt-100/40 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
              <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">
                About Me
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
            </div>
            <h2 className="section-title text-center">
              Crafting Digital Stories Through{' '}
              <span className="gradient-text">Leadership & Code</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Image Column */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              {/* Main Image */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-coral-200/50 to-burnt-200/30 rounded-3xl"></div>
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-soft-lg">
                  <img 
                    src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Vedha Mahadevan" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Image Collage */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Leadership moment" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Creative work" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
              {/* Story */}
              <div className="prose prose-lg">
                <p className="text-xl text-ink-700 leading-relaxed text-pretty">
                  I'm a passionate student leader and tech enthusiast currently pursuing Computer Science Engineering 
                  at <strong>Mar Baselios College of Engineering and Technology</strong>. My journey is a beautiful 
                  blend of technical prowess and creative leadership.
                </p>
                
                <p className="text-lg text-ink-600 leading-relaxed text-pretty">
                  As a multifaceted individual, I balance my technical pursuits with creative endeavors and community 
                  building. I believe in the power of collaboration to drive innovation and create meaningful impact 
                  in the tech community.
                </p>
              </div>

              {/* Key Info Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-6 border-l-4 border-coral-400">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-coral-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-lg text-ink-900 mb-2">Education</h4>
                      <p className="text-ink-600">
                        Bachelor's in Computer Science Engineering<br />
                        <span className="text-sm text-ink-500">Mar Baselios College of Engineering and Technology (2021-2025)</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6 border-l-4 border-burnt-400">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-burnt-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Heart className="text-burnt-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-lg text-ink-900 mb-2">Passions</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Technology', 'Dance', 'Design', 'Community Building', 'Education'].map((interest, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-burnt-100 text-burnt-700 rounded-full text-sm font-medium"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-coral-50 to-coral-100/50 border border-coral-200/50">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-4">
                    <Users className="text-coral-600" size={28} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2 text-ink-900">Student Leader</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    Vice-Chairperson at CSI SB MBCET, guiding teams and organizing impactful technical events.
                  </p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-burnt-50 to-burnt-100/50 border border-burnt-200/50">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-4">
                    <Code className="text-burnt-600" size={28} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2 text-ink-900">Tech Enthusiast</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    Passionate about coding with experience in Python, Java, and modern web technologies.
                  </p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-grayblue-50 to-grayblue-100/50 border border-grayblue-200/50">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-4">
                    <Palette className="text-grayblue-600" size={28} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2 text-ink-900">Creative Mind</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    Blending technical skills with creative pursuits including dance and design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="text-6xl text-coral-200 absolute -top-8 left-0">
                  <Sparkles />
                </div>
                <blockquote className="text-2xl md:text-3xl font-serif font-medium text-ink-800 leading-relaxed text-pretty">
                  "I believe in the power of community and collaboration to drive innovation 
                  and create meaningful impact in the world of technology."
                </blockquote>
                <div className="mt-6 text-coral-500 font-medium">— Vedha Mahadevan</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;