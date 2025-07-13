import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { navItems } from '../data';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-soft py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-burnt-500 rounded-2xl flex items-center justify-center shadow-soft">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-coral-300 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-serif font-semibold text-2xl text-ink-900">
                  Vedha
                </span>
                <div className="text-xs text-ink-600 font-medium tracking-wider uppercase">
                  Digital Storyteller
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className={`nav-link text-lg ${activeSection === item.to ? 'active' : ''}`}
                onSetActive={() => setActiveSection(item.to)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
        <a
          href="https://www.canva.com/design/DAGhhM-9ttw/ZwRUtlsbipHtK8IjamiskA/view?utm_content=DAGhhM-9ttw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he00621b3d4"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume
        </a>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-3 text-ink-700 hover:text-coral-500 transition-colors rounded-xl hover:bg-white/50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-soft-lg border-t border-white/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className={`block py-3 px-4 text-lg rounded-xl transition-colors ${
                      activeSection === item.to
                        ? 'text-coral-500 bg-coral-50'
                        : 'text-ink-700 hover:text-coral-500 hover:bg-white/50'
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSection(item.to);
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <a
                  href="https://www.canva.com/design/DAGhhM-9ttw/ZwRUtlsbipHtK8IjamiskA/view?utm_content=DAGhhM-9ttw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he00621b3d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Resume
                </a>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
