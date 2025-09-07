"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Navigation from "@/components/navigation"
import { useState, useEffect } from "react"

export default function HDPStoreLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      src: "/mlbb-banner.jpg",
      alt: "Mobile Legends: Bang Bang Banner",
      game: "MLBB",
    },
    {
      src: "/free-fire-banner.jpg",
      alt: "Free Fire Banner",
      game: "Free Fire",
    },
    {
      src: "/pubg-banner.jpg",
      alt: "PUBG Mobile Banner",
      game: "PUBG",
    },
    {
      src: "/efootball-banner.jpg",
      alt: "eFootball Banner",
      game: "eFootball",
    },
  ]

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-black text-white">
      <Navigation />

      <section className="relative overflow-hidden pt-16">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          {/* Banner Images */}
          <div className="relative w-full h-full overflow-hidden">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide
                    ? "translate-x-0"
                    : index < currentSlide
                      ? "-translate-x-full"
                      : "translate-x-full"
                }`}
              >
                <img
                  src={banner.src || "/placeholder.svg"}
                  alt={banner.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
            aria-label="Next banner"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "MLBB",
                fullName: "Mobile Legends: Bang Bang",
                href: "/mobile-legends",
                image: "/mlbb-game-logo.jpg",
              },
              {
                name: "PUBG",
                fullName: "PUBG Mobile",
                href: "/pubg",
                image: "/pubg-game-logo.jpg",
              },
              {
                name: "Free Fire",
                fullName: "Garena Free Fire",
                href: "/free-fire",
                image: "/free-fire-game-logo.jpg",
              },
              {
                name: "Genshin",
                fullName: "Genshin Impact",
                href: "/genshin-impact",
                image: "/genshin-game-logo.jpg",
              },
              {
                name: "Honor of Kings",
                fullName: "Honor of Kings",
                href: "/honor-of-kings",
                image: "/honor-of-kings-logo.jpg",
              },
              {
                name: "Valorant",
                fullName: "Valorant",
                href: "/valorant",
                image: "/valorant-game-logo.jpg",
              },
            ].map((game, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer bg-slate-800/50 border-slate-700 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm"
                onClick={() => game.href !== "#" && (window.location.href = game.href)}
              >
                <CardHeader className="pb-3">
                  <div className="w-full h-40 rounded-lg overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={`${game.fullName} Cover`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-1 text-white text-center">{game.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-center text-sm">{game.fullName}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Ahmad", comment: "Super fast delivery! Got my diamonds in seconds.", avatar: "A" },
              { name: "Sarah", comment: "Best prices and reliable service. Highly recommended!", avatar: "S" },
              { name: "Wei Ming", comment: "Easy payment process and instant top-up. Love it!", avatar: "W" },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-white">{testimonial.avatar}</span>
                    </div>
                    <span className="font-medium text-white">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          {/* Top Section - Description */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-white text-lg mb-4">
              HDPSTORE is your trusted platform for safe, fast, and affordable game top-ups in Malaysia.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              We focus on giving gamers the best value with competitive pricing and reliable service across popular
              platforms including Mobile Legends, PUBG, Free Fire, and more. Whether you play on mobile, console, or PC,
              HDPSTORE makes topping up simple and worry-free.
            </p>
          </div>

          {/* Four Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Partnership Column */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-white mb-4 underline">Partnership</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Reseller
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Whatsapp Channel
                  </a>
                </li>
              </ul>
            </div>

            {/* Sites Column */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-white mb-4 underline">Sites</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-white hover:text-gray-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Reports
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service Column */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-white mb-4 underline">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legality Column */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-white mb-4 underline">Legality</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Return & Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-white">Copyright © 2025 HDPSTORE</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
