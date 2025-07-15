'use client';

import HeroSection from '@/components/layout/hero-section';
import ProjectSection from '@/components/layout/project-section';
import SkillSection from '@/components/layout/skill-section';
import WorkExperienceSection from '@/components/layout/work-experience-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <WorkExperienceSection />
    </main>
  );
}
