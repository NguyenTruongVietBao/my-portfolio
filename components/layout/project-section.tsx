'use client';

import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '@/constants/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards stagger animation
      gsap.from('.project-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Floating animation for cards
      gsap.to('.project-card', {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='w-full min-h-screen py-20 bg-[#fffaf0] relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/4 left-1/4 w-32 h-32 border border-black rounded-full'></div>
        <div className='absolute top-1/3 right-1/3 w-24 h-24 border border-black rounded-full'></div>
        <div className='absolute bottom-1/4 left-1/2 w-16 h-16 border border-black rounded-full'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h2
            ref={titleRef}
            className='text-4xl md:text-5xl font-bold text-black mb-4 relative inline-block'
          >
            Dự Án Của Tôi
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full'></div>
          </h2>
          <p className='text-lg text-black/70 max-w-2xl mx-auto mt-8'>
            Những dự án tôi đã thực hiện với đam mê và sự cống hiến, sử dụng các
            công nghệ hiện đại nhất
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className='text-center mt-16'>
          <button className='group px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 hover:shadow-xl'>
            <span>Xem Thêm Dự Án</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    delay?: number;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -20,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(card.querySelector('.project-image'), {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(card.querySelector('.project-image'), {
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

  return (
    <div
      ref={cardRef}
      className='project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-black/10'
    >
      {/* Project Image */}
      <div className='relative h-48 overflow-hidden'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='project-image object-cover transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <div className='flex gap-4'>
            <button className='p-3 bg-white/90 rounded-full hover:bg-white transition-colors'>
              <Github className='w-5 h-5 text-black' />
            </button>
            <button className='p-3 bg-white/90 rounded-full hover:bg-white transition-colors'>
              <ExternalLink className='w-5 h-5 text-black' />
            </button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors'>
          {project.title}
        </h3>
        <p className='text-black/70 mb-4 line-clamp-3'>{project.description}</p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 bg-black/10 text-black text-sm rounded-full hover:bg-black hover:text-[#fffaf0] transition-colors duration-300'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <button className='w-full py-3 bg-black/5 hover:bg-black hover:text-[#fffaf0] text-black font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group'>
          <span>Xem Chi Tiết</span>
          <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
        </button>
      </div>
    </div>
  );
}
