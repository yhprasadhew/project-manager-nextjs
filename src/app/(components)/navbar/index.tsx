import React from "react";
import Link from "next/link";
import { Menu, Search, Settings, Bell, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4">

        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 md:hidden">
            <Menu className="h-6 w-6" />
          </button>

          <div className="relative flex items-center">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              type="search"
              placeholder="Search..."
              className="w-40 rounded-lg border border-gray-200 bg-gray-100 py-1.5 pl-9 pr-4 text-sm text-gray-700 outline-none transition-all focus:w-48 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 sm:w-64 sm:focus:w-80"
            />
          </div>
        </div>


        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Theme */}
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
            <Sun className="h-5 w-5" />
          </button>


          {/* Notification */}
          <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100">
            <Bell className="h-5 w-5" />

            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>


          {/* Settings Link */}
          <Link
            href="/settings"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </Link>


          <hr className="mx-2 h-6 w-px bg-gray-200" />


          {/* Profile */}
          <div className="group flex cursor-pointer items-center gap-2 pl-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white shadow-sm">
              P
            </div>

            <span className="hidden text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900 sm:inline">
              Prasad
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;