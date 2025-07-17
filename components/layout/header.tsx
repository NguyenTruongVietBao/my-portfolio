'use client';

import { useState, useEffect, useRef } from 'react';
import { MailIcon, X, Menu } from 'lucide-react';
import { gsap } from 'gsap';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([logoRef.current, navRef.current, ctaRef.current], {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.set(mobileMenuRef.current, { display: 'flex' });
      gsap.from(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      const mobileNavItems =
        mobileMenuRef.current?.querySelectorAll('.mobile-nav-item');
      if (mobileNavItems) {
        gsap.from(Array.from(mobileNavItems), {
          y: 50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.1,
        });
      }
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: 'none' });
        },
      });
    }
  }, [isOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:nguyentvbao.dev@gmail.com';
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full h-20 flex justify-between items-center px-6 md:px-12 fixed top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-transparent backdrop-blur-xs border-b border-black/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div ref={logoRef} className='flex items-center'>
          <div className='text-2xl font-bold text-black cursor-pointer hover:scale-105 transition-transform duration-300'>
            nt.vbao
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav ref={navRef} className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className='relative text-black hover:text-black/70 text-lg font-semibold transition-colors duration-300 group'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div ref={ctaRef} className='hidden md:flex items-center'>
          <button
            onClick={handleContactClick}
            className='group px-6 py-3 bg-black text-[#fffaf0] rounded-full cursor-pointer font-semibold hover:bg-black/90 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2'
          >
            <MailIcon className='w-5 h-5 text-[#fffaf0] group-hover:animate-bounce' />
            <span>Contact Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 text-black hover:text-black/70 transition-colors duration-300 hover:scale-110'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className='fixed inset-0 bg-[#fffaf0]/95 backdrop-blur-md z-40 md:hidden hidden'
        style={{ display: 'none' }}
      >
        <div className='flex flex-col items-center justify-center h-full space-y-8'>
          {/* Logo */}
          <div className='mobile-nav-item text-3xl font-bold text-black mb-8'>
            nt.vbao
          </div>

          {/* Navigation Items */}
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className='mobile-nav-item text-2xl font-semibold text-black hover:text-black/70 transition-colors duration-300 py-2'
            >
              {item.name}
            </button>
          ))}

          {/* Contact Button */}
          <button
            onClick={() => {
              handleContactClick();
              setIsOpen(false);
            }}
            className='mobile-nav-item px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 hover:scale-105 mt-8'
          >
            <MailIcon className='w-5 h-5' />
            <span>Contact Now</span>
          </button>

          {/* Social Links */}
          <div className='mobile-nav-item flex gap-6 mt-8'>
            <a
              href='https://github.com/ntvb.dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black hover:text-black/70 transition-colors'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/ntvb.dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black hover:text-black/70 transition-colors'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
