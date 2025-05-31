import React, { useEffect, useState } from 'react'
import { MdLanguage } from "react-icons/md";
import logoWhite from '../assets/img/LOGO BR.png'
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const {t, i18n} = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(newLang)
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if(isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    
  }, [isMenuOpen])

  return (
    <header className={`w-full fixed top-0 z-50 ${scrolled ? 'bg-gradient-to-b from-light-brown to-dark-brown' : 'bg-gradient-to-b from-dark-brown to-transparent'} transition duration-300`}>
      <div className="max-w-7xl mx-auto p-4 sm:py-14 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative md:my-4 md:py-8">

       
        <div className="flex items-center justify-center w-full md:justify-start md:w-auto ">
          <a href="#hero">
            <img src={logoWhite} alt="logo" className="w-36 md:w-40" />
          </a>
        </div>

        <div className="absolute left-4 md:hidden">
          <button onClick={toggleLanguage} aria-label='Change Language' className="text-white hover:bg-light-brown rounded-md p-3 px-6 transition-normal pt-4 cursor-pointer">
            
            <MdLanguage className="inline" /> <span className="ml-1 uppercase">{i18n.language === 'pt' ? 'EN' : 'PT'}</span>

            </button>
        </div>

       
        <div className="hidden md:flex flex-1 justify-center text-xl font-poppins text-white pt-2">
          <p>{t('header.title')}</p>
        </div>

      
        <nav className="hidden md:flex space-x-6 text-white font-medium pt-2">
          <a href="#about" className="hover:text-white hover:bg-light-brown rounded-md p-3 px-6 transition-normal">{t('header.about')}</a>
          <a href="#classes" className="hover:text-white hover:bg-light-brown rounded-md p-3 px-6 transition-normal">{t('header.classes')}</a>
          <a href="#location" className="hover:text-white hover:bg-light-brown rounded-md p-3 px-6 transition-normal">{t('header.location')}</a>
          <a href="#contato" className="hover:text-white hover:bg-light-brown rounded-md p-3 px-6 transition-normal">{t('header.contact')}</a>
          <button onClick={toggleLanguage} aria-label='Change Language' className="hover:text-white hover:bg-light-brown rounded-md p-3 px-6 transition-normal cursor-pointer">
            <MdLanguage className="inline" /> <span className="ml-1 uppercase">{i18n.language === 'pt' ? 'EN' : 'PT'}</span>
          </button>
        </nav>

  
        <div className="absolute right-4 md:hidden">
          <button
            className="text-heavy-green focus:outline-none cursor-pointer p-3 rounded-md hover:bg-light-brown transition-colors duration-300"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-transparent text-white px-6 py-4 space-y-3 transition-all duration-300">
          <a href="#about" className="block hover:bg-heavy-green px-3 py-2 rounded" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</a>
          <a href="#classes" className="block hover:bg-heavy-green px-3 py-2 rounded" onClick={() => setIsMenuOpen(false)}>{t('header.classes')}</a>
          <a href="#location" className="block hover:bg-heavy-green px-3 py-2 rounded" onClick={() => setIsMenuOpen(false)}>{t('header.location')}</a>
          <a href="#contato" className="block hover:bg-heavy-green px-3 py-2 rounded" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</a>
        </div>
      )}
    </header>
  )
}

export default Header
