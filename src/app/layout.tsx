import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { Providers } from '@/store/provider';
import { NavigationEvents } from '@/components/navigation-events';
import { Suspense } from 'react';


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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <main className="bg-slate-500 lg:bg-red-600 lg:w-full md:bg-sky-300 md:flex md:justify-center">
            <div className='hidden lg:fixed lg:z-0 lg:w-screen lg:h-full lg:bg-slate-200 md:fixed md:-z-0 md:w-screen md:h-full md:bg-[##f4eded]'>
            </div>
            <div className='lg:fixed lg:z-0 lg:w-full lg:max-w-[512px] lg:h-full home-right lg:block hidden bg-red-700'>
            </div>
            <div className='home-center relative bg-purple-500' id="app">
              <div className='safe-area-top bg-white fixed w-full top-0 h-0  z-50'>
              </div>
              <div>
                <div className='home-page-container'>
                  <Header />
                  <div className='view safe-area'>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}
