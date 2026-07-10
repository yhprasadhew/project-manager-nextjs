import React from 'react';
import { Menu, Search, Settings, Bell, Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-white border-b border-gray-200">
      <div className="h-16 flex items-center justify-between px-4">
        {/* Left Side: Menu Button & Search Bar */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="relative flex items-center">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-40 sm:w-64 rounded-lg bg-gray-100 py-1.5 pl-9 pr-4 text-sm outline-none transition-all duration-200 focus:w-48 sm:focus:w-80 focus:bg-white focus:ring-1 focus:ring-blue-500 border border-gray-200 focus:border-blue-500 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Right Side: Action Icons & Profile */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Toggle Dark Mode">
            <Sun className="h-5 w-5" />
          </button>
          
          <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors relative" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>
          
          <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>

          <hr className="h-6 w-px bg-gray-200 mx-2" />

          {/* User profile */}
          <div className="flex items-center gap-2 pl-1 cursor-pointer group">
            <div className="h-8 w-8 rounded-full bg-blue-500 text-white font-medium flex items-center justify-center text-sm shadow-sm">
              P
            </div>
            <span className="hidden sm:inline text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
              Prasad
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
 