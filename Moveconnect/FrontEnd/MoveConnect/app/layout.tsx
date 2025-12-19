import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MoveConnect - Web3 Networking',
  description: 'Your blockchain business identity in one link',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased min-h-screen flex flex-col selection:bg-primary selection:text-background-dark">
        {children}
      </body>
    </html>
  )
}

