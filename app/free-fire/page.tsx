"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus } from "lucide-react"
import Navigation from "@/components/navigation"
import { useRouter } from "next/navigation"

const diamondPackages = [
  { diamonds: 100, price: 5.0 },
  { diamonds: 210, price: 10.0 },
  { diamonds: 310, price: 15.0 },
  { diamonds: 520, price: 25.0 },
  { diamonds: 1060, price: 50.0 },
  { diamonds: 2180, price: 100.0 },
  { diamonds: 5600, price: 250.0 },
  { diamonds: 11000, price: 500.0 },
]

const paymentMethods = ["Touch 'n Go", "ShopeePay", "FPX", "Bank Transfer"]

export default function FreeFire() {
  const [userId, setUserId] = useState("")
  const [serverId, setServerId] = useState("")
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedPayment, setSelectedPayment] = useState("")

  const selectedPackageData = selectedPackage !== null ? diamondPackages[selectedPackage] : null
  const totalDiamonds = selectedPackageData ? selectedPackageData.diamonds * quantity : 0
  const totalPrice = selectedPackageData ? selectedPackageData.price * quantity : 0

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const router = useRouter()

  const handleProceedToCheckout = () => {
    if (!selectedPackageData || !userId || !selectedPayment) return

    const params = new URLSearchParams({
      game: "Free Fire",
      userId,
      serverId: serverId || "Global",
      currency: selectedPackageData.diamonds.toString(),
      currencyType: "Diamonds",
      quantity: quantity.toString(),
      total: totalPrice.toString(),
      payment: selectedPayment,
    })

    router.push(`/checkout?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-black text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <img
            src="/free-fire-banner.jpg"
            alt="Free Fire Banner"
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Section - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Free Fire</h1>
              <p className="text-lg text-gray-300">Top-up your diamonds easily</p>
              <p className="text-sm text-gray-400 mt-2">Please double-check your User ID before proceeding.</p>
            </div>

            {/* Game Account Information */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Game Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="userId" className="text-gray-300">
                    User ID
                  </Label>
                  <Input
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter your User ID"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="serverId" className="text-gray-300">
                    Server (Optional)
                  </Label>
                  <Input
                    id="serverId"
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    placeholder="Enter server or leave blank for Global"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-white/30"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Diamond Package Selection */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Select Diamond Package</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {diamondPackages.map((pkg, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedPackage(index)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 ${
                        selectedPackage === index
                          ? "border-orange-400 bg-orange-500/20 shadow-lg shadow-orange-500/30"
                          : "border-slate-600 bg-slate-700/30 hover:border-orange-400/50"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{pkg.diamonds}</div>
                        <div className="text-sm text-gray-300">Diamonds</div>
                        <div className="text-sm font-semibold text-white mt-1">RM {pkg.price.toFixed(2)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-300">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-white/30"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-white/30"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quantity Selector */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600 disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="w-20 text-center bg-slate-700/50 border-slate-600 text-white"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    className="border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Section */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method}
                      className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedPayment === method
                          ? "border-orange-400 bg-orange-500/20"
                          : "border-slate-600 bg-slate-700/30 hover:border-orange-400/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={selectedPayment === method}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="text-orange-500"
                      />
                      <span className="text-gray-300">{method}</span>
                    </label>
                  ))}
                </div>
                {selectedPayment && (
                  <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <p className="text-sm text-orange-300">
                      Selected: {selectedPayment} | Total: RM {totalPrice.toFixed(2)}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-2xl sticky top-24">
              <CardHeader>
                <CardTitle className="text-white text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">User ID:</span>
                    <span className="text-white">{userId || "Not entered"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Server:</span>
                    <span className="text-white">{serverId || "Global"}</span>
                  </div>
                </div>

                <div className="border-t border-slate-600 pt-4">
                  {selectedPackageData ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Package:</span>
                        <span className="text-white">{selectedPackageData.diamonds} Diamonds</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Quantity:</span>
                        <span className="text-white">×{quantity}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span className="text-gray-300">Total Diamonds:</span>
                        <span className="text-white">{totalDiamonds}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">No package selected</p>
                  )}
                </div>

                <div className="border-t border-slate-600 pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Payment Method:</span>
                    <span className="text-white">{selectedPayment || "Not selected"}</span>
                  </div>
                </div>

                <div className="border-t border-slate-600 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-white">Total Amount:</span>
                    <span className="text-2xl font-bold text-white">RM {totalPrice.toFixed(2)}</span>
                  </div>
                  <Button
                    onClick={handleProceedToCheckout}
                    className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 transition-all duration-300"
                    disabled={!selectedPackageData || !userId || !selectedPayment}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
