'use client';

import { SKILLS } from '@/constants/skills';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';

export default function SkillSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Tools'];

  const filteredSkills = useMemo(
    () =>
      selectedCategory === 'All'
        ? SKILLS
        : SKILLS.filter((skill) => skill.category === selectedCategory),
    [selectedCategory]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 140, damping: 18 },
    },
    exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15 } },
  } as const;

  return (
    <section
      id='skills'
      className='w-full min-h-screen relative overflow-hidden py-20 bg-[#fffaf0]'
    >
      <div className='container mx-auto px-6 lg:px-12 relative z-10'>
        {/* Header */}
        <motion.div
          className='text-center mb-5'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 className='text-4xl md:text-5xl font-bold text-black relative inline-block mb-10'>
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
            className='flex justify-center'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LayoutGroup>
              <div className='inline-flex items-center gap-1 rounded-full bg-white/60 backdrop-blur-md p-1 ring-1 ring-black/[0.06] shadow-sm'>
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type='button'
                      aria-pressed={isActive}
                      onClick={() => setSelectedCategory(category)}
                      className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-black/70 hover:text-black'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId='activePill'
                          className='absolute inset-0 z-0 rounded-full bg-black'
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className='relative z-10'>{category}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className='skill-card'
                layout
                variants={itemVariants}
                exit='exit'
              >
                <div className='group relative h-full rounded-2xl border border-black/[0.08] bg-white/60 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-md'>
                  <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent' />
                  <div className='p-6'>
                    {/* Icon */}
                    <div className='mb-4 text-black/90 group-hover:text-black transition-colors'>
                      <div className='inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.06] ring-1 ring-black/[0.06]'>
                        {skill.icon}
                      </div>
                    </div>
                    {/* Name */}
                    <h3 className='text-lg font-semibold text-black mb-2'>
                      {skill.name}
                    </h3>
                    {/* Category */}
                    <span className='inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium text-black/70 ring-1 ring-black/[0.08] bg-white/70 backdrop-blur-sm mb-4'>
                      {skill.category}
                    </span>

                    {/* Progress */}
                    <div className='mb-5'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='text-xs text-black/60'>
                          Proficiency
                        </span>
                        <span className='text-xs font-semibold text-black'>
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className='relative h-1.5 w-full rounded-full bg-black/10 overflow-hidden'>
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: 'easeOut' }}
                          className='absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-black to-neutral-700'
                        />
                        <motion.span
                          initial={{ x: 0, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 }}
                          style={{ left: `calc(${skill.percentage}% - 6px)` }}
                          className='absolute -top-1 size-3 rounded-full bg-black'
                        />
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className='text-xs font-medium text-black/70 mb-2'>
                        Technologies
                      </div>
                      <div className='flex flex-wrap gap-1.5'>
                        {skill.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='text-[11px] px-2 py-1 rounded-md bg-white/70 text-black/70 ring-1 ring-black/[0.06]'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className='mt-16'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-4 divide-x divide-black/[0.06] overflow-hidden rounded-xl ring-1 ring-black/[0.06] bg-white/60 backdrop-blur-md'>
            <div className='px-6 py-5 text-center'>
              <div className='text-3xl font-semibold text-black'>
                {SKILLS.length}+
              </div>
              <div className='text-xs text-black/60'>Technologies</div>
            </div>
            <div className='px-6 py-5 text-center'>
              <div className='text-3xl font-semibold text-black'>
                {Math.round(
                  SKILLS.reduce((acc, skill) => acc + skill.percentage, 0) /
                    SKILLS.length
                )}
                %
              </div>
              <div className='text-xs text-black/60'>Avg Proficiency</div>
            </div>
            <div className='px-6 py-5 text-center'>
              <div className='text-3xl font-semibold text-black'>3+</div>
              <div className='text-xs text-black/60'>Years Experience</div>
            </div>
            <div className='px-6 py-5 text-center'>
              <div className='text-3xl font-semibold text-black'>15+</div>
              <div className='text-xs text-black/60'>Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
