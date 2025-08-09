import {
  Code,
  Database,
  Palette,
  Server,
  Smartphone,
  Settings,
  GitBranch,
  Shield,
} from 'lucide-react';

export const SKILLS = [
  {
    name: 'React & Next.js',
    percentage: 95,
    icon: <Code className='w-6 h-6' />,
    category: 'Frontend',
    technologies: ['React.js', 'Next.js', 'SSR', 'Redux', 'Zustand'],
  },
  {
    name: 'TypeScript',
    percentage: 90,
    icon: <Code className='w-6 h-6' />,
    category: 'Frontend',
    technologies: ['TypeScript', 'JavaScript ES6+'],
  },
  {
    name: 'Styling & Animation',
    percentage: 88,
    icon: <Palette className='w-6 h-6' />,
    category: 'Frontend',
    technologies: ['Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  },
  {
    name: 'Backend Development',
    percentage: 85,
    icon: <Server className='w-6 h-6' />,
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'],
  },
  {
    name: 'Database & State',
    percentage: 82,
    icon: <Database className='w-6 h-6' />,
    category: 'Backend',
    technologies: ['MongoDB', 'Prisma', 'Redis', 'Tanstack Query'],
  },
  {
    name: 'Mobile Development',
    percentage: 80,
    icon: <Smartphone className='w-6 h-6' />,
    category: 'Mobile',
    technologies: [
      'React Native',
      'Expo',
      'Firebase Auth',
      'Push Notifications',
    ],
  },
  {
    name: 'DevOps & Tools',
    percentage: 78,
    icon: <Settings className='w-6 h-6' />,
    category: 'Tools',
    technologies: ['Docker', 'GitHub Actions', 'Vercel', 'Supabase'],
  },
  {
    name: 'Security & Auth',
    percentage: 75,
    icon: <Shield className='w-6 h-6' />,
    category: 'Backend',
    technologies: ['JWT', 'RBAC', 'Security Standards'],
  },
];
