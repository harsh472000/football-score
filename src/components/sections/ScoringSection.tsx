import Image from "next/image";
import { useState } from "react";
import HeroImg from "../../../public/assets/images/football_hero_img.png";
import DateSelector from "../DateSelector";
import MatchList from "../MatchList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import moment from "moment"; // Import moment for date formatting

const queryClient = new QueryClient();
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || ""; // Ensure it's not undefined

if (!API_TOKEN) {
  console.error(
    "⚠️ API Token is missing! Set NEXT_PUBLIC_API_TOKEN in .env.local"
  );
}

export default function ScoringSection() {
  const [selectedDate, setSelectedDate] = useState<string>("Today");

  // Convert selectedDate to API format (YYYY-MM-DD)
  const formattedDate =
    selectedDate === "Today"
      ? moment().format("YYYY-MM-DD")
      : moment(selectedDate, "dddd DD MMM").format("YYYY-MM-DD");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full">
        {/* Hero Image */}
        <Image
          src={HeroImg}
          alt="Hero image"
          className="w-full rounded-[20px] h-[277px] object-cover"
        />

        <div className="mt-4 bg-gray-100 dark:bg-backgroundDark text-backgroundDark dark:text-white px-[14px] py-[20px] rounded-[20px]">
          {/* Date Selector & Search Bar */}
          <div className="">
            <DateSelector
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>

          {/* Match List */}
          <div className="mt-4 overflow-y-auto max-h-[40vh] scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-700 rounded-[20px]">
            <MatchList selectedDate={formattedDate} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
