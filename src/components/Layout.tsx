import Sidebar from "./Sidebar";
import TrendingSection from "./TrendingSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-4 dark:bg-mainDark h-screen sm:h-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex gap-4 pl-4 sm:flex-col sm:pl-0 md:pl-0">
        <div className="w-2/3 sm:w-full rounded-lg">{children}</div>
        <div className="w-1/3 sm:w-full bg-gray-100 dark:bg-backgroundDark rounded-lg">
          <TrendingSection />
        </div>
      </div>
    </div>
  );
}
