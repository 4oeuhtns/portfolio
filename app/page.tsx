"use client";

import { Block } from "@/components/ui/block";
import { DropdownItem } from "@/components/ui/navigation/dropdownitem";
import { DropdownMenu } from "@/components/ui/navigation/dropdownmenu";
import { Navbar } from "@/components/ui/navigation/navbar";
import { NavItem } from "@/components/ui/navigation/navitem";
import { ChevronDown, FolderGit2 } from "lucide-react";

import { useEffect, useState } from "react";

import Image from "next/image";
import profilePic from "@/public/profile.webp"

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
        <NavItem icon={<FolderGit2 className="text-bg" />} href="/projects" scrollY={scrollY} />
        <NavItem icon={<ChevronDown className="text-bg" />} dropdown scrollY={scrollY}>
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
      <div className='relative w-screen h-screen flex  justify-center items-center bg-bg'>
        <Block scrollY={scrollY} />
      </div>
      <div className='pt-[70vh] mx-10 flex justify-between'>
        <div className="flex-shrink-0 mr-5">
          <Image
            className="rounded-full"
            src={profilePic}
            width={378}
            height={378}
            alt="Picture"
            placeholder="blur"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="font-Garamond text-txt text-5xl ">
          <span className="inline-block animate-[wave_3s_ease-in-out_infinite] origin-[70%_70%]">👋</span> Sup.
          <div className="font-sans">
            <p className="my-10 text-xl">
              My name is Felix Zhao, and I am a grade 11 student at William Lyon Mackenzie Collegiate Institute. My journey as a student has been marked by my deep passion for computers and science. From a young age, I&apos;ve been captivated by the world of technology and the boundless possibilities it offers. This curiosity has driven me to explore the intricate workings of computers, from coding and programming to hardware and software.
            </p>
            <p className="my-10 text-xl">
              In addition to my love for technology, my fascination with science knows no bounds. The pursuit of scientific knowledge, understanding the laws that govern the universe, and uncovering the mysteries of our world are endeavors that fill me with excitement. I find joy in conducting experiments, making observations, and pushing the boundaries of what we know.
            </p>
            <p className="my-10 text-xl">
              My educational journey has been a quest for knowledge and hands-on experiences in these fields. With every challenge I encounter, I see an opportunity to learn and grow. Whether it&apos;s tackling complex coding projects, conducting scientific experiments, or collaborating with fellow enthusiasts, I relish the chance to expand my horizons.
            </p>
            <p className="my-10 text-xl">
              I&apos;m excited to embark on this continued journey of intellectual exploration and innovation. The world of technology and science is ever-evolving, and I&apos;m determined to be at the forefront of these advancements. Together with a community of like-minded individuals, I hope to make meaningful contributions, push boundaries, and inspire others to pursue their passions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;