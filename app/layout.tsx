import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Portfolio - nt.vbao',
  description: 'Portfolio - Nguyễn Trương Viết Bảo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-[#fffaf0]'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
