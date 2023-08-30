import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans, Tulpen_One } from 'next/font/google'

const nunito_sans = Nunito_Sans({ subsets: ['latin'] })

const tulpen_one = Tulpen_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tulpen'
})

export const metadata: Metadata = {
  title: 'Md. Fahad Rahman | Portfolio',
  description: 'Strive for excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>{children}</body>
    </html>
  )
}
