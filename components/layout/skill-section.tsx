'use client';

import React, { useEffect, useRef } from 'react';
import { SKILLS } from '@/constants/skills';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Skills stagger animation
      gsap.from('.skill-item', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Progress bar animations
      SKILLS.forEach((skill, index) => {
        const progressBar = document.querySelector(`.progress-bar-${index}`);
        const progressCircle = document.querySelector(
          `.progress-circle-${index}`
        );

        if (progressBar) {
          gsap.to(progressBar, {
            width: `${skill.level}%`,
            duration: 1.5,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: progressBar,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (progressCircle) {
          const circumference = 2 * Math.PI * 45; // radius = 45
          const offset = circumference - (skill.level / 100) * circumference;

          gsap.to(progressCircle, {
            strokeDashoffset: offset,
            duration: 1.5,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: progressCircle,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='w-full min-h-screen py-20 bg-[#fffaf0] relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/4 right-1/4 w-40 h-40 border border-black rounded-full'></div>
        <div className='absolute bottom-1/3 left-1/3 w-32 h-32 border border-black rounded-full'></div>
        <div className='absolute top-1/2 left-1/4 w-24 h-24 border border-black rounded-full'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h2
            ref={titleRef}
            className='text-4xl md:text-5xl font-bold text-black mb-4 relative inline-block'
          >
            Kỹ Năng Của Tôi
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full'></div>
          </h2>
          <p className='text-lg text-black/70 max-w-2xl mx-auto mt-8'>
            Những công nghệ và kỹ năng tôi thành thạo, được phát triển qua các
            dự án thực tế
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Linear Progress Skills */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-bold text-black mb-6 text-center'>
              Kỹ Năng Chính
            </h3>
            {SKILLS.map((skill, index) => (
              <SkillBarItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Circular Progress Skills */}
          <div className='grid grid-cols-2 gap-8'>
            <h3 className='col-span-2 text-2xl font-bold text-black mb-6 text-center'>
              Thành Thạo
            </h3>
            {SKILLS.map((skill, index) => (
              <SkillCircleItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className='mt-20 text-center'>
          <h3 className='text-2xl font-bold text-black mb-8'>Công Nghệ Khác</h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {[
              'Git',
              'Docker',
              'AWS',
              'Firebase',
              'GraphQL',
              'REST API',
              'Figma',
              'Photoshop',
            ].map((tech) => (
              <span
                key={tech}
                className='px-4 py-2 bg-black/10 text-black rounded-full hover:bg-black hover:text-[#fffaf0] transition-all duration-300 cursor-pointer'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillBarItemProps {
  skill: {
    name: string;
    level: number;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
}

function SkillBarItem({ skill, index }: SkillBarItemProps) {
  return (
    <div className='skill-item'>
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-3'>
          <div className='text-black'>{skill.icon}</div>
          <span className='text-black font-semibold'>{skill.name}</span>
        </div>
        <span className='text-black/70 font-medium'>{skill.level}%</span>
      </div>
      <div className='w-full bg-black/20 rounded-full h-3 overflow-hidden'>
        <div
          className={`progress-bar-${index} h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
}

interface SkillCircleItemProps {
  skill: {
    name: string;
    level: number;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
}

function SkillCircleItem({ skill, index }: SkillCircleItemProps) {
  const circumference = 2 * Math.PI * 45; // radius = 45

  return (
    <div className='skill-item flex flex-col items-center'>
      <div className='relative w-24 h-24 mb-4'>
        <svg className='w-24 h-24 transform -rotate-90' viewBox='0 0 100 100'>
          {/* Background circle */}
          <circle
            cx='50'
            cy='50'
            r='45'
            stroke='#000'
            strokeWidth='6'
            fill='none'
            opacity='0.2'
          />
          {/* Progress circle */}
          <circle
            cx='50'
            cy='50'
            r='45'
            stroke='#000'
            strokeWidth='6'
            fill='none'
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap='round'
            className={`progress-circle-${index} transition-all duration-300`}
          />
        </svg>

        {/* Icon and percentage */}
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <div className='text-black mb-1'>{skill.icon}</div>
          <span className='text-black text-sm font-bold'>{skill.level}%</span>
        </div>
      </div>

      <span className='text-black font-semibold text-center'>{skill.name}</span>
    </div>
  );
}
