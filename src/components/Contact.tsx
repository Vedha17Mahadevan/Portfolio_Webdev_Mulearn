import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Globe, Heart, Sparkles } from 'lucide-react';
import { socialLinks } from '../data';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

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
      {/* Background Elements */}
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
            Ready to{' '}
            <span className="gradient-text">Collaborate?</span>
          </h2>
          <p className="section-subtitle text-center max-w-4xl mx-auto">
            Whether you have a project in mind, want to discuss opportunities, or simply want to connect, 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="card p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-coral-100 rounded-2xl flex items-center justify-center">
                  <Send className="text-coral-600" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-2xl text-ink-900">Send a Message</h3>
                  <p className="text-ink-600">I'll get back to you within 24 hours</p>
                </div>
              </div>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-2xl border border-green-200"
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="text-green-600" size={20} />
                    <span>Thank you for your message! I'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-ink-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-all bg-beige-50 hover:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-ink-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-all bg-beige-50 hover:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-ink-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-beige-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent transition-all bg-beige-50 hover:bg-white"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-ink-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-beige-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent resize-none transition-all bg-beige-50 hover:bg-white"
                    placeholder="Tell me about your project, idea, or just say hello..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
            {/* Contact Information */}
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
                      vedha@example.com
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
                  <div>
                    <h4 className="font-medium text-ink-800 mb-1">Phone</h4>
                    <p className="text-ink-600">+91 XXXXXXXXXX</p>
                    <p className="text-sm text-ink-500">Available 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
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
                  const IconComponent = 
                    social.icon === 'Linkedin' ? Linkedin :
                    social.icon === 'Github' ? Github :
                    Globe;
                  
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
                        <IconComponent className="text-ink-600 group-hover:text-coral-600 transition-colors" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-ink-800 group-hover:text-coral-700 transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-ink-500">
                          {social.name === 'LinkedIn' && 'Professional network'}
                          {social.name === 'GitHub' && 'Code repositories'}
                          {social.name === 'Devfolio' && 'Project portfolio'}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="card p-8 bg-gradient-to-br from-coral-50 to-burnt-50 border-coral-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <Heart className="text-coral-600" size={28} />
                </div>
                <h3 className="font-serif font-semibold text-xl text-ink-900 mb-3">
                  Let's Build Something Amazing
                </h3>
                <p className="text-ink-600 leading-relaxed">
                  I'm always excited to collaborate on innovative projects, discuss new opportunities, 
                  or simply connect with fellow creators and leaders.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;