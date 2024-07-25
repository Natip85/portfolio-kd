"use client";
import { NAV_ITEMS, NavItem } from "@/constants";
import UseScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TransitionLink } from "./TransitionLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
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
            {item.icon && item.icon({ className: "size-4" })}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#191919] flex flex-col space-y-2">
            {item.submenuItems?.map((subItem, idx) => {
              return (
                <DropdownMenuItem key={idx} asChild>
                  <Link
                    href={subItem.path}
                    className={cn(
                      "hover:bg-secondary hover:text-black p-1.5 rounded-md text-white",
                      {
                        "font-bold text-red-500": subItem.path === pathname,
                      }
                    )}
                  >
                    {subItem.title}
                  </Link>
                </DropdownMenuItem>
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
