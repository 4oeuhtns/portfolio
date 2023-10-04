import { useState } from "react";

interface NavItemProps {
    icon: React.ReactNode
    children?: React.ReactNode
    href?: string
    dropdown?: boolean
    scrollY: number
}

export const NavItem = ({ 
    icon,
    children,
    href,
    dropdown,
    scrollY
}: NavItemProps) => {
    const [open, setOpen] = useState(false);
    if (scrollY === 0 && open) setOpen(false);
    return (
        <li className="w-[48px] flex items-center justify-center">
            <a
                href={href}
                className={`w-[32px] h-[32px] rounded-[50%] p-[5px] m-[2px] flex items-center justify-center bg-txt hover:-translate-y-1 duration-500 ${open&&dropdown&&'rotate-180'}`}
                onClick={() => setOpen(!open)}
            >
                {icon}
            </a>
            {open && children}
        </li>
    );
}