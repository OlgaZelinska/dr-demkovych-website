import React, { useState } from 'react'
import TelegramIcon from '../../assets/images/telegram.svg'

// Import images from cases
// before-*.webp = photos before surgery
// after-*.webp = photos after surgery
import case01before1 from '../../assets/images/cases/case-01/image-01.webp'
import case01before2 from '../../assets/images/cases/case-01/image-02.webp'
import case01after1 from '../../assets/images/cases/case-01/image-03.webp'
import case01after2 from '../../assets/images/cases/case-01/image-04.webp'
import case02after1 from '../../assets/images/cases/case-02/after-1.webp'
import case03after1 from '../../assets/images/cases/case-03/after-01.webp'
import case04before1 from '../../assets/images/cases/case-04/before-01.webp'
import case04before2 from '../../assets/images/cases/case-04/before-02.webp'
import case04before3 from '../../assets/images/cases/case-04/before-03.webp'
import case04after1 from '../../assets/images/cases/case-04/after-01.webp'
import case04after2 from '../../assets/images/cases/case-04/after-02.webp'
import case04after3 from '../../assets/images/cases/case-04/after-03.webp'
import case05after1 from '../../assets/images/cases/case-05/after-01.webp'
import case06after1 from '../../assets/images/cases/case-06/after-01.webp'
import case07after1 from '../../assets/images/cases/case-07/after-01.webp'
import case07after2 from '../../assets/images/cases/case-07/after-02.webp'
import case08after1 from '../../assets/images/cases/case-08/after-01.webp'
import case08after2 from '../../assets/images/cases/case-08/after-02.jpeg'
import case09before1 from '../../assets/images/cases/case-09/before-01.webp'
import case09before2 from '../../assets/images/cases/case-09/before-02.webp'
import case09after1 from '../../assets/images/cases/case-09/after-01.webp'
import case09after2 from '../../assets/images/cases/case-09/after-02.webp'
import case09after3 from '../../assets/images/cases/case-09/after-03.webp'
import case10before1 from '../../assets/images/cases/case-10/before-01.webp'
import case10before2 from '../../assets/images/cases/case-10/before-02.webp'
import case10before3 from '../../assets/images/cases/case-10/before-03.webp'
import case10after1 from '../../assets/images/cases/case-10/after-01.webp'
import case10after2 from '../../assets/images/cases/case-10/after-02.webp'
import case10after3 from '../../assets/images/cases/case-10/after-03.webp'
import case11before1 from '../../assets/images/cases/case-11/before-01.webp'
import case11before2 from '../../assets/images/cases/case-11/before-02.webp'
import case11before3 from '../../assets/images/cases/case-11/before-03.webp'
import case11after1 from '../../assets/images/cases/case-11/after-01.webp'
import case11after2 from '../../assets/images/cases/case-11/after-02.webp'
import case11after3 from '../../assets/images/cases/case-11/after-03.webp'
import case12before1 from '../../assets/images/cases/case-12/before-01.webp'
import case12before2 from '../../assets/images/cases/case-12/before-02.webp'
import case12after1 from '../../assets/images/cases/case-12/after-01.webp'
import case12after2 from '../../assets/images/cases/case-12/after-02.webp'
import case12after3 from '../../assets/images/cases/case-12/after-03.webp'
import case13after1 from '../../assets/images/cases/case-13/after-01.webp'
import case13after2 from '../../assets/images/cases/case-13/after-02.webp'
import case13after3 from '../../assets/images/cases/case-13/after-03.webp'
import case13before1 from '../../assets/images/cases/case-13/before-01.webp'
import case13before2 from '../../assets/images/cases/case-13/before-02.webp'
import case13before3 from '../../assets/images/cases/case-13/before-03.webp'
import result14 from '../../assets/images/results/result-14.webp'
import result15 from '../../assets/images/results/result-15.webp'
import result16 from '../../assets/images/results/result-16.webp'
import result17 from '../../assets/images/results/result-17.webp'
import result18 from '../../assets/images/results/result-18.webp'
import result19 from '../../assets/images/results/result-19.webp'
import result20 from '../../assets/images/results/result-20.webp'
import result21 from '../../assets/images/results/result-21.webp'
import result22 from '../../assets/images/results/result-22.webp'
import result23 from '../../assets/images/results/result-23.webp'
import result24 from '../../assets/images/results/result-24.webp'
import result25 from '../../assets/images/results/result-25.webp'
import result26 from '../../assets/images/results/result-26.webp'
import result27 from '../../assets/images/results/result-27.webp'
import result28 from '../../assets/images/results/result-28.webp'
import result29 from '../../assets/images/results/result-29.webp'
import result30 from '../../assets/images/results/result-30.webp'
import result31 from '../../assets/images/results/result-31.webp'
import result32 from '../../assets/images/results/result-32.webp'
import result33 from '../../assets/images/results/result-33.webp'
import result34 from '../../assets/images/results/result-34.webp'
import result35 from '../../assets/images/results/result-35.webp'
import result36 from '../../assets/images/results/result-36.webp'
import result37 from '../../assets/images/results/result-37.webp'
import result38 from '../../assets/images/results/result-38.webp'

