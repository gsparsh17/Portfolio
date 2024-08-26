import React from 'react'
import sample from './hi (1).mp4';
import sample1 from './hi (3).mp4';
import { motion } from "framer-motion";

function Hardware() {
  return (
    <div className='mt-16'>
        <h1 className='text-[4vw] font-bold text-sky-300'>Hardware Projects</h1>
        <motion.div 
        initial={{opacity:0,
            y:100
        }}
        whileInView={{
            opacity: 1,
            y:0,
            transition: {
              duration: 3
            }
          }}
          viewport={{ once: true }}
         className='w-[24vw] ml-[8vw] mt-20 rounded-xl flex gap-x-[10vw]'>
            <video className="videoTag w-[32vw] rounded-2xl shadow-xl shadow-cyan-200/50" autoPlay loop muted>
            <source src={sample} type="video/mp4"/>
            </video>
            <h1 className='m-auto text-[2vw] font-serif w-[8vw]'>Stair Climbing Bot</h1>
        </motion.div>
        <motion.div 
        initial={{opacity:0,
            y:100
        }}
        whileInView={{
            opacity: 1,
            y:0,
            transition: {
              duration: 3
            }
          }}
          viewport={{ once: true }}  className='w-[24vw] ml-[8vw] mt-20 rounded-xl flex gap-x-[10vw]'>
            <video className="videoTag rounded-2xl shadow-xl shadow-cyan-200/50" autoPlay loop muted>
            <source src={sample1} type="video/mp4"/>
            </video>
            <h1 className='m-auto text-[2vw] w-[8vw] font-serif'> Line Following Robot</h1>
        </motion.div>
    </div>
  )
}

export default Hardware