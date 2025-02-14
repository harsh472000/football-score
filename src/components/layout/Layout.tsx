"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import TrendingSection from "../sections/TrendingSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex p-4 dark:bg-mainDark h-screen sm:h-full relative">
      {/* Sidebar */}
      <div className="hidden sm:block">
        <button
          className="absolute top-4 left-4 z-50 bg-gray-200 dark:bg-backgroundDark p-2 rounded-md"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} className="text-primary" />
        </button>
      </div>

      {/* Sidebar for Desktop (Always Visible) */}
      <div className="sm:hidden md:block">
        <Sidebar isMobile={true} />
      </div>

      {/* Sidebar for Mobile (Toggles) */}
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 sm:block md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-[278px] bg-gray-100 dark:bg-backgroundDark transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:w-[80%] sm:max-w-xs sm:z-50 md:hidden`}
          >
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 p-2 rounded-md bg-gray-200 dark:bg-backgroundDark"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={24} className="text-primary" />
            </button>
            <Sidebar isMobile={false} />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex gap-4 pl-4 sm:flex-col sm:pl-0 md:pl-0">
        <div className="w-2/3 sm:w-full rounded-lg overflow-y-auto">{children}</div>
        <div className="w-1/3 sm:w-full bg-gray-100 dark:bg-backgroundDark rounded-lg">
          <TrendingSection />
        </div>
      </div>
    </div>
  );
}
