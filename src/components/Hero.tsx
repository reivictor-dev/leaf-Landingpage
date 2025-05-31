import React from 'react'
import { useTranslation } from 'react-i18next'
import heroBackground from '../assets/img/IMG_8159.jpg'

const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="w-full h-screen bg-cover bg-center relative pt-24 md:pt-32"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-4 text-white">
        <h3 className="text-3xl sm:text-5xl font-sans mb-6 max-w-xl">
          {t('hero.title')}
        </h3>
        <a
          href="#contato"
          className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-heavy-green transition"
        >
          {t('hero.button')}
        </a>
      </div>
    </section>
  )
}

export default Hero
