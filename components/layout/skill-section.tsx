'use client';

import { SKILLS } from '@/constants/skills';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations for skill cards
      gsap.fromTo(
        '.skill-card',
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
          rotationY: 45,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );

      // Floating animation for skill cards
      gsap.to('.skill-card', {
        y: -10,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredSkills]);

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='w-full min-h-screen bg-[#fffaf0] relative overflow-hidden py-20'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-black/10 to-transparent' />
        <div className='absolute top-40 right-40 w-40 h-40 border border-black/10 rounded-full' />
        <div className='absolute bottom-40 left-40 w-56 h-56 border border-black/10 rounded-full' />
        <div className='absolute top-1/3 right-1/4 w-28 h-28 border border-black/10 rounded-full' />
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
          <motion.h2 className='text-4xl md:text-5xl font-bold text-black mb-6 relative inline-block'>
            Skills
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-black rounded-full'
            />
          </motion.h2>

          {/* Category Filter */}
          <motion.div
            className='flex flex-wrap justify-center gap-4 mb-12'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-[#fffaf0] shadow-lg'
                    : 'bg-white/50 backdrop-blur-sm text-black border border-black/10 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={skillsRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className='skill-card group'
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <motion.div
                className='relative p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-black/10 shadow-lg overflow-hidden'
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  rotateY: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Percentage Background */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent'
                  style={{
                    clipPath: `polygon(0 0, ${skill.percentage}% 0, ${
                      skill.percentage - 20
                    }% 100%, 0 100%)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />

                {/* Icon */}
                <motion.div
                  className='text-black mb-4 relative z-10'
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className='text-xl font-bold text-black mb-3 relative z-10'>
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className='inline-block px-3 py-1 bg-black/10 rounded-full text-xs font-medium text-black/70 mb-4 relative z-10'>
                  {skill.category}
                </div>

                {/* Progress Bar */}
                <div className='relative mb-4 z-10'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm text-black/70'>Proficiency</span>
                    <span className='text-sm font-bold text-black'>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className='w-full bg-black/10 rounded-full h-2'>
                    <motion.div
                      className='bg-black rounded-full h-2'
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.5,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className='space-y-2 relative z-10'>
                  <h4 className='text-sm font-medium text-black/80 mb-2'>
                    Technologies:
                  </h4>
                  <div className='flex flex-wrap gap-1'>
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className='text-xs px-2 py-1 bg-black/5 text-black/70 rounded-md'
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + techIndex * 0.05 + 0.8,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className='mt-20 text-center'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            <motion.div
              className='text-center'
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className='text-4xl font-bold text-black mb-2'>
                {SKILLS.length}+
              </div>
              <div className='text-black/70'>Technologies</div>
            </motion.div>
            <motion.div
              className='text-center'
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className='text-4xl font-bold text-black mb-2'>
                {Math.round(
                  SKILLS.reduce((acc, skill) => acc + skill.percentage, 0) /
                    SKILLS.length
                )}
                %
              </div>
              <div className='text-black/70'>Avg Proficiency</div>
            </motion.div>
            <motion.div
              className='text-center'
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className='text-4xl font-bold text-black mb-2'>3+</div>
              <div className='text-black/70'>Years Experience</div>
            </motion.div>
            <motion.div
              className='text-center'
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className='text-4xl font-bold text-black mb-2'>25+</div>
              <div className='text-black/70'>Projects</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
