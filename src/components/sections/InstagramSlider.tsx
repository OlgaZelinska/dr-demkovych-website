import React, { useState, useEffect, useRef } from 'react'

// Import images from results as Instagram content
import Instagram1 from '../../assets/images/results/result-1.webp'
import Instagram2 from '../../assets/images/results/result-2.webp'
import Instagram3 from '../../assets/images/results/result-3.webp'
import Instagram4 from '../../assets/images/results/result-4.webp'
import Instagram5 from '../../assets/images/results/result-5.webp'
import Instagram6 from '../../assets/images/results/result-6.webp'
import Instagram7 from '../../assets/images/results/result-7.webp'
import Instagram8 from '../../assets/images/results/result-8.webp'
import Instagram11 from '../../assets/images/results/result-11.webp'
import Instagram12 from '../../assets/images/results/result-12.webp'
import Instagram13 from '../../assets/images/results/result-13.webp'
import Instagram14 from '../../assets/images/results/result-14.webp'
import Instagram15 from '../../assets/images/results/result-15.webp'
import Instagram16 from '../../assets/images/results/result-16.webp'
import Instagram17 from '../../assets/images/results/result-17.webp'
import Instagram18 from '../../assets/images/results/result-18.webp'
import Instagram19 from '../../assets/images/results/result-19.webp'
import Instagram20 from '../../assets/images/results/result-20.webp'
import Instagram21 from '../../assets/images/results/result-21.webp'
import Instagram22 from '../../assets/images/results/result-22.webp'
import Instagram23 from '../../assets/images/results/result-23.webp'
import Instagram24 from '../../assets/images/results/result-24.webp'
import Instagram25 from '../../assets/images/results/result-25.webp'
import Instagram26 from '../../assets/images/results/result-26.webp'
import Instagram27 from '../../assets/images/results/result-27.webp'
import Instagram28 from '../../assets/images/results/result-28.webp'
import Instagram29 from '../../assets/images/results/result-29.webp'
import Instagram30 from '../../assets/images/results/result-30.webp'
import Instagram31 from '../../assets/images/results/result-31.webp'
import Instagram32 from '../../assets/images/results/result-32.webp'
import Instagram33 from '../../assets/images/results/result-33.webp'
import Instagram34 from '../../assets/images/results/result-34.webp'
import Instagram35 from '../../assets/images/results/result-35.webp'
import Instagram36 from '../../assets/images/results/result-36.webp'
import Instagram37 from '../../assets/images/results/result-37.webp'
import Instagram38 from '../../assets/images/results/result-38.webp'

