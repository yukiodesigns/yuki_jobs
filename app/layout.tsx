import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuki Jobs',
  description: 'Welcome to Yuki Jobs, where your dream career begins!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
      <Footer />
        </body>
    </html>
  )
}
