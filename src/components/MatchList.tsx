"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Match {
  id: number;
  leagueId: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  status: string;
  score?: string;
}

interface ApiMatch {
  id: number;
  league_id: number;
  name: string;
  league?: { name?: string };
  starting_at: string;
  state_id: number;
  result_info?: string;
}

async function fetchMatches(date: string): Promise<{
  [leagueId: number]: { leagueName: string; matches: Match[] };
}> {
  try {
    const response = await axios.get(`/api/fixtures`, {
      params: { date },
    });

    const groupedMatches: {
      [leagueId: number]: { leagueName: string; matches: Match[] };
    } = {};

    // Ensure response.data.data is an array before iterating
    const matchesData = Array.isArray(response.data.data)
      ? response.data.data
      : [];

    matchesData.forEach((match: ApiMatch) => {
      const [homeTeam, awayTeam] = match.name.split(" vs ");
      const leagueId = match.league_id;
      const leagueName = match.league?.name || `League ${leagueId}`;

      const matchData: Match = {
        id: match.id,
        leagueId,
        league: leagueName,
        homeTeam: homeTeam || "Unknown",
        awayTeam: awayTeam || "Unknown",
        time: new Date(match.starting_at).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: match.state_id === 1 ? "Upcoming" : "Live/Completed",
        score: match.result_info || "-",
      };

      if (!groupedMatches[leagueId]) {
        groupedMatches[leagueId] = { leagueName, matches: [] };
      }

      groupedMatches[leagueId].matches.push(matchData);
    });

    return groupedMatches;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error;
  }
}

export default function MatchList({ selectedDate }: { selectedDate: string }) {
  console.log(selectedDate);
  const { data, isLoading, error } = useQuery({
    queryKey: ["matches", selectedDate],
    queryFn: () => fetchMatches(selectedDate),
    staleTime: 60000,
  });

  if (isLoading)
    return <p className="text-center text-gray-500">Loading matches...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching matches.</p>;

  // Check if no leagues or matches were returned
  if (!data || Object.keys(data).length === 0) {
    return <p className="text-center text-gray-500">No Matches found.</p>;
  }

  return (
    <div className="space-y-6">
      {Object.values(data).map(({ leagueName, matches }) => (
        <div
          key={leagueName}
          className="rounded-[10px] border border-gray-300 dark:border-black"
        >
          {/* League Header */}
          <div className="bg-black text-white font-bold text-[14px] py-2 px-[17px] rounded">
            {leagueName} <span className="text-gray-400">[Quarter Finals]</span>
          </div>

          {/* Check if there are matches in this league */}
          {matches.length === 0 ? (
            <p className="p-4 text-center text-gray-500">
              No matches found in this league.
            </p>
          ) : (
            matches.map((match, index) => (
              <div
                key={match.id}
                className={`p-4 transition ${
                  index % 2 === 0
                    ? "bg-gray-200 dark:bg-mainDark"
                    : "bg-gray-100 dark:bg-backgroundDark"
                }`}
              >
                {/* Match Info */}
                <div className="flex items-center">
                  <div className="w-[10%]">
                    <span
                      className={`text-sm ${
                        match.status === "Live/Completed"
                          ? "text-primary"
                          : "text-backgroundDark dark:text-white"
                      }`}
                    >
                      {match.status === "Live/Completed" ? "Live" : match.time}
                    </span>
                  </div>
                  {/* Teams & Score */}
                  <div className="flex justify-center w-full">
                    <div className="flex justify-between font-semibold text-[14px] mt-2 gap-3 -ml-4">
                      <span>{match.homeTeam}</span>
                      <span>{match.score}</span>
                      <span>{match.awayTeam}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}
