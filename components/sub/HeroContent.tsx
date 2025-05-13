"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 lg:mt-60 max-lg:mt-[9.5rem] w-full z-[20] max-md:px-8"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-md:gap-2">

      <motion.div
        variants={slideInFromRight(0.8)}
        className=" w-full h-full flex justify-center items-center lg:hidden"
      >
        <Image
          className=" -rotate-12 max-sm:w-52 max-sm:h-52"
          src="/Profilepic.png"
          alt="work icons"
          height={250}
          width={250}
          priority
        />
      </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 lg:mt-10 text-6xl font-bold text-white max-w-[600px] w-auto h-auto max-lg:mx-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 lg:py-20 max-xl:text-[3.25rem] max-md:text-[2.75rem] max-sm:text-[2rem] max-[350px]:text-2xl">
              {" "}
              Darshan U Shetty {" "}
            </span>
  
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#488AC7] opacity-[0.9] max-md:w-fit max-md:px-3 max-lg:mx-auto"
        >
          <SparklesIcon className="text-[#ffffff] mr-[10px] h-5 w-5 max-md:w-10" />
          <h1 className="Welcome-text text-[13px] max-md:text-[11px] max-sm:text-[8px]">
          Full Stack Developer with Expertise in Business Analysis and AI Automation.
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white lg:my-5 my-2 max-w-[600px] max-lg:text-center max-lg:w-[75%] max-md:w-[80%] max-sm:w-full max-lg:mx-auto max-sm:text-sm max-md:text-base"
        >
          I&apos;m a Computer Science & Engineering graduate specializing in Full Stack Development, Business Analysis, and Machine Learning with experience in Website,
          Mobile, and Software development.
        </motion.p>
        <div className="flex flex-row w-full h-auto gap-5 max-lg:justify-center">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px]  max-md:text-sm border"
            href="/Resume.pdf" 
            download="Darshan_U_Shetty_Resume.pdf"
          >
            Download CV &darr;
          </motion.a>
          {/* <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-secondary text-center text-white cursor-pointer rounded-lg w-[200px] max-md:w-[100px] max-md:text-sm" 
          >
            Resume &darr;
          </motion.a> */}
          </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-end items-center max-lg:hidden"
      >
        <Image
          className=" -rotate-12"
          src="/Profilepic.png"
          alt="work icons"
          height={400}
          width={400}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;