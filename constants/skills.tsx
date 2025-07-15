import { Code, Database, Palette, Server } from 'lucide-react';

export const SKILLS = [
  {
    name: 'React/NextJS',
    level: 95,
    icon: <Code className='w-6 h-6' />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: <Code className='w-6 h-6' />,
    color: 'from-blue-600 to-purple-600',
  },
  {
    name: 'UI/UX Design',
    level: 85,
    icon: <Palette className='w-6 h-6' />,
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Database',
    level: 80,
    icon: <Database className='w-6 h-6' />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Backend',
    level: 75,
    icon: <Server className='w-6 h-6' />,
    color: 'from-orange-500 to-red-500',
  },
];
