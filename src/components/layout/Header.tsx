import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'
import Logo from '../../assets/images/logo.svg'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Check if we're on the home page
  const isHome = location.pathname === '/'

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="bg-[#1e1c1c] shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on Desktop */}
          <div className="hidden md:flex items-center order-1">
            <Link to="/" className="group">
              <img src={Logo} alt="Dr.Demkovich" className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 order-3">
            <Link to="/" className={`text-[#F4E8E3] font-medium transition-colors ${isHome ? 'text-[#DB854F]' : 'hover:text-[#DB854F]'}`}>
              Головна
            </Link>
            <Link to="/about" className={`text-[#F4E8E3] font-medium transition-colors ${location.pathname === '/about' ? 'text-[#DB854F]' : 'hover:text-[#DB854F]'}`}>
              Про мене
            </Link>
            <Link to="/services" className={`text-[#F4E8E3] font-medium transition-colors ${location.pathname === '/services' ? 'text-[#DB854F]' : 'hover:text-[#DB854F]'}`}>
              Послуги
            </Link>
            <Link to="/reviews" className={`text-[#F4E8E3] font-medium transition-colors ${location.pathname === '/reviews' ? 'text-[#DB854F]' : 'hover:text-[#DB854F]'}`}>
              Відгуки
            </Link>
            <Link to="/contact" className={`text-[#F4E8E3] font-medium transition-colors ${location.pathname === '/contact' ? 'text-[#DB854F]' : 'hover:text-[#DB854F]'}`}>
              Контакти
            </Link>
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center gap-4 order-4">
            <a
              href="tel:+380671272630"
              className="flex items-center gap-2 text-[#DB854F] font-medium hover:text-[#F4E8E3] transition-all hover:scale-105"
            >
              <svg className="w-5 h-5 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
              </svg>
              +380 (67) 127 26 30
            </a>
            <Button variant="instagram" size="sm" onClick={() => window.location.href = '/contact'}>
              Записатися
            </Button>
          </div>

          {/* Mobile Menu Button (Right side) */}
          <button
            className="md:hidden p-3 ml-auto hover:bg-[#f4e8e3] rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span className="w-6 h-0.5 bg-[#f4e8e3] rounded-full transition-all duration-300 group-hover:bg-[#db854f]"></span>
              <span className="w-6 h-0.5 bg-[#f4e8e3] rounded-full transition-all duration-300 group-hover:bg-[#db854f]"></span>
              <span className="w-6 h-0.5 bg-[#f4e8e3] rounded-full transition-all duration-300 group-hover:bg-[#db854f]"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4 border-t border-[#2a2828] pt-4' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#1E1C1C' }}
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <Link to="/" className="flex items-center gap-2 group p-2 rounded-lg hover:bg-[#2a2828] transition-colors w-full justify-center">
              <img src={Logo} alt="Dr.Demkovich" className="h-8 w-auto object-contain" />
            </Link>
          </div>
          <nav className="flex flex-col gap-3">
            <Link to="/" className={`text-[#F4E8E3] px-4 py-2 rounded-lg transition-colors ${location.pathname === '/' ? 'text-[#DB854F] bg-[#2a2828]' : 'hover:text-[#DB854F] hover:bg-[#2a2828]'}`} onClick={() => setIsMenuOpen(false)}>
              Головна
            </Link>
            <Link to="/about" className={`text-[#F4E8E3] px-4 py-2 rounded-lg transition-colors ${location.pathname === '/about' ? 'text-[#DB854F] bg-[#2a2828]' : 'hover:text-[#DB854F] hover:bg-[#2a2828]'}`} onClick={() => setIsMenuOpen(false)}>
              Про мене
            </Link>
            <Link to="/services" className={`text-[#F4E8E3] px-4 py-2 rounded-lg transition-colors ${location.pathname === '/services' ? 'text-[#DB854F] bg-[#2a2828]' : 'hover:text-[#DB854F] hover:bg-[#2a2828]'}`} onClick={() => setIsMenuOpen(false)}>
              Послуги
            </Link>
            <Link to="/reviews" className={`text-[#F4E8E3] px-4 py-2 rounded-lg transition-colors ${location.pathname === '/reviews' ? 'text-[#DB854F] bg-[#2a2828]' : 'hover:text-[#DB854F] hover:bg-[#2a2828]'}`} onClick={() => setIsMenuOpen(false)}>
              Відгуки
            </Link>
            <Link to="/contact" className={`text-[#F4E8E3] px-4 py-2 rounded-lg transition-colors ${location.pathname === '/contact' ? 'text-[#DB854F] bg-[#2a2828]' : 'hover:text-[#DB854F] hover:bg-[#2a2828]'}`} onClick={() => setIsMenuOpen(false)}>
              Контакти
            </Link>
            <a
              href="tel:+380671272630"
              className="flex items-center justify-center gap-2 text-[#F4E8E3] hover:text-[#DB854F] hover:bg-[#2a2828] px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-[#DB854F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V3z" />
              </svg>
              +380 (67) 127 26 30
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
