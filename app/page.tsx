import Header from '@/components/layout/header';

export default function Home() {
  return (
    <div className='min-h-screen bg-[#fffcf6] pt-16'>
      <Header />
      {/* Hero Section */}
      {/* About Section */}
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='text-4xl font-bold'>
          <span className='text-primary'>Hello</span>
          <span className='text-primary'>World</span>
        </div>
        <div className='text-2xl font-bold h-80'>
          <span className='text-primary'>Hello</span>
          <span className='text-primary'>World</span>
        </div>
      </div>
      {/* Projects Section */}
      {/* Contact Section */}
    </div>
  );
}
