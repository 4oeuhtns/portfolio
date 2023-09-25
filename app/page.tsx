"use client";

import { Block } from "@/components/ui/block";
import { Navbar } from "@/components/ui/navbar";
import { useSpring } from "framer-motion";

import { useEffect, useState } from "react";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar scrollY={scrollY} />
      <div className='relative w-screen h-screen flex justify-center items-center bg-bg'>
        <Block scrollY={scrollY} />
      </div>
      <div className='w-screen h-screen flex justify-center items-center bg-bg'>

      </div>
      <div className='w-screen h-screen flex justify-center items-center bg-bg'>

      </div>
      
    </div>
  );
}

export default HomePage;