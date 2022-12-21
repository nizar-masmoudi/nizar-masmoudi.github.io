import React from 'react'

const Marker = ({ date, estab, role, major }) => (
  <div className='relative flex flex-col items-center justify-center w-5 h-5 border-white/50 md:border-[1px] lg:border-[2px] rounded-full'>
    <span className='md:group-even:mt-40 lg:group-even:mt-48 md:group-odd:mb-40 lg:group-odd:mb-48 leading-loose translate-x-1/2'>
      <p className='md:w-64 lg:w-72 text-white/70'>{date}</p>
      <p className='md:w-64 lg:w-72 text-white'>{estab}</p>
      <p className='md:w-64 lg:w-72 text-white/70'>{role}</p>
      <p className='md:w-64 lg:w-72 text-white/70'>{major}</p>
    </span>
  </div>
)

function Timeline({ children }) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full snap-center'>
      <span className='relative w-full h-24 mb-6 md:mb-12'>
        <h1 className='absolute bottom-1/2 -translate-y-1/2 md:bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 text-center font-medium text-3xl md:text-4xl lg:text-5xl'>
          my story
        </h1>
        <h1 className='absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-bold text-7xl md:text-7xl lg:text-8xl text-white/5'>
          MY STORY
        </h1>
      </span>
      <span className='hidden md:flex w-full h-2/3 items-center justify-center md:text-xs lg:text-base'>
        {React.Children.map(children, child => (
          <span className='group flex items-center'>
            {React.cloneElement(child)}
            <div className='md:w-40 lg:w-64 h-0 md:border-b-[1px] lg:border-b-[2px] group-last:border-dashed border-white/50 mx-4' />
          </span>
        ))}
      </span>
    </div>
  )
}

Timeline.Marker = Marker

export default Timeline