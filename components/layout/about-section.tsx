'use client';

import { ABOUT } from '@/constants/about';
import { SKILLS } from '@/constants/skills';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  Code,
  Download,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [showCVModal, setShowCVModal] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations
      gsap.fromTo(
        '.about-stat',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-text-line',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadCV = (type: 'fullstack' | 'frontend' | 'mobile' | 'frontendMobile') => {
    const cvPaths: Record<string, string> = {
      fullstack: '/data/nt-vbao_fullstack.pdf',
      frontend: '/data/nt-vbao_frontend.pdf',
      mobile: '/data/nt-vbao_mobile.pdf',
      frontendMobile: '/data/nt-vbao_frontend-mobile.pdf',
    };
    window.open(cvPaths[type], '_blank');
    setShowCVModal(false);
  };

  const stats = [
    { label: 'Years Experience', value: `${ABOUT.code.experience}+`, icon: '⚡' },
    { label: 'Projects Completed', value: `${ABOUT.code.project}+`, icon: '🚀' },
    { label: 'Technologies', value: `${ABOUT.code.skill}+`, icon: '💻' },
    { label: 'Happy Clients', value: `${ABOUT.code.happy}%`, icon: '😊' },
  ];

  const personalInfo = [
    { icon: <Calendar className="w-4 h-4" />, label: 'Age', value: ABOUT.age },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: 'Location',
      value: ABOUT.location,
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      value: ABOUT.email,
    },
    {
      icon: <GraduationCap className="w-4 h-4" />,
      label: 'Education',
      value: `${ABOUT.education.university} - ${ABOUT.education.status}`,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full min-h-screen bg-[#fffaf0] relative overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/10 to-transparent" />
        <div className="absolute top-20 left-20 w-32 h-32 border border-black/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-black/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-black/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-black relative inline-block">
            About me
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-black rounded-full"
            />
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={textRef}
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="about-text-line">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-3xl font-bold text-black">
                    Hello! I'm a{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Fullstack Developer
                    </span>
                  </h3>
                </div>

                {/* Role Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {ABOUT.roles.map((role, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 bg-gradient-to-r from-black/5 to-black/10 rounded-full text-sm font-medium text-black/80 border border-black/10"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="about-text-line space-y-4 text-lg text-black/80 leading-relaxed">
                <p>{ABOUT.summary}</p>
              </div>

              {/* Highlights */}
              {/* <div className='about-text-line space-y-3'>
                <h4 className='font-semibold text-black flex items-center gap-2'>
                  <CheckCircle2 className='w-5 h-5 text-green-500' />
                  Key Highlights
                </h4>
                <ul className='space-y-2'>
                  {ABOUT.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-3 text-black/70'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-black/40 mt-2 flex-shrink-0' />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>

            {/* Personal Info */}
            <div className="space-y-3">
              {personalInfo.map((info) => (
                <motion.div
                  key={info.label}
                  className="about-text-line flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-black/10"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(255,255,255,0.8)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-black p-2 bg-black/5 rounded-lg">{info.icon}</div>
                  <div>
                    <span className="text-black/60 text-sm">{info.label}:</span>
                    <span className="text-black font-medium ml-2">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="about-text-line flex flex-wrap gap-4">
              <motion.button
                onClick={() => setShowCVModal(true)}
                className="flex cursor-pointer items-center space-x-2 px-6 py-3 bg-black text-[#fffaf0] rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span>My Resume</span>
              </motion.button>

              <motion.button
                className="flex cursor-pointer items-center space-x-2 px-6 py-3 bg-white/50 backdrop-blur-sm text-black rounded-xl font-medium border border-black/10 transition-all duration-300 hover:bg-white/80"
                whileHover={{ y: -2 }}
                onClick={() => {
                  window.open(ABOUT.github, '_blank');
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </motion.button>

              <motion.button
                className="flex cursor-pointer items-center space-x-2 px-6 py-3 bg-blue-500/10 backdrop-blur-sm text-blue-600 rounded-xl font-medium border border-blue-500/20 transition-all duration-300 hover:bg-blue-500/20"
                whileHover={{ y: -2 }}
                onClick={() => {
                  window.open(ABOUT.linkedin, '_blank');
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Avatar & Stats */}
          <motion.div
            className="flex flex-col items-center space-y-12"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Avatar */}
            <motion.div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-110"
              />

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.5 },
                }}
                className="relative z-10 bg-white/30 backdrop-blur-sm rounded-full p-8 border border-black/20 shadow-2xl"
              >
                <Image
                  src="/images/avatar.jpg"
                  alt="Developer Avatar"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
                className="absolute inset-0 pointer-events-none"
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                  <motion.div
                    key={angle}
                    className="absolute w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-black/10"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-160px) rotate(-${angle}deg)`,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                      ease: 'easeInOut',
                    }}
                  >
                    {SKILLS[index]?.icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="about-stat text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-black/10 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <motion.div
                    className="text-3xl font-bold text-black mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      delay: index * 0.1 + 0.5,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-black/70 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CV Selection Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#fffaf0] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-black/10 relative"
          >
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => handleDownloadCV('fullstack')}
                className="w-full group p-5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 rounded-2xl border border-black/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl text-white">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-black text-sm">Fullstack Developer</h4>
                    <p className="text-xs text-black/60">MERN Stack, Docker, AWS</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleDownloadCV('frontend')}
                className="w-full group p-5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 rounded-2xl border border-black/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl text-white">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-black text-sm">Frontend Developer</h4>
                    <p className="text-xs text-black/60">React, Next.js, TypeScript</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleDownloadCV('mobile')}
                className="w-full group p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 rounded-2xl border border-black/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-black text-sm">Mobile Developer</h4>
                    <p className="text-xs text-black/60">React Native, Expo, FCM</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleDownloadCV('frontendMobile')}
                className="w-full group p-5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 hover:from-orange-500/20 hover:to-amber-500/20 rounded-2xl border border-black/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl text-white">
                    <Code className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-black text-sm">Frontend + Mobile</h4>
                    <p className="text-xs text-black/60">Web & Mobile Combined</p>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
