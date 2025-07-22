'use client';

import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  Heart,
  ArrowUp,
} from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer entrance animation
      const footerChildren = contentRef.current?.children;
      if (footerChildren) {
        gsap.from(Array.from(footerChildren), {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FacebookIcon className='w-5 h-5' />,
      url: 'https://www.facebook.com/ntvb.dev',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon className='w-5 h-5' />,
      url: 'https://www.linkedin.com/in/ntvb.dev',
    },
    {
      name: 'GitHub',
      icon: <GithubIcon className='w-5 h-5' />,
      url: 'https://github.com/ntvb.dev',
    },
  ];

  const contactInfo = [
    {
      icon: <MailIcon className='w-5 h-5' />,
      text: 'nguyentvbao.dev@gmail.com',
      href: 'mailto:nguyentvbao.dev@gmail.com',
    },
    {
      icon: <PhoneIcon className='w-5 h-5' />,
      text: '+84 888641656',
      href: 'tel:+84888641656',
    },
    {
      icon: <MapPinIcon className='w-5 h-5' />,
      text: 'Ho Chi Minh City, Vietnam',
      href: null,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className='bg-black text-[#fffaf0] w-full relative overflow-hidden'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-1/4 left-1/4 w-32 h-32 border border-[#fffaf0] rounded-full'></div>
        <div className='absolute bottom-1/3 right-1/3 w-24 h-24 border border-[#fffaf0] rounded-full'></div>
        <div className='absolute top-1/2 right-1/4 w-16 h-16 border border-[#fffaf0] rounded-full'></div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className='absolute top-8 right-8 p-3 bg-[#fffaf0]/10 hover:bg-[#fffaf0] hover:text-black rounded-full transition-all duration-300 hover:scale-110 group'
      >
        <ArrowUp className='w-5 h-5 group-hover:animate-bounce' />
      </button>

      <div className='max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10'>
        <div
          ref={contentRef}
          className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8'
        >
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='text-3xl font-bold'>nt.vbao</div>
              <div className='w-2 h-2 bg-[#fffaf0] rounded-full animate-pulse'></div>
            </div>
            <p className='text-[#fffaf0]/80 text-lg leading-relaxed'>
              Developer passionate about creating amazing web experiences
            </p>
            <div className='flex items-center gap-2 text-[#fffaf0]/60'>
              <span>Made by</span>
              <Heart className='w-4 h-4 text-red-500 animate-pulse' />
              <span>Nguyễn Trương Viết Bảo</span>
            </div>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-[#fffaf0] mb-6'>
              Connect With Me
            </h3>
            <div className='space-y-3'>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-[#fffaf0]/80 hover:text-[#fffaf0] transition-colors duration-300 group'
                >
                  <div className='p-2 bg-[#fffaf0]/10 rounded-full group-hover:bg-[#fffaf0] group-hover:text-black transition-all duration-300'>
                    {social.icon}
                  </div>
                  <span className='font-medium'>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-[#fffaf0] mb-6'>Contact</h3>
            <div className='space-y-3'>
              {contactInfo.map((contact, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <div className='p-2 bg-[#fffaf0]/10 rounded-full'>
                    {contact.icon}
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className='text-[#fffaf0]/80 hover:text-[#fffaf0] transition-colors duration-300 font-medium'
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className='text-[#fffaf0]/80 font-medium'>
                      {contact.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
