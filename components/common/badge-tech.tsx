import React from 'react';

export default function BadgeTech({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className='text-black bg-[#fffaf0] px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-2'>
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );
}
