"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle, Clock, ArrowLeft, FileText } from "lucide-react"

export default function OrderStatusPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(true)
  const [progress, setProgress] = useState(0)

  // Get order details from URL params
  const orderDetails = {
    orderId: searchParams.get("orderId") || "HD" + Date.now().toString().slice(-8),
    game: searchParams.get("game") || "Mobile Legends: Bang Bang",
    userId: searchParams.get("userId") || "123456789",
    serverId: searchParams.get("serverId") || "2001",
    diamonds: Number.parseInt(searchParams.get("diamonds") || "344"),
    quantity: Number.parseInt(searchParams.get("quantity") || "1"),
    totalPrice: Number.parseFloat(searchParams.get("total") || "20.00"),
    paymentMethod: searchParams.get("payment") || "Touch 'n Go",
  }

  // Simulate processing animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsProcessing(false)
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const handleBackToHome = () => {
    router.push("/")
  }

  const handleViewOrderHistory = () => {
    // In real app, this would navigate to order history page
    alert("Order history feature coming soon!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-black text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Payment Successful</h1>
            <p className="text-lg text-gray-300">Your order has been received and is being processed</p>
            <p className="text-sm text-gray-400 mt-2">Order ID: {orderDetails.orderId}</p>
          </div>

          {/* Order Status Section */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-white text-xl">Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Step 1: Processing */}
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isProcessing ? "bg-blue-500 animate-pulse" : "bg-green-500"
                    }`}
                  >
                    {isProcessing ? (
                      <Clock className="w-4 h-4 text-white" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">
                      {isProcessing ? "Diamonds are being processed..." : "Payment Confirmed"}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {isProcessing
                        ? "Please wait while we process your order"
                        : "Your payment has been successfully processed"}
                    </p>
                    {isProcessing && (
                      <div className="mt-2">
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{progress}% complete</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 2: Delivery */}
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      !isProcessing ? "bg-green-500" : "bg-slate-600"
                    }`}
                  >
                    {!isProcessing ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-slate-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold transition-colors duration-500 ${
                        !isProcessing ? "text-green-400" : "text-gray-400"
                      }`}
                    >
                      {!isProcessing ? "Diamonds delivered to your account!" : "Awaiting delivery"}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {!isProcessing
                        ? "Your diamonds have been successfully added to your game account"
                        : "Diamonds will be delivered once processing is complete"}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Recap Card */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl">Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Game:</span>
                    <span className="text-white font-semibold">{orderDetails.game}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">User ID:</span>
                    <span className="text-white">{orderDetails.userId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Server ID:</span>
                    <span className="text-white">{orderDetails.serverId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Payment Method:</span>
                    <span className="text-white">{orderDetails.paymentMethod}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Diamonds:</span>
                    <span className="text-white">{orderDetails.diamonds * orderDetails.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Quantity:</span>
                    <span className="text-white">×{orderDetails.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Order Date:</span>
                    <span className="text-white">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-600 pt-3">
                    <span className="text-lg font-bold text-white">Total Paid:</span>
                    <span className="text-2xl font-bold text-green-400">RM {orderDetails.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBackToHome}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button
              onClick={handleViewOrderHistory}
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-3"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Order History
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
