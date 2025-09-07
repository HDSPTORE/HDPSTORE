"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MagicWheelCalculatorPage() {
  const [spins, setSpins] = useState("")
  const [targetItem, setTargetItem] = useState("")
  const [result, setResult] = useState<any>(null)

  const calculateProbability = () => {
    const spinCount = Number.parseInt(spins)
    const itemRarity = Number.parseFloat(targetItem)

    if (spinCount > 0 && itemRarity > 0) {
      const singleSpinChance = itemRarity / 100
      const noItemChance = 1 - singleSpinChance
      const probabilityOfGetting = (1 - Math.pow(noItemChance, spinCount)) * 100
      const expectedSpins = Math.ceil(1 / singleSpinChance)
      const cost = spinCount * 60 // Assuming 60 diamonds per spin

      setResult({
        probability: probabilityOfGetting.toFixed(2),
        expectedSpins,
        cost,
        spinCount,
        itemRarity,
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
            <h1 className="text-4xl font-bold text-white mb-4">Magic Wheel Calculator</h1>
            <p className="text-gray-300 text-lg">Calculate your chances of getting rare items</p>
          </div>

          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-400" />
                Magic Wheel Probability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="spins" className="text-gray-300 font-medium">
                    Number of Spins
                  </Label>
                  <Input
                    id="spins"
                    type="number"
                    placeholder="Enter number of spins"
                    value={spins}
                    onChange={(e) => setSpins(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetItem" className="text-gray-300 font-medium">
                    Item Drop Rate (%)
                  </Label>
                  <Input
                    id="targetItem"
                    type="number"
                    step="0.1"
                    placeholder="Enter item drop rate (e.g., 0.5 for 0.5%)"
                    value={targetItem}
                    onChange={(e) => setTargetItem(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button
                  onClick={calculateProbability}
                  disabled={!spins || !targetItem}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3"
                >
                  Calculate Probability
                </Button>
              </div>

              {result && (
                <div className="mt-6 p-6 bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-700/50 rounded-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                  <h3 className="text-lg font-semibold text-white mb-4">Calculation Results</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Success Probability:</span>
                      <span className="text-orange-400 font-bold text-xl">{result.probability}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Expected Spins Needed:</span>
                      <span className="text-orange-400 font-bold">{result.expectedSpins}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Cost:</span>
                      <span className="text-yellow-400 font-bold">{result.cost} Diamonds</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Your Spins:</span>
                      <span className="text-white font-bold">{result.spinCount}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="text-white font-medium mb-2">Common Drop Rates:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Epic Skin: 0.5% - 1%</li>
                  <li>• Special Skin: 2% - 5%</li>
                  <li>• Normal Skin: 10% - 20%</li>
                  <li>• Fragments: 30% - 50%</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
