"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  ChevronDown,
  Settings,
  Circle,
  Boxes,
} from "lucide-react";
import { cn } from "@/lib/utils"; // simple clsx/twMerge helper — swap for your own if unavailable

const priorityStyles: Record<string, string> = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

const Sidebar = () => {
  const pathname = usePathname();
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const isActive = (href: string) => pathname === href;

  const navLinkClasses = (href: string) =>
    cn(
      "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
      isActive(href)
        ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
    );

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-white shadow-sm transition-all duration-300 dark:border-gray-800 dark:bg-black">
      <div className="flex h-full flex-col p-4">
        {/* Logo */}
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 px-2 text-2xl font-bold tracking-tight text-blue-600"
        >
          <Boxes size={26} className="shrink-0" strokeWidth={2.2} />
          ProjectOne
        </Link>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1">
          <Link href="/" className={navLinkClasses("/")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          {/* Projects */}
          <button
            onClick={() => setShowProjects((prev) => !prev)}
            aria-expanded={showProjects}
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <FolderKanban size={18} />
              Projects
            </span>
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-200",
                showProjects && "rotate-180"
              )}
            />
          </button>

          {showProjects && (
            <div className="ml-4 flex flex-col gap-0.5 border-l border-gray-200 pl-3 dark:border-gray-800">
              <Link href="/projects" className={navLinkClasses("/projects")}>
                All Projects
              </Link>
              <Link
                href="/projects/create"
                className={navLinkClasses("/projects/create")}
              >
                Create Project
              </Link>
            </div>
          )}

          {/* Priority */}
          <button
            onClick={() => setShowPriority((prev) => !prev)}
            aria-expanded={showPriority}
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            <span className="flex items-center gap-2">
              <Circle size={18} />
              Priority
            </span>
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-200",
                showPriority && "rotate-180"
              )}
            />
          </button>

          {showPriority && (
            <div className="ml-4 flex flex-col gap-0.5 border-l border-gray-200 pl-3 dark:border-gray-800">
              {(["High", "Medium", "Low"] as const).map((level) => (
                <Link
                  key={level}
                  href={`/priority/${level.toLowerCase()}`}
                  className={navLinkClasses(`/priority/${level.toLowerCase()}`)}
                >
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      priorityStyles[level]
                    )}
                  />
                  {level}
                </Link>
              ))}
            </div>
          )}

          <Link href="/settings" className={navLinkClasses("/settings")}>
            <Settings size={18} />
            Settings
          </Link>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
          <p className="text-center text-xs text-gray-400 dark:text-gray-600">
            © 2026 Project Manager
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;