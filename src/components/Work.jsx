import React from 'react';

const Item = ({ order, src, title }) => (
  <div className='group relative w-3/4 md:h-16 lg:h-20 drop-shadow-md border-[1px] border-white/10 rounded-md overflow-hidden hover:scale-105 hover:drop-shadow-xl duration-200 cursor-pointer md:text-sm lg:text-base'>
    <img src={src} alt='Drone' className='absolute top-1/2 -translate-y-1/2 left-1/2 w-1/2' />
    <div className='absolute inset-0 flex items-center px-4 w-full h-full bg-gradient-to-r from-[#1a1e2a] via-[#1a1e2a] to-[#1a1e2a]/30'>
      <div className='duration-200 w-24 h-px bg-white/30 group-hover:bg-white/70' />
      <p className='duration-200 mx-4 text-white/70 group-hover:text-white'>0{order}</p>
      <h2 className='duration-200 md:text-xs lg:text-sm font-medium text-white/70 group-hover:text-white'>{title}</h2>
    </div>
  </div>
);

function Work({ id, children }) {
  return (
    <div
      id={id}
      className='flex flex-col items-center justify-center w-full h-full snap-center'
    >
      <span className='relative w-full h-24 md:mb-20 lg:mb-24'>
        <h1 className='absolute bottom-2 md:bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 text-center font-medium text-3xl md:text-4xl lg:text-5xl'>
          portoflio
        </h1>
        <h1 className='absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-bold text-7xl md:text-7xl lg:text-8xl text-white/5'>
          PORTFOLIO
        </h1>
      </span>
      <span className='hidden md:flex flex-col items-center justify-center w-full md:space-y-5 lg:space-y-8'>
        {children}
      </span>
    </div>
  );
}

Work.Item = Item;

export default Work;
