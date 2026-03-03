"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import {Typewriter} from "react-simple-typewriter";
import { useState } from "react";

const HeroContent = () => {
  const [isTyping, setIsTyping] = useState(true);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-24 lg:mt-28 max-lg:mt-16  w-full z-[20] max-md:px-8"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-md:gap-2">

      <motion.div
        variants={slideInFromRight(0.8)}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" w-full h-full flex justify-center items-center lg:hidden"
      >
        <Image
          className="max-sm:w-52 rounded-xl shadow-xl shadow-black/70"
          src="/ProfileImage3.png"
          alt="profile pic"
          height={250}
          width={250}
          priority
        />
      </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 lg:mt-6 text-7xl font-extrabold  max-w-[650px] w-auto h-auto max-lg:mx-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-extrabold tracking-tight from-[#b8a998] via-[#b8a998] to-[#f3eee8] lg:py-20 max-xl:text-[3.25rem] max-md:text-[2.75rem] max-sm:text-[2rem] max-[350px]:text-2xl">
              {" "}
              Darshan U Shetty {" "} 
            </span>
  
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`Welcome-box ${isTyping ? "active" : ""} lg:ml-0 py-2 px-6 opacity-90 w-fit  max-md:px-3 mx-auto`}
        >
          {/* <SparklesIcon className="text-[#C6C9CF] mr-[10px] h-5 w-5 max-md:w-10" /> */}
          <h1 className="Welcome-text text-sm uppercase font-semibold max-md:text-[12px] max-sm:text-[10px] tracking-[0.2em]">
            <span className="inline-block w-[280px] justify-center text-center">
            <Typewriter
              words={[
                'Systems Architect',
                'Applied AI Engineer',
                'Product-Driven Builder',
                'Performance-Oriented Developer',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={45}
              delaySpeed={1300}
              onType={() => setIsTyping(true)}
              onDelete={() => setIsTyping(false)}
            />
            </span>
          </h1>

        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[17px] text-[#ede3e3] leading-relaxed lg:my-5 my-2 max-w-[600px] max-lg:text-center max-lg:w-[75%] max-md:w-[80%] max-sm:w-full max-lg:mx-auto max-sm:text-sm max-md:text-base"
        >
          I design and deliver scalable software and AI-powered systems that solve high-impact business challenges. With a strong focus on architecture, performance, and intelligent automation, I build solutions that are production-ready, future-proof, and built to scale.
        </motion.p>
        <div className="flex flex-row w-full h-auto gap-5 max-lg:justify-center">
          <motion.a
            variants={slideInFromLeft(0.8)}
            className="px-8 py-2 button-primary text-sm tracking-w text-center text-[#1f1f1f] font-semibold cursor-pointer rounded-lg border max-md:text-sm"
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
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full flex justify-end items-center max-lg:hidden"
      >
        <Image
          className=" bg-white rounded-xl shadow-xl shadow-black/70"
          src="/ProfileImage3.png"
          alt="profile pic"
          height={400}
          width={400}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;