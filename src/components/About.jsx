import React from 'react';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
export default function About({ id }) {
  return (
    <div id={id} className='w-full h-full flex flex-col justify-center pl-12 snap-center'>
      <span className='relative w-full h-24 mb-24'>
        <h1 className='absolute md:bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 text-center font-medium md:text-4xl lg:text-5xl'>about me</h1>
        <h1 className='absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-bold md:text-7xl lg:text-8xl text-white/5'>ABOUT ME</h1>
      </span>
      <span className='flex items-center w-full md:text-sm lg:text-base'>
        <span className='w-1/3 space-y-4'>
          <span className='flex items-center text-white/70 space-x-4'>
            <MapPinIcon className='md:w-5 lg:w-6 stroke-white/70' />
            <p>Tunis, Tunisia</p>
          </span>
          <span className='flex items-center text-white/70 space-x-4'>
            <EnvelopeIcon className='md:w-5 lg:w-6 stroke-white/70' />
            <p>nizarmasmoudi@outlook.fr</p>
          </span>
          <span className='flex items-center text-white/70 space-x-4'>
            <DevicePhoneMobileIcon className='md:w-5 lg:w-6 stroke-white/70' />
            <p>(+216) 94 526 320</p>
          </span>
        </span>
        <span className='w-2/3'>
          <h2 className='font-medium md:text-2xl lg:text-3xl leading-loose'>Nizar Masmoudi</h2>
          <p className='text-white/70 my-4'>Machine Learning / Data Engineer</p>
          <p className='text-white/70 leading-loose w-2/3'>
            I am a 24-year-old junior computer vision engineer with an enormous
            passion for innovation and novelty. I have built my knowledge through
            raw advanced mathematics and physics for over 2 intensive university
            years. Then, I decided to shift from ink and paper to leveraging my
            skills for the creation of artificial intelligence.
          </p>
        </span>
      </span>
    </div>
  );
}
