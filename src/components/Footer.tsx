import React from 'react';
import { Link } from 'react-scroll';
import { Code, Linkedin, Github, Globe, ArrowUp } from 'lucide-react';
import { navItems, socialLinks } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg mr-2">
                <Code size={24} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Vedha
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              A passionate student leader and tech enthusiast, balancing technical prowess with creative endeavors.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = 
                  social.icon === 'Linkedin' ? Linkedin :
                  social.icon === 'Github' ? Github :
                  Globe;
                
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizations */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Organizations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  CSI SB MBCET
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  IEEE SB MBCET
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  MuLearn MBCET
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  RELEVENT'25
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Catalyst - Mar Baselios IEDC
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:vedha@example.com" className="hover:text-white transition-colors">
                  vedha@example.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Location:</span>
                <span>Kerala, India</span>
              </li>
              <li>
                <a 
                  href="#resume" 
                  className="inline-block mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {currentYear} Vedha Mahadevan. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Back to Top <ArrowUp size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;