import React, {useRef, useState, useEffect} from "react";
import { IconCloudDemo } from "../sub/SkillsIcon";
import SkillsList from "../sub/Skillstext";
import { motion, useInView } from "framer-motion";
import { skillsmidAnimationVariants } from "@/utils/motion";
  
const Skills = () => {

    return (
        <div
        id="content"
          className="flex flex-col items-center justify-center"
          style={{ transform: "scale(0.9)" }}
        >  
          <p className="text-5xl mt-[60px] max-lg:mt-6 font-semibold text-transparent bg-clip-text bg-[#f3eee8] max-md:text-4xl max-sm:text-3xl max-[350px]:text-2xl">Skills</p>

          <div className="flex flex-row items-center justify-center gap-44 h-full relative overflow-hidden z-40 max-lg:flex-col max-lg:gap-0">

          <div className="flex justify-around flex-wrap items-center lg:hidden">
                <IconCloudDemo/>
          </div>
            <div className="flex md:justify-between my-auto max-md:my-1 ">
              <SkillsList/>
            </div>

              <div className="flex justify-around flex-wrap gap-5 items-center max-lg:hidden">
                <IconCloudDemo/>
              </div>
          </div>
        </div>
    );
  };
  
  export default Skills;