'use client';

import React, { useEffect, useRef } from 'react';
import { WORK_EXPERIENCES } from '@/constants/work-experiences';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { BoxReveal } from '../magicui/box-reveal';
import { Button } from '../ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const handleContact = () => {
    window.location.href = 'mailto:nguyentvbao.dev@gmail.com';
  };
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

      // Timeline line animation
      const timelineLine = document.querySelector('.timeline-line');
      if (timelineLine) {
        gsap.from(timelineLine, {
          height: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Experience items stagger animation
      gsap.from('.experience-item', {
        x: (index) => (index % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Timeline dots animation
      gsap.from('.timeline-dot', {
        scale: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='experience'
      ref={sectionRef}
      className='w-full min-h-screen py-20 bg-[#fffaf0] relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 border border-black rounded-full'></div>
        <div className='absolute bottom-1/3 right-1/4 w-48 h-48 border border-black rounded-full'></div>
        <div className='absolute top-1/2 right-1/3 w-32 h-32 border border-black rounded-full'></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 md:px-12 relative z-10'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h2
            ref={titleRef}
            className='text-4xl md:text-5xl font-bold text-black mb-4 relative inline-block'
          >
            Work Experience
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full'></div>
          </h2>
          <p className='text-lg text-black/70 max-w-2xl mx-auto mt-8'>
            My journey through different positions and projects
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className='relative'>
          {/* Timeline Line */}
          <div
            className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-black/20 timeline-line'
            style={{ height: '100%' }}
          ></div>

          {/* Experience Items */}
          <div className='space-y-16'>
            {WORK_EXPERIENCES.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <div className='bg-black/5 rounded-2xl p-8 max-w-2xl mx-auto'>
            <p className='text-black/70'>Get In Touch</p>
            <h3 className='text-3xl font-bold text-black my-4'>
              Ready to Collaborate
            </h3>
            <button
              onClick={handleContact}
              className='mt-10 cursor-pointer group px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 hover:shadow-xl'
            >
              <span>Contact Now</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  experience: {
    id: number;
    company: string;
    position: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    logo: string;
    link: string;
    tech: string[];
    color: string;
  };
  index: number;
  isLeft: boolean;
}

function ExperienceItem({ experience, index, isLeft }: ExperienceItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      month: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div
      className={`experience-item relative flex items-center ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Timeline Dot */}
      <div className='absolute left-1/2 transform -translate-x-1/2 z-10'>
        <div className='timeline-dot w-4 h-4 bg-black rounded-full border-4 border-[#fffaf0] shadow-lg'></div>
      </div>

      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div
          ref={cardRef}
          className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-black/10'
        >
          {/* View Company Button */}
          <div className='size-full max-w-lg items-center justify-center overflow-hidden'>
            <BoxReveal boxColor={'#fffaf0'} duration={0.5}>
              <p className='text-[3.5rem] font-semibold'>
                CEH<span className='text-[#5046e6]'>.</span>
              </p>
            </BoxReveal>
            <BoxReveal boxColor={'#fffaf0'} duration={0.5}>
              <h2 className='font-bold'>
                <span className='text-[#000]'>Frontend Developer</span>
              </h2>
            </BoxReveal>
            <BoxReveal boxColor={'#fffaf0'} duration={0.5}>
              {/* Date and Location */}
              <div className='flex items-center gap-4 mt-4 text-sm text-black/60'>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-4 h-4' />
                  <span>
                    {formatDate(experience.startDate)} -{' '}
                    {formatDate(experience.endDate)}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <MapPin className='w-4 h-4' />
                  <span>{experience.location}</span>
                </div>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={'#fffaf0'} duration={0.5}>
              <div className='mt-6'>
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className='font-semibold text-[#000]'>React</span>,
                  <span className='font-semibold text-[#000]'>Typescript</span>,
                  <span className='font-semibold text-[#000]'>
                    Tailwind CSS
                  </span>
                  , and
                  <span className='font-semibold text-[#000]'>Motion</span>
                  . <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>
            <BoxReveal boxColor={'#fffaf0'} duration={0.5}>
              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mt-4'>
                {experience.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 bg-black/10 text-black text-sm rounded-full'
                  >
                    {tech}
                  </span>
                ))}
                {experience.tech.length > 4 && (
                  <span className='px-3 py-1 bg-black/10 text-black text-sm rounded-full'>
                    +{experience.tech.length - 4} more
                  </span>
                )}
              </div>
            </BoxReveal>
            <BoxReveal boxColor={'#fffaf0'} duration={0.5}>
              <Button className='mt-[1.6rem] bg-[#000] text-[#fffaf0]'>
                Explore
              </Button>
            </BoxReveal>
          </div>
        </div>
      </div>

      {/* Empty space for opposite side */}
      <div className='w-5/12'></div>
    </div>
  );
}
