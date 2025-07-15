'use client';

import React, { useEffect, useRef } from 'react';
import { WORK_EXPERIENCES } from '@/constants/work-experiences';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
            Kinh Nghiệm Làm Việc
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black rounded-full'></div>
          </h2>
          <p className='text-lg text-black/70 max-w-2xl mx-auto mt-8'>
            Hành trình phát triển sự nghiệp của tôi qua các vị trí và dự án khác
            nhau
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
            <h3 className='text-2xl font-bold text-black mb-4'>
              Sẵn Sàng Hợp Tác
            </h3>
            <p className='text-black/70 mb-6'>
              Tôi luôn tìm kiếm những cơ hội mới để phát triển và đóng góp vào
              các dự án thú vị
            </p>
            <button className='group px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 hover:shadow-xl'>
              <span>Liên Hệ Ngay</span>
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
      month: 'short',
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
          {/* Company Header */}
          <div className='flex items-center gap-4 mb-4'>
            <div className='relative w-12 h-12 rounded-full overflow-hidden bg-black/10'>
              <Image
                src={experience.logo}
                alt={experience.company}
                fill
                className='object-cover'
              />
            </div>
            <div>
              <h3 className='text-xl font-bold text-black'>
                {experience.company}
              </h3>
              <p className='text-black/70 font-semibold'>
                {experience.position}
              </p>
            </div>
          </div>

          {/* Date and Location */}
          <div className='flex items-center gap-4 mb-4 text-sm text-black/60'>
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

          {/* Description */}
          <p className='text-black/80 mb-4 leading-relaxed'>
            {experience.description}
          </p>

          {/* Tech Stack */}
          <div className='flex flex-wrap gap-2 mb-4'>
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

          {/* View Company Button */}
          <a
            href={experience.link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-black hover:text-black/70 font-semibold transition-colors group'
          >
            <span>Xem Công Ty</span>
            <ExternalLink className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </a>
        </div>
      </div>

      {/* Empty space for opposite side */}
      <div className='w-5/12'></div>
    </div>
  );
}
