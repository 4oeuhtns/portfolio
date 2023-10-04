"use client";

import { Block } from "@/components/ui/block";
import { DropdownItem } from "@/components/ui/navigation/dropdownitem";
import { DropdownMenu } from "@/components/ui/navigation/dropdownmenu";
import { Navbar } from "@/components/ui/navigation/navbar";
import { NavItem } from "@/components/ui/navigation/navitem";
import { ChevronDown, FolderGit2 } from "lucide-react";

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
      <Navbar scrollY={scrollY}>
        <NavItem icon={<FolderGit2 className="text-bg"/>} href="/projects" scrollY={scrollY}/>
        <NavItem icon={<ChevronDown className="text-bg"/>} dropdown scrollY={scrollY}>
          <DropdownMenu>
            <DropdownItem href="/primitives" leftIcon="🙈">Primitives</DropdownItem>
            <DropdownItem href="/objects" leftIcon="💎">Objects</DropdownItem>
            <DropdownItem href="/boolean" leftIcon="✅">Boolean Expressions</DropdownItem>
            <DropdownItem href="/iteration" leftIcon="⚙️">Iteration</DropdownItem>
            <DropdownItem href="/classes" leftIcon="🎓">Classes</DropdownItem>
            <DropdownItem href="/arrays" leftIcon="📦">Arrays</DropdownItem>
            <DropdownItem href="/arraylists" leftIcon="🎁">ArrayLists</DropdownItem>
            <DropdownItem href="/sorting" leftIcon="📈">Searching and Sorting</DropdownItem>
            <DropdownItem href="/arrays2d" leftIcon="🗃️">2D Arrays</DropdownItem>
            <DropdownItem href="/inheritance" leftIcon="👨‍👩‍👦">Inheritance</DropdownItem>
            <DropdownItem href="/recursion" leftIcon="♻️">Recursion</DropdownItem>
          </DropdownMenu>
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