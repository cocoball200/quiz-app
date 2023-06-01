import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className='hero'>
        <div className='hero-text'>
          <section className="hero-title">
            <div className="hero-container">
              <div className="item-container process-step-1">
                <div className="item-title-container">
                  <h1 className="item-title">Let&apos;s</h1>
                  <div className="item-title-overlay">Let&apos;s</div>
                </div>
              </div>
              <div className="item-container process-step-2">
                <div className="item-title-container">
                  <h1 className="item-title">Play</h1>
                  <div className="item-title-overlay">Play</div>
                </div>
              </div>
              <div className="item-container process-step-3">
                <div className="item-title-container">
                  <h1 className="item-title">Quiz</h1>
                  <div className="item-title-overlay">Quiz</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Link href='/category'>
          <button className='hero-button w-[80%] m-auto flex items-center justify-center px-7.5 py-2.5 text-lg font-semibold q-shadow mb-1 h-10 base bg-purple-700 text-light-3 hover:bg-purple-500 active:bg-purple-900 rounded-lg primary transition-colors duration-200 ease-in-out relative min-w-max text-white'>
            <span className='hero-button-title font-bold'>START</span>
          </button>
        </Link>
      </div>
    </main>
  )
}
