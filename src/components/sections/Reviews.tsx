import React, { useState, useEffect, useRef } from 'react'
import ReviewUser1 from '../../assets/images/reviews/review-user-1.webp'
import ReviewUser2 from '../../assets/images/reviews/review-user-2.webp'
import ReviewUser3 from '../../assets/images/reviews/review-user-3.webp'
import ReviewUser4 from '../../assets/images/reviews/review-user-4.webp'
import ReviewUser5 from '../../assets/images/reviews/review-user-5.webp'
import ReviewUser6 from '../../assets/images/reviews/review-user-6.webp'
import ReviewUser7 from '../../assets/images/reviews/review-user-7.webp'
import ReviewUser8 from '../../assets/images/reviews/review-user-8.webp'
import ReviewUser9 from '../../assets/images/reviews/review-user-9.webp'
import ReviewUser10 from '../../assets/images/reviews/review-user-10.webp'

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

export const Reviews: React.FC = () => {
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
  const duplicatedContent = [...reviewImages, ...reviewImages, ...reviewImages]

  return (
    <div
      className="py-16 bg-gradient-to-b from-[#e0e2ee] via-[#c9cbd8] to-[#b2b4c2]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Відгуки
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Насамперед для нас важливе здоров'я та задоволення наших пацієнтів
          </p>
        </div>

        {/* Reviews Slider */}
        <div
          className="relative overflow-visible"
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

export default Reviews
