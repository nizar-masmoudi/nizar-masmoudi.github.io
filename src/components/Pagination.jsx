import React from 'react'

export default function Pagination({ page }) {
  return (
    <span className='absolute right-12 top-1/2 h-1/4 -translate-y-1/2 flex items-center'>
      <span className='flex flex-col items-center justify-between h-full mr-4 md:text-sm lg:text-base'>
        <p>01</p>
        <p>04</p>
      </span>
      <div className='h-full w-0.5 bg-white/30'>
        <div className={`duration-300 w-full h-1/4 bg-white ${
          page ===  0 ? 
          'translate-y-0':
          (page === 1 ? 
          'translate-y-full':
          (page === 2 ?
          'translate-y-[200%]':
          'translate-y-[300%]'))
          }`} />
      </div>
    </span>
  )
}
