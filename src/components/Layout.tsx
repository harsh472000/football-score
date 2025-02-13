import Sidebar from "./Sidebar";
import TrendingSection from "./TrendingSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-4 dark:bg-mainDark h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-3 gap-4 pl-4">
        {/* Left Section (2/3 width) */}
        <div className="col-span-2 bg-gray-200 dark:bg-backgroundDark rounded-lg p-6">
          {children}
        </div>

        {/* Right Section (1/3 width) */}
        <div className="col-span-1 bg-gray-300 dark:bg-backgroundDark rounded-lg px-[17px] py-[20px]">
          <TrendingSection />
        </div>
      </div>
    </div>
  );
}
