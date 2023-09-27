import { ChevronDown } from "lucide-react";
import { DropdownItem } from "./dropdownitem";

export const DropdownMenu = () => {
    return (
        <div className="z-10 absolute top-[58px] w-[300px] translate-x-[-45%] bg-bg border-[#364418] rounded-sm p-4 overflow-hidden">
            <DropdownItem leftIcon="😀" rightIcon={<ChevronDown />}>Hello world</DropdownItem>
            <DropdownItem>123123123</DropdownItem>
        </div>
    );
}