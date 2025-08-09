'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { SKILLS } from '@/constants/skills';
import {
  MapPin,
  Calendar,
  Mail,
  Github,
  Linkedin,
  Download,
} from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations
      gsap.fromTo(
        '.about-stat',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-text-line',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Happy Clients', value: '100%' },
  ];

  const personalInfo = [
    { icon: <Calendar className='w-4 h-4' />, label: 'Age', value: '22' },
    {
      icon: <MapPin className='w-4 h-4' />,
      label: 'Location',
      value: 'Ho Chi Minh, Viet Nam',
    },
    {
      icon: <Mail className='w-4 h-4' />,
      label: 'Email',
      value: 'nguyentvbao.dev@gmail.com',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id='about'
      className='w-full min-h-screen bg-[#fffaf0] relative overflow-hidden py-20'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/10 to-transparent' />
        <div className='absolute top-20 left-20 w-32 h-32 border border-black/10 rounded-full' />
        <div className='absolute bottom-20 right-20 w-48 h-48 border border-black/10 rounded-full' />
        <div className='absolute top-1/2 left-1/4 w-24 h-24 border border-black/10 rounded-full' />
      </div>

      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 className='text-4xl md:text-5xl font-bold text-black relative inline-block'>
            About me
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-black rounded-full'
            />
          </motion.h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Content */}
          <motion.div
            ref={textRef}
            className='space-y-8'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='space-y-6'>
              <div className='about-text-line'>
                <h3 className='text-3xl font-bold text-black mb-4'>
                  Hello! I'm a{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-black to-black/70'>
                    Developer
                  </span>
                </h3>
              </div>

              <div className='about-text-line space-y-4 text-lg text-black/80 leading-relaxed'>
                <p>
                  I'm a Fullstack Developer with over 3 years of experience in
                  developing modern web and mobile applications. Specialized in
                  React, Next.js, and Node.js.
                </p>
                <p>
                  Passionate about creating products that have a positive impact
                  on users' lives, with a focus on performance, UX and code
                  quality.
                </p>
                <p>
                  Always learning and staying updated with the latest
                  technologies to ensure delivering the most optimal solutions
                  for every project.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className='space-y-4'>
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className='about-text-line flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-black/10'
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='text-black'>{info.icon}</div>
                  <div>
                    <span className='text-black/60 text-sm'>{info.label}:</span>
                    <span className='text-black font-medium ml-2'>
                      {info.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='about-text-line flex flex-wrap gap-4'>
              <motion.button
                onClick={() => {
                  const cvPath = '/cv-ung-tuyen-ntvbao.pdf';
                  window.open(cvPath, '_blank');
                }}
                className='flex cursor-pointer items-center space-x-2 px-6 py-3 bg-black text-[#fffaf0] rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className='w-4 h-4' />
                <span>My Resume</span>
              </motion.button>

              <motion.button
                className='flex cursor-pointer items-center space-x-2 px-6 py-3 bg-white/50 backdrop-blur-sm text-black rounded-xl font-medium border border-black/10 transition-all duration-300 hover:bg-white/80'
                whileHover={{ y: -2 }}
                onClick={() => {
                  const cvPath = 'https://github.com/NguyenTruongVietBao';
                  window.open(cvPath, '_blank');
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className='w-4 h-4' />
                <span>GitHub</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Avatar & Stats */}
          <motion.div
            className='flex flex-col items-center space-y-12'
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Avatar */}
            <motion.div className='relative'>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
                className='absolute inset-0 bg-black/10 rounded-full blur-3xl transform scale-110'
              />

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.5 },
                }}
                className='relative z-10 bg-white/30 backdrop-blur-sm rounded-full p-8 border border-black/20 shadow-2xl'
              >
                <Image
                  src='/images/avatar.jpg'
                  alt='Developer Avatar'
                  width={300}
                  height={300}
                  className='rounded-full'
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
                className='absolute inset-0 pointer-events-none'
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                  <motion.div
                    key={angle}
                    className='absolute w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-black/10'
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-160px) rotate(-${angle}deg)`,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                      ease: 'easeInOut',
                    }}
                  >
                    {SKILLS[index]?.icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className='grid grid-cols-2 gap-6 w-full max-w-md'>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className='about-stat text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-black/10 shadow-lg'
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className='text-3xl font-bold text-black mb-2'
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      delay: index * 0.1 + 0.5,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className='text-sm text-black/70 font-medium'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
