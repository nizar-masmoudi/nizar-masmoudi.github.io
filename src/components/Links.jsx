import React from 'react'

export default function Links() {
  return (
    <span className='absolute md:left-8 lg:left-12 md:bottom-8 lg:bottom-12 flex items-center justify-between w-1/6 text-white/70 md:text-sm lg:text-base'>
      <a className='cursor-pointer' href='https://github.com/nizar-masmoudi' target='_blank' rel='noreferrer noopener'>Github</a>
      <a className='cursor-pointer' href='https://www.linkedin.com/in/nizar-masmoudi/' target='_blank' rel='noreferrer noopener'>LinkedIn</a>
      <a className='cursor-pointer' href='https://www.kaggle.com/nizarmasmoudi' target='_blank' rel='noreferrer noopener'>Kaggle</a>
    </span>
  )
}
