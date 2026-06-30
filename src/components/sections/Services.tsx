import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getServices } from '../../lib/services'

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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DB854F]"></div>
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
      'breast-1': 'border-[#DB854F]',
      'breast-2': 'border-[#DB854F]',
      'body-1': 'border-[#A0A0A0]',
      'face-1': 'border-[#8C8C8C]',
      'hernia-1': 'border-[#666666]',
    }
    return colors[id] || 'border-[#DB854F]'
  }

  return (
    <div className="relative py-16">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/src/assets/images/contact-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1C1C1C] bg-opacity-80" />
        <div className="absolute inset-0 bg-[#1C1C1C] blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Вартість послуг
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Актуальні ціни на пластичні операції та супутні послуги
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {services.map((service) => {
            const isExpanded = expandedId === service.id
            const categoryColor = getCategoryColor(service.id)

            return (
              <div
                key={service.id}
                className={`bg-[#1C1C1C]/60 backdrop-blur-md rounded-2xl border ${categoryColor} border-opacity-30 overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-2xl border-opacity-50' : 'shadow-lg border-opacity-20'
                }`}
              >
                {/* Header Card */}
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-[#DB854F] focus:ring-offset-2 focus:ring-offset-[#1C1C1C]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 w-full md:w-auto">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${categoryColor} bg-opacity-10`}>
                        <ServiceIcon type={service.icon} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-[#A0A0A0] text-sm md:text-base max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                      <div className="text-right">
                        <div className="text-white font-semibold text-lg">{service.price}</div>
                        <div className="text-[#A0A0A0] text-xs mt-1 flex items-center justify-end gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {service.duration}
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="bg-[#1C1C1C]/40 rounded-xl p-5 mt-4">
                      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                        <span className="text-[#DB854F] font-medium text-sm uppercase tracking-wider">
                          Процедури та ціни:
                        </span>
                      </div>
                      <div className="space-y-3">
                        {service.procedures?.map((proc, procIndex) => (
                          <div
                            key={procIndex}
                            className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded transition-colors duration-200"
                          >
                            <span className="text-[#e0e0e0] text-sm md:text-base leading-relaxed">
                              {proc.name}
                            </span>
                            <span className="font-semibold text-[#DB854F] text-sm md:text-base">
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

        <div className="mt-16 bg-[#DB854F]/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center border border-[#DB854F]/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Маєте питання?
          </h3>
          <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto text-lg">
            Запишіться на безкоштовну консультацію — наші фахівці розповідатимуть про всі деталі лікування та відповідатимуть на ваші питання
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#DB854F] text-[#1C1C1C] px-8 py-4 rounded-full font-semibold hover:bg-[#c96d3b] hover:scale-105 transition-all duration-300 text-lg shadow-lg shadow-[#DB854F]/20"
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
      <svg className="w-7 h-7 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    cosmetic: (
      <svg className="w-7 h-7 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    breast: (
      <svg className="w-7 h-7 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
      </svg>
    ),
    hernia: (
      <svg className="w-7 h-7 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  }
  return icons[type] || null
}

export default Services
