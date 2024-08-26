import React from 'react'
import Skills from './Skills.jsx'
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

function skillpage() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();
  const items = ["Having Knowledge About Arduino & Raspberry pi", "Developed a Line Following Robots & Stair Climbing Bots", "Worked in Autonomous Rover works on Mapping using Nav2 Library and Object Detection using OpenCV."];
  const items1 = ["Designed Frontend Projects as well as created RESTful API’s for Authentication & other resources.", "Practicing Competitive Programming For 1 year in Java & C++.", "Designed Graphics & Websites for Startups as well as Collage Clubs & Events as well as also worked as Graphics Designer Intern.", "Frameworks: React.js, Node.js, Django, Django Rest Framework.", "Languages: Python, C/C++, Java, HTML/CSS, JavaScript."];
  const items2 = ["Society & Cultural Clubs Members of IET Lucknow", " Performed Nukkad & Represented our collage in IIT Roorkee", "Conducted Collage Events as well as active member of Entrepreneur cell."];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled
  useEffect(() => {
    animate3(
      "ul",
      {
        // width: open3 ? 150 : 0,
        height: open3 ? 200 : 0,
        opacity: open3 ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.8,
      }
    );
    animate3(
      "li",
      open3
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.6,
        delay: open3 ? staggerList : 0,
      }
    );
  }, [open3]);
  useEffect(() => {
    animate2(
      "ul",
      {
        // width: open2 ? 150 : 0,
        height: open2 ? 250 : 0,
        opacity: open2 ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.8,
      }
    );
    animate2(
      "li",
      open2
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.6,
        delay: open2 ? staggerList : 0,
      }
    );
  }, [open2]);
  useEffect(() => {
    animate1(
      "ol",
      {
        // width: open1 ? 900 : 0,
        height: open1 ? 150 : 0,
        opacity: open1 ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.8,
      }
    );
    animate1(
      "li",
      open1
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.6,
        delay: open1 ? staggerList : 0,
      }
    );
  }, [open1]);
  return (
    <div className='flex-row justify-center items-center mt-32 p-8 pt-16 bg-black/25 rounded-2xl'>
        <h1 className='text-[4vw] font-bold text-sky-300'>Skills</h1>
        <div className="App" ref={scope1}>
      <motion.button onClick={() => setOpen1(!open1)} whileTap={{ scale: 0.95 }}>
      <Skills text={"Hardware"} index={0}/>
      </motion.button>
      <ol className='m-auto w-[56vw]'>
        {items.map((item, index) => (
          <motion.li key={0} className='text-[1.8vw] font-semibold w-[56vw] text-sky-300 m-auto'>{item}</motion.li>
        ))}
      </ol>
      </div>
    <div className="App" ref={scope2}>
      <motion.button onClick={() => setOpen2(!open2)} whileTap={{ scale: 0.95 }}>
      <Skills text={"Software"} index={1}/>
      </motion.button>
      <ul className='m-auto'>
        {items1.map((item, index) => (
          <motion.li key={1} className='text-[1.8vw] font-semibold text-sky-300 m-auto'>{item}</motion.li>
        ))}
      </ul>
    </div>
    <div className="App" ref={scope3}>
      <motion.button onClick={() => setOpen3(!open3)} whileTap={{ scale: 0.95 }}>
      <Skills text={"Extra Curricular"} index={2}/>
      </motion.button>
      <ul className='m-auto'>
        {items2.map((item, index) => (
          <motion.li key={2} className='text-[1.8vw] font-semibold text-sky-300 m-auto'>{item}</motion.li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default skillpage