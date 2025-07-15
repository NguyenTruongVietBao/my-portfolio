import {
  Book,
  BookOpen,
  Facebook,
  Globe,
  Instagram,
  School,
} from 'lucide-react';

export const INTERESTS = [
  {
    id: 1,
    name: 'Reading',
    icon: <Book className='w-6 h-6' />,
  },
  {
    id: 2,
    name: 'Writing',
    icon: <BookOpen className='w-6 h-6' />,
  },
];

export const LANGUAGES = [
  {
    id: 1,
    name: 'English',
    icon: <Globe className='w-6 h-6' />,
  },
  {
    id: 2,
    name: 'Vietnamese',
    icon: <Globe className='w-6 h-6' />,
  },
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    name: 'Facebook',
    href: 'https://www.facebook.com/ntvb.dev',
    icon: <Facebook className='w-6 h-6' />,
  },
  {
    id: 2,
    name: 'Instagram',
    href: 'https://www.instagram.com/ntvb.dev',
    icon: <Instagram className='w-6 h-6' />,
  },
];

export const SCHOOLS = [
  {
    id: 1,
    name: 'FPT University',
    icon: <School className='w-6 h-6' />,
  },
  {
    id: 2,
    name: 'FPT University',
    icon: <School className='w-6 h-6' />,
  },
];
