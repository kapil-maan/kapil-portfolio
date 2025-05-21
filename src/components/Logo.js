import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-2'>
        <MotionLink href = "/" 
        className='flex items-center justify-center w-16 h-16 bg-dark text-light rounded-full text-2xl font-bold
        border border-solid border-transparent dark:border-light '
        whileHover = {{
            backgroundColor : ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition : {duration : 1, repeat : Infinity}
        }}
        >KK</MotionLink>
    </div>
  )
}

export default Logo