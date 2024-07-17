"use client";
import { SIDENAV_ITEMS } from "@/constants";
import { MenuItem } from "./SideNavbar";
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <div className="flex items-center justify-between md:hidden p-4 bg-black">
      <div className="hidden sm:block">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center"
        >
          <div className="flex justify-center text-2xl md:text-4xl font-bold text-gradient">
            KD
          </div>
        </Link>
      </div>
      <div className="md:hidden flex items-center gap-3">
        {SIDENAV_ITEMS.map((item, idx) => {
          return <MenuItem key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}
