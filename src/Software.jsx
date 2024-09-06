import React from 'react'
import { motion } from 'framer-motion'
import pro from './pro (1).png';
import pro1 from './pro (2).png';
import pro2 from './pro (3).png';
import pro3 from './pro (4).png';

function Software() {
  return (
    <div className='mt-16 pt-16 bg-white/25 rounded-2xl pb-40 max-md:pb-20'>
    <h1 className='text-3xl sm:text-4xl md:text-[4vw] font-bold text-sky-300 text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Software Projects</h1>

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
          className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] mx-auto mt-16 md:mt-32 rounded-xl'
          >
            <img className="rounded-2xl brightness-50 hover:brightness-75 w-[95%] m-auto shadow-xl shadow-cyan-200/50" src={pro1} alt="" />
            <div className='-mt-32 md:-mt-40 brightness-100'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[2vw] text-cyan-200 font-bold'>Banking Application</h1>
          <p className='text-[10px] sm:text-md md:text-sm w-full px-8 md:px-16 text-white'>
            Developed a Banking Application with an Authentication System where you can add or withdraw imaginary money.
          </p>
            </div>
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
          viewport={{ once: true }}
          className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] mx-auto mt-28 md:mt-32 rounded-xl'
          >
            <img className="rounded-2xl brightness-50 hover:brightness-75 w-[95%] m-auto shadow-xl shadow-cyan-200/50" src={pro3} alt="" />
            <div className='-mt-32 md:-mt-40 brightness-100'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[2vw] text-cyan-200 font-bold'>CareLink Web-App</h1>
          <p className='text-[10px] sm:text-md md:text-sm w-full px-4 md:px-16 text-white'>
          A revolutionary website designed to empower patients in their healthcare journey. With the power 
          of machine learning recommendation models, CareLink assists users in finding the most suitable 
          hospitals and doctors tailored to their specific needs with MapBox Integration.
          </p>
            </div>
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
          viewport={{ once: true }}
          className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] mx-auto mt-16 md:mt-32 rounded-xl'
          >
            <img className="rounded-2xl brightness-50 hover:brightness-75 w-[95%] m-auto shadow-xl shadow-cyan-200/50" src={pro2} alt="" />
            <div className='-mt-28 md:-mt-40 brightness-100'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[2vw] text-cyan-200 font-bold'>EdTech Platform</h1>
          <p className='text-[10px] sm:text-md md:text-sm w-full px-4 md:px-16 text-white'>
          The front end of this EdTech Platform is built with React.js, a popular JavaScript library for creating 
          dynamic and responsive user interfaces, and styled with Tailwind CSS, which allows
          custom design implementations.
          </p>
            </div>
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
          viewport={{ once: true }}
          className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] mx-auto mt-16 md:mt-32 rounded-xl'
          >
            <img className="rounded-2xl brightness-50 hover:brightness-75 w-[95%] m-auto shadow-xl shadow-cyan-200/50" src={pro} alt="" />
            <div className='-mt-16 md:-mt-40 brightness-100'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-[2vw] text-cyan-200 font-bold'>E-Commerce Platform</h1>
          <p className='text-[10px] sm:text-md md:text-sm w-full px-8 md:px-8 text-white'>
          Developed a Shoping Website, where we can Buy Products.
          </p>
            </div>
        </motion.div>
    </div>
  )
}

export default Software