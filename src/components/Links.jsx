import React from 'react'

export default function Links() {
  return (
    <span className='absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 lg:left-12 bottom-24 md:bottom-8 lg:bottom-12 flex items-center justify-between w-2/3 md:w-1/6 text-white/70 text-xsmd:text-sm lg:text-base'>
      <a className='cursor-pointer' href='https://github.com/nizar-masmoudi' target='_blank' rel='noreferrer noopener'>Github</a>
      <a className='cursor-pointer' href='https://www.linkedin.com/in/nizar-masmoudi/' target='_blank' rel='noreferrer noopener'>LinkedIn</a>
      <a className='cursor-pointer' href='https://www.kaggle.com/nizarmasmoudi' target='_blank' rel='noreferrer noopener'>Kaggle</a>
    </span>
  )
}
