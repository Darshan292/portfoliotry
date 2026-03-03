"use client";
import React,  { useEffect, useRef, useState } from 'react';
import { Programming,Frontend, Database_Infra, Artificial_Intelligence_Machine_Learning, Backend_System_Engineering } from '@/constants';
import { motion, useInView } from "framer-motion";
import { skillstopAnimationVariants } from '@/utils/motion';

const SkillsList = () => {

    const prglng = useRef(null);
    const inViewPrg = useInView(prglng);

    const [prganimated, setPrgnimated] = useState(false)
    const [artificialanimated, setArtificialanimated] = useState(false)
    const [othersanimated, setOthersanimated] = useState(false)


    useEffect(() => {
        if(inViewPrg){
            setPrgnimated(true);
            setArtificialanimated(true);
            setOthersanimated(true);
        }
    },[inViewPrg]);
  

    return(
  <div className='grid grid-flow-col gap-10 max-md:gap-5 h-full w-full max-w-[55rem] max-md:mt-4'>
    <div>
    <p className='text-[#e8d6c2] text-2xl font-bold max-md:text-lg max-md:mx-auto'>Programming</p>
    <motion.div
    className='lg:flex lg:flex-wrap max-lg:text-sm max-w-[35rem] lg:flex-row items-start gap-1 mt-4 mb-8 max-md:mx-auto max-md:mb-4 max-md:mt-2'
    ref={prglng}
    >
    {Programming.map((lang,index) => (
        <motion.div 
        key={index}
        variants={skillstopAnimationVariants}
          initial="initial"
          animate={ prganimated ? "animate":"initial"}
          transition={{ delay: index * 0.08, duration: 0.5}}
        className='text-md rounded-xl px-3 py-[1px] '>
            <p className='text-[#f3eee8] font-semibold'>&bull;&nbsp;{lang}</p>
        </motion.div>
    ))}
    </motion.div>

    <p className='text-[#e8d6c2] text-2xl font-bold max-md:text-lg max-md:mx-auto'>Backend & Systems Engineering</p>
    <motion.div
    className='lg:flex lg:flex-wrap lg:flex-row items-start gap-1 mt-4 mb-8 max-md:mt-2 max-md:mx-auto'>
    {Backend_System_Engineering.map((lang,index) => (
        <motion.div 
        key={index} 
        className='text-md rounded-xl px-3 py-[1px] w-fit max-lg:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={ prganimated ? "animate":"initial"}
        transition={{ delay: (Programming.length+index) * 0.08, duration: 0.5}}>
            <p className='text-[#f3eee8] font-semibold'>&bull;&nbsp;{lang}</p>
        </motion.div>
    ))}
    </motion.div>

    <p className='text-[#e8d6c2] text-2xl font-bold max-md:text-lg max-md:mx-auto'>Frontend & Product Development</p>
    <motion.div
    className='lg:flex lg:flex-wrap lg:flex-row items-start gap-1 mt-4 mb-8 max-md:mt-2 max-md:mx-auto'>
    {Frontend.map((lang,index) => (
        <motion.div 
        key={index} 
        className='text-md rounded-xl px-3 py-[1px] max-md:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={ othersanimated ? "animate":"initial"}
        transition={{ delay: (Programming.length+Backend_System_Engineering.length+index) * 0.08, duration: 0.5}}>
            <p className='text-[#f3eee8] font-semibold'>&bull;&nbsp;{lang}</p>
        </motion.div>
    ))}
    </motion.div>
    </div>

    {/* <p className='text-white text-2xl font-bold'>BackEnd </p> */}
    <div>
    <p className='text-[#e8d6c2] text-2xl font-bold max-md:text-lg max-md:mx-auto'>Artificial Intelligence & Machine Learning</p>
    <motion.div
    className='lg:flex lg:flex-wrap lg:flex-row items-start gap-1 mt-4 mb-8 max-md:mt-2 max-md:mx-auto'>
    {Artificial_Intelligence_Machine_Learning.map((lang,index) => (
        <motion.div 
        key={index} 
        className='text-md rounded-xl px-3 py-[1px] max-md:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={ artificialanimated ? "animate":"initial"}
        transition={{ delay: index * 0.08, duration: 0.5}}>
            <p className='text-[#f3eee8] font-semibold'>&bull;&nbsp;{lang}</p>
        </motion.div>
    ))}
    </motion.div>

    {/* <p className='text-white text-2xl font-bold'>Database</p> */}
    

    <p className='text-[#e8d6c2] text-2xl font-bold max-md:text-lg max-md:mx-auto'>Databases & Infrastructure</p>
    <motion.div
    className='lg:flex lg:flex-wrap lg:flex-row items-start gap-1 mt-4 max-md:mt-2 max-md:mx-auto'>
    {Database_Infra.map((lang,index) => (
        <motion.div 
        key={index} 
        className='text-md rounded-xl px-3 py-[1px] max-md:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={ artificialanimated ? "animate":"initial"}
        transition={{ delay: (Artificial_Intelligence_Machine_Learning.length+index) * 0.08, duration: 0.5}}>
            <p className='text-[#f3eee8] font-semibold'>&bull;&nbsp;{lang}</p>
        </motion.div>
    ))}
    </motion.div>
    </div>
    

  </div>
);
}

export default SkillsList;
