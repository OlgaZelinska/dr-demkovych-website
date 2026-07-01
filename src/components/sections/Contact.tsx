import React from 'react'
import ContactBg from '../../assets/images/contact-bg.webp'

export const Contact: React.FC = () => {
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

      <div className="container mx-auto px-4 relative z-10" id="contact-form">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Зв'яжіть з нами
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl mx-auto">
            Запишіться на прийом або отримайте безкоштовну консультацію
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[rgb(var(--color-dark))]/60 backdrop-blur-md rounded-2xl border border-[rgb(var(--color-orange))]/20 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Контактна інформація</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(var(--color-orange))]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Телефон</h4>
                    <a href="tel:+380671272630" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors text-lg">
                      +380 (67) 127 26 30
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(var(--color-orange))]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:zelinska@i.ua" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors text-lg">
                      zelinska@i.ua
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(var(--color-orange))]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Адреса</h4>
                    <p className="text-[rgb(var(--color-text-secondary))]">вул. Академіка Шалімова, 90</p>
                    <p className="text-[rgb(var(--color-text-secondary))]">Борщагівка, м. Київ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(var(--color-orange))]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Графік роботи</h4>
                    <p className="text-[rgb(var(--color-text-secondary))]">Понеділок - П'ятниця: 9:00 - 20:00</p>
                    <p className="text-[rgb(var(--color-text-secondary))]">Субота: 10:00 - 16:00</p>
                    <p className="text-[rgb(var(--color-text-secondary))]">Неділя: вихідний</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-[rgb(var(--color-orange))]/10 backdrop-blur-md rounded-2xl border border-[rgb(var(--color-orange))]/20 p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Чому обирають нас?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgb(var(--color-text-secondary))]">Більше 15 років досвіду</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgb(var(--color-text-secondary))]">Сучасне обладнання</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgb(var(--color-text-secondary))]">Індивідуальний підхід</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgb(var(--color-text-secondary))]">Гарантія результату</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[rgb(var(--color-dark))]/60 backdrop-blur-md rounded-2xl border border-[rgb(var(--color-orange))]/20 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Заповніть форму</h3>

            <form action="https://formsubmit.co/zelinska@i.ua" method="POST" className="space-y-5" target="_self">
              <input type="hidden" name="_next" value="https://dr-demkovych.vercel.app/contact" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Нова заявка з сайту Dr.Demkovych" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Ім'я *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-[rgb(var(--color-orange))]/20 bg-[rgb(var(--color-dark))]/50 text-white focus:ring-2 focus:ring-[rgb(var(--color-orange))] focus:border-[rgb(var(--color-orange))] focus:outline-none transition-colors"
                  placeholder="Введіть ваше ім'я"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-[rgb(var(--color-orange))]/20 bg-[rgb(var(--color-dark))]/50 text-white focus:ring-2 focus:ring-[rgb(var(--color-orange))] focus:border-[rgb(var(--color-orange))] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-[rgb(var(--color-orange))]/20 bg-[rgb(var(--color-dark))]/50 text-white focus:ring-2 focus:ring-[rgb(var(--color-orange))] focus:border-[rgb(var(--color-orange))] focus:outline-none transition-colors"
                  placeholder="+380 (67) 127 26 30"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[rgb(var(--color-orange))]/20 bg-[rgb(var(--color-dark))]/50 text-white focus:ring-2 focus:ring-[rgb(var(--color-orange))] focus:border-[rgb(var(--color-orange))] focus:outline-none transition-colors resize-none"
                  placeholder="Опишіть вашу проблему або запитання..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(var(--color-orange))] text-[rgb(var(--color-text-black))] px-6 py-4 rounded-xl font-semibold hover:bg-[rgb(var(--color-primary-700))] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[rgb(var(--color-orange))]/20"
              >
                Відправити заявку
              </button>

              <p className="text-center text-sm text-[rgb(var(--color-text-secondary))]">
                Натискаючи кнопку, ви погоджуєтеся з обробкою персональних даних
              </p>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 bg-[rgb(var(--color-dark))]/60 backdrop-blur-md rounded-2xl border border-[rgb(var(--color-orange))]/20 overflow-hidden">
          <a href="https://maps.app.goo.gl/kfp8tegaUJKaewgq7" target="_blank" rel="noopener noreferrer" className="block h-80 md:h-96">
            <div className="w-full h-full flex items-center justify-center bg-[rgb(var(--color-dark))]/30">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[rgb(var(--color-orange))]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white font-medium mb-2">вул. Академіка Шалімова, 90</p>
                <p className="text-[rgb(var(--color-text-secondary))] text-sm mb-4">Борщагівка, м. Київ</p>
                <span className="inline-flex items-center gap-2 text-[rgb(var(--color-orange))] font-medium hover:text-[#c96d3b] transition-colors cursor-pointer">
                  Відкрити на карті Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
