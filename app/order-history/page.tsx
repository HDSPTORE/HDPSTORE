"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, Gamepad2, CreditCard } from "lucide-react"
import Navigation from "@/components/navigation"

export default function OrderHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [gameFilter, setGameFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const orders = [
    {
      id: "ORD-2024-001",
      game: "Mobile Legends",
      package: "275 Diamonds",
      paymentMethod: "Touch 'n Go",
      status: "completed",
      amount: "RM 25.00",
      date: "2024-01-15",
      time: "14:30",
    },
    {
      id: "ORD-2024-002",
      game: "Free Fire",
      package: "100 Diamonds",
      paymentMethod: "FPX Banking",
      status: "completed",
      amount: "RM 15.00",
      date: "2024-01-14",
      time: "16:45",
    },
    {
      id: "ORD-2024-003",
      game: "PUBG Mobile",
      package: "325 UC",
      paymentMethod: "ShopeePay",
      status: "pending",
      amount: "RM 35.00",
      date: "2024-01-14",
      time: "12:20",
    },
    {
      id: "ORD-2024-004",
      game: "Genshin Impact",
      package: "980 Genesis Crystals",
      paymentMethod: "Touch 'n Go",
      status: "completed",
      amount: "RM 50.00",
      date: "2024-01-13",
      time: "19:30",
    },
    {
      id: "ORD-2024-005",
      game: "Mobile Legends",
      package: "172 Diamonds",
      paymentMethod: "FPX Banking",
      status: "processing",
      amount: "RM 20.00",
      date: "2024-01-13",
      time: "11:00",
    },
    {
      id: "ORD-2024-006",
      game: "Free Fire",
      package: "210 Diamonds",
      paymentMethod: "ShopeePay",
      status: "completed",
      amount: "RM 30.00",
      date: "2024-01-12",
      time: "15:15",
    },
    {
      id: "ORD-2024-007",
      game: "PUBG Mobile",
      package: "660 UC",
      paymentMethod: "Touch 'n Go",
      status: "failed",
      amount: "RM 65.00",
      date: "2024-01-12",
      time: "09:45",
    },
    {
      id: "ORD-2024-008",
      game: "Genshin Impact",
      package: "300 Genesis Crystals",
      paymentMethod: "FPX Banking",
      status: "completed",
      amount: "RM 18.00",
      date: "2024-01-11",
      time: "20:30",
    },
  ]

  const games = ["Mobile Legends", "Free Fire", "PUBG Mobile", "Genshin Impact"]
  const statuses = ["completed", "pending", "processing", "failed"]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">Pending</Badge>
      case "processing":
        return <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">Processing</Badge>
      case "failed":
        return <Badge className="bg-red-600/20 text-red-400 border-red-600/30">Failed</Badge>
      default:
        return <Badge className="bg-gray-600/20 text-gray-400 border-gray-600/30">{status}</Badge>
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.game.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.package.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGame = gameFilter === "all" || order.game === gameFilter
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    const matchesDate =
      dateFilter === "all" ||
      (dateFilter === "today" && order.date === "2024-01-15") ||
      (dateFilter === "week" && new Date(order.date) >= new Date("2024-01-09")) ||
      (dateFilter === "month" && new Date(order.date) >= new Date("2024-01-01"))

    return matchesSearch && matchesGame && matchesStatus && matchesDate
  })

  const clearFilters = () => {
    setSearchTerm("")
    setGameFilter("all")
    setStatusFilter("all")
    setDateFilter("all")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Order History</h1>
            <p className="text-gray-400">View and manage all your game top-up orders</p>
          </div>

          {/* Filters */}
          <Card className="mb-6 bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Search & Filter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <Select value={gameFilter} onValueChange={setGameFilter}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                    <SelectValue placeholder="Filter by game" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all" className="text-white hover:bg-slate-700">
                      All Games
                    </SelectItem>
                    {games.map((game) => (
                      <SelectItem key={game} value={game} className="text-white hover:bg-slate-700">
                        {game}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all" className="text-white hover:bg-slate-700">
                      All Status
                    </SelectItem>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status} className="text-white hover:bg-slate-700 capitalize">
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                    <SelectValue placeholder="Filter by date" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all" className="text-white hover:bg-slate-700">
                      All Time
                    </SelectItem>
                    <SelectItem value="today" className="text-white hover:bg-slate-700">
                      Today
                    </SelectItem>
                    <SelectItem value="week" className="text-white hover:bg-slate-700">
                      This Week
                    </SelectItem>
                    <SelectItem value="month" className="text-white hover:bg-slate-700">
                      This Month
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-white/10 bg-transparent"
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Orders Table */}
          <Card className="bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                Orders ({filteredOrders.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Order ID</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Game</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Package</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Payment</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Amount</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="py-4 px-4 text-white font-medium">{order.id}</td>
                        <td className="py-4 px-4 text-gray-300">{order.game}</td>
                        <td className="py-4 px-4 text-gray-300">{order.package}</td>
                        <td className="py-4 px-4 text-gray-300">{order.paymentMethod}</td>
                        <td className="py-4 px-4">{getStatusBadge(order.status)}</td>
                        <td className="py-4 px-4 text-white font-semibold">{order.amount}</td>
                        <td className="py-4 px-4 text-gray-400">
                          {order.date}
                          <br />
                          <span className="text-xs">{order.time}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4">
                {filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-white">{order.id}</h3>
                      {getStatusBadge(order.status)}
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{order.game}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Package:</span>
                        <span className="text-gray-300">{order.package}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{order.paymentMethod}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">
                          {order.date} at {order.time}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Amount</span>
                        <span className="text-white font-semibold text-lg">{order.amount}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredOrders.length === 0 && (
                <div className="text-center py-12">
                  <Gamepad2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No orders found</p>
                  <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
