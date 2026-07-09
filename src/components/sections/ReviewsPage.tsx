import React, { useState, useEffect, useRef } from 'react'
const ReviewUser1 = '/assets/images/reviews/review-user-1.webp'
const ReviewUser2 = '/assets/images/reviews/review-user-2.webp'
const ReviewUser3 = '/assets/images/reviews/review-user-3.webp'
const ReviewUser4 = '/assets/images/reviews/review-user-4.webp'
const ReviewUser5 = '/assets/images/reviews/review-user-5.webp'
const ReviewUser6 = '/assets/images/reviews/review-user-6.webp'
const ReviewUser7 = '/assets/images/reviews/review-user-7.webp'
const ReviewUser8 = '/assets/images/reviews/review-user-8.webp'
const ReviewUser9 = '/assets/images/reviews/review-user-9.webp'
const ReviewUser10 = '/assets/images/reviews/review-user-10.webp'
const ContactBg = '/assets/contact-bg.webp'
const Instagram1 = '/assets/images/results/result-1.webp'
const Instagram2 = '/assets/images/results/result-2.webp'
const Instagram3 = '/assets/images/results/result-3.webp'
const Instagram4 = '/assets/images/results/result-4.webp'
const Instagram5 = '/assets/images/results/result-5.webp'
const Instagram6 = '/assets/images/results/result-6.webp'
const Instagram7 = '/assets/images/results/result-7.webp'
const Instagram8 = '/assets/images/results/result-8.webp'
const Instagram11 = '/assets/images/results/result-11.webp'
const Instagram12 = '/assets/images/results/result-12.webp'

const reviewImages = [
  { id: 1, image: ReviewUser1, alt: 'Відгук пацієнта 1' },
  { id: 2, image: ReviewUser2, alt: 'Відгук пацієнта 2' },
  { id: 3, image: ReviewUser3, alt: 'Відгук пацієнта 3' },
  { id: 4, image: ReviewUser4, alt: 'Відгук пацієнта 4' },
  { id: 5, image: ReviewUser5, alt: 'Відгук пацієнта 5' },
  { id: 6, image: ReviewUser6, alt: 'Відгук пацієнта 6' },
  { id: 7, image: ReviewUser7, alt: 'Відгук пацієнта 7' },
  { id: 8, image: ReviewUser8, alt: 'Відгук пацієнта 8' },
  { id: 9, image: ReviewUser9, alt: 'Відгук пацієнта 9' },
  { id: 10, image: ReviewUser10, alt: 'Відгук пацієнта 10' },
]

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
]

export const Reviews: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(237)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [instagramSpeed, setInstagramSpeed] = useState(237)
  const instagramRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAnimationSpeed(303)
        setInstagramSpeed(303)
      } else {
        setAnimationSpeed(237)
        setInstagramSpeed(237)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Create infinite loop by duplicating content multiple times
  // Each set is 10 items, 3 sets = 30 items total for smooth infinite loop
  const duplicatedContent = [...reviewImages, ...reviewImages, ...reviewImages, ...reviewImages, ...reviewImages]
  const duplicatedInstagram = [...instagramContent, ...instagramContent, ...instagramContent, ...instagramContent, ...instagramContent]

  return (
    <div className="relative py-16 min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Review Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Відгуки
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Насамперед для нас важливе здоров'я та задоволення наших пацієнтів
          </p>
        </div>

        {/* Reviews Slider */}
        <div
          className="relative touch-none mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
              <div
                key={`${item.id}-${index}`}
                className="group relative flex-shrink-0 w-[280px] h-[500px] min-w-[280px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 bg-white shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Header */}
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
            className="flex items-center gap-3 px-6 py-3 bg-[rgb(var(--color-orange))] text-white rounded-full font-semibold hover:bg-[#c96d3b] transition-colors duration-300 w-full md:w-auto justify-center md:justify-start"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.586-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.978-.059 1.265-.073 1.643-.073 4.849 0 3.259.014 3.668.072 4.948.199 4.358 2.617 6.78 6.978 6.98 1.265.058 1.643.072 4.849.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.978.059-1.265.073-1.643.073-4.849 0-3.259-.014-3.667-.072-4.947-.199-4.354-2.617-6.78-6.979-6.978-1.265-.059-1.643-.073-4.849-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>

        {/* Instagram Slider */}
        <div
          className="relative touch-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={instagramRef}
            className="flex gap-6 will-change-transform min-w-max"
            style={{
              animation: `marquee ${instagramSpeed}s linear infinite`,
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            {duplicatedInstagram.map((item, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0116.114 21H7.114a2 2 0 01-1.789-2.894l-3.5-7A2 2 0 014.35 10H10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 5)); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Reviews
