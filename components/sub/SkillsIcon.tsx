import { useEffect, useRef, useState } from "react";
import IconCloud from "./icon-cloud";
import { motion, useInView } from "framer-motion";
import { skillsmidAnimationVariants } from "@/utils/motion";


const slugs = [
 "cc",
 "cc++",
 "creactjs",
 "candroidstudio",
 "cfigma",
 "cyolov8(s)",
 "copencv", 
 "cmysql", 
 "cfirebase", 
 "cmongodb", 
 "cframer", 
 "cflask", 
 "cexpress", 
 "cnodejs", 
 "ccss", 
 "chtml", 
 "csql", 
 "ctypescript", 
 "cnextjs", 
 "cjava", 
 "cpython", 
 "cjavascript",
 "cpuppeteer",
 "cdocker",
 "coracle",
 "cvisualstudio",
 "ceclipse",
 "cgooglecolab"
];

export function IconCloudDemo() {


  return (
    <motion.div 
    className="relative flex h-full w-full max-sm:w-64 max-sm:h-72 items-center justify-center overflow-hidden rounded-lg bg-background pb-20 pt-8 max-lg:pb-1 max-lg:-mt-12">
      <IconCloud iconSlugs={slugs}/>
    </motion.div>
  );
}
