import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import Provider from '@/context/Provider';
import GameProvider from '@/context/GameProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steam Play',
  description: 'Better than Steam',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en">
      <body className={inter.className}>
        <Provider>
          <GameProvider>
          {children}
          </GameProvider>
        </Provider>
      </body>
    </html>
    </ClerkProvider>
    
  )
}
