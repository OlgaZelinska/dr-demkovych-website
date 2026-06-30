import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1C1C1C] text-white py-12 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#A0A0A0] hover:text-[#DB854F] transition-colors text-sm">
                  Головна
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#A0A0A0] hover:text-[#DB854F] transition-colors text-sm">
                  Послуги та ціни
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A0A0A0] hover:text-[#DB854F] transition-colors text-sm">
                  Про мене
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#A0A0A0] hover:text-[#DB854F] transition-colors text-sm">
                  Відгуки
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A0A0A0] hover:text-[#DB854F] transition-colors text-sm">
                  Запис на прийом
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Послуги</h3>
            <ul className="space-y-2 text-sm text-[#A0A0A0]">
              <li>Пластика грудей</li>
              <li>Пластика тіла</li>
              <li>Пластика обличчя</li>
              <li>Алогерніопластика</li>
              <li>Консультації</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакти</h3>
            <ul className="space-y-4 text-sm text-[#A0A0A0]">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>вул. Академіка Шалімова, 90, Борщагівка, м. Київ</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
                </svg>
                <a href="tel:+380671272630" className="text-[#A0A0A0] hover:text-[#DB854F] transition-colors">
                  +380 (67) 127 26 30
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:mail@surgeon.ua" className="text-[#A0A0A0] hover:text-[#DB854F] transition-colors">
                  mail@surgeon.ua
                </a>
              </li>
              {/* Social Media */}
              <li className="flex items-center gap-3">
                <a href="https://t.me/dr_demkovych" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#DB854F] transition-colors">
                  <svg className="w-5 h-5 text-[#DB854F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.746-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.939-.46-.71 0-1.225.46-1.939.46-.678 0-1.19-.387-1.877-.455-.677-.067-1.778-.298-2.616-1.157a3.267 3.267 0 0 1-.945-2.438c.045-1.03.135-2.06.18-2.663.043-.57.094-1.09.094-1.373 0-.253-.056-.43-.135-1.09-.06-.52-.094-1.01-.094-1.52 0-1.09.045-1.35.18-1.66.27-.615.81-1.137 1.68-1.48 1.07-.42 2.37-.52 3.8-.31 1.08.15 2.16.44 2.97.85.65.34 1.2.64 1.64.64.42 0 .74-.17.98-.51.26-.37.34-.85.39-1.36.06-.6.02-1.13.02-1.13zM9.725 19.45c-.32.43-.88.35-1.45.23-.73-.15-1.33.04-1.6.04-.38 0-.72-.16-1.08-.48-1.06-.94-1.27-2.53-1.2-4.06.04-.92.22-1.7.53-2.33.25-.53.62-1.02 1.07-1.46.33-.33.6-.56.96-.56.34 0 .6.24.84.68.21.41.33.9.4 1.38.08.57.08 1.16.08 1.67 0 .32-.06.57-.06.83 0 1.05.14 2.06.42 3.06.2.73.55 1.45 1 2.03zm4.536-1.256c-.57.32-1.17.38-1.74.24-.73-.17-1.33-.03-1.6-.03-.38 0-.72.16-1.08.48-.66.59-.8 1.66-.74 2.66.03.6.13 1.15.3 1.63.19.53.52 1.02.97 1.46.34.33.6.56.96.56.34 0 .6-.24.84-.68.21-.41.33-.9.4-1.38.08-.57.08-1.16.08-1.67 0-.32-.06-.57-.06-.83 0-1.05.14-2.06.42-3.06.2-.73.55-1.45 1-2.03z"/>
                  </svg>
                  Telegram
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://www.instagram.com/dr.demkovych" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#DB854F] transition-colors">
                  <svg className="w-5 h-5 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">На карті</h3>
            <a href="https://maps.app.goo.gl/kfp8tegaUJKaewgq7" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-[#1e1c1c] rounded-lg overflow-hidden h-40 flex items-center justify-center border border-[#3a3838] group hover:border-[#DB854F] transition-all">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-[#DB854F]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-[#A0A0A0] font-medium">вул. Академіка Шалімова, 90</p>
                  <p className="text-[#A0A0A0] text-sm">Борщагівка, м. Київ</p>
                  <p className="text-[#DB854F] text-xs mt-2">Відкрити на карті</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-[#3a3838] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A0A0A0] text-sm">
            &copy; {currentYear} Dr.Demkovich. Всі права захищено.
          </p>
          <p className="text-[#A0A0A0] text-sm">
            Створено з ❤️ для вашого здоров'я
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
