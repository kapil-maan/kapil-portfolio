import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-0 bottom-0 flex items-center justify-center overflow-hidden
    '>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24 sm:w-24 xs:w-24'>
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />
        <Link href = "mailto:kapilmaan0123@gmail.com" className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
         text-light shadow-md border border-solid border-dark
         w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
         dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
         md:w-12 md:h-12 md:text-[10px]
         sm:w-12 sm:h-12 sm:text-[10px]
         xs:w-12 xs:h-12 xs:text-[10px]
         z-50'>
            Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
