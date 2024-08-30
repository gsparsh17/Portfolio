import React from 'react';
import { motion } from "framer-motion";

function skills({ text, index }) {
    return (
      <motion.div
        className="card h-32 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw] m-4 md:m-8 lg:m-12 xl:m-16 mx-auto rounded-xl bg-none border-2 border-cyan-200 shadow-lg shadow-cyan-200/50 hover:shadow-orange-200 hover:text-orange-200 text-cyan-200"
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? 150 : -50
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2
          }
        }}
        viewport={{ once: true }}
      >
        <p className="card-text font-serif text-lg sm:text-xl md:text-2xl inline-block mt-8 ">
          {text}
          <svg className="m-auto w-6 h-6 text-gray-800 dark:text-white mt-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
          </svg>
        </p>
      </motion.div>
    );
}

export default skills;
