"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Bookmark, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Trending1 from "../../public/assets/images/Trending1.png";
import Trending2 from "../../public/assets/images/Trending2.png";
import Trending3 from "../../public/assets/images/trending3.jpg";
import Trending4 from "../../public/assets/images/trending4.jpg";
import Trending5 from "../../public/assets/images/Trending5.png";
import Trending6 from "../../public/assets/images/Trending6.png";
import { useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  time: string;
  image: any;
  isFilled: boolean;
}

const trendingNews: NewsItem[] = [
  {
    id: 1,
    title: "Results And Scores From The Premier League...!!",
    time: "5 Hours Ago",
    image: Trending2,
    isFilled: false,
  },
  {
    id: 2,
    title: "Here Are The Top 100 Players And Managers",
    time: "11 Oct 2023, 06:00 AM",
    image: Trending3,
    isFilled: false,
  },
  {
    id: 3,
    title: "Results And Scores From The Premier League...!!",
    time: "10 Oct 2023, 09:00 PM",
    image: Trending4,
    isFilled: false,
  },
  {
    id: 4,
    title: "Join Or Start A Competition Now!",
    time: "10 Oct 2023, 02:40 PM",
    image: Trending5,
    isFilled: true,
  },
  {
    id: 5,
    title: "Results And Scores From The Premier League...!!",
    time: "09 Oct 2023, 08:12 AM",
    image: Trending6,
    isFilled: true,
  },
  {
    id: 6,
    title: "Results And Scores From The Premier League...!!",
    time: "09 Oct 2023, 02:00 PM",
    image: Trending2,
    isFilled: false,
  },
];

export default function TrendingSection() {
  const { theme } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="rounded-lg w-full bg-gray-100 dark:bg-backgroundDark p-4 transition-all">
      {/* Trending Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-backgroundDark dark:text-white">
          Trending News
        </h2>
        <ChevronRight color={theme === "dark" ? "#C3CC5A" : "#4B5563"} />
      </div>

      {/* Top Featured News */}
      <div className="relative mb-4">
        <Image
          src={Trending1}
          alt="Top News"
          width={250}
          height={150}
          className="rounded-lg object-cover w-full h-52"
        />
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-semibold  text-backgroundDark dark:text-white">
            Results And Scores From The Premier League...!!
          </p>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="focus:outline-none"
          >
            <Bookmark
              size={20}
              className={cn(
                "transition-all",
                isBookmarked ? "fill-primary text-primary" : "text-primary"
              )}
            />
          </button>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-400">5 Hours Ago</p>
      </div>

      {/* Scrollable News List */}
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-300 dark:scrollbar-track-gray-700 max-h-[55vh]">
        {trendingNews.map((news) => (
          <div
            key={news.id}
            className="flex items-center gap-3 p-2 rounded-md transition hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Image
              src={news.image}
              alt={news.title}
              width={50}
              height={50}
              className="rounded-md object-cover w-14 h-14"
            />
            <div className="flex-1">
              <p className="text-[16px] font-semibold text-backgroundDark dark:text-white">
                {news.title}
              </p>
              <p className="text-xs text-gray-600 dark:text-[#808080]">
                {news.time}
              </p>
            </div>
            <Bookmark size={16} className={cn("text-primary",news.isFilled ? "fill-primary text-primary" : "text-primary")} />
          </div>
        ))}
      </div>
    </div>
  );
}
