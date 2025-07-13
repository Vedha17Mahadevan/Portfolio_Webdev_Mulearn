import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download, Sparkles, Heart, Code, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Learning to organize ideas, lead with purpose, and create experiences that matter.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige-100 via-beige-200 to-coral-50/30" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 mt-6"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 mt-2"
            >
              <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
              <span className="text-coral-500 font-medium text-lg tracking-wide leading-relaxed">
                  Hello, I'm
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif font-semibold text-display-lg lg:text-display-xl text-ink-900 leading-none"
            >
              Vedha{' '}
              <span className="gradient-text">
                Mahadevan
              </span>
            </motion.h1>

            {/* Typed Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl lg:text-3xl text-ink-700 font-light leading-relaxed min-h-[4rem]"
            >
              <span className="font-serif">
                {typedText}
                <span className="animate-pulse text-coral-400">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-xl text-ink-600 leading-relaxed max-w-2xl text-pretty"
            >
              I am a motivated Computer Science student with a strong interest in coding (currently familiar with  C, Python, and Java), web development,  problem-solving, and exploring innovative technologies. Alongside my technical pursuits, I am passionate about dance and the arts, which inspire creativity and bring fresh perspectives to my work. My public speaking, leadership, and organizational skills allow me to excel in team projects, thrive under pressure, and deliver quality results. I aspire to bridge technology and art while gaining industry knowledge to further expand my expertise.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="btn btn-primary group cursor-pointer"
              >
                Explore My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://www.canva.com/design/DAGhhM-9ttw/ZwRUtlsbipHtK8IjamiskA/view?utm_content=DAGhhM-9ttw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he00621b3d4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group"
              >
                Download Resume
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-nowrap gap-8 pt-8"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-coral-100 rounded-2xl flex items-center justify-center">
                  <Users className="text-coral-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-serif font-semibold text-ink-900">60+</div>
                  <div className="text-sm text-ink-600">Developers Mentored</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-burnt-100 rounded-2xl flex items-center justify-center">
                  <Sparkles className="text-burnt-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-serif font-semibold text-ink-900">15+</div>
                  <div className="text-sm text-ink-600">Events Organized</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-grayblue-100 rounded-2xl flex items-center justify-center">
                  <Heart className="text-grayblue-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-serif font-semibold text-ink-900">5+</div>
                  <div className="text-sm text-ink-600">Leadership Roles</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end -mt-12"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="w-80 h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src="/PfI.jpg"
                    alt="Vedha Mahadevan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coral-900/20 via-transparent to-transparent"></div>
                </div>
              </div>

             {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="flex flex-wrap gap-8 pt-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-coral-100 rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-coral-600" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold text-ink-900">15+</div>
                    <div className="text-sm text-ink-600">Events Organized</div>
                  </div>
                </div>
              
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-burnt-100 rounded-2xl flex items-center justify-center">
                    <Download className="text-burnt-600" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold text-ink-900">10+</div>
                    <div className="text-sm text-ink-600">Certifications Earned</div>
                  </div>
                </div>
              
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-grayblue-100 rounded-2xl flex items-center justify-center">
                    <Code className="text-grayblue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold text-ink-900">7+</div>
                    <div className="text-sm text-ink-600">Projects Built</div>
                  </div>
                </div>
              
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <Heart className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold text-ink-900">5</div>
                    <div className="text-sm text-ink-600">Languages Known</div>
                  </div>
                </div>
              </motion.div>


              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-coral-200/40 to-burnt-200/30 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-grayblue-200/40 to-beige-300/50 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm text-ink-500 font-medium">Scroll to explore</div>
          <motion.div
            className="w-6 h-10 border-2 border-ink-300 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-coral-400 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
