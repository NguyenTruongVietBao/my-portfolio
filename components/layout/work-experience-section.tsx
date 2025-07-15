'use client';

import React from 'react';
import { WORK_EXPERIENCES } from '@/constants/work-experiences';

export default function WorkExperienceSection() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Work Experience</h1>
      </div>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {WORK_EXPERIENCES.map((workExperience) => (
          <div key={workExperience.id}>{workExperience.company}</div>
        ))}
      </div>
    </section>
  );
}
