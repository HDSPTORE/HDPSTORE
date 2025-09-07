"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ZodiacCalculatorPage() {
  const [selectedZodiac, setSelectedZodiac] = useState("")
  const [result, setResult] = useState<any>(null)

  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ]

  const zodiacData = {
    Aries: { luckyNumbers: [3, 9, 21], compatibility: "Leo, Sagittarius", bestTime: "Morning", color: "Red" },
    Taurus: { luckyNumbers: [6, 15, 24], compatibility: "Virgo, Capricorn", bestTime: "Evening", color: "Green" },
    Gemini: { luckyNumbers: [5, 14, 23], compatibility: "Libra, Aquarius", bestTime: "Afternoon", color: "Yellow" },
    Cancer: { luckyNumbers: [2, 7, 16], compatibility: "Scorpio, Pisces", bestTime: "Night", color: "Silver" },
    Leo: { luckyNumbers: [1, 8, 19], compatibility: "Aries, Sagittarius", bestTime: "Morning", color: "Gold" },
    Virgo: { luckyNumbers: [6, 15, 27], compatibility: "Taurus, Capricorn", bestTime: "Evening", color: "Navy" },
    Libra: { luckyNumbers: [4, 13, 22], compatibility: "Gemini, Aquarius", bestTime: "Afternoon", color: "Pink" },
    Scorpio: { luckyNumbers: [9, 18, 27], compatibility: "Cancer, Pisces", bestTime: "Night", color: "Maroon" },
    Sagittarius: { luckyNumbers: [3, 12, 21], compatibility: "Aries, Leo", bestTime: "Morning", color: "Purple" },
    Capricorn: { luckyNumbers: [8, 17, 26], compatibility: "Taurus, Virgo", bestTime: "Evening", color: "Brown" },
    Aquarius: { luckyNumbers: [11, 20, 29], compatibility: "Gemini, Libra", bestTime: "Afternoon", color: "Blue" },
    Pisces: { luckyNumbers: [7, 16, 25], compatibility: "Cancer, Scorpio", bestTime: "Night", color: "Sea Green" },
  }

  const calculateZodiac = () => {
    if (selectedZodiac) {
      setResult(zodiacData[selectedZodiac as keyof typeof zodiacData])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Back Button */}
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Calculators
          </Link>

          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Zodiac Calculator</h1>
            <p className="text-gray-300 text-lg">Discover your gaming luck based on your zodiac sign</p>
          </div>

          {/* Calculator Card */}
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Star className="w-6 h-6 text-purple-400" />
                Select Your Zodiac Sign
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Select value={selectedZodiac} onValueChange={setSelectedZodiac}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                    <SelectValue placeholder="Choose your zodiac sign" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {zodiacSigns.map((sign) => (
                      <SelectItem key={sign} value={sign} className="text-white hover:bg-slate-700">
                        {sign}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  onClick={calculateZodiac}
                  disabled={!selectedZodiac}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                >
                  Calculate My Gaming Luck
                </Button>
              </div>

              {result && (
                <div className="mt-6 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                  <h3 className="text-lg font-semibold text-white mb-4">Your Gaming Predictions</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lucky Numbers:</span>
                      <span className="text-purple-400 font-bold">{result.luckyNumbers.join(", ")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Compatible Signs:</span>
                      <span className="text-purple-400 font-bold">{result.compatibility}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Best Gaming Time:</span>
                      <span className="text-purple-400 font-bold">{result.bestTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lucky Color:</span>
                      <span className="text-purple-400 font-bold">{result.color}</span>
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
