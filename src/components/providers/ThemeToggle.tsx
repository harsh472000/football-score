import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-10" />;
  }

  return (
    <div className="flex p-1 bg-mainDark dark:bg-mainDark rounded-[10px] w-full">
      <button
        className={cn(
          "flex-1 flex items-center justify-center gap-2 py-2 rounded-[10px] text-sm font-semibold transition",
          theme === "light" ? "bg-gray-100 text-black" : "text-gray-400 hover:bg-gray-600"
        )}
        onClick={() => setTheme("light")}
      >
        <Sun size={16} />
        Light
      </button>
      <button
        className={cn(
          "flex-1 flex items-center justify-center gap-2 py-2 rounded-[10px] text-sm font-semibold transition",
          theme === "dark" ? "bg-primary text-black" : "text-gray-400 hover:bg-gray-600"
        )}
        onClick={() => setTheme("dark")}
      >
        <Moon size={16} />
        Dark
      </button>
    </div>
  );
}