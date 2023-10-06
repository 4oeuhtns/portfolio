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
            <DropdownItem href="/blog/primitives" leftIcon="🙈">Primitives</DropdownItem>
            <DropdownItem href="/blog/objects" leftIcon="💎">Objects</DropdownItem>
            <DropdownItem href="/blog/boolean" leftIcon="✅">Boolean Expressions</DropdownItem>
            <DropdownItem href="/blog/iteration" leftIcon="⚙️">Iteration</DropdownItem>
            <DropdownItem href="/blog/classes" leftIcon="🎓">Classes</DropdownItem>
            <DropdownItem href="/blog/arrays" leftIcon="📦">Arrays</DropdownItem>
            <DropdownItem href="/blog/arraylists" leftIcon="🎁">ArrayLists</DropdownItem>
            <DropdownItem href="/blog/sorting" leftIcon="📈">Searching and Sorting</DropdownItem>
            <DropdownItem href="/blog/arrays2d" leftIcon="🗃️">2D Arrays</DropdownItem>
            <DropdownItem href="/blog/inheritance" leftIcon="👨‍👩‍👦">Inheritance</DropdownItem>
            <DropdownItem href="/blog/recursion" leftIcon="♻️">Recursion</DropdownItem>
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