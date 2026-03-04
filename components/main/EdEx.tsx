"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { titleAnimationVariants, textAnimationVariants, boxAnimationVariants } from "@/utils/motion";
import { Education, Experience } from "@/constants";


interface Props {
  Toggle:boolean;
  onToggle: () => void;
}
export const EdEx: React.FC<Props> = ({Toggle, onToggle}) => {

  const animatebox = useRef(null)
  const animatetext = useRef(null)
  const animatetitle = useRef(null)
  const inviewbox = useInView(animatebox)
  const inviewtext = useInView(animatetext)
  const inviewtitle = useInView(animatetitle)

  const [startAnimate, setStartAnimate] = useState(false);

  
  useEffect(() => {
    if (inviewbox || inviewtext) {
      setStartAnimate(true);
    }
  }, [inviewbox, inviewtext, inviewtitle]);

  return (
    <motion.div
    className="flex flex-col items-center"
    id="edexmain">
      <motion.div
      ref={animatetitle}
      variants={titleAnimationVariants}
      initial="initial"
      animate={ startAnimate ? "animate":"initial"}
      transition={{
        duration : 1,
      }}
       className=" text-5xl justify-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f3eee8] to-[#f3eee8] mt-24 max-lg:mt-14 max-md:text-4xl max-sm:text-3xl max-[350px]:text-2xl ">
        Experience & Education
      </motion.div>
      <motion.div 
      ref={animatebox}
      variants={boxAnimationVariants}
      initial="initial"
      animate={ startAnimate ? "animate":"initial"}
      className="max-w-2xl mx-auto antialiased p-4 w-full mt-8 max-lg:mt-5 relative bg-[#080808] border-2 border-[#aa9988]  rounded-3xl z-20 max-md:w-[80%]"
      transition={{
        duration:1, 
      }}>
        <div className="w-full">
          <div
            onClick={onToggle}
            className={`flex mx-auto h-6 w-12 cursor-pointer rounded-full border border-[#ffffffd6] ${
                Toggle? " bg-[#111111] justify-end" : " bg-[#111111] justify-start"
            } p-[2px] max-sm:h-5 max-sm:w-10`}>
                <motion.div
                className="h-4 w-4 my-auto rounded-full bg-[#776b5f] shadow-inner shadow-white max-sm:h-3 max-sm:w-3"
                layout
                transition={{type:'spring', stiffness:700, damping:30}}/>
          </div>
          <div className="flex flex-row justify-center gap-5 p-1 ">
            <p className={`${Toggle ? "text-[#9a9a9a]" : "text-[#ffffff]"} text-xs font-semibold`}>Experience</p>
            <p className={`${Toggle ? "text-[#ffffff]" : "text-[#9a9a9a]"} text-xs font-semibold`}>Education</p>
          </div>
        </div>
          
          {Toggle && Education.map((item, index) => (
          <motion.div 
          ref={animatetext}
          key={`content-${index}`} 
          className="mb-10 mt-5 max-sm:mb-5 max-sm:mt-2"
          variants={textAnimationVariants}
          initial = "initial"
          animate = {inviewbox ? "animate":"initial"}
          transition={{ delay: index * 0.25, duration: 0.5 }}>
            <div className="flex flex-row justify-between max-md:flex-col">
              <p className="text-2xl text-[#f3eee8] max-sm:text-base max-sm:font-bold">
                {item.title}
              </p>
              <p className="text-lg text-[#f3eee8] max-sm:text-xs">
              &#128197; {item.period}
              </p>
            </div>

            <div className="text-sm text-[#c7b8a6] mt-1 max-sm:text-xs">
              {item.description}
            </div>
            <div className=" text-base text-white mt-1 max-sm:text-[13px]">
              {item.Marks}
            </div>
          </motion.div>
        ))}

        { !Toggle && Experience.map((item,index) => (
          <motion.div 
          ref={animatetext}
          key={`content-${index}`} 
          className="mb-10 mt-5 px-3 max-sm:mb-5 max-sm:mt-2"
          variants={textAnimationVariants}
          initial = "initial"
          animate = {inviewbox ? "animate":"initial"}
          transition={{ delay: index * 0.25, duration: 0.5 }}>
            <div className="flex flex-row justify-between max-md:flex-col">
              <p className="text-2xl text-[#f3eee8] max-sm:text-sm max-sm:font-bold">
                {item.title}
              </p>
              <p className="text-lg text-[#f3eee8] max-sm:text-xs">
              &#128197; {item.period}
              </p>
            </div>

            <div className="text-sm text-[#c7b8a6] mt-1 text-justify max-sm:text-xs">
              <ul>
              {item.description.map((point, i) => (
                 <li key={i}>{point}</li> 
                ))}
            </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    
  );
}