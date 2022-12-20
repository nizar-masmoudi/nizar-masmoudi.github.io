import React from 'react'

const Marker = ({ date, estab, role, major }) => (
  <div className='relative flex flex-col items-center justify-center w-5 h-5 border-white/50 border-[2px] rounded-full'>
    <span className='group-even:mt-48 group-odd:mb-48 leading-loose translate-x-1/2'>
      <p className='w-72 text-white/70'>{date}</p>
      <p className='w-72 text-white'>{estab}</p>
      <p className='w-72 text-white/70'>{role}</p>
      <p className='w-72 text-white/70'>{major}</p>
    </span>
  </div>
)

function Timeline({ children }) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full snap-center'>
      <span className='relative w-full h-24 mb-12'>
        <h1 className='absolute bottom-4 left-1/2 -translate-x-1/2 text-center font-medium text-5xl'>
          my story
        </h1>
        <h1 className='absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-bold text-8xl text-white/5'>
          MY STORY
        </h1>
      </span>
      <span className='flex w-full h-2/3 items-center justify-center'>
        {React.Children.map(children, child => (
          <span className='group flex items-center'>
            {React.cloneElement(child)}
            <div className='w-64 h-0 border-b-[2px] group-last:border-dashed border-white/50 mx-4' />
          </span>
        ))}
      </span>
    </div>
  )
}

Timeline.Marker = Marker

export default Timeline