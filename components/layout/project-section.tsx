'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { PinContainer } from '../ui/3d-pin';
import BadgeTech from '../common/badge-tech';
import { DraggableCardProject } from '../common/draggable-card-project';
import { PROJECTS } from '@/constants/projects';
import { FaReact, FaNode, FaDocker } from 'react-icons/fa';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import {
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandSocketIo,
  TbBrandReactNative,
} from 'react-icons/tb';
import {
  SiExpress,
  SiVite,
  SiExpo,
  SiVercel,
  SiJsonwebtokens,
} from 'react-icons/si';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// Tech icon mapping
const techIcons: { [key: string]: React.ReactNode } = {
  'Node.js': <FaNode size={16} />,
  'Express.js': <SiExpress size={16} />,
  MongoDB: <TbBrandMongodb size={16} />,
  'React.js': <FaReact size={16} />,
  'Socket.io': <TbBrandSocketIo size={16} />,
  JWT: <SiJsonwebtokens size={16} />,
  Docker: <FaDocker size={16} />,
  'React Native': <TbBrandReactNative size={16} />,
  Expo: <SiExpo size={16} />,
  Zustand: <span className='text-xs font-bold'>Z</span>,
  Nativewind: <RiTailwindCssFill size={16} />,
  Vite: <SiVite size={16} />,
  TailwindCSS: <RiTailwindCssFill size={16} />,
  Vercel: <SiVercel size={16} />,
  NextJS: <RiNextjsLine size={16} />,
  TypeScript: <TbBrandTypescript size={16} />,
};

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 20,
        opacity: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
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
          start: 'top 70%',
          end: 'bottom 30%',
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
      className='w-full min-h-screen pt-20 bg-[#fffaf0] relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/4 left-1/4 w-32 h-32 border border-black rounded-full'></div>
        <div className='absolute top-1/3 right-1/3 w-24 h-24 border border-black rounded-full'></div>
        <div className='absolute bottom-1/4 left-1/2 w-16 h-16 border border-black rounded-full'></div>
        <div className='absolute top-1/4 right-1/2 w-16 h-16 border border-black rounded-full'></div>
      </div>

      <div className='mx-auto'>
        {/* Section Title */}
        <div className='text-center'>
          <h2
            ref={titleRef}
            className='text-4xl md:text-5xl font-bold text-black mb-4 relative inline-block'
          >
            My Projects
            <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-black rounded-full'></div>
          </h2>
          <p className='text-lg text-black/70 max-w-2xl mx-auto mt-8'>
            My projects with passion and dedication, using the latest
            technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef}>
          <div className='flex justify-center gap-4 mx-20'>
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className='h-[35rem] w-full flex items-center justify-center project-card'
                onClick={() => {
                  const url =
                    project.github?.frontend ||
                    project.github?.backend ||
                    project.github?.mobile;
                  if (url) window.open(url, '_blank');
                }}
              >
                <PinContainer
                  title={
                    project.github?.frontend
                      ? 'Frontend'
                      : project.github?.backend
                      ? 'Backend'
                      : project.github?.mobile
                      ? 'Mobile'
                      : 'Github'
                  }
                  containerClassName='bg-[#fffaf0] cursor-pointer'
                >
                  <div className='flex basis-full flex-col p-4 tracking-tight text-white sm:basis-1/2 w-[20rem] h-[25rem]'>
                    <h3 className='max-w-xs !pb-2 !m-0 font-bold text-lg text-[#fffaf0]'>
                      {project.title}
                    </h3>
                    <div className='text-base !m-0 !p-0 font-normal'>
                      <span className='text-white/80'>
                        {project.description}
                      </span>
                    </div>
                    <div className='flex flex-1 w-full rounded-lg mt-4 bg-[#fffaf0]'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </div>

                    {/* Tech Stack */}
                    <div className='flex items-center justify-start gap-2 flex-wrap my-4'>
                      {project.tech.slice(0, 5).map((tech, techIndex) => (
                        <BadgeTech
                          key={techIndex}
                          title={tech}
                          icon={techIcons[tech] || <span>{tech[0]}</span>}
                        />
                      ))}
                    </div>

                    {/* Project Info */}
                    <div className='mt-2 text-xs text-white/60 flex items-center justify-between'>
                      <div className='font-semibold'>{project.role}</div>
                      <div>{project.period}</div>
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-between mx-40 mt-10'>
            <h2 className='text-3xl font-bold text-black'>Others Projects</h2>
            {/* View More Button */}
            <div className='text-center'>
              <button className='group cursor-pointer px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 hover:shadow-xl'>
                <span>View All</span>
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform text-[#fffaf0]' />
              </button>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <DraggableCardProject />
        </div>
      </div>
    </section>
  );
}
