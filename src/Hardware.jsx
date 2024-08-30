import React from 'react';
import sample from './hi (1).mp4';
import sample1 from './hi (3).mp4';
import { motion } from "framer-motion";

function Hardware() {
  return (
    <div className='mt-16 p-8'>
      <h1 className='text-3xl sm:text-4xl md:text-[4vw] font-bold text-sky-300 text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Hardware Projects</h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 3 }
        }}
        viewport={{ once: true }}
        className='flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-x-[5vw] mt-16 md:mt-20 mx-auto w-full md:w-[50vw]'
      >
        <video className="videoTag w-[90vw] sm:w-[80vw] md:w-[40vw] lg:w-[20vw] rounded-2xl shadow-xl shadow-cyan-200/50" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[2vw] font-serif m-auto md:text-left md:w-[20vw]'>Stair Climbing Bot</h1>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 3 }
        }}
        viewport={{ once: true }}
        className='flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-x-[5vw] mt-16 md:mt-20 mx-auto w-full md:w-[50vw]'
      >
        <video className="videoTag w-[90vw] sm:w-[80vw] md:w-[40vw] lg:w-[20vw] rounded-2xl shadow-xl shadow-cyan-200/50" autoPlay loop muted>
          <source src={sample1} type="video/mp4" />
        </video>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[2vw] font-serif m-auto text-center md:text-left w-full md:w-[20vw]'>Line Following Robot</h1>
      </motion.div>
    </div>
  );
}

export default Hardware;
