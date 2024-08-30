import React from 'react';
import Skills from './Skills.jsx';
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

function skillpage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const items = ["Having Knowledge About Arduino & Raspberry Pi", "Developed Line Following Robots & Stair Climbing Bots", "Worked on an Autonomous Rover using Nav2 Library and OpenCV."];
  const items1 = ["Designed Frontend Projects and RESTful APIs", "Practiced Competitive Programming in Java & C++", "Designed Graphics for Startups and Events", "Frameworks: React.js, Node.js, Django", "Languages: Python, C/C++, Java, HTML/CSS, JavaScript."];
  const items2 = ["Member of Society & Cultural Clubs at IET Lucknow", "Performed Nukkad and represented at IIT Roorkee", "Organized College Events and active member of Entrepreneur cell."];

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    animate3(
      "ul",
      { height: open3 ? 200 : 0, opacity: open3 ? 1 : 0 },
      { type: "spring", bounce: 0, duration: 0.8 }
    );
    animate3(
      "li",
      open3 ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 },
      { duration: 0.6, delay: open3 ? staggerList : 0 }
    );
  }, [open3]);

  useEffect(() => {
    animate2(
      "ul",
      { height: open2 ? 250 : 0, opacity: open2 ? 1 : 0 },
      { type: "spring", bounce: 0, duration: 0.8 }
    );
    animate2(
      "li",
      open2 ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 },
      { duration: 0.6, delay: open2 ? staggerList : 0 }
    );
  }, [open2]);

  useEffect(() => {
    animate1(
      "ol",
      { height: open1 ? 150 : 0, opacity: open1 ? 1 : 0 },
      { type: "spring", bounce: 0, duration: 0.8 }
    );
    animate1(
      "li",
      open1 ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 },
      { duration: 0.6, delay: open1 ? staggerList : 0 }
    );
  }, [open1]);

  return (
    <div className='flex flex-col justify-center items-center mt-16 md:mt-32 p-4 md:p-8 pt-8 md:pt-16 bg-black/25 rounded-2xl'>
      <h1 className='text-3xl md:text-[4vw] font-bold text-sky-300 mb-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Skills</h1>
      
      <div className="App mb-8" ref={scope1}>
        <motion.button onClick={() => setOpen1(!open1)} whileTap={{ scale: 0.95 }}>
          <Skills text={"Hardware"} index={0} />
        </motion.button>
        <ol className='m-auto w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[56vw]'>
          {items.map((item, index) => (
            <motion.li key={index} className='text-base sm:text-lg md:text-xl lg:text-[1.8vw] font-semibold w-full text-sky-300 mt-2'>{item}</motion.li>
          ))}
        </ol>
      </div>
      
      <div className="App mb-8" ref={scope2}>
        <motion.button onClick={() => setOpen2(!open2)} whileTap={{ scale: 0.95 }}>
          <Skills text={"Software"} index={1} />
        </motion.button>
        <ul className='m-auto w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[56vw]'>
          {items1.map((item, index) => (
            <motion.li key={index} className='text-base sm:text-lg md:text-xl lg:text-[1.8vw] font-semibold w-full text-sky-300 mt-2'>{item}</motion.li>
          ))}
        </ul>
      </div>

      <div className="App" ref={scope3}>
        <motion.button onClick={() => setOpen3(!open3)} whileTap={{ scale: 0.95 }}>
          <Skills text={"Extra Curricular"} index={2} />
        </motion.button>
        <ul className='m-auto w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[56vw]'>
          {items2.map((item, index) => (
            <motion.li key={index} className='text-base sm:text-lg md:text-xl lg:text-[1.8vw] font-semibold w-full text-sky-300 mt-2'>{item}</motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default skillpage;
