"use client";

import { NavItem, SIDENAV_ITEMS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavbar = () => {
  return (
    <div className="md:w-60 bg-black h-screen flex-1 fixed border-r border-secondary hidden md:flex">
      <div className="flex flex-col space-y-6 w-full py-5">
        <Link
          href="/admin"
          className="flex flex-row space-x-3 items-center justify-center"
        >
          <div className="flex justify-center text-[#f4587c] text-2xl md:text-4xl font-bold text-gradient">
            KD
          </div>
        </Link>

        <div className="flex flex-1 flex-col space-y-2 md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;

export const MenuItem = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();

  return (
    <div className="">
      <Link
        href={item.path}
        className={`text-xs sm:text-sm flex flex-row items-center gap-2 p-2 rounded-lg hover:bg-[#3c3b3b] ${
          item.path === pathname ? "bg-[#3c3b3b] font-bold" : ""
        }`}
      >
        {item.icon && item.icon({ className: "size-4 text-white" })}
        <span className="font-medium text-xs sm:text-sm flex text-white">
          {item.title}
        </span>
      </Link>
    </div>
  );
};
