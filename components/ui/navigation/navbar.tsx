

export const Navbar = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <nav className='h-[60px] bg-white border-b-txt px-4'>
            <ul className='max-w-full h-full flex justify-end'>
                {children}
            </ul>
        </nav>
    );
}