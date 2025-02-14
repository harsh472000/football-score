"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "../providers/ThemeToggle";
import {
  Home,
  Trophy,
  MessageSquare,
  Bell,
  Settings,
  Download,
  Shield,
  User,
  MapPin,
  LogOut,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isMobile: boolean;
}

const MENU_ITEMS = [
  { href: "/", icon: <Home size={20} />, label: "Home" },
  { href: "/leaderboard", icon: <Trophy size={20} />, label: "Leader Board" },
  { href: "/ground", icon: <MessageSquare size={20} />, label: "Ground" },
  { href: "/chat", icon: <MessageSquare size={20} />, label: "Chat" },
  { href: "/notifications", icon: <Bell size={20} />, label: "Notification" },
];

const FOLLOWED_ITEMS = [
  { href: "/followed-teams", icon: <Shield size={16} />, label: "Followed Team" },
  { href: "/followed-players", icon: <User size={16} />, label: "Followed Players" },
  { href: "/followed-ground", icon: <MapPin size={16} />, label: "Followed Ground" },
];

const SETTINGS_ITEMS = [
  { href: "/settings", icon: <Settings size={20} />, label: "Settings" },
  { href: "/download", icon: <Download size={20} />, label: "Download The App" },
];

export default function Sidebar({ isMobile }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "h-[95vh] sm:h-full sm:w-full md:hidden w-[278px] bg-gray-100 dark:bg-backgroundDark text-backgroundDark dark:text-white transition-all rounded-[10px] flex flex-col sticky top-4",
        isMobile ? "sm:hidden" : "sm:block"
      )}
    >
      {/* Logo Section */}
      <div className="py-4 px-6 flex-shrink-0 bg-gray-100 dark:bg-backgroundDark border-b border-gray-300 dark:border-gray-700 rounded-t-[10px]">
        <h1 className="text-2xl font-extrabold text-center italic">
          FOOTBALL<span className="text-primary font-normal italic">SHURU</span>
        </h1>
      </div>

      {/* Menu Section */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-300 dark:scrollbar-track-gray-700 px-3">
        {/* Main Menu */}
        {MENU_ITEMS.map(({ href, icon, label }) => (
          <SidebarLink key={href} href={href} icon={icon} label={label} active={pathname === href} />
        ))}

        {/* Divider */}
        <hr className="my-3 border-gray-300 dark:border-gray-700" />

        {/* Followed Section */}
        {FOLLOWED_ITEMS.map(({ href, icon, label }) => (
          <SidebarLink key={href} href={href} icon={icon} label={label} smallText />
        ))}

        {/* Divider */}
        <hr className="my-3 border-gray-300 dark:border-gray-700" />

        {/* Settings Section */}
        {SETTINGS_ITEMS.map(({ href, icon, label }) => (
          <SidebarLink key={href} href={href} icon={icon} label={label} />
        ))}
      </div>

      {/* Footer Section */}
      <div className="px-3 py-4 border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-backgroundDark flex flex-col space-y-3 rounded-b-[10px]">
        <ThemeToggle />
        <UserSection />
      </div>
    </aside>
  );
}

const SidebarLink = ({ href, icon, label, smallText, active }: { 
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  smallText?: boolean;
}) => (
  <Link href={href} className="block">
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-[11px] ml-[-13px] mr-[-10px] rounded-md transition relative",
        active ? "text-primary font-semibold" : "hover:bg-gray-200 dark:hover:bg-gray-800"
      )}
    >
      {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-[7px] bg-primary rounded-br-full rounded-tr-full"></div>}
      <div>{icon}</div>
      <div className="flex items-center justify-between w-full">
        <span className={`font-bold ${smallText && "text-[14px]"}`}>{label}</span>
        {smallText && <ChevronRight size={16} />}
      </div>
    </div>
  </Link>
);

const UserSection = () => (
  <div className="flex items-center justify-between gap-2">
    <div className="flex items-center space-x-2 p-2 bg-gray-200 dark:bg-mainDark rounded-lg flex-1">
      <div className="bg-primary h-8 w-8 rounded-[10px] flex items-center justify-center text-white font-bold">V</div>
      <div>
        <p className="text-sm font-bold text-primary">Varun_kubal</p>
        <p className="text-xs text-white font-bold">varun_kubal@gmail.com</p>
      </div>
    </div>
    <Link href="/logout" className="px-2 py-3 bg-gray-200 dark:bg-mainDark rounded-[10px]">
      <LogOut size={24} className="text-primary transition" />
    </Link>
  </div>
);
