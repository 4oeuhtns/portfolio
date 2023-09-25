import { MoreHorizontal } from 'lucide-react';

interface NavbarProps {
    scrollY: number
}

export const Navbar = ({ scrollY }: NavbarProps) => {
    let y = scrollY;
    const opacity = Math.min(scrollY/500, 1);
    return ( 
        <div className="fixed w-screen flex justify-between items-center z-10 outline outline-txt outline-1 bg-bg text-txt text-lg" style={{opacity: opacity}}>
            <MoreHorizontal />
            <div>About</div>
            <div>Lessons</div>
            <div>Projects</div>
        </div>
    );
}