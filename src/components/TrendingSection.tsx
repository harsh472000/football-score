import Image from "next/image";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsItem {
  id: number;
  title: string;
  time: string;
  image: string;
}

const trendingNews: NewsItem[] = [
  {
    id: 1,
    title: "Results And Scores From The Premier League...!!",
    time: "5 Hours Ago",
    image: "/static/news1.jpg",
  },
  {
    id: 2,
    title: "Here Are The Top 100 Players And Managers",
    time: "11 Oct 2023, 06:00 AM",
    image: "/static/news2.jpg",
  },
  {
    id: 3,
    title: "Results And Scores From The Premier League...!!",
    time: "10 Oct 2023, 09:00 PM",
    image: "/static/news3.jpg",
  },
  {
    id: 4,
    title: "Join Or Start A Competition Now!",
    time: "10 Oct 2023, 02:40 PM",
    image: "/static/news4.jpg",
  },
  {
    id: 5,
    title: "Results And Scores From The Premier League...!!",
    time: "09 Oct 2023, 08:12 AM",
    image: "/static/news5.jpg",
  },
  {
    id: 6,
    title: "Results And Scores From The Premier League...!!",
    time: "09 Oct 2023, 02:00 PM",
    image: "/static/news6.jpg",
  },
];

export default function TrendingSection() {
  return (
    <div className=" rounded-lg  w-full max-w-xs">
      {/* Trending Header */}
      <h2 className="text-lg font-bold text-primary mb-4">Trending News</h2>

      {/* Top Featured News */}
      <div className="relative mb-4">
        <Image
          src="/static/news1.jpg"
          alt="Top News"
          width={250}
          height={150}
          className="rounded-lg object-cover w-full h-32"
        />
        <p className="text-sm font-semibold mt-2 text-white">Results And Scores From The Premier League...!!</p>
        <p className="text-xs text-gray-400">5 Hours Ago</p>
      </div>

      {/* Scrollable News List */}
      <div className="overflow-y-auto max-h-[314px] scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-700">
        {trendingNews.map((news) => (
          <div key={news.id} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md transition">
            <Image
              src={news.image}
              alt={news.title}
              width={50}
              height={50}
              className="rounded-md object-cover w-14 h-14"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{news.title}</p>
              <p className="text-xs text-gray-400">{news.time}</p>
            </div>
            <Bookmark size={16} className="text-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
