import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getServices } from '../../lib/services'
const ContactBg = '/assets/contact-bg.webp'

export const Services: React.FC = () => {
  const { data: services = [], isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  })

  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(var(--color-orange))]"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-700">Виникла помилка при завантаженні послуг. Спробуйте пізніше.</p>
        </div>
      </div>
    )
  }

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const formatPrice = (price: string) => {
    // Format price like "90 000 ₴"
    if (price.includes('€')) {
      const amount = price.replace('€', '').trim()
      const formatted = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      return `${formatted}€`
    }
    if (price.includes('від')) {
      return price
    }
    const amount = price.replace('грн', '').replace(' ', '').trim()
    const formatted = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    return `${formatted} ₴`
  }

  const getCategoryColor = (id: string) => {
    const colors: Record<string, string> = {
      'breast-1': 'border-[rgb(var(--color-orange))]',
      'breast-2': 'border-[rgb(var(--color-orange))]',
      'body-1': 'border-[rgb(var(--color-orange))]',
      'face-1': 'border-[rgb(var(--color-orange))]',
      'hernia-1': 'border-[rgb(var(--color-orange))]',
    }
    return colors[id] || 'border-[rgb(var(--color-orange))]'
  }

  return (
    <div className="relative py-16 min-h-screen">
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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Вартість послуг
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Актуальні ціни на пластичні операції та супутні послуги
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {services.map((service) => {
            const isExpanded = expandedId === service.id
            const categoryColor = getCategoryColor(service.id)

            return (
              <div
                id={service.id}
                key={service.id}
                className={`bg-[rgb(var(--color-dark))]/60 backdrop-blur-md rounded-2xl border ${categoryColor} border-opacity-30 overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-2xl border-opacity-50' : 'shadow-lg border-opacity-20'
                }`}
              >
                {/* Header Card */}
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-orange))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--color-dark))]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-[rgb(var(--color-text-secondary))] text-sm md:text-base max-w-2xl line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto justify-between md:justify-end">
                      <div className="text-right">
                        <div className="text-white font-semibold text-base md:text-xl">{service.price}</div>
                        <div className="text-[rgb(var(--color-text-secondary))] text-xs mt-0.5 md:mt-1">
                          {service.duration}
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    maxHeight: isExpanded ? '1000px' : '0px',
                  }}
                >
                  <div className="px-6 md:px-8 pb-6 pt-0 border-t border-white/5 mt-2">
                    <div className="bg-[rgb(var(--color-dark))]/40 rounded-xl p-5 mt-4">
                      <div className="flex justify-between items-center gap-3 mb-3">
                        <span className="text-[rgb(var(--color-orange))] font-semibold text-sm md:text-base uppercase tracking-wider">
                          Операції та ціни:
                        </span>
                      </div>
                      <div className="space-y-2">
                        {service.procedures?.map((proc, procIndex) => (
                          <div
                            key={procIndex}
                            className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded transition-colors duration-200"
                          >
                            <span className="text-[rgb(var(--color-text-light))] text-sm md:text-base leading-relaxed">
                              {proc.name}
                            </span>
                            <span className="font-semibold text-[rgb(var(--color-orange))] text-sm md:text-base whitespace-nowrap">
                              {formatPrice(proc.price)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-[rgb(var(--color-orange))]/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center border border-[rgb(var(--color-orange))]/20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Маєте питання?
          </h3>
          <p className="text-[rgb(var(--color-text-secondary))] mb-4 md:mb-8 max-w-2xl mx-auto text-sm md:text-lg">
            Запишіться на безкоштовну консультацію — наші фахівці розповідатимуть про всі деталі лікування та відповідатимуть на ваші питання
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[rgb(var(--color-orange))] text-[rgb(var(--color-text-black))] px-4 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[rgb(var(--color-primary-700))] hover:scale-105 transition-all duration-300 text-sm md:text-lg shadow-lg shadow-[rgb(var(--color-orange))]/20"
          >
            Записатися на консультацію
          </a>
        </div>
      </div>
    </div>
  )
}

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    'soft-tissue': (
      <svg className="w-5 h-5 md:w-7 md:h-7 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    cosmetic: (
      <svg className="w-5 h-5 md:w-7 md:h-7 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    breast: (
      <svg className="w-5 h-5 md:w-7 md:h-7 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
      </svg>
    ),
    hernia: (
      <svg className="w-5 h-5 md:w-7 md:h-7 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  }
  return icons[type] || null
}

export default Services
