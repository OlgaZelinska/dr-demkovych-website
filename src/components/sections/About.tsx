import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getDoctorInfo, DoctorInfo } from '../../lib/about'
const ContactBg = '/assets/contact-bg.webp'
const DoctorOperatingRoom1 = '/assets/oper4.webp'

export const About: React.FC = () => {
  const { data: doctor, isLoading, error } = useQuery({
    queryKey: ['about'],
    queryFn: getDoctorInfo,
  })

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(var(--color-orange))]"></div>
        </div>
      </div>
    )
  }

  if (error || !doctor) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-700">Виникла помилка при завантаженні інформації.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative py-16">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[rgb(var(--color-dark))] bg-opacity-80" />
        <div className="absolute inset-0 bg-[rgb(var(--color-dark))] blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Про мене
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Професійний хірург з багаторічним досвідом роботи та високою кваліфікацією
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
          {/* Content Section */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-[rgb(var(--color-orange))]/20 text-[rgb(var(--color-orange))] text-sm font-medium mb-6">
              Про хірурга
            </div>
            <h3 className="text-xl font-semibold text-[rgb(var(--color-text-secondary))] mb-2">{doctor.position}</h3>
            <p className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-orange))] mb-6">{doctor.name}</p>

            <div className="mb-8 space-y-4">
              <p className="text-[rgb(var(--color-text-light))] text-lg leading-relaxed">
                Спеціалізується на операціях з омолодження обличчя, мамопластиці, а також контурній пластиці тіла. Завдяки багаторічному досвіду та постійному вдосконаленню навичок, заслужив довіру серед пацієнтів.
              </p>
              <p className="text-[rgb(var(--color-text-light))] text-lg leading-relaxed">
                Його підхід до краси базується на принципі гармонії та природності, що дозволяє досягати результатів, які підкреслюють індивідуальність, а не змінюють зовнішність до невпізнаваності.
              </p>
              <p className="text-[rgb(var(--color-text-light))] text-lg leading-relaxed">
                Окрім клінічної практики, Демкович Олександр активно бере участь у міжнародних конгресах, семінарах та майстер-класах, як науковець, оскільки має науковий ступінь доктора філософії (PhD).
              </p>
            </div>

            <div className="bg-[rgb(var(--color-dark))]/60 backdrop-blur-md rounded-2xl border border-[rgb(var(--color-orange))]/20 p-6 mb-6">
              <h4 className="font-semibold text-white mb-4">Коротко про мене</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-[rgb(var(--color-orange))] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgb(var(--color-text-secondary))]">Спеціалізація: пластична хірургія, загальна хірургія та герніологія, оперативна проктологія</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-[rgb(var(--color-orange))] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgb(var(--color-text-secondary))]">Методи роботи: мінімально інвазивні технології, лазерна хірургія, ендоскопія</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 text-[rgb(var(--color-orange))] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgb(var(--color-text-secondary))]">Підхід: індивідуальний, з урахуванням анатомічних особливостей</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 bg-[#DB854F]/10 px-5 py-2.5 rounded-xl border border-[rgb(var(--color-orange))]/20">
                <svg className="w-5 h-5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-[rgb(var(--color-orange))]">{doctor.experience}+ років досвіду</span>
              </div>
            </div>
          </div>

          {/* Second Photo - Right */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[rgb(var(--color-orange))]/20 shadow-2xl">
              <img
                src={DoctorOperatingRoom1}
                alt="Хірург у операційній"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#DB854F]/10 backdrop-blur-md rounded-full -z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#DB854F]/5 backdrop-blur-md rounded-full -z-0"></div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-4xl mx-auto">Освіта та досвід</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {doctor.education.map((edu, index) => (
              <div key={index} className="bg-[rgb(var(--color-dark))]/60 backdrop-blur-md rounded-xl border border-[rgb(var(--color-orange))]/20 p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-shrink-0 w-16 h-16 bg-[#DB854F]/10 text-[rgb(var(--color-orange))] font-bold py-3 px-4 rounded-lg text-center flex items-center justify-center flex-shrink-0 min-w-[80px]">
                  {edu.match(/\d{4}/)?.[0]}
                </div>
                <div className="flex-grow">
                  <p className="text-[rgb(var(--color-text-light))] font-medium text-lg">{edu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#DB854F]/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center border border-[rgb(var(--color-orange))]/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Запишіться на консультацію
          </h3>
          <p className="text-[rgb(var(--color-text-secondary))] mb-8 max-w-2xl mx-auto text-lg">
            Заплануйте перший візит зараз — перша консультація для нових пацієнтів з 10% знижкою
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#DB854F] text-[#1C1C1C] px-8 py-4 rounded-full font-semibold hover:bg-[#c96d3b] hover:scale-105 transition-all duration-300 text-lg shadow-lg shadow-[#DB854F]/20"
          >
            Записатися на прийом
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
