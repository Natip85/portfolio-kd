"use client";
import { NAV_ITEMS } from "@/constants";
import UseScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { TransitionLink } from "./TransitionLink";

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
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center"
          >
            <div className="flex justify-center text-[#f4587c] text-2xl md:text-4xl font-bold text-gradient">
              KD
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <MenuItem key={idx}>
                <TransitionLink
                  href={item.path}
                  className={cn(
                    "flex w-full text-xl md:text-2xl text-white transition duration-700 ease-in-out hover:font-semibold",
                    {
                      "font-semibold border-b-2 border-red-500":
                        item.path === pathname,
                      "text-black": scrolled,
                    }
                  )}
                >
                  {item.title}
                </TransitionLink>
              </MenuItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};
