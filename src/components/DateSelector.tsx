import { Dispatch, SetStateAction } from "react";
import moment from "moment";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Search, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface DateSelectorProps {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

export default function DateSelector({
  selectedDate,
  setSelectedDate,
}: DateSelectorProps) {
  // Generate dynamic dates using Moment.js
  const today = moment();
  const dates = [
    {
      label: today.clone().subtract(2, "days").format("dddd"),
      date: today.clone().subtract(2, "days").format("DD MMM"),
      value: today.clone().subtract(2, "days").format("YYYY-MM-DD"), 
    },
    {
      label: today.clone().subtract(1, "days").format("dddd"),
      date: today.clone().subtract(1, "days").format("DD MMM"),
      value: today.clone().subtract(1, "days").format("YYYY-MM-DD"),
    },
    {
      label: "Today",
      date: today.format("DD MMM"),
      value: today.format("YYYY-MM-DD"),
    },
    {
      label: today.clone().add(1, "days").format("dddd"),
      date: today.clone().add(1, "days").format("DD MMM"),
      value: today.clone().add(1, "days").format("YYYY-MM-DD"),
    },
    {
      label: today.clone().add(2, "days").format("dddd"),
      date: today.clone().add(2, "days").format("DD MMM"),
      value: today.clone().add(2, "days").format("YYYY-MM-DD"),
    },
  ];

  return (
    <div className="space-y-4">
      {/* Top Bar: Live Matches + Search + Filter */}
      <div className="flex items-center justify-between text-white  rounded-md sm:flex-col sm:gap-2">
        {/* Live Matches Badge */}
        <div className="flex items-center space-x-2 bg-gray-200 text-black dark:bg-mainDark dark:text-white px-3 py-1 rounded-md">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="text-primary font-bold text-sm">Live</span>
          <span className="text-gray-400 text-sm">[1]</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-200 text-black dark:bg-mainDark dark:text-white px-3 rounded-md flex-1 mx-3">
          <Search size={16} className="text-gray-400" />
          <Input
            type="text"
            placeholder="Search For Matches"
            className="bg-transparent text-white border-none focus:outline-none focus:ring-0 placeholder-gray-400 w-full"
          />
        </div>

        {/* Filter Button */}
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-gray-200 text-black dark:bg-mainDark dark:text-white px-4 py-1 rounded-md"
        >
          All Matches <ChevronDown size={16} />
        </Button>
      </div>

      {/* Date Selector */}
      <div className="grid grid-cols-6 sm:grid-cols-3 gap-2 w-full">
        {dates.map((date) => (
          <button
            key={date.label}
            className={cn(
              "px-4 py-2 rounded-md transition border border-transparent text-center text-[12px] font-bold flex flex-col items-center bg-gray-200 text-black dark:bg-mainDark dark:text-white hover:bg-gray-300",
              selectedDate === date.label
                ? "bg-primary text-black font-bold border-primary"
                : ""
            )}
            onClick={() => setSelectedDate(date.label)}
          >
            <span
              className={
                selectedDate === date.label ? "dark:text-primary text-black" : "dark:text-white text-black"
              }
            >
              {date.label}
            </span>
            <span className="text-[12px]">{date.date}</span>
          </button>
        ))}

        {/* Calendar Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-[60px] flex flex-col items-center justify-center gap-1 border border-primary text-primary w-full"
            >
              <CalendarIcon size={20} />
              <span className="text-[12px] font-bold leading-tight">
                View Calendar
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <Calendar
              mode="single"
              selected={today.toDate()}
              onSelect={(date) =>
                setSelectedDate(moment(date).format("dddd DD MMM"))
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
