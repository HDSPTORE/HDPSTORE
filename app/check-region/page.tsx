"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Search, CheckCircle } from "lucide-react"

export default function CheckRegionPage() {
  const [userId, setUserId] = useState("")
  const [serverId, setServerId] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckRegion = async () => {
    if (!userId || !serverId) {
      return
    }

    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock region detection based on server ID ranges
    let region = ""
    const serverNum = Number.parseInt(serverId)

    if (serverNum >= 1000 && serverNum <= 2999) {
      region = "Malaysia"
    } else if (serverNum >= 3000 && serverNum <= 4999) {
      region = "Singapore"
    } else if (serverNum >= 5000 && serverNum <= 6999) {
      region = "Indonesia"
    } else if (serverNum >= 7000 && serverNum <= 8999) {
      region = "Thailand"
    } else if (serverNum >= 9000 && serverNum <= 9999) {
      region = "Philippines"
    } else {
      region = "Unknown"
    }

    setResult(region)
    setIsLoading(false)
  }

  const resetForm = () => {
    setUserId("")
    setServerId("")
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Check Your Region</h1>
            <p className="text-gray-300 text-lg">Enter your User ID and Server ID to detect your account region</p>
          </div>

          {/* Main Card */}
          <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                Region Checker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Input Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="userId" className="text-gray-300 font-medium">
                    User ID
                  </Label>
                  <Input
                    id="userId"
                    type="text"
                    placeholder="Enter your User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serverId" className="text-gray-300 font-medium">
                    Server ID
                  </Label>
                  <Input
                    id="serverId"
                    type="text"
                    placeholder="Enter your Server ID"
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>
              </div>

              {/* Check Button */}
              <Button
                onClick={handleCheckRegion}
                disabled={!userId || !serverId || isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Checking Region...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Check Region
                  </div>
                )}
              </Button>

              {/* Result Display */}
              {result && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Region Detected</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">Region:</span>
                    <span className="text-2xl font-bold text-green-400">{result}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-700/30">
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-green-600/50 text-green-400 hover:bg-green-600/10 hover:border-green-500 bg-transparent"
                    >
                      Check Another Account
                    </Button>
                  </div>
                </div>
              )}

              {/* Info Section */}
              <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h4 className="text-white font-medium mb-2">How to find your IDs:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• User ID: Found in your game profile settings</li>
                  <li>• Server ID: Usually displayed next to your username in-game</li>
                  <li>• Make sure both IDs are correct for accurate region detection</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
