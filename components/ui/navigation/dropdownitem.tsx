import Link from "next/link";

interface DropdownItemProps {
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    href: string;
}

export const DropdownItem = ({
    children,
    leftIcon,
    href
}: DropdownItemProps) => {
    return (
        <Link
            href={href}
            className="h-[50px] flex items-center rounded-sm p-2 hover:bg-[#364418] transition-all duration-500 text-txt"
        >
            <span className="w-[32px] h-[32px] rounded-[50%] p-[5px] m-[2px] flex items-center justify-center bg-txt mx-2">{leftIcon}</span>
            {children}
        </Link>
    );
}