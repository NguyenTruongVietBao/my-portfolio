'use client';

import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-black text-[#fffaf0] w-full flex items-center justify-center gap-10 p-5'>
      <div className='flex flex-col gap-2'>
        <p className='text-2xl font-bold'>nt.vbao</p>
        <p>I am a software engineer, a designer, a developer.</p>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <FacebookIcon className='w-4 h-4' />
          <p>Facebook</p>
        </div>
        <div className='flex items-center gap-2'>
          <LinkedinIcon className='w-4 h-4' />
          <p>LinkedIn</p>
        </div>
        <div className='flex items-center gap-2'>
          <GithubIcon className='w-4 h-4' />
          <p>GitHub</p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <MailIcon className='w-4 h-4' />
          <p>ntvb.dev@gmail.com</p>
        </div>
        <div className='flex items-center gap-2'>
          <PhoneIcon className='w-4 h-4' />
          <p>+84 906 888 888</p>
        </div>
        <div className='flex items-center gap-2'>
          <MapPinIcon className='w-4 h-4' />
          <p>HCM City, Vietnam</p>
        </div>
      </div>
    </footer>
  );
}
