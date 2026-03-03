import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import { motion, useInView } from "framer-motion";
import { cardAnimationVariants } from "@/utils/motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


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
    <CardContainer className="inter-var">
    <div className=" max-lg:hidden flex group/card flex-col max-w-[350px] h-[510px] overflow-hidden rounded-xl shadow-inner bg-[#282828] shadow-[#c7b8a6] max-md:h-min hover:shadow-[#e6d5c1] hover:bg-[#313131] z-50">
    <CardItem translateZ="100" className="w-full">
      <div className="flex mx-auto z-20 justify-center items-center rounded-lg cursor-pointer p-6">
        <Image
          src={src}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg group-hover/card:shadow-2xl group-hover/card:shadow-black/70 "
        />
        <div className="absolute justify-center items-center flex flex-row gap-6 rounded-lg bg-black bg-opacity-40 w-[300px] h-[300px] max-md:w-[285px] max-md:h-[285px] max-sm:w-[250px] max-sm:h-[250px] max-[350px]:w-[195px] max-[350px]:h-[195px] max-[400px]:w-[250px] max-[400px]:h-[250px]  max-[450px]:w-[300px] max-[450px]:h-[300px]  opacity-0 group-hover/card:opacity-100">
          {(!(demo==="")) && <button type="button" className="text-white rounded-2xl px-2 shadow-md shadow-[#f3eee8a8] hover:bg-[#f3eee866] hover:shadow-none border border-white" onClick={()=>window.open(demo)}>Demo</button>}
          <button type="button" className="text-white rounded-2xl px-2 hover:bg-[#f3eee866]" onClick={()=>window.open(github)}>GitHub</button>
        </div>
      </div>
      </CardItem>
      <div className="flex flex-wrap justify-center items-center flex-row gap-2 px-6 pb-6 z-20 cursor-default">
        <h1 className="text-[#f3eee8] font-bold md:text-lg text-center">{title}</h1>
        <p className="text-[#cbcbcb] text-xs text-center">{description}</p>
        <p className="text-[#c7b8a6] font-bold text-xs text-center">- {tech}</p>
      </div>
    </div>
    </CardContainer>

    <CardContainer className="inter-var flex flex-col lg:hidden">
    <motion.div 
    ref={animatecard}
    variants={cardAnimationVariants}
    initial="initial"
    animate={ inViewCard ? "animate":"initial"}
    transition={{ duration: 1 }}
    className="max-w-[350px] h-[510px] overflow-hidden group/card rounded-xl shadow-inner bg-[#282828] shadow-[#c7b8a6] max-md:h-min hover:shadow-[#e6d5c1] hover:bg-[#`313131`] z-50">
      <CardItem translateZ="100" className="w-full">
      <div className="flex mx-auto z-20 justify-center items-center rounded-lg cursor-pointer p-6">
        <Image
          src={src}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg group-hover/card:shadow-2xl group-hover/card:shadow-black/70"
        />
        <div className="absolute justify-center items-center flex flex-row gap-6 rounded-lg bg-black bg-opacity-40 w-[300px] h-[300px] max-md:w-[285px] max-md:h-[285px] max-sm:w-[250px] max-sm:h-[250px] max-[350px]:w-[195px] max-[350px]:h-[195px] max-[400px]:w-[250px] max-[400px]:h-[250px]  max-[450px]:w-[300px] max-[450px]:h-[300px]  opacity-0 group-hover/card:opacity-100">
          {(!(demo==="")) && <button type="button" className="text-white rounded-2xl px-2 shadow-md shadow-[#f3eee8a8] hover:bg-[#f3eee866] hover:shadow-none border border-white" onClick={()=>window.open(demo)}>Demo</button>}
          <button type="button" className="text-white rounded-2xl px-2 hover:bg-[#f3eee866]" onClick={()=>window.open(github)}>GitHub</button>
        </div>
      </div>
      </CardItem>
      <div className="flex flex-wrap justify-center items-center flex-row gap-2 px-6 pb-6 z-20 cursor-default">
        <h1 className="text-[#f3eee8] font-bold md:text-lg text-center">{title}</h1>
        <p className="text-[#cbcbcb]  text-xs text-center ">{description}</p>
        <p className="text-[#c7b8a6] font-bold text-xs text-center">- {tech}</p>
      </div>
    </motion.div>
    </CardContainer>
    </>
  );
};

export default ProjectCard;