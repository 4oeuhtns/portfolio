interface DropdownMenuProps {
    children: React.ReactNode;
}

export const DropdownMenu = ({
    children
}: DropdownMenuProps) => {
    return (
        <div className="z-10 absolute top-[58px] w-[300px] translate-x-[-45%] bg-bg border-[#364418] border-2 rounded-sm p-4 overflow-hidden">
            {children}
        </div>
    );
}