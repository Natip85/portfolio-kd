"use client";
import { NAV_ITEMS, NavItem } from "@/constants";
import UseScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TransitionLink } from "./TransitionLink";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = UseScroll(5);
  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-50 w-full transition-all bg-black p-2`,
        {
          "border-b border-secondary bg-background/75 backdrop-blur-lg":
            scrolled,
        }
      )}
    >
      <div className="flex h-[47px] max-w-6xl mx-auto items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <TransitionLink
            href="/"
            className="flex flex-row space-x-3 items-center justify-center"
          >
            <div className="flex justify-center text-[#f4587c] text-2xl md:text-4xl font-bold text-gradient">
              KD
            </div>
          </TransitionLink>
        </div>
        <div className="flex items-center gap-5">
          {NAV_ITEMS.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
const MenuItem = ({ item }: { item: NavItem }) => {
  const scrolled = UseScroll(5);

  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        // <div className="relative">
        //   <button
        //     onClick={toggleSubMenu}
        //     className={cn(
        //       "flex w-full items-center gap-2 text-xl md:text-2xl text-white transition duration-700 ease-in-out hover:font-semibold",
        //       {
        //         "flex w-full text-xl md:text-2xl text-black transition duration-700 ease-in-out hover:font-semibold":
        //           scrolled,
        //       }
        //     )}
        //   >
        //     <div className="flex flex-row space-x-4 items-center">
        //       {item.icon && item.icon({ className: "size-4" })}
        //       <span className="font-medium flex">{item.title}</span>
        //     </div>

        //     <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
        //       <ChevronDown />
        //     </div>
        //   </button>

        //   {subMenuOpen && (
        //     <div className="absolute rounded-lg p-3 top-10 bg-[#191919] flex flex-col space-y-2 w-[200px]">
        //       {item.submenuItems?.map((subItem, idx) => {
        //         return (
        //           <TransitionLink
        //             key={idx}
        //             href={subItem.path}
        //             className={`${
        //               subItem.path === pathname ? "font-bold text-red-500" : ""
        //             } hover:bg-secondary hover:text-black p-1.5 rounded-md text-white`}
        //           >
        //             {subItem.title}
        //           </TransitionLink>
        //         );
        //       })}
        //     </div>
        //   )}
        // </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "flex w-full items-center gap-2 text-xl md:text-2xl text-white transition duration-700 ease-in-out hover:font-semibold",
              {
                "flex w-full text-xl md:text-2xl text-black transition duration-700 ease-in-out hover:font-semibold":
                  scrolled,
              }
            )}
          >
            {item.title}
            {/* <ChevronDown /> */}
            {item.icon && item.icon({ className: "size-4" })}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#191919] flex flex-col space-y-2">
            {item.submenuItems?.map((subItem, idx) => {
              return (
                <TransitionLink
                  key={idx}
                  href={subItem.path}
                  className={cn(
                    "hover:bg-secondary hover:text-black p-1.5 rounded-md text-white",
                    {
                      "font-bold text-red-500": subItem.path === pathname,
                    }
                  )}
                >
                  {subItem.title}
                </TransitionLink>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <TransitionLink
          href={item.path}
          className={cn(
            "flex w-full text-xl md:text-2xl text-white transition duration-700 ease-in-out hover:font-semibold",
            {
              "flex w-full text-xl md:text-2xl text-black transition duration-700 ease-in-out hover:font-semibold":
                scrolled,
              "border-b border-red-500": item.path === pathname,
            }
          )}
        >
          {item.icon && item.icon({ className: "size-4" })}
          {item.title}
        </TransitionLink>
      )}
    </div>
  );
};
