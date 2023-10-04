import Link from "next/link";

interface NavbarProps {
  children?: React.ReactNode;
  scrollY: number;
}

export const Navbar = ({
  children,
  scrollY
}: NavbarProps) => {
  
  const threshold = 500;
  const opacity = scrollY / threshold;
  let y = Math.min((scrollY - 0) * (0 + 60) / (threshold - 0) - 60, 0);

  return (
    <nav className='z-10 fixed w-full h-[60px] bg-bg border-[#364418] border-b-2 px-8' style={{ opacity: `${opacity}`, transform: `translate(0, ${y}px)` }}>
      <ul className='max-w-full h-full flex justify-between items-center'>
        <Link className="flex items-center justify-center w-[36px] h-[36px] text-[30px] font-Garamond italic text-bg bg-txt rounded-xl hover:-translate-y-1 duration-500" href="#">
          <div className="-translate-y-[2px] text-bg">f</div>
        </Link>
        <div className="flex items-center">
          {children}
        </div>
      </ul>
    </nav>
  );
}