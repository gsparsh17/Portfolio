import React from 'react'
import { motion } from "framer-motion";

function skills({ text, index }) {
    return (
      <motion.div
        className="card h-32 w-[20vw] m-16 mx-auto rounded-xl bg-none border-2 border-cyan-200 shadow-lg shadow-cyan-200/50 hover:shadow-orange-200 hover:text-orange-200 text-cyan-200"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 150 : -50
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
        <p className="card-text font-serif text-2xl inline-block mt-8 ">{text}
        <svg class=" m-auto w-6 h-6 text-gray-800 dark:text-white mt-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
        </svg>
        </p>
      </motion.div>
    );
  }

export default skills