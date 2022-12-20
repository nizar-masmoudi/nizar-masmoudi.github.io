import React from 'react'

export default function Intro({ id }) {

  return (
    <div id={id} className='flex flex-col w-full h-full justify-center pl-12 space-y-5 text-sm snap-center '>
      <p className='md:text-base lg:text-lg'>Introduction</p>
      <h1 className='md:text-4xl lg:text-5xl font-medium'>Machine Learning Engineer</h1>
      <p className='md:text-sm lg:text-base text-white/70 w-1/2 leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mauris eu tellus porta, eget suscipit odio dictum.</p>
    </div>
  )
}
