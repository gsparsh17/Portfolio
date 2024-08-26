import React from 'react'
import { motion } from "framer-motion";

function achieve({ img, text, index }) {
    return (
        <div className='flex'>
      <motion.div
        className=""
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x:-50
        }}
        whileInView={{
          opacity: 1,
          x:0, // Slide in to its original position
          transition: {
            duration: 2 // Animation duration
          }
        }}
        viewport={{ once: true }}
      >
        <img className="card h-72 w-[28vw] m-16 rounded-xl bg-none border-2 border-cyan-200 shadow-lg shadow-cyan-200/50 hover:shadow-orange-200 hover:text-orange-200 text-cyan-200" src={img} alt="" />
      </motion.div>
      <motion.div
      className="card h-64 w-[20vw] m-16 pt-16 rounded-xl bg-none text-cyan-200"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x:150
      }}
      whileInView={{
        opacity: 1,
        x:0, // Slide in to its original position
        transition: {
          duration: 2 // Animation duration
        }
      }}
      viewport={{ once: true }}
    >
        <p className="card-text font-serif text-2xl inline-block mt-8">{text}
        </p>
    </motion.div>
    </div>
    );
  }

export default achieve