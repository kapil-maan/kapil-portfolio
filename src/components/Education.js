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

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"], 
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-6xl xs:text-4xl
      md:mb-16 sm:mb-16 xs:mb-16'>
        Education</h2>
      <div ref = {ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full sm:w-full xs:w-full'>
        <motion.div style = {{ scaleY : scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        sm:w-[2px] sm:left-[20px] xs:w-[2px]'/>
        <ul className='w-full flex flex-col justify-between ml-2 xs:ml-2'>
            <Details 
            type = "Bachelor Of Engineering In Computer Science"
            time = "2023-now"
            place = "Lovely Professional University (LPU)"
            info = "Relevant courses include Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence." />
            <Details 
            type = {`Senior Secondary (11th-12th)`}
            time = "2021-2023"
            place = "Kendriya Vidyalaya No.1, Chandimandir Cantt, Panchkula"
            info = "First division holder in 12th Boards with 9.7 CGPA in PCM-Physics, Chemistry and Maths alongside Computer Science." />
            <Details 
            type = "Primary School (1st - 10th)"
            time = "2010-2020"
            place = "Delhi Public School, Greater Noida"
            info = "First division holder in 10th Boards with 9.6 CGPA and a stellar academic record throughout the years." />
        </ul>
      
      </div>
    </div>
  )
}

export default Education
