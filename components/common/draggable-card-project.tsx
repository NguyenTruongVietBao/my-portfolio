import React from 'react';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from '@/components/ui/draggable-card';

export function DraggableCardProject() {
  const items = [
    {
      title: 'CampusMedix',
      image: '/images/campus-medix_image.png',
      className: 'absolute top-10 left-[20%] rotate-[-5deg]',
    },
    {
      title: 'Giftos Store',
      image: '/images/giftos-store_image.png',
      className: 'absolute top-40 left-[25%] rotate-[-7deg]',
    },
    {
      title: 'Bookstore',
      image: '/images/bookstore_image.png',
      className: 'absolute top-5 left-[40%] rotate-[8deg]',
    },
    {
      title: 'Library Video',
      image: '/images/library-video_image.png',
      className: 'absolute top-32 left-[55%] rotate-[10deg]',
    },
    {
      title: 'Mathcha Edu',
      image: '/images/mathcha-edu_image.png',
      className: 'absolute top-20 right-[35%] rotate-[2deg]',
    },
    {
      title: 'Chatogether',
      image: '/images/chatogether_image.png',
      className: 'absolute top-24 left-[45%] rotate-[-7deg]',
    },
  ];
  return (
    <DraggableCardContainer className='relative flex min-h-[700px] w-full items-center justify-center overflow-clip'>
      <p className='absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800'>
        Others projects
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className} key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            className='pointer-events-none relative z-10 h-80 w-80 object-cover'
          />
          <h3 className='mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300'>
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
