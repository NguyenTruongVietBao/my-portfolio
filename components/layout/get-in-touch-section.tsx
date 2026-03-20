'use client';

import { ArrowRight, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from '@/constants/about';

export default function GetInTouchSection() {
  return (
    <section className='py-20 bg-[#fffaf0]'>
      <div className='container mx-auto px-6 lg:px-12'>
        <motion.div
          className='text-center mb-12'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 className='text-4xl md:text-5xl font-bold text-black relative inline-block'>
            Get In Touch
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-black rounded-full'
            />
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto'
        >
          <div className='bg-gradient-to-br from-black/5 to-black/10 rounded-3xl p-10 md:p-12 backdrop-blur-sm border border-black/5'>
            <div className='text-center space-y-6'>
              <p className='text-black/60 text-lg'>
                Have a project in mind? Let's work together!
              </p>
              <h3 className='text-3xl md:text-4xl font-bold text-black'>
                Ready to Build Something Amazing?
              </h3>
              <p className='text-black/70 max-w-lg mx-auto'>
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>

              {/* Contact Methods */}
              <div className='flex flex-wrap justify-center gap-4 pt-6'>
                <motion.a
                  href={`mailto:${ABOUT.email}`}
                  className='flex items-center gap-2 px-6 py-3 bg-black text-[#fffaf0] rounded-xl font-medium hover:bg-black/90 transition-all duration-300'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className='w-5 h-5' />
                  <span>Email Me</span>
                  <ArrowRight className='w-4 h-4' />
                </motion.a>

                <motion.a
                  href={ABOUT.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className='w-5 h-5' />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  href={ABOUT.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-900 transition-all duration-300'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className='w-5 h-5' />
                  <span>GitHub</span>
                </motion.a>
              </div>

              {/* Email Display */}
              <div className='pt-8 border-t border-black/10 mt-8'>
                <p className='text-black/50 text-sm mb-2'>
                  Or reach me directly at
                </p>
                <a
                  href={`mailto:${ABOUT.email}`}
                  className='text-xl font-semibold text-black hover:text-black/70 transition-colors'
                >
                  {ABOUT.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className='flex justify-center gap-6 mt-12'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href={ABOUT.github}
            target='_blank'
            rel='noopener noreferrer'
            className='p-4 bg-white/50 hover:bg-black hover:text-white text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-black/10'
          >
            <Github className='w-6 h-6' />
          </a>
          <a
            href={ABOUT.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='p-4 bg-white/50 hover:bg-blue-600 hover:text-white text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-black/10'
          >
            <Linkedin className='w-6 h-6' />
          </a>
          <a
            href={ABOUT.facebook}
            target='_blank'
            rel='noopener noreferrer'
            className='p-4 bg-white/50 hover:bg-blue-500 hover:text-white text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-black/10'
          >
            <Facebook className='w-6 h-6' />
          </a>
          <a
            href={`mailto:${ABOUT.email}`}
            className='p-4 bg-white/50 hover:bg-red-500 hover:text-white text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-black/10'
          >
            <Mail className='w-6 h-6' />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
