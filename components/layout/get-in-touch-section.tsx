import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function GetInTouchSection() {
  return (
    <div className='text-center mb-20'>
      <div className='bg-black/5 rounded-2xl p-8 max-w-2xl mx-auto'>
        <p className='text-black/70'>Get In Touch</p>
        <h3 className='text-3xl font-bold text-black my-4'>
          Ready to Collaborate
        </h3>
        <button
          onClick={() => {
            window.location.href = 'mailto:nguyentvbao.dev@gmail.com';
          }}
          className='mt-10 cursor-pointer group px-8 py-4 bg-black text-[#fffaf0] rounded-full font-semibold hover:bg-black/90 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105 hover:shadow-xl'
        >
          <span>Contact Now</span>
          <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
        </button>
      </div>
    </div>
  );
}
