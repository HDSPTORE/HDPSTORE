"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Wallet,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  Smartphone,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function WalletPage() {
  const [showTopUp, setShowTopUp] = useState(false)
  const [topUpAmount, setTopUpAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("")
  const [currentStep, setCurrentStep] = useState("form") // form, payment, success, error
  const [countdown, setCountdown] = useState(1800) // 30 minutes in seconds
  const [selectedBank, setSelectedBank] = useState("")

  const currentBalance = 245.5

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (currentStep === "payment" && selectedMethod === "touchngo" && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [currentStep, selectedMethod, countdown])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const malaysianBanks = [
    { id: "maybank", name: "Maybank", logo: "/maybank-logo.jpg" },
    { id: "cimb", name: "CIMB Bank", logo: "/cimb-bank-logo.jpg" },
    { id: "public", name: "Public Bank", logo: "/public-bank-logo.jpg" },
    { id: "rhb", name: "RHB Bank", logo: "/rhb-bank-logo.jpg" },
    { id: "hong-leong", name: "Hong Leong Bank", logo: "/generic-bank-logo.png" },
    { id: "bank-islam", name: "Bank Islam", logo: "/bank-islam-logo.jpg" },
    { id: "ambank", name: "AmBank", logo: "/generic-bank-logo.png" },
    { id: "uob", name: "UOB Malaysia", logo: "/generic-bank-logo.png" },
  ]

  const transactions = [
    {
      id: "TXN-2024-001",
      type: "credit",
      description: "Wallet Top-up via Touch 'n Go",
      amount: 50.0,
      date: "2024-01-15",
      time: "14:30",
    },
    {
      id: "TXN-2024-002",
      type: "debit",
      description: "Mobile Legends Diamond Purchase",
      amount: -25.0,
      date: "2024-01-15",
      time: "10:15",
    },
    {
      id: "TXN-2024-003",
      type: "credit",
      description: "Wallet Top-up via FPX",
      amount: 100.0,
      date: "2024-01-14",
      time: "16:45",
    },
    {
      id: "TXN-2024-004",
      type: "debit",
      description: "Free Fire Diamonds Purchase",
      amount: -15.0,
      date: "2024-01-14",
      time: "12:20",
    },
    {
      id: "TXN-2024-005",
      type: "debit",
      description: "PUBG Mobile UC Purchase",
      amount: -35.0,
      date: "2024-01-13",
      time: "19:30",
    },
    {
      id: "TXN-2024-006",
      type: "credit",
      description: "Wallet Top-up via ShopeePay",
      amount: 75.0,
      date: "2024-01-13",
      time: "11:00",
    },
  ]

  const topUpMethods = [
    { id: "touchngo", name: "Touch 'n Go eWallet", icon: Smartphone },
    { id: "fpx", name: "FPX Online Banking", icon: CreditCard },
    { id: "shopeepay", name: "ShopeePay", icon: Smartphone },
  ]

  const handleTopUp = () => {
    if (topUpAmount && selectedMethod) {
      setCurrentStep("payment")
      if (selectedMethod === "touchngo") {
        setCountdown(1800) // Reset countdown
      }
    }
  }

  const handlePaymentComplete = (success: boolean) => {
    setCurrentStep(success ? "success" : "error")
  }

  const handleBankSelect = (bankId: string) => {
    setSelectedBank(bankId)
    // Simulate payment gateway redirect
    setTimeout(() => {
      handlePaymentComplete(Math.random() > 0.2) // 80% success rate simulation
    }, 2000)
  }

  const resetTopUp = () => {
    setShowTopUp(false)
    setCurrentStep("form")
    setTopUpAmount("")
    setSelectedMethod("")
    setSelectedBank("")
    setCountdown(1800)
  }

  const getTransactionIcon = (type: string) => {
    return type === "credit" ? (
      <ArrowDownLeft className="w-4 h-4 text-green-400" />
    ) : (
      <ArrowUpRight className="w-4 h-4 text-red-400" />
    )
  }

  const getTransactionBadge = (type: string) => {
    return type === "credit" ? (
      <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Credit</Badge>
    ) : (
      <Badge className="bg-red-600/20 text-red-400 border-red-600/30">Debit</Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">My Wallet</h1>
            <p className="text-gray-400">Manage your wallet balance and transaction history</p>
          </div>

          {/* Wallet Balance Card */}
          <Card className="mb-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Wallet className="w-8 h-8 text-blue-400" />
                    <h2 className="text-xl font-semibold text-white">Current Balance</h2>
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">RM {currentBalance.toFixed(2)}</p>
                  <p className="text-blue-300">Available for purchases</p>
                </div>
                <Button
                  onClick={() => setShowTopUp(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Top Up Wallet
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Top Up Modal */}
          {showTopUp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-200">
              <Card className="w-full max-w-md mx-4 bg-gradient-to-b from-gray-900 to-black border-slate-700 animate-in zoom-in-95 duration-200">
                {currentStep === "form" && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Top Up Wallet</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount" className="text-gray-300">
                          Amount (RM)
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter amount"
                          value={topUpAmount}
                          onChange={(e) => setTopUpAmount(e.target.value)}
                          className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-gray-300">Payment Method</Label>
                        {topUpMethods.map((method) => (
                          <div
                            key={method.id}
                            onClick={() => setSelectedMethod(method.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              selectedMethod === method.id
                                ? "border-blue-500 bg-blue-500/10"
                                : "border-slate-600 bg-slate-800/30 hover:bg-slate-800/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <method.icon className="w-5 h-5 text-gray-400" />
                              <span className="text-white">{method.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          onClick={resetTopUp}
                          variant="outline"
                          className="flex-1 border-slate-600 text-white hover:bg-white/10 bg-transparent"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleTopUp}
                          disabled={!topUpAmount || !selectedMethod}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                        >
                          Proceed to Payment
                        </Button>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === "payment" && selectedMethod === "touchngo" && (
                  <>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => setCurrentStep("form")}
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <CardTitle className="text-xl text-white">Touch 'n Go Payment</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 text-center">
                      <div className="p-4 bg-white rounded-lg">
                        <img src="/touch-n-go-qr-code-for-payment.jpg" alt="Touch 'n Go QR Code" className="w-48 h-48 mx-auto" />
                      </div>

                      <div className="space-y-2">
                        <p className="text-white font-medium">Scan QR code with Touch 'n Go app</p>
                        <p className="text-gray-400 text-sm">Amount: RM {topUpAmount}</p>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-orange-400">
                        <Clock className="w-4 h-4" />
                        <span className="font-mono text-lg">{countdown > 0 ? formatTime(countdown) : "EXPIRED"}</span>
                      </div>

                      {countdown <= 0 && (
                        <div className="p-3 bg-red-600/20 border border-red-600/30 rounded-lg">
                          <p className="text-red-400 text-sm">QR code has expired. Please try again.</p>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <Button
                          onClick={resetTopUp}
                          variant="outline"
                          className="flex-1 border-slate-600 text-white hover:bg-white/10 bg-transparent"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => handlePaymentComplete(true)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                          Payment Complete
                        </Button>
                      </div>
                    </CardContent>
                  </>
                )}

                {currentStep === "payment" && selectedMethod === "fpx" && (
                  <>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => setCurrentStep("form")}
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <CardTitle className="text-xl text-white">Select Your Bank</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center mb-4">
                        <p className="text-gray-400 text-sm">Amount: RM {topUpAmount}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                        {malaysianBanks.map((bank) => (
                          <div
                            key={bank.id}
                            onClick={() => handleBankSelect(bank.id)}
                            className="p-3 border border-slate-600 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 cursor-pointer transition-all hover:border-blue-500"
                          >
                            <div className="flex flex-col items-center gap-2">
                              <img
                                src={bank.logo || "/placeholder.svg"}
                                alt={bank.name}
                                className="w-8 h-8 object-contain"
                              />
                              <span className="text-white text-xs text-center">{bank.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={resetTopUp}
                        variant="outline"
                        className="w-full border-slate-600 text-white hover:bg-white/10 bg-transparent"
                      >
                        Cancel
                      </Button>
                    </CardContent>
                  </>
                )}

                {currentStep === "success" && (
                  <>
                    <CardContent className="space-y-6 text-center py-8">
                      <div className="flex justify-center">
                        <CheckCircle className="w-16 h-16 text-green-400" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Wallet Top-Up Successful!</h3>
                        <p className="text-gray-400">RM {topUpAmount} has been added to your wallet</p>
                      </div>

                      <div className="p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                        <p className="text-green-400 font-medium">
                          Updated Balance: RM {(currentBalance + Number.parseFloat(topUpAmount || "0")).toFixed(2)}
                        </p>
                      </div>

                      <Button onClick={resetTopUp} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Back to Wallet
                      </Button>
                    </CardContent>
                  </>
                )}

                {currentStep === "error" && (
                  <>
                    <CardContent className="space-y-6 text-center py-8">
                      <div className="flex justify-center">
                        <XCircle className="w-16 h-16 text-red-400" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Payment Failed</h3>
                        <p className="text-gray-400">Your payment could not be processed. Please try again.</p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={resetTopUp}
                          variant="outline"
                          className="flex-1 border-slate-600 text-white hover:bg-white/10 bg-transparent"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => setCurrentStep("form")}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Try Again
                        </Button>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            </div>
          )}

          {/* Transaction History */}
          <Card className="bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white">Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-slate-700/50 rounded-lg">{getTransactionIcon(transaction.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-medium text-white">{transaction.id}</p>
                          {getTransactionBadge(transaction.type)}
                        </div>
                        <p className="text-gray-400 text-sm">{transaction.description}</p>
                        <p className="text-gray-500 text-xs">
                          {transaction.date} at {transaction.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold text-lg ${
                          transaction.type === "credit" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : ""}RM {Math.abs(transaction.amount).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
