import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ClientWrapper } from "@/components/client-wrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Crescent Sam Affa Enterprises - Leading Electrical Contractors in Bengaluru",
  description:
    "Class 1 Licensed Electrical Contractor with 40+ years experience. Specializing in EHV, HT, LT works and Government projects. 190,670 kVA projects executed.",
  keywords: "electrical contractor, Bengaluru, EHV works, HT works, LT works, government projects, BESCOM, KPTCL",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientWrapper>{children}</ClientWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
