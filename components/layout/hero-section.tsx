'use client';

import React, { useEffect, useRef } from 'react';
import { TextHoverEffect } from '../ui/text-hover-effect';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { TypingAnimation } from '../magicui/typing-animation';
import { MorphingText } from '../magicui/morphing-text';

gsap.registerPlugin(ScrollTrigger);

const words = [
  'Hi, I am Viet Bao',
  '- A software engineer and a bachelor of Information Technology at the FPT University, HCM City.',
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          socialRef.current,
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });

      // Parallax effect for hero content
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadCV = () => {
    console.log('Downloading CV...');
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='hero' className='w-full h-screen'>
      <div
        ref={heroRef}
        className='relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 mt-10'
      >
        {/* Title */}
        <TextHoverEffect text='nt.vbao' />

        {/* Subtitle */}
        <div ref={subtitleRef} className='max-w-4xl text-center mb-12'>
          <TextGenerateEffect
            words={words.join(' ')}
            className='text-lg md:text-xl text-black/80'
          />
        </div>
        {/* CTA Buttons */}
        <div ref={ctaRef} className='flex flex-col sm:flex-row gap-4 mb-12'>
          <button
            onClick={handleDownloadCV}
            className='cursor-pointer group px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-xl'
          >
            <Download className='w-5 h-5 group-hover:animate-bounce' />
            <span>Download CV</span>
          </button>

          <button
            onClick={handleScrollToProjects}
            className='cursor-pointer group px-8 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-[#fffaf0] transition-all duration-300 flex items-center gap-3 hover:scale-105'
          >
            <span>View Projects</span>
            <ChevronDown className='w-5 h-5 group-hover:animate-bounce' />
          </button>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className='flex gap-6 mb-32'>
          <a
            href='https://github.com/ntvb.dev'
            rel='noopener noreferrer'
            target='_blank'
            className='p-3 bg-black/10 hover:bg-black hover:text-[#fffaf0] text-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg'
          >
            <Github className='w-6 h-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/ntvb.dev'
            rel='noopener noreferrer'
            target='_blank'
            className='p-3 bg-black/10 hover:bg-black hover:text-[#fffaf0] text-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg'
          >
            <Linkedin className='w-6 h-6' />
          </a>
          <a
            href='mailto:nguyentvbao.dev@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
            className='p-3 bg-black/10 hover:bg-black hover:text-[#fffaf0] text-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg'
          >
            <Mail className='w-6 h-6' />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className='absolute bottom-14 left-1/2 transform -translate-x-1/2'
        >
          <div className='flex flex-col items-center gap-2 text-black/60'>
            <span className='text-sm font-medium'>Scroll down</span>
            <ChevronDown className='w-6 h-6 animate-bounce' />
          </div>
        </div>
      </div>
    </section>
  );
}
