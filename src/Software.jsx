import React from 'react'
import { motion } from 'framer-motion'
import pro from './pro (1).png';
import pro1 from './pro (2).png';
import pro2 from './pro (3).png';
import pro3 from './pro (4).png';

function Software() {
  return (
    <div className='mt-32 pt-16 bg-white/25 rounded-2xl pb-48'>
        <h1 className='text-[4vw] font-bold text-sky-300'>Software Projects</h1>
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
         className='w-[44vw] ml-[10vw] mt-20 rounded-xl'>
            <img className="rounded-2xl brightness-25 hover:brightness-50 shadow-xl shadow-cyan-200/50" src={pro1} alt="" />
            <div className='-mt-40 brightness-100'>
            <h1 className='m-auto text-[2vw] text-white font-bold w-[32vw]'>Banking Application</h1>
            <p className='w-[40vw] m-auto'>Developed a Banking Application with Authentication System where you can add or withdraw 
            imaginary money.</p>
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
         className='w-[44vw] ml-[10vw] mt-32 rounded-xl'>
            <img className="rounded-2xl brightness-25 hover:brightness-50 shadow-xl shadow-cyan-200/50" src={pro3} alt="" />
            <div className='-mt-40 brightness-100'>
            <h1 className='m-auto text-[2vw] text-white font-bold w-[32vw]'>CareLink Web-App</h1>
            <p className='w-[40vw] m-auto'>A revolutionary website designed to empower patients in their healthcare journey. With the power 
of machine learning recommendation models, CareLink assists users in finding the most suitable 
hospitals and doctors tailored to their specific needs with MapBox Integration.</p>
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
         className='w-[44vw] ml-[10vw] mt-28 rounded-xl'>
            <img className="rounded-2xl brightness-25 hover:brightness-50 shadow-xl shadow-cyan-200/50" src={pro2} alt="" />
            <div className='-mt-40 brightness-100'>
            <h1 className='m-auto text-[2vw] text-white font-bold w-[32vw]'>SkyBharat: EdTech Platform</h1>
            <p className='w-[40vw] m-auto'>The front end of this EdTech Platform is built with React.js, a popular JavaScript library for creating 
dynamic and responsive user interfaces, and styled with Tailwind CSS, which allows for rapid and 
custom design implementations.</p>
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
         className='w-[44vw] ml-[10vw] mt-28 rounded-xl'>
            <img className="rounded-2xl brightness-25 hover:brightness-50 shadow-xl shadow-cyan-200/50" src={pro} alt="" />
            <div className='-mt-40 brightness-100 text-center'>
            <h1 className='m-auto text-[2vw] text-white font-bold w-[32vw]'>E-Commerce Platform</h1>
            <p className='w-[40vw] m-auto'>Developed a Shoping Website, where we can Buy Products </p>
            </div>
        </motion.div>
        
    </div>
  )
}

export default Software