import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a 2-second delay before showing the content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer when the component is unmounted
  }, []);

  if (!isVisible) {
    return null; // Return nothing if content is not yet visible
  }
  return (
  <div className='w-screen h-screen relative flex flex-col md:flex-row'>
  {/* Background Image for Mobile, Side Image for Desktop */}
  <div className="md:h-screen md:w-[438px] md:shadow-2xl z-0 md:z-4 absolute md:relative inset-0 bg-cover bg-center" 
       style={{ backgroundImage: `url(${mypic})` }}>
    {/* For mobile: make this div act as a background */}
    <img src={mypic} className='h-full w-full object-cover md:hidden brightness-75' alt="" />
  </div>

  {/* Overlay Content */}
  <div className='text-cyan-100 w-full md:w-4/5 pt-8 mt-4 md:mt-8 text-center z-20 px-4 md:px-16 overflow-x-hidden no-scrollbar'>
      {text.map((el, i) => (
        <motion.p
          className='font-bold text-sky-300 text-[8vw] md:text-[6vw] leading-snug md:mr-4 mr-2 inline-block drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'
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
          className='font-serif text-[6vw] md:text-[4vw] leading-snug md:mr-4 mr-2 -mt-4 inline-block drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'
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
      <div className='pt-40 md:pt-4'>
      {text1.map((el, i) => (
        <motion.p
          className='md:font-extralight text-white brightness-150 text-[5vw] md:text-[2vw] md:mr-4 m-1 md:-mt-4 inline-block drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: i }}
          key={i}
          viewport={{ once: true }}
        >
          {el}{" "}
        </motion.p>
      ))}
      </div>
      <br/>
      <div className='md:mt-8'>
        <h2 className='font-bold text-xl md:text-2xl text-sky-300 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>
          Contact Me:
        </h2>
        <br />
        <a className="block text-xl md:text-2xl font-serif text-cyan-100 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]" href="https://github.com/gsparsh17">GitHub Profile</a>
        <a className="block text-xl md:text-2xl font-serif text-cyan-100 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]" href="https://www.linkedin.com/in/sparshgupta29/">LinkedIn Profile</a>
        <a className="block text-xl md:text-2xl font-serif text-cyan-100 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]" href="mailto:gsparsh17@gmail.com">Mail</a>
      </div>
      <button className='h-12 p-1 text-[12px] md:text-[16px] w-28 md:h-16 md:w-32 mt-6 md:mt-8 mx-auto bg-cyan-500 text-white rounded'>
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

  
  )
}

export default content