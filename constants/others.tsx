import {
  Book,
  BookOpen,
  Facebook,
  Github,
  Globe,
  Linkedin,
  Mail,
  School,
} from 'lucide-react';

export const INTERESTS = [
  {
    id: 1,
    name: 'Coding',
    icon: <Book className='w-6 h-6' />,
  },
  {
    id: 2,
    name: 'Traveling',
    icon: <BookOpen className='w-6 h-6' />,
  },
];

export const LANGUAGES = [
  {
    id: 1,
    name: 'English',
    level: 'Professional',
    icon: <Globe className='w-6 h-6' />,
  },
  {
    id: 2,
    name: 'Vietnamese',
    level: 'Native',
    icon: <Globe className='w-6 h-6' />,
  },
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    name: 'GitHub',
    href: 'https://github.com/NguyenTruongVietBao',
    icon: <Github className='w-6 h-6' />,
  },
  {
    id: 2,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nguy%E1%BB%85n-tr%C6%B0%C6%A1ng-vi%E1%BA%BFt-b%E1%BA%A3o-809374375/',
    icon: <Linkedin className='w-6 h-6' />,
  },
  {
    id: 3,
    name: 'Facebook',
    href: 'https://www.facebook.com/nguyentruongvietbao/',
    icon: <Facebook className='w-6 h-6' />,
  },
  {
    id: 4,
    name: 'Email',
    href: 'mailto:nguyentvbao.dev@gmail.com',
    icon: <Mail className='w-6 h-6' />,
  },
];

export const SCHOOLS = [
  {
    id: 1,
    name: 'FPT University',
    degree: 'Bachelor of Information Technology',
    status: 'Graduated',
    icon: <School className='w-6 h-6' />,
  },
];
