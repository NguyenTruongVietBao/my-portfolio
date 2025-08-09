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
      // Hiển thị menu ngay lập tức
      if (mobileMenuRef.current) {
        mobileMenuRef.current.style.display = 'flex';
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          }
        );
      }

      // Animate các menu items
      const mobileNavItems =
        mobileMenuRef.current?.querySelectorAll('.mobile-nav-item');
      if (mobileNavItems) {
        gsap.fromTo(
          Array.from(mobileNavItems),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }
    } else {
      // Ẩn menu
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            if (mobileMenuRef.current) {
              mobileMenuRef.current.style.display = 'none';
            }
          },
        });
      }
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
        className={`w-full h-14 sm:h-16 md:h-18 lg:h-20 flex justify-between items-center px-3 sm:px-4 md:px-6 lg:px-10 xl:px-20 fixed top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-transparent backdrop-blur-md border-b border-black/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Logo - Responsive sizing */}
        <div
          ref={logoRef}
          className='flex items-center'
          onClick={() => handleNavClick('#hero')}
        >
          <div className='text-lg sm:text-xl md:text-2xl font-bold text-black cursor-pointer hover:scale-105 transition-transform duration-300'>
            nt.vbao
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        <nav
          ref={navRef}
          className='hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8'
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className='relative text-black hover:text-black/70 text-sm xl:text-base 2xl:text-lg font-semibold transition-colors duration-300 group px-2 py-1'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
            </button>
          ))}
        </nav>

        {/* CTA Button - Responsive sizing and visibility */}
        <div ref={ctaRef} className='hidden sm:flex items-center'>
          <button
            onClick={handleContactClick}
            className='group px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 bg-black text-[#fffaf0] rounded-full cursor-pointer font-semibold hover:bg-black/90 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base'
          >
            <MailIcon className='w-4 h-4 sm:w-5 sm:h-5 text-[#fffaf0] group-hover:animate-bounce' />
            <span className='hidden sm:inline'>Contact Now</span>
            <span className='sm:hidden'>Contact</span>
          </button>
        </div>

        {/* Mobile Menu Button - Enhanced responsive design */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden p-1.5 sm:p-2 text-black hover:text-black/70 transition-all duration-300 active:scale-95 hover:bg-black/5 rounded-md'
        >
          {isOpen ? (
            <X className='w-5 h-5 sm:w-6 sm:h-6' />
          ) : (
            <Menu className='w-5 h-5 sm:w-6 sm:h-6' />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay - Enhanced responsive design */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-[#fffaf0]/95 backdrop-blur-md z-40 lg:hidden px-4 sm:px-6 ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <div className='flex flex-col items-center justify-center h-full space-y-4 sm:space-y-6'>
          {/* Logo - Mobile menu */}
          <div className='mobile-nav-item text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6'>
            nt.vbao
          </div>

          {/* Navigation Items - Responsive sizing */}
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className='mobile-nav-item text-lg sm:text-xl md:text-2xl font-semibold text-black hover:text-black/70 transition-colors duration-300 py-1 sm:py-2 px-4 rounded-lg hover:bg-black/5 active:scale-95'
            >
              {item.name}
            </button>
          ))}

          {/* Contact Button - Mobile menu */}
          <button
            onClick={() => {
              handleContactClick();
              setIsOpen(false);
            }}
            className='mobile-nav-item px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-2 sm:gap-3 active:scale-[0.98] mt-4 sm:mt-6 text-base sm:text-lg'
          >
            <MailIcon className='w-4 h-4 sm:w-5 sm:h-5' />
            <span>Contact Now</span>
          </button>

          {/* Social Links - Responsive spacing */}
          <div className='mobile-nav-item flex gap-4 sm:gap-6 mt-4 sm:mt-6'>
            <a
              href='https://github.com/ntvb.dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black hover:text-black/70 transition-colors text-sm sm:text-base font-medium px-3 py-2 rounded-lg hover:bg-black/5 active:scale-95'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/ntvb.dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black hover:text-black/70 transition-colors text-sm sm:text-base font-medium px-3 py-2 rounded-lg hover:bg-black/5 active:scale-95'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
