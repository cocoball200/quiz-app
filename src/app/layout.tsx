import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/store/provider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz App',
  description: 'OGMI Assignment',
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
          <main className="lg:w-full md:flex md:justify-center">
            <div className='hidden lg:fixed lg:z-0 lg:w-screen lg:h-full lg:bg-slate-200 md:fixed md:-z-0 md:w-screen md:h-full md:bg-[##f4eded]'>
            </div>
            <div className='lg:fixed lg:z-0 lg:w-full lg:max-w-[512px] lg:h-full home-right lg:block hidden bg-purple-500 p-20 text-white rounded-b-lg rounded-l-lg'>
              <div className='flex justify-center items-center h-full font-extrabold text-[100px]'>
                Enjoy, Your Quiz
              </div>
            </div>
            <div className='home-center relative bg-purple-500' id="app">
              <div className='safe-area-top bg-white fixed w-full top-0 h-0  z-50'>
              </div>
              <div>
                <div className='home-page-container'>
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
