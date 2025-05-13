"use client";

import ContactInfo from "@/components/main/ContactInfo";
import { EdEx } from "@/components/main/EdEx";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/main/Navbar";
import Section from "@/components/main/Section";
import { debounce } from "@/utils/debounce";


export default function Home() {

  const [showEdEx, setshowEdEx] = useState(false);

  const handleNavigationClick = useCallback((section: 'education' | 'experience') =>{
    const newValue = section === 'experience';
    setshowEdEx(newValue);
  }, []);
  const handleToggle = useCallback(() => {
    setshowEdEx((prev) => !prev);
  }, []);


  useEffect(() => {
    console.log("Current section EdEx:", showEdEx ? "experience" : "education");
  }, [showEdEx]);
  
  return (
    <main className="h-full w-full">
      <Navbar onNavClick={handleNavigationClick} />
      <div className="flex flex-col gap-24">
        <section id="about-me">
          <Hero />
        </section>
        <section id={`${showEdEx ? "experience":"education"}`}>
          <EdEx Toggle={showEdEx} onToggle={handleToggle} />
        </section>
        <div className="w-full h-full z-30">
          <section id="skills">
            <Skills />
          </section>
        </div>
        <section id="projects">
          <Projects />
        </section>
        <section id="contacts">
          <ContactInfo />
        </section>
      </div>
    </main>
  );
}