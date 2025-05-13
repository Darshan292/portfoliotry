import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Toggle() {

    const [toggle,setToggle] = useState<boolean>(false)

  return (
    <div
    onClick={()=>setToggle(!toggle)}
    className={`flex h-6 w-12 cursor-pointer rounded-full border border-white ${
        toggle? " bg-purple-300 justify-end" : " bg-cyan-300 justify-start"
    } p-[1px]`}>
        <motion.div
        className={`h-5 w-5 rounded-full ${
            toggle ? "bg-cyan-300":"bg-purple-300"
        }`}
        layout
        transition={{type:'spring', stiffness:700, damping:30}}/>
        
    </div>
  )
}
