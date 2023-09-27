"use client";

import { Block } from "@/components/ui/block";
import { DropdownMenu } from "@/components/ui/navigation/dropdownmenu";
import { Navbar } from "@/components/ui/navigation/navbar";
import { NavItem } from "@/components/ui/navigation/navitem";
import { ChevronDown } from "lucide-react";

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
      <Navbar>
        <NavItem icon="🍀"/>
        <NavItem icon="😀"/>
        <NavItem icon="🍀"/>
        <NavItem icon={<ChevronDown />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
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