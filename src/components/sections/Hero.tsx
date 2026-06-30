import React from 'react'
import HeroDesktop from '../../assets/images/hero-bg-desktop.webp'
import HeroMobile from '../../assets/images/hero-bg-mobile.webp'

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#1e1c1c] min-h-screen">
      {/* Background Images - desktop and tablet */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: `url(${HeroDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 15%, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          backgroundImage: `url(${HeroMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Text Content - positioned at center left */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen pb-16 md:pb-0" style={{ transform: 'translateY(200px)' }}>
        <div className="container mx-auto px-4">

          {/* Main Content Block */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12">
            {/* Left Side - Text (full width on mobile, left side on desktop) */}
            <div className="flex-1 max-w-xl mb-8 md:mb-0 text-left w-full md:w-1/2">
              <div className="inline-block bg-[#365a82] text-white px-4 py-1.5 rounded-full font-semibold text-xs md:text-sm mb-3 animate-pulse">
                Приймаємо зараз
              </div>

              <div className="mb-4">
                <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 leading-tight drop-shadow-md">
                  Олександр Демкович
                </h1>
                <p className="text-xl md:text-3xl text-[#db854f] drop-shadow-md">
                  пластичний хірург
                </p>
              </div>

              <p className="text-base md:text-xl text-white leading-relaxed mb-6 drop-shadow-md">
                Індивідуальний підхід до кожного пацієнта та гарантований результат
              </p>

              {/* Credentials */}
              <div className="flex flex-col gap-3 text-white text-sm mb-6">
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#b7d3f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="drop-shadow-md">Кандидат медичних наук</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#b7d3f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="drop-shadow-md">Досвід роботи понад 10 років</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#b7d3f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="drop-shadow-md">Дійсний член європейської</span>
                </div>
              </div>

              {/* Mobile Buttons - after all text (vertical stack) */}
              <div className="md:hidden mt-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center bg-[#DB854F] text-[#F4E8E3] hover:bg-[#C96D3B] hover:scale-105 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base w-full mb-2"
                >
                  Записатися на прийом
                </a>
                <a
                  href="tel:+380671272630"
                  className="inline-flex items-center justify-center bg-white text-[#1C1C1C] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#F0F0F0] hover:scale-105 text-base w-full"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
                  </svg>
                  Дзвінок
                </a>
              </div>
            </div>

            {/* Right Side - Buttons (hidden on mobile, visible on desktop) */}
            <div className="hidden md:flex flex-col justify-center items-start gap-4 w-1/2">
              <div className="flex items-center gap-4 w-full">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center bg-[#DB854F] text-[#F4E8E3] hover:bg-[#C96D3B] hover:scale-105 px-8 md:px-10 py-4 rounded-full font-semibold transition-all duration-300 text-lg w-full md:w-auto"
                >
                  Записатися на прийом
                </a>
                <a
                  href="tel:+380671272630"
                  className="inline-flex items-center justify-center bg-white text-[#1C1C1C] px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#F0F0F0] hover:scale-105 text-lg w-full md:w-auto"
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
      </div>
    </div>
  )
}

export default Hero
