'use client';

import React from 'react';
import { TextHoverEffect } from '../ui/text-hover-effect';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const words =
  'Hi, I am Nguyen Truong Viet Bao from Vietnam. I am a software engineer, a designer, a developer.\n I am a student at the FPT University, HCM City.';

export default function HeroSection() {
  return (
    <section className='w-full h-screen'>
      <div className='flex flex-col items-center justify-center p-16'>
        <TextHoverEffect text='nt.vbao' />
        <TextGenerateEffect
          words={words}
          className='text-center max-w-2xl'
          filter={true}
        />
      </div>
    </section>
  );
}
