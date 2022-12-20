import { ArrowLongDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Scroll({ faceDown }) {
  return (
    <div className={`absolute right-12 md:bottom-16 lg:bottom-24 flex items-center justify-center md:w-10 lg:w-12 aspect-square bg-white/30 rounded-full ${faceDown ? 'rotate-0' : 'rotate-180'} duration-200`}>
      <ArrowLongDownIcon className='md:w-6 lg:w-8 stroke-[1px]' />
    </div>
  )
}
