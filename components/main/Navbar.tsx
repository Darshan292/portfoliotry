import { Socials } from "@/constants";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface NavProps{
  onNavClick: (section: 'education' | 'experience') => void;
}

const Navbar:React.FC<NavProps> = ({onNavClick}) => {
  const [isOpen, setIsOpen] = useState(false); 
  const handleBurger = () => {
    setIsOpen(!isOpen);
};


const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
        console.log("Show Navbar") // Show navbar
      } else {
        setTop(-70); // Hide navbar
        console.log("Hide Navbar")
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <>
    <div className="max-lg:hidden w-full h-[65px] fixed top-0 shadow-lg shadow-[#162640]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 transition-all duration-300"
    style={{ top: `${top}px` }}>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/LetterD.svg"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer"
          />

          <span className="font-bold ml-[10px] block text-gray-300 max-md:text-[15px] ">
            Welcome to My Portfolio
          </span>
        </a>


        <div className="w-[600px] h-full flex flex-row items-center justify-between mr-20 ">
          <div className="flex items-center justify-between w-full h-auto border border-[#488AC7] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 max-[1150px]:text-xs">
          <a href="#about-me" className={`cursor-pointer hover:text-[#9dd0ff] px-2 rounded-full`}>
              About me
            </a>
            <a href="#education" className={`cursor-pointer hover:text-[#9dd0ff] px-2 rounded-full`} onClick={() => {onNavClick('education'); }}>
              Education
            </a>
            <a href="#experience" className={`cursor-pointer hover:text-[#9dd0ff] px-2 rounded-full`} onClick={() => {onNavClick('experience');}}>
              Experience
            </a>
            <a href="#skills" className={`cursor-pointer hover:text-[#9dd0ff] px-2 rounded-full`}>
              Skills
            </a>
            <a href="#projects" className={`cursor-pointer hover:text-[#9dd0ff] px-2 rounded-full`}>
              Projects
            </a>
            <a href="#contacts" className={`cursor-pointer hover:text-[#9dd0ff] px-2 rounded-full`}>
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a key={social.name} href={`${social.link}`}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="rounded"
            />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="fixed lg:hidden justify-between items-center z-[60] p-2 w-fit h-fit transition-all duration-300"
    style={{ top: `${top}px` }}>
        <button onClick={handleBurger} className="flex flex-col justify-center items-center z-50 p-1 mt-1 rounded-md mx-auto">
          <span className={` block transition-all duration-300 ease-out h-1 w-6 rounded-sm bg-white ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`} >
          </span>
          <span className={`bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
          </span>
          <span className={` block transition-all duration-300 ease-out h-1 w-6 rounded-sm bg-white ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`} >
          </span>    
        </button>
          <div className={`overflow-hidden transition-max-height duration-300 ease-in-out px-2 rounded-xl mt-2 ${isOpen ? 'max-h-80 bg-[#03001417] backdrop-blur-sm border' : 'max-h-0'}`}>
            <div className={` flex flex-col text-white gap-5 text-lg items-center my-2 `}>
              <a href="#about-me" className={`cursor-pointer hover:text-[#9dd0ff] rounded-full`} onClick={()=>setIsOpen(false)}>
                <svg className={`h-[30px] w-[30px] text-white rounded-full  `}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </a>
              <a href="#education" className={`cursor-pointer hover:text-[#9dd0ff]  rounded-full`} onClick={() => {onNavClick('education'); setIsOpen(false)}}>
                  <svg  className={`h-7 w-7 text-white rounded-full p-[1px]`}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" d="M12 2L1 7l11 5 11-5-11-5z" />
                    <path strokeWidth="2" d="M12 22l0-10M12 12L1 7m11 5l11-5" />
                    <path strokeWidth="2" d="M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
                  </svg>
              </a>
              <a href="#experience" className={`cursor-pointer hover:text-[#9dd0ff]  rounded-full`} onClick={() => {onNavClick('experience'); setIsOpen(false)}}>
                <svg className={`h-7 w-7 text-white rounded-full `}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="7" width="18" height="13" rx="2" />  
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />  
                  <line x1="12" y1="12" x2="12" y2="12.01" />  
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </a>
              <a href="#skills" className={`cursor-pointer hover:text-[#9dd0ff] rounded-full`}  onClick={()=>setIsOpen(false)}>
                <svg className={`h-7 w-7 text-white rounded-full p-[1px] `}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                  <polyline points="12 8 7 3 3 7 8 12" />
                  <line x1="7" y1="8" x2="5.5" y2="9.5" />
                  <polyline points="16 12 21 17 17 21 12 16" />  
                  <line x1="16" y1="17" x2="14.5" y2="18.5" />
                </svg>
              </a>
              <a href="#projects" className={`cursor-pointer hover:text-[#9dd0ff] rounded-full`}  onClick={()=>setIsOpen(false)}>
              <svg className={`h-7 w-7 text-white rounded-full p-[1px]`}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/> 
                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />  
                <circle cx="15" cy="9" r="1"  />
              </svg>
              </a>
              <a href="#contacts" className={`cursor-pointer hover:text-[#9dd0ff] rounded-full`}  onClick={()=>setIsOpen(false)}>
                <svg className ={`h-7 w-7 text-white rounded-full p-[1px] `}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                  <path stroke="none" d="M0 0h24v24H0z"/>  
                  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  
                  <line x1="12" y1="11" x2="12" y2="11.01" />  
                  <line x1="8" y1="11" x2="8" y2="11.01" />  
                  <line x1="16" y1="11" x2="16" y2="11.01" />
                </svg>
              </a>
            </div>
      </div>
    </div>

    <div className={`lg:hidden fixed w-full h-fit z-50 shadow-lg shadow-[#162640]/50 bg-[#03001417] backdrop-blur-md pr-3 py-3 transition-all duration-300`}
    style={{ top: `${top}px` }}>
      <div className="flex flex-row justify-end gap-4"> 
      {Socials.map((social) => (
      <a key={social.name} href={`${social.link}`}>
      <Image
        src={social.src}
        alt={social.name}
        key={social.name}
        width={26}
        height={26}
        className="rounded"
      />
      </a>
    ))}
      </div>
    </div>
    </>
  );
};

export default Navbar;