// Case data - 9 cases with 1-4 photos each (using available images)
// beforePhotos - photos before surgery
// afterPhotos - photos after surgery
interface CaseData {
  id: number
  title: string
  beforePhotos: string[]
  afterPhotos: string[]
  term: string
}

const cases: CaseData[] = [
  {
    id: 1,
    title: 'Мамопластика',
    beforePhotos: [case01before1, case01before2],
    afterPhotos: [case01after1, case01after2],
    term: 'Через 6 місяців',
  },
  {
    id: 2,
    title: 'Кругова блефаропластика',
    beforePhotos: [],
    afterPhotos: [case02after1],
    term: 'Через 1 місяць',
  },
  {
    id: 3,
    title: 'Абдомінопластика з переносом пупка',
    beforePhotos: [],
    afterPhotos: [case03after1],
    term: 'Через 6 місяців',
  },
  {
    id: 4,
    title: 'Верхня блефаропластика',
    beforePhotos: [case04before1, case04before2, case04before3],
    afterPhotos: [case04after1, case04after2, case04after3],
    term: 'Через 1 місяць',
  },
  {
    id: 5,
    title: 'Ліпофілінг грудей',
    beforePhotos: [],
    afterPhotos: [case05after1],
    term: 'Через 3 місяці',
  },
  {
    id: 6,
    title: 'Ліпосакція підборіддя',
    beforePhotos: [],
    afterPhotos: [case06after1],
    term: 'Через 1 місяць',
  },
  {
    id: 7,
    title: 'Ліпосакція підборіддя',
    beforePhotos: [],
    afterPhotos: [case07after1, case07after2],
    term: 'Одразу після операції',
  },
  {
    id: 8,
    title: 'Ліпосакція підборіддя',
    beforePhotos: [],
    afterPhotos: [case08after1, case08after2],
    term: 'Одразу після операції',
  },
  {
    id: 9,
    title: 'Ліпосакція підборіддя',
    beforePhotos: [case09before1, case09before2],
    afterPhotos: [case09after1, case09after2, case09after3],
    term: 'Через 3 місяці',
  },
  {
    id: 10,
    title: 'Аугментаційна мамопластика',
    beforePhotos: [case10before1, case10before2, case10before3],
    afterPhotos: [case10after1, case10after2, case10after3],
    term: 'Через 6 місяців',
  },
  {
    id: 11,
    title: 'Ліпофілінг грудей з ліпосакцією живота',
    beforePhotos: [case11before1, case11before2, case11before3],
    afterPhotos: [case11after1, case11after2, case11after3],
    term: 'Через 3 місяці',
  },
  {
    id: 12,
    title: 'Підтяжка обличчя 2/3 Deep Plane',
    beforePhotos: [case12before1, case12before2],
    afterPhotos: [case12after1, case12after2, case12after3],
    term: 'Через 6 місяців',
  },
  {
    id: 13,
    title: 'Ліпосакція підборіддя',
    afterPhotos: [case13after1, case13after2, case13after3],
    beforePhotos: [case13before1, case13before2, case13before3],
    term: 'Через 3 місяці',
  },
]

