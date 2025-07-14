import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Linkedin, Github, Globe, Sparkles } from 'lucide-react';
import { socialLinks } from '../data';

const iconMap: Record<string, JSX.Element> = {
  Linkedin: <Linkedin size={24} className="text-ink-600 group-hover:text-coral-600 transition-colors" />,
  Github: <Github size={24} className="text-ink-600 group-hover:text-coral-600 transition-colors" />,
  Globe: <Globe size={24} className="text-ink-600 group-hover:text-coral-600 transition-colors" />,
  Devfolio: <img src="/contact/devfolio.svg" alt="Devfolio" className="w-6 h-6" />,
  MuLearn: <img src="/contact/mulearn.svg" alt="MuLearn" className="w-6 h-6" />,
  HackerRank: <img src="/contact/hackerrank.svg" alt="HackerRank" className="w-6 h-6" />,
  Medium: <img src="/contact/medium.svg" alt="Medium" className="w-6 h-6" />,
  Instagram: <img src="/contact/instagram.svg" alt="Instagram" className="w-6 h-6" />,
  Facebook: <img src="/contact/facebook.svg" alt="Facebook" className="w-6 h-6" />,
};

const Contact: React.FC = () => {
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

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-coral-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-burnt-100/30 to-transparent rounded-full blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-coral-400 to-burnt-500 rounded-full"></div>
            <span className="text-coral-500 font-medium text-lg tracking-wide uppercase">
              Let's Connect
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-burnt-500 to-coral-400 rounded-full"></div>
          </div>
          <h2 className="section-title text-center">
            Reach Out or <span className="gradient-text">Follow Online</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-burnt-100 rounded-2xl flex items-center justify-center">
                  <Mail className="text-burnt-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-2xl text-ink-900">Get in Touch</h3>
                  <p className="text-ink-600">Multiple ways to reach me</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-coral-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-ink-800 mb-1">Email</h4>
                    <a
                      href="mailto:vedha@example.com"
                      className="text-coral-600 hover:text-coral-700 transition-colors font-medium"
                    >
                      vedhamahadevan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-burnt-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-burnt-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-ink-800 mb-1">Location</h4>
                    <p className="text-ink-600">Kerala, India</p>
                    <p className="text-sm text-ink-500">Available for remote collaboration</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-grayblue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-grayblue-600" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-grayblue-100 rounded-2xl flex items-center justify-center">
                  <Sparkles className="text-grayblue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-2xl text-ink-900">Connect Online</h3>
                  <p className="text-ink-600">Follow my journey and work</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social) => {
                  const icon = iconMap[social.icon] || iconMap['Globe'];

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-4 p-4 rounded-2xl border border-beige-200 hover:border-coral-300 hover:bg-coral-50 transition-all group"
                    >
                      <div className="w-12 h-12 bg-beige-100 group-hover:bg-coral-100 rounded-2xl flex items-center justify-center transition-colors">
                        {icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-ink-800 group-hover:text-coral-700 transition-colors">
                          {social.name}
                        </h4>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