const instagramContent = [
  { id: 1, image: Instagram1, alt: 'Пластична хірургія - Мамопластика', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 2, image: Instagram2, alt: 'Ринопластика - Корекція носа', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 3, image: Instagram3, alt: 'Абдоминопластика - Оновлення живота', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 4, image: Instagram4, alt: 'Блефаропластика - Омолодження очей', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 5, image: Instagram5, alt: 'Ліпосакція - Скульптурання фігури', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 6, image: Instagram6, alt: 'Контурна пластика - Обличчя', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 7, image: Instagram7, alt: 'Біорепарація - Відновлення шкіри', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 8, image: Instagram8, alt: 'Підтяжка обличчя - Ритидопластика', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 9, image: Instagram11, alt: 'Хірургія носа - Ринопластика', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 10, image: Instagram12, alt: 'Корекція грудей - Мастопекти', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 11, image: Instagram13, alt: 'Ліпосакція - Видалення жиру', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 12, image: Instagram14, alt: 'Омолодження обличчя - Біорепарація', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 13, image: Instagram15, alt: 'Пластична хірургія - Повне оновлення', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 14, image: Instagram16, alt: 'Хірургія обличчя - Хейлопластика', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 15, image: Instagram17, alt: 'Моделювання фігури - Скульптура', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 16, image: Instagram18, alt: 'Корекція носа - Сeperатний ринопластика', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 17, image: Instagram19, alt: 'Підтяжка шкіри - Термопластика', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 18, image: Instagram20, alt: 'Хірургія грудей - Реімплантація', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 19, image: Instagram21, alt: 'Омолодження шкіри - Фототерапія', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 20, image: Instagram22, alt: 'Корекція тіла - Ліпомоделювання', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 21, image: Instagram23, alt: 'Пластична хірургія - Індивідуальний підхід', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 22, image: Instagram24, alt: 'Ринопластика - Функціональна корекція', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 23, image: Instagram25, alt: 'Мамопластика - Відновлення грудей', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 24, image: Instagram26, alt: 'Ліпосакція - Відновлення контурів', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 25, image: Instagram27, alt: 'Блефаропластика - Омолодження очей', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 26, image: Instagram28, alt: 'Хірургія носа - Стратегічна корекція', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 27, image: Instagram29, alt: 'Підтяжка обличчя - Мінімально інвазивна', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 28, image: Instagram30, alt: 'Контурна пластика - Заповнення обличчя', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 29, image: Instagram31, alt: 'Ліпосакція - Лазерна технологія', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 30, image: Instagram32, alt: 'Омолодження обличчя - Комплексний підхід', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 31, image: Instagram33, alt: 'Пластична хірургія - Природний результат', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 32, image: Instagram34, alt: 'Ринопластика - Кінчик носа', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 33, image: Instagram35, alt: 'Мамопластика - Відновлення після вагітності', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 34, image: Instagram36, alt: 'Ліпосакція - Видалення надлишкової шкіри', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 35, image: Instagram37, alt: 'Блефаропластика - Відновлення молодості', link: 'https://www.instagram.com/dr.demkovych/' },
  { id: 36, image: Instagram38, alt: 'Хірургія носа - Відновлення дихання', link: 'https://www.instagram.com/dr.demkovych/' },
]

export const InstagramSlider: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(237)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Adjust speed for mobile devices
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAnimationSpeed(303) // Slower on mobile
      } else {
        setAnimationSpeed(237) // 50% slower (158 * 1.5 = 237)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Duplicate content for infinite loop
  const duplicatedContent = [...instagramContent, ...instagramContent, ...instagramContent]

  return (
    <div 
      className="py-16 bg-[rgb(var(--color-dark))]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        {/* Header - Desktop: side by side, Mobile: stacked */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Слідкуйте за нами в Instagram
            </h2>
            <p className="text-[rgb(var(--color-text-secondary))] text-lg">
              Перегляньте наші роботи та відгуки пацієнтів
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/dr.demkovych"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white text-[rgb(var(--color-text-black))] rounded-full font-semibold hover:bg-[#F0F0F0] transition-colors duration-300 w-full md:w-auto justify-center md:justify-start"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.586-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.978-.059 1.265-.073 1.643-.073 4.849 0 3.259.014 3.668.072 4.948.199 4.358 2.617 6.78 6.978 6.98 1.265.058 1.643.072 4.849.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.978.059-1.265.073-1.643.073-4.849 0-3.259-.014-3.667-.072-4.947-.199-4.354-2.617-6.78-6.979-6.978-1.265-.059-1.643-.073-4.849-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>

        {/* Instagram Feed Slider */}
        <div
          className="relative overflow-visible touch-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <div
            ref={sliderRef}
            className="flex gap-6 will-change-transform min-w-max"
            style={{
              animation: `marquee ${animationSpeed}s linear infinite`,
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            {duplicatedContent.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-[280px] h-[500px] min-w-[280px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading={index < 10 ? 'eager' : 'lazy'}
                />

                {/* Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Instagram icon overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0116.114 21H7.114a2 2 0 01-1.789-2.894l-3.5-7A2 2 0 014.35 10H10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* CSS for animation - move by the width of one set of items */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default InstagramSlider
