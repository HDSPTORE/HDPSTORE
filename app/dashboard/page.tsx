"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CheckCircle, Clock, Wallet, TrendingUp, Users, Gamepad2 } from "lucide-react"
import Navigation from "@/components/navigation"

export default function DashboardPage() {
  const overviewStats = [
    {
      title: "Total Orders",
      value: "127",
      icon: ShoppingCart,
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      title: "Completed Orders",
      value: "119",
      icon: CheckCircle,
      change: "+8%",
      changeType: "positive" as const,
    },
    {
      title: "Pending Orders",
      value: "8",
      icon: Clock,
      change: "-2%",
      changeType: "negative" as const,
    },
    {
      title: "Wallet Balance",
      value: "RM 245.50",
      icon: Wallet,
      change: "+15%",
      changeType: "positive" as const,
    },
  ]

  const recentOrders = [
    {
      id: "ORD-2024-001",
      game: "Mobile Legends",
      amount: "RM 25.00",
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "ORD-2024-002",
      game: "Free Fire",
      amount: "RM 15.00",
      status: "completed",
      date: "2024-01-14",
    },
    {
      id: "ORD-2024-003",
      game: "PUBG Mobile",
      amount: "RM 35.00",
      status: "pending",
      date: "2024-01-14",
    },
    {
      id: "ORD-2024-004",
      game: "Genshin Impact",
      amount: "RM 50.00",
      status: "completed",
      date: "2024-01-13",
    },
    {
      id: "ORD-2024-005",
      game: "Mobile Legends",
      amount: "RM 20.00",
      status: "processing",
      date: "2024-01-13",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">Pending</Badge>
      case "processing":
        return <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">Processing</Badge>
      default:
        return <Badge className="bg-gray-600/20 text-gray-400 border-gray-600/30">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back! Here's an overview of your gaming activities</p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {overviewStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <span
                          className={`text-sm font-medium ${
                            stat.changeType === "positive" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">from last month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-600/20 rounded-lg">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <Card className="lg:col-span-2 bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-medium text-white">{order.id}</p>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="text-gray-400 text-sm">{order.game}</p>
                        <p className="text-gray-500 text-xs">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Quick Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">This Month</span>
                    <span className="text-white font-semibold">RM 180.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Average Order</span>
                    <span className="text-white font-semibold">RM 28.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Favorite Game</span>
                    <span className="text-white font-semibold">Mobile Legends</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Success Rate</span>
                    <span className="text-green-400 font-semibold">98.5%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Account Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">VIP</span>
                    </div>
                    <p className="text-white font-semibold mb-1">VIP Member</p>
                    <p className="text-gray-400 text-sm">Member since Jan 2024</p>
                    <div className="mt-4 p-3 bg-blue-600/10 rounded-lg border border-blue-600/20">
                      <p className="text-blue-400 text-sm font-medium">5% Discount on all purchases</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
