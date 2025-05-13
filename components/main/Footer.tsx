import React from "react";
const Footer = () => {
  return (
   <div className="text-white w-full grid grid-cols-3 px-3 justify-center items-center mt-9 max-lg:grid-cols-1">
    <div className="col-span-1 flex flex-row gap-1 w-fit z-40 p-2 ml-auto max-lg:text-sm max-lg:ml-0 max-lg:py-1">
        <p className="text-white text-md">&#128222;</p>
        <a href="tel:9483708643">+91-9483708643</a>
    </div>
    <div className=" col-span-1 flex flex-row gap-2 w-fit p-2 z-40 mx-auto max-lg:text-sm max-lg:ml-0 max-lg:py-1">
        <p className="text-white text-lg ">&#128231;</p>
        <a href="mailto:darshanshetty20902@gmail.com" className="max-lg:pt-[5px]">darshanshetty20902@gmail.com</a>
    </div>
    <div className="col-span-1 flex flex-row gap-1 w-fit z-40 p-2 mr-auto max-lg:text-sm max-lg:ml-0 max-lg:py-1">
        <p className="text-white text-lg">&#128205;</p>
        <p>Udupi, Karnataka, India</p>
    </div>
   </div>
  )
}

export default Footer