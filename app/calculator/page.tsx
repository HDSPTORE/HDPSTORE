"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Star, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function CalculatorPage() {
  const calculators = [
    {
      id: "zodiac",
      title: "Zodiac Calculator",
      description: "Calculate your zodiac compatibility and lucky numbers for better gameplay",
      icon: <Star className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      hoverColor: "hover:from-purple-700 hover:to-pink-700",
      href: "/calculator/zodiac",
    },
    {
      id: "winrate",
      title: "Winrate Calculator",
      description: "Track and calculate your win rate statistics across different game modes",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      hoverColor: "hover:from-green-700 hover:to-emerald-700",
      href: "/calculator/winrate",
    },
    {
      id: "magic-wheel",
      title: "Magic Wheel Calculator",
      description: "Calculate probabilities and optimize your magic wheel spins",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      hoverColor: "hover:from-orange-700 hover:to-red-700",
      href: "/calculator/magic-wheel",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Game Calculators</h1>
            <p className="text-gray-300 text-lg">Choose a tool below to enhance your gaming experience</p>
          </div>

          {/* Calculator Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {calculators.map((calc) => (
              <Link key={calc.id} href={calc.href}>
                <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-300 cursor-pointer group h-full">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${calc.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {calc.icon}
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{calc.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-6 leading-relaxed">{calc.description}</p>
                    <Button
                      className={`w-full bg-gradient-to-r ${calc.color} ${calc.hoverColor} text-white font-semibold py-2 transition-all duration-300 group-hover:shadow-lg`}
                    >
                      Open Calculator
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-12">
            <Card className="bg-slate-800/20 border-slate-700/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calculator className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">About Our Calculators</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our gaming calculators are designed to help you make informed decisions and optimize your
                      gameplay. Each tool uses advanced algorithms to provide accurate calculations based on game
                      mechanics and statistical data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
