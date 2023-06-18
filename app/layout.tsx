import { Inter } from 'next/font/google'
import { Providers } from './components/Providers'
import Header from './components/Shared/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
        {children}
        </Providers>
      </body>
    </html>
  )
}
