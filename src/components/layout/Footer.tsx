import React from 'react'
import { Link } from 'react-router-dom'
import TelegramIcon from '../../assets/images/telegram.png'
import InstagramIcon from '../../assets/images/instagram.png'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[rgb(var(--color-dark))] text-white py-12 pb-8 md:pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors text-sm">
                  Головна
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors text-sm">
                  Послуги та ціни
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors text-sm">
                  Про мене
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors text-sm">
                  Відгуки
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors text-sm">
                  Запис на прийом
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Послуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services#breast" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  Пластика грудей
                </Link>
              </li>
              <li>
                <Link to="/services#body" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  Пластика тіла
                </Link>
              </li>
              <li>
                <Link to="/services#face" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  Пластика обличчя
                </Link>
              </li>
              <li>
                <Link to="/services#hernia" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  Алогерніопластика
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  Консультації
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакти</h3>
            <ul className="space-y-4 text-sm text-[rgb(var(--color-text-secondary))]">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>вул. Академіка Шалімова, 90, Борщагівка, м. Київ</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
                </svg>
                <a href="tel:+380671272630" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  +380 (67) 127 26 30
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:mail@surgeon.ua" className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  mail@surgeon.ua
                </a>
              </li>
              {/* Social Media */}
              <li className="flex items-center gap-3">
                <a href="https://t.me/dr_demkovych" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  <img src={TelegramIcon} alt="Telegram" className="w-5 h-5" />
                  Telegram
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="https://www.instagram.com/dr.demkovych" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-orange))] transition-colors">
                  <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">На карті</h3>
            <a href="https://maps.app.goo.gl/kfp8tegaUJKaewgq7" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-[#1e1c1c] rounded-lg overflow-hidden h-40 flex items-center justify-center border border-[#3a3838] group hover:border-[rgb(var(--color-orange))] transition-all">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-[#DB854F]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[rgb(var(--color-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-[rgb(var(--color-text-secondary))] font-medium">вул. Академіка Шалімова, 90</p>
                  <p className="text-[rgb(var(--color-text-secondary))] text-sm">Борщагівка, м. Київ</p>
                  <p className="text-[rgb(var(--color-orange))] text-xs mt-2">Відкрити на карті</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-[#3a3838] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[rgb(var(--color-text-secondary))] text-sm">
            &copy; {currentYear} Dr.Demkovich. Всі права захищено.
          </p>
          <p className="text-[rgb(var(--color-text-secondary))] text-sm">
            Створено з ❤️ для вашого здоров'я
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
