"use client";

import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants/index";
import { motion, useInView } from "framer-motion";
import { cardAnimationVariants } from "@/utils/motion";

const Projects = () => {

  const animatecard = useRef(null);
  const inViewCard = useInView(animatecard);

  const [animate, setAnimated] = useState(false);
  
  useEffect (()=>{
    if(inViewCard){
      setAnimated(true)
    }
  }, [inViewCard])


  return (
    <div
      className="flex flex-col items-center justify-center mb-10"
      id="projectsmain"
    >
        <h1 className="text-5xl mt-20 max-lg:mt-14 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100 max-md:text-4xl max-sm:text-3xl max-[350px]:text-2xl">
          Projects
        </h1>
      <motion.div 
      ref={animatecard}
      className="h-full w-full flex flex-col max-lg:flex-row flex-wrap justify-center md:flex-row gap-20 px-10 mt-6 z-40 max-md:items-center">
        {projects.map((proj,index)=>(
          <motion.div 
          key={index}
          variants={cardAnimationVariants}
          initial="initial"
          animate={ (animate) ? "animate":"initial"}
          transition={{ delay: index * 0.25, duration: 0.8 }}>
            <ProjectCard 
            src={proj.image}
            title={proj.name}
            description={proj.description}
            tech={proj.tech}
            demo={proj.demo}
            github={proj.github}/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;