'use client';

import { ABOUT } from '@/constants/about';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronDown,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Smartphone,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { TextHoverEffect } from '../ui/text-hover-effect';

gsap.registerPlugin(ScrollTrigger);

const words = [
  'Hi, I am Viet Bao',
  '- A Fullstack Developer specialized in MERN Stack focus on performance optimization, user experience.',
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [showCVModal, setShowCVModal] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          socialRef.current,
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });

      // Parallax effect for hero content
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadCV = (type: 'frontend' | 'mobile') => {
    const cvPath =
      type === 'frontend' ? '/data/nt-vbao_frontend.pdf' : '/data/nt-vbao_mobile-app.pdf';
    window.open(cvPath, '_blank');
    setShowCVModal(false);
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="w-full h-screen">
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 mt-12"
      >
        {/* Title */}
        <TextHoverEffect text="nt.vbao" />

        {/* Subtitle */}
        <div ref={subtitleRef} className="max-w-4xl text-center mb-15">
          <TextGenerateEffect
            words={words.join(' ')}
            className="text-lg md:text-xl text-black/80"
          />
        </div>
        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => setShowCVModal(true)}
            className="cursor-pointer group px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-xl"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>My Resume</span>
          </button>

          <button
            onClick={handleScrollToProjects}
            className="cursor-pointer group px-8 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-[#fffaf0] transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            <span>View Projects</span>
            <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>

        {/* CV Selection Modal */}
        {showCVModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-[#fffaf0] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-black/10 relative">
              <button
                onClick={() => setShowCVModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-black mb-2 text-center">Choose CV Type</h3>
              <p className="text-black/60 text-center mb-8">
                Select the resume version you'd like to view
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => handleDownloadCV('frontend')}
                  className="w-full group p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-2xl border border-black/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-black text-lg">Frontend Developer</h4>
                      <p className="text-sm text-black/60">
                        React, Next.js, TypeScript, TailwindCSS
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleDownloadCV('mobile')}
                  className="w-full group p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 rounded-2xl border border-black/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-black text-lg">Mobile App Developer</h4>
                      <p className="text-sm text-black/60">React Native, Expo, Zustand, FCM</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Social Links */}
        <div ref={socialRef} className="flex gap-6 mb-32">
          <a
            href={ABOUT.github}
            rel="noopener noreferrer"
            target="_blank"
            className="p-3 bg-black/10 hover:bg-black hover:text-[#fffaf0] text-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={ABOUT.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            className="p-3 bg-black/10 hover:bg-black hover:text-[#fffaf0] text-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={ABOUT.facebook}
            rel="noopener noreferrer"
            target="_blank"
            className="p-3 bg-black/10 hover:bg-black hover:text-[#fffaf0] text-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${ABOUT.email}`}
            rel="noopener noreferrer"
            target="_blank"
            className="p-3 bg-black/10 hover:bg-black hover:text-[#fffaf0] text-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-14 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-black/60">
            <span className="text-sm font-medium">Scroll down</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
