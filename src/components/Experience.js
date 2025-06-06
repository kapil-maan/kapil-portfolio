import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center md:items-start justify-between
    md:w-[80%] sm:w-[80%] xs:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div 
        initial={{ y: 50 }} 
        whileInView={{ y: 0 }} 
        transition={{ duration: 0.5, type: "spring" }}
        className="text-left lg:text-left xl:text-left md:text-left sm:text-left xs:text-left"
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm sm:text-sm xs:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"], 
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-6xl xs:text-4xl
      md:mb-16 sm:mb-16 xs:mb-16'>
        Experience</h2>
      <div ref = {ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full sm:w-full xs:w-full'>
        <motion.div style = {{ scaleY : scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        sm:w-[2px] sm:left-[20px] xs:w-[2px]'/>
        <ul className='w-full flex flex-col justify-between ml-2 xs:ml-2'>
            <Details 
            type = "Web Development Intern"
            time = "Summer 2024"
            place = "UniNxt Study Overseas"
            info = "Worked on a team responsible for developing and maintaining the official company website. In addition to that, led a team for developing a new website for the company." />
        </ul>
      
      </div>
    </div>
  )
}

export default Experience
