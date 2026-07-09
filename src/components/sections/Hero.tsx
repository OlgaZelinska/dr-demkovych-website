import React from 'react'
const HeroDesktop = '/assets/images/hero-bg-desktop.webp'
const HeroMobile = '/assets/images/hero-bg-mobile.webp'

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[rgb(var(--color-dark))] min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${HeroDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Text Content - positioned at bottom */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-12 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Main Content Block */}
          <div className="flex flex-col md:flex-row items-end md:items-end gap-6 md:gap-12">
            {/* Left Side - Text (full width on mobile, left side on desktop) */}
            <div className="flex-1 max-w-xl text-left w-full md:w-1/2">
              <div className="inline-block bg-[rgb(var(--color-primary-600))] text-white px-4 py-1.5 rounded-full font-semibold text-xs md:text-sm mb-3 animate-pulse">
                Приймаємо зараз
              </div>

              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 leading-tight drop-shadow-md">
                  Олександр Демкович
                </h1>
                <p className="text-xl md:text-3xl text-[rgb(var(--color-orange))] drop-shadow-md">
                  пластичний хірург
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-white text-base md:text-lg mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="drop-shadow-md">Індивідуальний підхід до кожного пацієнта</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="drop-shadow-md">Гарантований результат</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="drop-shadow-md">Кандидат медичних наук</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="drop-shadow-md">Досвід роботи понад 10 років</span>
                </li>
              </ul>
            </div>

            {/* Right Side - Buttons (hidden on mobile, visible on desktop) */}
            <div className="hidden md:flex flex-col justify-end items-start gap-4 w-1/2">
              <div className="flex items-center gap-4 w-full">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center bg-[rgb(var(--color-orange))] text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-primary-700))] hover:scale-105 px-8 md:px-10 py-4 rounded-full font-semibold transition-all duration-300 text-lg flex-1"
                >
                  Записатися на прийом
                </a>
                <a
                  href="tel:+380671272630"
                  className="inline-flex items-center justify-center bg-white text-[rgb(var(--color-text-black))] px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#F0F0F0] hover:scale-105 text-lg flex-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
                  </svg>
                  Дзвінок
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Buttons - at the very bottom */}
          <div className="md:hidden mt-4 grid grid-cols-1 gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center bg-[rgb(var(--color-orange))] text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-primary-700))] hover:scale-105 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base"
            >
              Записатися на прийом
            </a>
            <a
              href="tel:+380671272630"
              className="inline-flex items-center justify-center bg-white text-[rgb(var(--color-text-black))] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#F0F0F0] hover:scale-105 text-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
              </svg>
              Дзвінок
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
