interface DropdownItemProps {
    children?: React.ReactNode
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export const DropdownItem = ({
    children,
    leftIcon,
    rightIcon
}: DropdownItemProps) => {
    return (
        <a
            href="#"
            className="h-[50px] flex items-center rounded-sm p-2 hover:bg-[#364418] transition-all duration-500"
        >
            <span className="">{leftIcon}</span>
            {children}
            <span className="ml-auto"> {rightIcon}</span>
        </a>
    );
}