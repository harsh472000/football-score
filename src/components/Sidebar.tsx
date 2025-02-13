"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Home, Trophy, MessageSquare, Bell, Settings, Download, Shield, User, MapPin, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname(); // Get the current route

    return (
        <aside className="h-[95vh] w-[278px] bg-gray-100 dark:bg-backgroundDark text-backgroundDark dark:text-white transition-all rounded-[10px] flex flex-col sticky top-4">
            {/* Sticky Logo */}
            <div className="py-4 px-6 flex-shrink-0 bg-gray-100 dark:bg-backgroundDark border-b border-gray-300 dark:border-gray-700 rounded-t-[10px]">
                <h1 className="text-2xl font-extrabold text-center italic">
                    FOOTBALL<span className="text-primary font-normal italic">SHURU</span>
                </h1>
            </div>

            {/* Scrollable Menu */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-300 dark:scrollbar-track-gray-700">
                <nav className="mt-4 space-y-1 px-3">
                    <SidebarLink href="/" icon={<Home size={20} />} label="Home" active={pathname === "/"} />
                    <SidebarLink href="/leaderboard" icon={<Trophy size={20} />} label="Leader Board" active={pathname === "/leaderboard"} />
                    <SidebarLink href="/ground" icon={<MessageSquare size={20} />} label="Ground" active={pathname === "/ground"} />
                    <SidebarLink href="/chat" icon={<MessageSquare size={20} />} label="Chat" active={pathname === "/chat"} />
                    <SidebarLink href="/notifications" icon={<Bell size={20} />} label="Notification" active={pathname === "/notifications"} />

                    {/* Divider */}
                    <hr className="my-3 border-gray-300 dark:border-gray-700" />

                    {/* Followed Sections */}
                    <SidebarLink href="/followed-teams" icon={<Shield size={16} />} label="Followed Team" smallText={true} />
                    <SidebarLink href="/followed-players" icon={<User size={16} />} label="Followed Players" smallText={true} />
                    <SidebarLink href="/followed-ground" icon={<MapPin size={16} />} label="Followed Ground" smallText={true} />

                    {/* Divider */}
                    <hr className="my-3 border-gray-300 dark:border-gray-700" />

                    {/* Settings & Download */}
                    <SidebarLink href="/settings" icon={<Settings size={20} />} label="Settings" />
                    <SidebarLink href="/download" icon={<Download size={20} />} label="Download The App" />
                </nav>
            </div>

            {/* Sticky Footer */}
            <div className="px-3 py-4 border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-backgroundDark flex flex-col space-y-3 rounded-b-[10px]">
                {/* Light/Dark Mode Toggle */}
                <ThemeToggle />

                {/* User Info */}
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 p-2 bg-gray-200 dark:bg-mainDark rounded-lg flex-1">
                        <div className="bg-primary h-8 w-8 rounded-[10px] flex items-center justify-center text-white font-bold">
                            V
                        </div>
                        <div>
                            <p className="text-sm font-bold text-primary">Varun_kubal</p>
                            <p className="text-xs text-white font-bold">varun_kubal@gmail.com</p>
                        </div>
                    </div>
                    <Link href="/logout" className="px-2 py-3 bg-gray-200 dark:bg-mainDark rounded-[10px]">
                        <LogOut size={24} className="text-primary transition" />
                    </Link>
                </div>
            </div>
        </aside>
    );
}

const SidebarLink = ({ href, icon, label, smallText, active }: { href: string; icon: React.ReactNode; label: string; active?: boolean; smallText?: boolean }) => (
    <Link href={href} className="block">
        <div className={cn(
            "flex items-center gap-3 px-4 py-[11px] ml-[-13px] mr-[-10px] rounded-md transition relative",
            active ? "text-primary font-semibold" : "hover:bg-gray-200 dark:hover:bg-gray-800",
        )}>
            {/* Left Accent Bar */}
            {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-[7px] bg-primary rounded-br-full rounded-tr-full"></div>}
            <div>{icon}</div>
            <div className="flex items-center justify-between w-full">
                <span className={`font-bold ${smallText && "text-[14px]"}`}>{label}</span>
                {smallText && <ChevronRight size={16} />}
            </div>
        </div>
    </Link>
);