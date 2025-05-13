import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import { motion, useInView } from "framer-motion";
import { cardAnimationVariants } from "@/utils/motion";


interface Props {
  src: string;
  title: string;
  description: string;
  tech : string;
  demo : string;
  github : string;
}

const ProjectCard = ({ src, title, description, tech, demo, github}: Props) => {

  const animatecard = useRef(null);
  const inViewCard = useInView(animatecard);
  const [animated,setAnimated] = useState(false);

  useEffect(()=>{
    if(inViewCard){
      setAnimated(true);
    }
  },[inViewCard])
  return (
    <>
    <div className=" max-lg:hidden flex flex-col max-w-[350px] h-[510px] overflow-hidden rounded-xl shadow-inner bg-slate-950 shadow-cyan-400 max-md:h-min hover:shadow-purple-300 hover:bg-[#030722] z-50">
      <div className="flex mx-auto z-20 justify-center items-center rounded-lg cursor-pointer p-6">
        <Image
          src={src}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg "
        />
        <div className="absolute justify-center items-center flex flex-row gap-6 rounded-lg bg-black bg-opacity-40 w-[300px] h-[300px] max-md:w-[285px] max-md:h-[285px] max-sm:w-[250px] max-sm:h-[250px] max-[350px]:w-[195px] max-[350px]:h-[195px] max-[400px]:w-[250px] max-[400px]:h-[250px]  max-[450px]:w-[300px] max-[450px]:h-[300px]  opacity-0 hover:opacity-100">
          {(!(demo==="")) && <button type="button" className="text-white rounded-2xl px-2 shadow-md shadow-cyan-300 hover:bg-[#00e5ff32] hover:shadow-none border border-white" onClick={()=>window.open(demo)}>Demo</button>}
          <button type="button" className="text-white rounded-2xl px-2 hover:bg-[#00e5ff32] underline" onClick={()=>window.open(github)}>GitHub</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center flex-row gap-2 px-6 pb-6 z-20 cursor-default">
        <h1 className="text-white font-bold md:text-lg text-center">{title}</h1>
        <p className="text-white font-light text-xs text-center">{description}</p>
        <p className="text-white font-bold text-xs text-center">- {tech}</p>
      </div>
    </div>

    <motion.div 
    ref={animatecard}
    variants={cardAnimationVariants}
    initial="initial"
    animate={ inViewCard ? "animate":"initial"}
    transition={{ duration: 1 }}
    className="lg:hidden flex flex-col max-w-[350px] h-[510px] overflow-hidden rounded-xl shadow-inner bg-slate-950 shadow-cyan-400 max-md:h-min hover:shadow-purple-300 hover:bg-[#030722] z-50">
      <div className="flex mx-auto z-20 justify-center items-center rounded-lg cursor-pointer p-6">
        <Image
          src={src}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg "
        />
        <div className="absolute justify-center items-center flex flex-row gap-6 rounded-lg bg-black bg-opacity-40 w-[300px] h-[300px] max-md:w-[285px] max-md:h-[285px] max-sm:w-[250px] max-sm:h-[250px] max-[350px]:w-[195px] max-[350px]:h-[195px] max-[400px]:w-[250px] max-[400px]:h-[250px]  max-[450px]:w-[300px] max-[450px]:h-[300px]  opacity-0 hover:opacity-100">
          {(!(demo==="")) && <button type="button" className="text-white rounded-2xl px-2 shadow-md shadow-cyan-300 hover:bg-[#00e5ff32] hover:shadow-none border border-white" onClick={()=>window.open(demo)}>Demo</button>}
          <button type="button" className="text-white rounded-2xl px-2 hover:bg-[#00e5ff32] underline" onClick={()=>window.open(github)}>GitHub</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center flex-row gap-2 px-6 pb-6 z-20 cursor-default">
        <h1 className="text-white font-bold md:text-lg text-center">{title}</h1>
        <p className="text-white font-light text-xs text-center ">{description}</p>
        <p className="text-white font-bold text-xs text-center">- {tech}</p>
      </div>
    </motion.div>

    </>
  );
};

export default ProjectCard;