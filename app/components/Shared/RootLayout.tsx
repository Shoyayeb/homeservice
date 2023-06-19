import { ReactNode } from 'react'
import { Footer } from './Footer'
import Header from './Header'

interface Props {
    children: ReactNode
}

export const RootLayout = ({children}:Props) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}
