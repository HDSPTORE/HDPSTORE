import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import WhatsAppButton from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "HDPSTORE - Fast & Secure Game Top-Up Service",
  description:
    "Top up your favorite games instantly with HDPSTORE. Fast, secure, and trusted service for MLBB, PUBG, Free Fire, Genshin Impact and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