// Slider component for mobile before/after with swipe and click to toggle
const BeforeAfterSlider: React.FC<{
  beforePhotos: string[]
  afterPhotos: string[]
}> = ({ beforePhotos, afterPhotos }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  // Combined photos array: after photos first, then before photos
  // after-01 should be first, then after-02, etc., then before-01, before-02, etc.
  const allPhotos = [...afterPhotos, ...beforePhotos]
  const currentPhoto = allPhotos[photoIndex]
  const hasPhotos = allPhotos.length > 0

  // Calculate which section we're in based on index
  const isAfter = photoIndex < afterPhotos.length

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const currentX = e.targetTouches[0].clientX
    const diff = touchStart - currentX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && photoIndex < allPhotos.length - 1) {
        setPhotoIndex(prev => prev + 1)
      } else if (diff < 0 && photoIndex > 0) {
        setPhotoIndex(prev => prev - 1)
      }
      setTouchStart(null)
    }
    // Prevent scrolling the page when swiping on before/after images
    e.preventDefault()
  }

  const handleTouchEnd = () => setTouchStart(null)

  // Toggle between before/after on click/tap (advances photo)
  const handleToggle = () => {
    if (photoIndex < allPhotos.length - 1) {
      setPhotoIndex(prev => prev + 1)
    } else {
      setPhotoIndex(0)
    }
  }

  return (
    <div
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg cursor-pointer touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleToggle}
      onTouchMoveCapture={(e) => e.preventDefault()}
    >
      {hasPhotos ? (
        <>
          <img
            src={currentPhoto}
            alt={isAfter ? 'Після операції' : 'До операції'}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm font-medium">
            {isAfter ? 'Після операції' : 'До операції'}
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[rgb(var(--color-gray-1))]">
          <span className="text-[rgb(var(--color-text-secondary))] text-sm">Немає фото</span>
        </div>
      )}
    </div>
  )
}


export const BeforeAfterSection: React.FC = () => {
  return (
    <div className="py-16 bg-[rgb(var(--color-dark))]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            До та Після
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Переконайтесь у якості нашої роботи — подивіться на реальні результати
          </p>
        </div>

        {/* Masonry Grid - Featured case + other cases */}
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {/* Featured Case (First case - larger) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {cases[0].title}
              </h3>
              <p className="text-[rgb(var(--color-text-secondary))] text-lg mb-6">
                Професійна хірургічна допомога з більш як 15-річним досвідом.
                Зробіть перший крок до змін сьогодні!
              </p>
              <div className="bg-[rgb(var(--color-gray-1))] rounded-xl p-5 mb-6 border-l-4 border-[rgb(var(--color-orange))]">
                <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed">
                  <span className="text-[rgb(var(--color-orange))] font-semibold">Термін після операції:</span> {cases[0].term}
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-xs text-white bg-[rgb(var(--color-orange))] px-3 py-1 rounded-full">
                  До операції
                </span>
                <span className="text-xs text-[rgb(var(--color-text-secondary))] bg-[rgb(var(--color-gray-1))] px-3 py-1 rounded-full">
                  Після операції
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                {/* After photos first (per user requirement) */}
                {cases[0].afterPhotos.map((photo, idx) => (
                  <div key={`after-${idx}`} className="relative group rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={photo}
                      alt="Після операції"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold text-white bg-[rgb(var(--color-orange))] px-3 py-1.5 rounded-full shadow-md">
                        До
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-semibold text-white bg-[rgb(var(--color-dark))]/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-white/20">
                        Після
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
                {/* Before photos second */}
                {cases[0].beforePhotos.map((photo, idx) => (
                  <div key={`before-${idx}`} className="relative group rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={photo}
                      alt="До операції"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold text-white bg-[rgb(var(--color-orange))] px-3 py-1.5 rounded-full shadow-md">
                        До
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-semibold text-white bg-[rgb(var(--color-dark))]/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md border border-white/20">
                        Після
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regular Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.slice(1).map((item, index) => (
              <div key={item.id} className="bg-[rgb(var(--color-gray-1))] rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <BeforeAfterSlider beforePhotos={item.beforePhotos} afterPhotos={item.afterPhotos} />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-4">
                    {item.beforePhotos.length + item.afterPhotos.length} фотографії результату
                  </p>
                  <div className="bg-[rgb(var(--color-dark))] rounded-lg p-3 border border-[#3a3838]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs text-[rgb(var(--color-text-secondary))] font-medium">
                        {item.term}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Telegram Section */}
          <div className="mt-12 py-8 px-6 bg-[rgb(var(--color-dark))] rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Більше результатів в Telegram-каналі
                </h3>
                <p className="text-[rgb(var(--color-text-secondary))] text-base md:text-lg">
                  Перегляньте наші роботи
                </p>
              </div>

              <a
                href="https://t.me/dr_demkovych"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white text-[rgb(var(--color-text-black))] rounded-full font-semibold hover:bg-[#F0F0F0] transition-colors duration-300 w-full md:w-auto justify-center md:justify-start"
              >
                <img src={TelegramIcon} alt="Telegram" className="w-6 h-6" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSection
