import React from 'react'
import mypic from './pic.jpeg'
import { motion } from "framer-motion";
import myGif1 from './hi-robot1.gif'
import Skillpage from './Skillpage.jsx'
import Hardware from './Hardware.jsx'
import Software from './Software.jsx'
import Achievements from './Achievements.jsx'
import './Content.css'

const text="This Is Sparsh Gupta".split(" ")
const text2="Full Stack Web Developer".split(" ")
const text1="Persuing B.Tech In Electronics & Communication Branch From IET Lucknow".split(" ")


function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
}

function content() {
  return (
    <div className='w-screen h-screen absolute flex flex-col md:flex-row justify-between z-6'>
    <div className="h-1/3 md:h-screen w-full md:w-[438px] shadow-2xl z-4">
      <img src={mypic} className='h-full w-full object-cover' alt="" />
    </div>
    
    <div className='text-cyan-100 w-full md:w-4/5 pt-8 mt-4 md:mt-8 text-center z-20 px-4 md:px-16 overflow-x-hidden no-scrollbar'>
      {text.map((el, i) => (
        <motion.p
          className='font-bold text-sky-300 text-[8vw] md:text-[6vw] leading-snug mr-4 inline-block'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: i }}
          key={i}
          viewport={{ once: true }}
        >
          {el}{" "}
        </motion.p>
      ))}
      <br />
      {text2.map((el, i) => (
        <motion.p
          className='font-serif text-[6vw] md:text-[4vw] leading-snug mr-4 -mt-4 inline-block'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: i }}
          key={i}
          viewport={{ once: true }}
        >
          {el}{" "}
        </motion.p>
      ))}
      <br />
      {text1.map((el, i) => (
        <motion.p
          className='font-extralight text-white text-[3vw] md:text-[2vw] mr-4 -mt-2 inline-block'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: i }}
          key={i}
          viewport={{ once: true }}
        >
          {el}{" "}
        </motion.p>
      ))}
      <br/>
      <div className='mt-8'>
        <h2 className='font-bold text-xl md:text-2xl text-white'>
          Contact Me:
        </h2>
        <br />
        <a className="block text-xl md:text-2xl font-serif text-sky-300" href="https://github.com/gsparsh17">GitHub Profile</a>
        <a className="block text-xl md:text-2xl font-serif text-sky-300" href="https://www.linkedin.com/in/sparshgupta29/">LinkedIn Profile</a>
        <a className="block text-xl md:text-2xl font-serif text-sky-300" href="mailto:gsparsh17@gmail.com">Mail</a>
      </div>
      <button className='h-12 w-28 md:h-16 md:w-32 mt-6 md:mt-8 mx-auto bg-cyan-500 text-white rounded'>
        Scroll Down For More!!
      </button>
      <br />
      <img className="-mt-12 md:-mt-16 w-[20vw] md:w-[12vw]" src={myGif1} alt="" />
      <Skillpage />
      <Hardware />
      <Software />
      <Achievements />
    </div>
  </div>
//   <div className='w-screen h-screen relative flex flex-col md:flex-row'>
//   {/* Background Image for Mobile, Side Image for Desktop */}
//   <div className="md:h-screen md:w-[438px] md:shadow-2xl z-0 md:z-4 absolute md:relative inset-0 bg-cover bg-center" 
//        style={{ backgroundImage: `url(${mypic})` }}>
//     {/* For mobile: make this div act as a background */}
//     <img src={mypic} className='h-full w-full object-cover md:hidden' alt="" />
//   </div>

//   {/* Overlay Content */}
//   <div className='absolute md:relative inset-0 bg-black bg-opacity-60 md:bg-opacity-0 flex flex-col justify-center items-center text-cyan-100 px-4 md:px-16 z-10 w-full md:w-4/5'>
//     {text.map((el, i) => (
//       <motion.p
//         className='font-bold text-sky-300 text-[8vw] md:text-[6vw] leading-snug mr-4 inline-block'
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2, delay: i }}
//         key={i}
//         viewport={{ once: true }}
//       >
//         {el}{" "}
//       </motion.p>
//     ))}
//     <br />
//     {text2.map((el, i) => (
//       <motion.p
//         className='font-serif text-[6vw] md:text-[4vw] leading-snug mr-4 -mt-4 inline-block'
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2, delay: i }}
//         key={i}
//         viewport={{ once: true }}
//       >
//         {el}{" "}
//       </motion.p>
//     ))}
//     <br />
//     {text1.map((el, i) => (
//       <motion.p
//         className='font-extralight text-white text-[3vw] md:text-[2vw] mr-4 -mt-2 inline-block'
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 2, delay: i }}
//         key={i}
//         viewport={{ once: true }}
//       >
//         {el}{" "}
//       </motion.p>
//     ))}
//     <br/>
//     <div className='mt-8'>
//       <h2 className='font-bold text-xl md:text-2xl text-white'>
//         Contact Me:
//       </h2>
//       <br />
//       <a className="block text-xl md:text-2xl font-serif text-sky-300" href="https://github.com/gsparsh17">GitHub Profile</a>
//       <a className="block text-xl md:text-2xl font-serif text-sky-300" href="https://www.linkedin.com/in/sparshgupta29/">LinkedIn Profile</a>
//       <a className="block text-xl md:text-2xl font-serif text-sky-300" href="mailto:gsparsh17@gmail.com">Mail</a>
//     </div>
//     <button className='h-12 w-28 md:h-16 md:w-32 mt-6 md:mt-8 mx-auto bg-cyan-500 text-white rounded'>
//       Scroll Down For More!!
//     </button>
//     <br />
//     <img className="-mt-12 md:-mt-16 w-[20vw] md:w-[12vw]" src={myGif1} alt="" />
//     <Skillpage />
//     <Hardware />
//     <Software />
//     <Achievements />
//   </div>
// </div>

  
  )
}

export default content