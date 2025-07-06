import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section id="testimonials" className="section bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block mx-auto text-center">
            Testimonials & Collaborations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            What people say about working with me and our collaborative journey.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="text-7xl text-primary-200 absolute -top-10 left-0">
              <Quote />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 items-center"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 text-lg italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary-600">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].organization}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex
                          ? 'bg-primary-500'
                          : 'bg-gray-300 hover:bg-primary-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Organizations I've Collaborated With
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <span className="font-bold text-primary-600">CSI</span>
                </div>
                <h4 className="font-medium text-center">CSI SB MBCET</h4>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mb-3">
                  <span className="font-bold text-secondary-600">IEEE</span>
                </div>
                <h4 className="font-medium text-center">IEEE SB MBCET</h4>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-3">
                  <span className="font-bold text-accent-600">ML</span>
                </div>
                <h4 className="font-medium text-center">MuLearn MBCET</h4>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <span className="font-bold text-primary-600">D:U</span>
                </div>
                <h4 className="font-medium text-center">Design: Unlocked</h4>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mb-3">
                  <span className="font-bold text-secondary-600">IEDC</span>
                </div>
                <h4 className="font-medium text-center">Catalyst - IEDC</h4>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-3">
                  <span className="font-bold text-accent-600">R25</span>
                </div>
                <h4 className="font-medium text-center">RELEVENT'25</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;