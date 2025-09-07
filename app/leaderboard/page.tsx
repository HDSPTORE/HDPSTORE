"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("Today")

  const tabs = ["Today", "This Week", "This Month"]

  // Mock data for different time periods
  const leaderboardData = {
    Today: [
      { rank: 1, username: "GamerPro2024", amountSpent: 2450.0 },
      { rank: 2, username: "DiamondHunter", amountSpent: 1890.5 },
      { rank: 3, username: "MLBBKing", amountSpent: 1675.25 },
      { rank: 4, username: "TopUpMaster", amountSpent: 1420.75 },
      { rank: 5, username: "GameLegend", amountSpent: 1285.0 },
      { rank: 6, username: "ProPlayer99", amountSpent: 1150.5 },
      { rank: 7, username: "EliteGamer", amountSpent: 980.25 },
      { rank: 8, username: "ChampionX", amountSpent: 875.0 },
      { rank: 9, username: "VictorySeeker", amountSpent: 750.75 },
      { rank: 10, username: "GameMaster", amountSpent: 625.5 },
    ],
    "This Week": [
      { rank: 1, username: "DiamondHunter", amountSpent: 8950.0 },
      { rank: 2, username: "GamerPro2024", amountSpent: 7825.5 },
      { rank: 3, username: "TopUpMaster", amountSpent: 6750.25 },
      { rank: 4, username: "MLBBKing", amountSpent: 5890.75 },
      { rank: 5, username: "EliteGamer", amountSpent: 5125.0 },
      { rank: 6, username: "ProPlayer99", amountSpent: 4650.5 },
      { rank: 7, username: "GameLegend", amountSpent: 4280.25 },
      { rank: 8, username: "ChampionX", amountSpent: 3875.0 },
      { rank: 9, username: "VictorySeeker", amountSpent: 3450.75 },
      { rank: 10, username: "GameMaster", amountSpent: 3125.5 },
    ],
    "This Month": [
      { rank: 1, username: "TopUpMaster", amountSpent: 25890.0 },
      { rank: 2, username: "DiamondHunter", amountSpent: 23750.5 },
      { rank: 3, username: "GamerPro2024", amountSpent: 21650.25 },
      { rank: 4, username: "EliteGamer", amountSpent: 19420.75 },
      { rank: 5, username: "MLBBKing", amountSpent: 17285.0 },
      { rank: 6, username: "ProPlayer99", amountSpent: 15850.5 },
      { rank: 7, username: "GameLegend", amountSpent: 14280.25 },
      { rank: 8, username: "ChampionX", amountSpent: 12875.0 },
      { rank: 9, username: "VictorySeeker", amountSpent: 11450.75 },
      { rank: 10, username: "GameMaster", amountSpent: 10125.5 },
    ],
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-400" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold text-sm">#{rank}</span>
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-black"
      case 3:
        return "bg-gradient-to-r from-amber-600 to-amber-800 text-white"
      default:
        return "bg-slate-700 text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Top Players</h1>
            <p className="text-gray-300 text-lg">See who's leading the charts in game top-ups</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 rounded-lg p-1 backdrop-blur-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Leaderboard Table */}
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                {activeTab} Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left py-4 px-6 text-gray-300 font-medium">Rank</th>
                      <th className="text-left py-4 px-6 text-gray-300 font-medium">Username</th>
                      <th className="text-right py-4 px-6 text-gray-300 font-medium">Amount Spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData[activeTab as keyof typeof leaderboardData].map((player, index) => (
                      <tr
                        key={player.username}
                        className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors duration-200"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            {getRankIcon(player.rank)}
                            <Badge className={`${getRankBadgeColor(player.rank)} font-bold`}>#{player.rank}</Badge>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-white font-medium">{player.username}</span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="text-green-400 font-bold text-lg">RM {player.amountSpent.toFixed(2)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">Rankings are updated in real-time based on successful transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}
