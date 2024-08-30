import React from 'react';
import { motion } from "framer-motion";

function Achieve({ img, text, index }) {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
      <motion.div
        className=""
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50 // Slide left if even, right if odd
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide to its original position
          transition: {
            duration: 2 // Animation duration
          }
        }}
        viewport={{ once: true }}
      >
        <img
          className="h-48 w-[80vw] md:w-[28vw] md:h-72 mx-auto my-8 md:m-16 rounded-xl bg-none border-2 border-cyan-200 shadow-lg shadow-cyan-200/50 hover:shadow-orange-200 hover:text-orange-200 text-cyan-200"
          src={img}
          alt=""
        />
      </motion.div>

      <motion.div
        className="w-[80vw] md:w-[20vw] h-auto md:h-64 mx-auto my-8 md:m-16 pt-8 md:pt-16 rounded-xl bg-none text-cyan-200 text-center md:text-left"
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? 150 : -150 // Slide right if even, left if odd
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide to its original position
          transition: {
            duration: 2 // Animation duration
          }
        }}
        viewport={{ once: true }}
      >
        <p className="font-serif text-lg sm:text-xl md:text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">{text}</p>
      </motion.div>
    </div>
  );
}

export default Achieve;
