'use client';

import React from 'react';
import { PROJECTS } from '@/constants/projects';

export default function ProjectSection() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Projects</h1>
      </div>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {PROJECTS.map((project) => (
          <div key={project.title}>{project.title}</div>
        ))}
      </div>
    </section>
  );
}
