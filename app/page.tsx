'use client';

import AboutSection from '@/components/layout/about-section';
import GetInTouchSection from '@/components/layout/get-in-touch-section';
import HeroSection from '@/components/layout/hero-section';
import ProjectSection from '@/components/layout/project-section';
import SkillSection from '@/components/layout/skill-section';
import WorkExperienceSection from '@/components/layout/work-experience-section';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className='w-full'>
      <div className='relative flex w-full items-center justify-center bg-[#fffaf0] dark:bg-black'>
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:20px_20px]',
            '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
            'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
          )}
        />
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <WorkExperienceSection />
      <GetInTouchSection />
    </main>
  );
}
