'use client';

import React from 'react';
import { SKILLS } from '@/constants/skills';

export default function SkillSection() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Skills</h1>
      </div>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {SKILLS.map((skill) => (
          <div key={skill.name}>{skill.name}</div>
        ))}
      </div>
    </section>
  );
}
