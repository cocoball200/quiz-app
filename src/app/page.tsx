import Image from 'next/image'

export default function Home() {
  return (
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
            <div className='header theme header-in-main'>
              {/* <div className=''>something logo</div>
              <div className=''>something title</div> */}
            </div>
            <div className='view safe-area'>
              {/* <div>score</div>
              <div>quiz</div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
