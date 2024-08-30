import React from 'react'
import { motion } from "framer-motion";
import myGif from './hi-robot.gif'

const text = "Hey Tech Enthusiasts!".split(" ");
const text1 = "Welcome to My World.".split(" ");

function start() {
  return (
    <motion.div className='bg-black w-screen h-full z-50 fixed brightness-200' 
    initial={{ opacity: 1,zIndex: 50}}
    animate={{ opacity: 0,zIndex: -2}}
    transition={{
      delay: 5,
      duration: 1,
    }}>
        <div className='flex flex-col md:block justify-center items-center text-center mt-24'>
        {text.map((el, i) => (
        <motion.span className="text-cyan-200 text-[8vw] md:text-[4vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 5,
            delay: i / 5
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
        ))}
        <br></br>
        {text1.map((el, i) => (
        <motion.span className="text-cyan-200 text-[8vw] md:text-[4vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 5,
            delay: i+0.5
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
        ))}
        <br />
            <img className="w-[28vw] md:w-[12vw] mx-auto mt-8" src={myGif} alt="" />
        </div>
    </motion.div>
  )
}

export default start