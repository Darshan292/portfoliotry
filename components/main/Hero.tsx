import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 brightness-85 absolute lg:top-[-250px] md:top-[-315px] sm:top-[-285px] top-[-270px] min-[400px]:top-[-255px] h-full w-full left-0 z-[-1] object-cover"
      >
        <source src="/BlueBlackHole.webm" type="video/webm" />
      </video> */}
        <HeroContent />
    </div>
  );
};

export default Hero;