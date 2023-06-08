import './globals.css'
import { Poppins } from 'next/font/google'

const popins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Poll App',
  description: 'Fast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  )
}
