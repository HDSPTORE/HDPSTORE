"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Target, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WinrateCalculatorPage() {
  const [totalGames, setTotalGames] = useState("")
  const [wins, setWins] = useState("")
  const [result, setResult] = useState<any>(null)

  const calculateWinrate = () => {
    const total = Number.parseInt(totalGames)
    const winCount = Number.parseInt(wins)

    if (total > 0 && winCount >= 0 && winCount <= total) {
      const winrate = (winCount / total) * 100
      const losses = total - winCount
      const lossrate = (losses / total) * 100

      let rank = ""
      if (winrate >= 80) rank = "Mythical Glory"
      else if (winrate >= 70) rank = "Mythic"
      else if (winrate >= 60) rank = "Legend"
      else if (winrate >= 50) rank = "Epic"
      else if (winrate >= 40) rank = "Grandmaster"
      else rank = "Master"

      setResult({
        winrate: winrate.toFixed(2),
        lossrate: lossrate.toFixed(2),
        wins: winCount,
        losses,
        total,
        rank,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Calculators
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Winrate Calculator</h1>
            <p className="text-gray-300 text-lg">Calculate your win rate and estimated rank</p>
          </div>

          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Target className="w-6 h-6 text-green-400" />
                Enter Your Game Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="totalGames" className="text-gray-300 font-medium">
                    Total Games Played
                  </Label>
                  <Input
                    id="totalGames"
                    type="number"
                    placeholder="Enter total games"
                    value={totalGames}
                    onChange={(e) => setTotalGames(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wins" className="text-gray-300 font-medium">
                    Games Won
                  </Label>
                  <Input
                    id="wins"
                    type="number"
                    placeholder="Enter games won"
                    value={wins}
                    onChange={(e) => setWins(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button
                  onClick={calculateWinrate}
                  disabled={!totalGames || !wins}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3"
                >
                  Calculate Winrate
                </Button>
              </div>

              {result && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                  <h3 className="text-lg font-semibold text-white mb-4">Your Statistics</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Win Rate:</span>
                      <span className="text-green-400 font-bold text-xl">{result.winrate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Loss Rate:</span>
                      <span className="text-red-400 font-bold">{result.lossrate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Wins / Losses:</span>
                      <span className="text-white font-bold">
                        {result.wins} / {result.losses}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Estimated Rank:</span>
                      <span className="text-yellow-400 font-bold">{result.rank}</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
