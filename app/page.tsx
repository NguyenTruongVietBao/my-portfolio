'use client';

import HeroSection from '@/components/layout/hero-section';
import ProjectSection from '@/components/layout/project-section';
import SkillSection from '@/components/layout/skill-section';
import WorkExperienceSection from '@/components/layout/work-experience-section';
import { cn } from '@/lib/utils';

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
        {/* Radial gradient for the container to give a faded look */}
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-[#fffaf0] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
        <HeroSection />
      </div>

      <ProjectSection />
      <SkillSection />
      {/* <WorkExperienceSection /> */}
    </main>
  );
}
