"use client";
import React,  { useEffect, useRef, useState } from 'react';
import { Programming,Frontend,Backend,tools, Database } from '@/constants';
import { motion, useInView } from "framer-motion";
import { skillstopAnimationVariants } from '@/utils/motion';

const SkillsList = () => {

    const prglng = useRef(null);
    const inViewPrg = useInView(prglng);

    const [prganimated, setPrgnimated] = useState(false)
    const [fullstckanimated, setFullstcknimated] = useState(false)
    const [othersanimated, setOthersanimated] = useState(false)


    useEffect(() => {
        if(inViewPrg){
            setPrgnimated(true);
            setFullstcknimated(true);
            setOthersanimated(true);
        }
    },[inViewPrg]);
  

    return(
  <div className='flex flex-col h-full w-full max-w-[40rem] px-10 max-md:px-0 max-md:mt-4'>
    <p className='text-white text-2xl font-bold max-md:text-lg max-md:mx-auto'>Programming Language</p>
    <motion.div
    className='flex flex-wrap max-w-[35rem] flex-row items-start gap-3 mt-4 mb-8 max-md:justify-center max-md:mx-auto max-md:mb-4 max-md:mt-2'
    ref={prglng}
    >
    {Programming.map((lang,index) => (
        <motion.div 
        key={index}
        variants={skillstopAnimationVariants}
          initial="initial"
          animate={ prganimated ? "animate":"initial"}
          transition={{ delay: index * 0.08, duration: 0.5}}
        className='text-base bg-[#656e7a6e] rounded-xl px-4 py-[2px] max-md:text-sm'>
            <p className='text-white font-semibold'>{lang}</p>
        </motion.div>
    ))}
    </motion.div>

    <p className='text-white text-2xl font-bold max-md:text-lg max-md:mx-auto'>Full Stack Technology </p>
    <motion.div
    className='flex flex-wrap flex-row items-start gap-3 mt-4 max-md:justify-center max-md:mt-2 max-md:mx-auto'>
    {Frontend.map((lang,index) => (
        <motion.div 
        key={index} 
        className='text-base bg-[#656e7a6e] rounded-xl px-4 py-[2px] max-md:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={ fullstckanimated ? "animate":"initial"}
        transition={{ delay: (Programming.length+index) * 0.08, duration: 0.5}}>
            <p className='text-white font-semibold'>{lang}</p>
        </motion.div>
    ))}
    </motion.div>

    {/* <p className='text-white text-2xl font-bold'>BackEnd </p> */}
    <div className='flex flex-wrap flex-row items-start gap-3 mt-3 max-md:justify-center max-md:mt-5'>
    {Backend.map((lang,index) => (
        <motion.div 
        key={index} 
        className='text-base bg-[#656e7a6e] rounded-xl px-4 py-[2px] max-md:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={ fullstckanimated ? "animate":"initial"}
        transition={{ delay: (Programming.length+Frontend.length+index) * 0.08, duration: 0.5}}>
            <p className='text-white font-semibold'>{lang}</p>
        </motion.div>
    ))}
    </div>

    {/* <p className='text-white text-2xl font-bold'>Database</p> */}
    <div className='flex flex-wrap flex-row items-start gap-3 mt-3 mb-8 max-md:justify-center max-md:mb-4 max-md:mt-5'>
    {Database.map((lang,index) => (
        <motion.div 
        key={index} 
        className='text-base bg-[#656e7a6e] rounded-xl px-4 py-[2px] max-md:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={fullstckanimated ? "animate":"initial"}
        transition={{ delay: (Programming.length+Frontend.length+Database.length+index) * 0.08, duration: 0.5}}>
            <p className='text-white font-semibold'>{lang}</p>
        </motion.div>
    ))}
    </div>

    <p className='text-white text-2xl font-bold max-md:text-lg max-md:mx-auto'>Other Tools and Tech </p>
    <motion.div 
    className='flex flex-wrap flex-row items-start gap-3 mt-4 max-md:justify-center max-md:mb-4 max-md:mt-2 max-md:mx-auto'>
    {tools.map((lang,index) => (
        <motion.div 
        key={index} className='text-base bg-[#656e7a6e] rounded-xl px-4 py-[2px] max-md:text-sm'
        variants={skillstopAnimationVariants}
        initial="initial"
        animate={ othersanimated ? "animate":"initial"}
        transition={{ delay: (Programming.length+Frontend.length+Database.length+Backend.length+index) * 0.08, duration: 0.5}}>
            <p className='text-white font-semibold'>{lang}</p>
        </motion.div>
    ))}
    </motion.div>
    

  </div>
);
}

export default SkillsList;
