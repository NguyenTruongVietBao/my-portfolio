'use client';

import { useState, useEffect } from 'react';
import { MailIcon } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header
      className={`w-full h-20 flex justify-between items-center px-6 md:px-12 fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-transparent backdrop-blur-xs border-b shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Navigation */}
      <nav className='hidden md:flex items-center space-x-8'>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className='relative text-gray-700 hover:text-black text-lg font-semibold transition-colors duration-300 group'
          >
            {item.name}
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className='hidden md:flex items-center'>
        <button className='px-6 py-2 bg-black text-white rounded-full cursor-pointer font-medium hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2'>
          <MailIcon className='w-4 h-4 text-white' />
          <span>Contact Now</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden' onClick={() => setIsOpen(true)}>
        <button className='p-2 text-gray-800 hover:text-black transition-colors duration-300'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-50'>
          <div className='flex flex-col items-center justify-center h-full'>
            <h1>Hello</h1>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
}
