export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  }
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  export const boxAnimationVariants = {
    initial : {
      opacity:0,
      y:50,
    },
    animate:{
      opacity:1,
      y:0,
    },
  };
  
  export const textAnimationVariants = {
    initial : {
      opacity : 0,
      y : -30
    },
    animate : {
      opacity : 1,
      y : 0,
    },
  }
  
  export const titleAnimationVariants = {
    initial : {
      opacity : 0,
      y : -10
    },
    animate : {
      opacity : 1,
      y : 0
    },
  }

  export const cardAnimationVariants = {
    initial : {
      opacity : 0,
      y : -70,
    },
    animate : {
      opacity : 1,
      y : 0,
    },
  }

  export const skillsbotAnimationVariants = {
    initial : {
      opacity : 0,
      y : 30,
    },
    animate : {
      opacity : 1,
      y : 0
    },
  }

  export const skillstopAnimationVariants = {
    initial : {
      opacity : 0,
      y : 10,
    },
    animate : {
      opacity : 1,
      y : [0,-10,0],
    },
  }

  export const skillsmidAnimationVariants = {
    initial : {
      opacity : 0,
    },
    animate : {
      opacity : 1,
    },
  }
  