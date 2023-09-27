import { useState } from "react";

interface NavItemProps {
    icon: React.ReactNode
    children?: React.ReactNode
}

export const NavItem = ({ 
    icon,
    children
}: NavItemProps) => {
    const [open, setOpen] = useState(false);
    return (
        <li className="w-[48px] flex items-center justify-center">
            <a
                href="#"
                className="w-[30px] h-[30px] rounded-[50%] p-[5px] m-[2px] flex items-center justify-center bg-slate-200"
                onClick={() => setOpen(!open)}
            >
                {icon}
            </a>
            {open && children}
        </li>
    );
}