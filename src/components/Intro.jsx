import React from 'react'

export default function Intro({ id }) {

  return (
    <div id={id} className='flex flex-col w-full h-full justify-center md:pl-12 space-y-5 text-sm snap-center'>
      <p className='md:text-base lg:text-lg text-center md:text-left'>Introduction</p>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-center md:text-left'>Machine Learning Engineer</h1>
      <p className='md:text-sm lg:text-base text-white/70 md:w-1/2 leading-loose text-justify md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mauris eu tellus porta, eget suscipit odio dictum.</p>
    </div>
  )
}
