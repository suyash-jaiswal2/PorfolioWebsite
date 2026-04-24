import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Syne } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suyash Jaiswal — Portfolio',
  description: 'Computer Science Engineer. Building thoughtful systems, clean interfaces, and tools that work.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}