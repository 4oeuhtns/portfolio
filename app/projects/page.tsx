"use client";

import { DropdownItem } from "@/components/ui/navigation/dropdownitem";
import { DropdownMenu } from "@/components/ui/navigation/dropdownmenu";
import { Navbar } from "@/components/ui/navigation/navbar";
import { NavItem } from "@/components/ui/navigation/navitem";
import { FolderGit2, ChevronDown } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import amori from "@/public/amori.png";
import inbot from "@/public/inbot.png";
import learnai from "@/public/learnai.png";
import timbertrek from "@/public/timbertrek.png";

import 'styles/markdown.css'

const Projects = () => {
    return (
        <div>
            <Navbar>
                <NavItem icon={<FolderGit2 className="text-bg" />} href="/projects" />
                <NavItem icon={<ChevronDown className="text-bg" />} dropdown>
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
            <div className='text-txt mt-20 flex justify-center'>
                <div className='mx-20'>
                    <h1 className='font-extrabold text-5x mb-1'>Projects</h1>
                </div>

            </div>
            <div className="flex justify-around mt-5 mb-20">
                <div className="bg-txt rounded-md text-bg m-5 p-5">
                    <h1 className='font-extrabold text-5x mb-1 italic'>Timber Trek</h1>
                    <Image
                        className="rounded-md my-5"
                        src={timbertrek}
                        alt="Picture"
                        placeholder="blur"
                    />
                    Welcome to Timber Trek, a video game that tests your forest survival skills! In this game, you'll learn about surviving in the forest, navigate through various levels, overcome obstacles, and explore the forest.
                    <Link className="flex items-center justify-center font-Garamond  text-xl italic hover:-translate-y-1 duration-500 my-5" href="/">
                        <div className="-translate-y-[2px] text-bg">Learn more →</div>
                    </Link>
                </div>
                <div className="bg-txt rounded-md text-bg m-5 p-5">
                    <h1 className='font-extrabold text-5x mb-1 italic'>Amori</h1>
                    <Image
                        className="rounded-md my-5"
                        src={amori}
                        alt="Picture"
                        placeholder="blur"
                    />
                    Welcome to Amori, a video game made in processing which goes through a complex story. You will encounter many bosses and even different endings.
                    <Link className="flex items-center justify-center font-Garamond  text-xl italic hover:-translate-y-1 duration-500 my-5" href="/">
                        <div className="-translate-y-[2px] text-bg">Learn more →</div>
                    </Link>
                </div>
                <div className="bg-txt rounded-md text-bg m-5 p-5">
                    <h1 className='font-extrabold text-5x mb-1 italic'>LearnAI.js</h1>
                    <Image
                        className="rounded-md my-5"
                        src={learnai}
                        alt="Picture"
                        placeholder="blur"
                    />
                    Welcome to LearnAI.js, a Grade 11 Computer Science final project aimed at teaching the fundamentals of Artificial Intelligence (AI) at a basic level, along with an introduction to basic calculus concepts.
                    <Link className="flex items-center justify-center font-Garamond  text-xl italic hover:-translate-y-1 duration-500 my-5" href="/">
                        <div className="-translate-y-[2px] text-bg">Learn more →</div>
                    </Link>
                </div>
                <div className="bg-txt rounded-md text-bg m-5 p-5">
                    <h1 className='font-extrabold text-5x mb-1 italic'>Inbot</h1>
                    <Image
                        className="rounded-md my-5"
                        src={inbot}
                        alt="Picture"
                        placeholder="blur"
                    />
                    Welcome to Inbot, your personal discord mailbox that uses Gmail API and py-cord. The bot has 2 main functions, reading emails and sending emails.
                    <Link className="flex items-center justify-center font-Garamond  text-xl italic hover:-translate-y-1 duration-500 my-5" href="/">
                        <div className="-translate-y-[2px] text-bg">Learn more →</div>
                    </Link>
                </div>
            </div>
            <footer className='text-txt flex justify-between border-[#364418] border-t-2 p-8'>
                <Link className="flex items-center justify-center font-Garamond  text-xl italic hover:-translate-y-1 duration-500 mx-5" href="/">
                    <div className="-translate-y-[2px] text-txt">← Back to home</div>
                </Link>
                @ Felix Zhao, 2023
            </footer>
        </div>
    );
}

export default Projects;