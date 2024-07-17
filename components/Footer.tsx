"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (
    pathname === "/admin" ||
    pathname === "/admin/featured-images" ||
    pathname === "/admin/gallery-images"
  ) {
    return;
  }
  return (
    <footer className="flex-grow-0 bg-black">
      <div className="max-w-7xl flex items-center justify-center mx-auto p-4">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} by Kineret Dvir.
        </p>
      </div>
    </footer>
  );
}
