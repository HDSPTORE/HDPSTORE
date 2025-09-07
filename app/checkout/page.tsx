"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import { useSearchParams } from "next/navigation"

const malaysianBanks = [
  { name: "Maybank", logo: "/generic-bank-logo.png" },
  { name: "CIMB Bank", logo: "/cimb-bank-logo.jpg" },
  { name: "RHB Bank", logo: "/rhb-bank-logo.jpg" },
  { name: "Public Bank", logo: "/public-bank-logo.jpg" },
  { name: "Hong Leong Bank", logo: "/placeholder-hj31k.png" },
  { name: "AmBank", logo: "/placeholder-xh7wo.png" },
  { name: "Bank Islam", logo: "/bank-islam-logo.jpg" },
  { name: "BSN", logo: "/bsn-bank-logo.jpg" },
]

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  const [selectedBank, setSelectedBank] = useState("")
  const [hasPaid, setHasPaid] = useState(false)

  // Get order details from URL params (in real app, this would come from state management or API)
  const orderDetails = {
    game: "Mobile Legends: Bang Bang",
    userId: searchParams.get("userId") || "123456789",
    serverId: searchParams.get("serverId") || "2001",
    diamonds: Number.parseInt(searchParams.get("diamonds") || "344"),
    quantity: Number.parseInt(searchParams.get("quantity") || "1"),
    totalPrice: Number.parseFloat(searchParams.get("total") || "20.00"),
    paymentMethod: searchParams.get("payment") || "Touch 'n Go",
  }

  // Countdown timer for Touch 'n Go
  useEffect(() => {
    if (orderDetails.paymentMethod === "Touch 'n Go" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [timeLeft, orderDetails.paymentMethod])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleBankSelect = (bankName: string) => {
    setSelectedBank(bankName)
  }

  const handleProceedToBank = () => {
    // In real app, this would redirect to the selected bank's payment gateway
    alert(`Redirecting to ${selectedBank} payment gateway...`)
  }

  const handlePaymentConfirmation = () => {
    setHasPaid(true)
    const params = new URLSearchParams({
      orderId: "HD" + Date.now().toString().slice(-8),
      game: orderDetails.game,
      userId: orderDetails.userId,
      serverId: orderDetails.serverId,
      diamonds: orderDetails.diamonds.toString(),
      quantity: orderDetails.quantity.toString(),
      total: orderDetails.totalPrice.toString(),
      payment: orderDetails.paymentMethod,
    })

    setTimeout(() => {
      window.location.href = `/order-status?${params.toString()}`
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-black text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Complete Your Payment</h1>
            <p className="text-lg text-gray-300">Review your order and complete the payment</p>
          </div>

          {/* Order Recap Section */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-white text-xl">Order Summary</CardTitle>
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
                  <div className="flex justify-between border-t border-slate-600 pt-3">
                    <span className="text-lg font-bold text-white">Total Amount:</span>
                    <span className="text-2xl font-bold text-white">RM {orderDetails.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Display */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl">Payment Method: {orderDetails.paymentMethod}</CardTitle>
            </CardHeader>
            <CardContent>
              {orderDetails.paymentMethod === "Touch 'n Go" && (
                <div className="text-center space-y-6">
                  {/* QR Code */}
                  <div className="flex justify-center">
                    <div className="bg-white p-6 rounded-lg">
                      <img src="/touch-n-go-qr-code-for-payment.jpg" alt="Touch 'n Go QR Code" className="w-48 h-48" />
                    </div>
                  </div>

                  {/* Timer and Instructions */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{formatTime(timeLeft)}</div>
                      <p className="text-gray-300">
                        This QR code is valid for 30 minutes only. After that, it will expire.
                      </p>
                    </div>

                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">How to pay:</h4>
                      <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                        <li>Open your Touch 'n Go eWallet app</li>
                        <li>Scan the QR code above</li>
                        <li>Confirm the payment amount</li>
                        <li>Complete the payment</li>
                        <li>Click "I Have Paid" button below</li>
                      </ol>
                    </div>

                    <Button
                      onClick={handlePaymentConfirmation}
                      disabled={timeLeft <= 0 || hasPaid}
                      className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 transition-all duration-300 disabled:opacity-50"
                    >
                      {hasPaid ? "Payment Confirmed" : timeLeft <= 0 ? "QR Code Expired" : "I Have Paid"}
                    </Button>
                  </div>
                </div>
              )}

              {orderDetails.paymentMethod === "FPX" && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Select Your Bank</h3>
                    <p className="text-gray-300">Choose your bank to proceed with FPX Online Banking</p>
                  </div>

                  {/* Bank Selection Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {malaysianBanks.map((bank) => (
                      <div
                        key={bank.name}
                        onClick={() => handleBankSelect(bank.name)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          selectedBank === bank.name
                            ? "border-white bg-white/10"
                            : "border-slate-600 bg-slate-700/30 hover:border-white/50"
                        }`}
                      >
                        <div className="text-center space-y-2">
                          <img
                            src={bank.logo || "/placeholder.svg"}
                            alt={`${bank.name} logo`}
                            className="w-16 h-8 mx-auto object-contain"
                          />
                          <div className="text-sm text-white font-medium">{bank.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleProceedToBank}
                    disabled={!selectedBank}
                    className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 transition-all duration-300 disabled:opacity-50"
                  >
                    {selectedBank ? `Proceed to ${selectedBank}` : "Select a Bank to Continue"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
