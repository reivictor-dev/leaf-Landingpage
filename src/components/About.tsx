import React, { useState } from 'react'
import fotoANA from '../assets/img/ProfANA.jpg'
import fotoVanessa from '../assets/img/ProfVanessa.jpg'
import { useTranslation } from 'react-i18next'

const profissionais = [
  {
    nomeKey: 'about.professionals.vanessa.name',
    descricaoKey: 'about.professionals.vanessa.description',
    foto: fotoVanessa
  },
  {
    nomeKey: 'about.professionals.ana.name',
    descricaoKey: 'about.professionals.ana.description',
    foto: fotoANA
  }
]

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [showCards, setShowCards] = useState(false)
  const { t } = useTranslation()

  return (
    <section id="about" className="w-full py-20 bg-grey-edited min-h-screen pt-18">
      <h2 className="text-3xl font-bold text-center text-dark-brown mt-16">{t('about.title')}</h2>

      <div className="max-w-6xl mx-auto px-4 my-12">
        <p className="text-lg text-center text-gray-700">
          {t('about.description.part1')}<br /><br />
          {t('about.description.part2')}
        </p>
      </div>


      <div className="max-w-6xl mx-auto px-4 hidden md:flex gap-8 justify-center">
        {profissionais.map((prof, i) => (
          <div key={i} className="group relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-lg">
            <img
              src={prof.foto}
              alt={prof.nomeKey}
              className="w-full h-[450px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-heavy-green bg-opacity-90 text-white p-6 flex items-center translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              <div>
                <h3 className="leading-relaxed text-3xl pb-2">{t(prof.nomeKey)}</h3>
                <p className="text-lg leading-relaxed">{t(prof.descricaoKey)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center px-4 mt-8">
        <button
          onClick={() => {
            setShowCards(!showCards)
            setActiveCard(null)
          }}
          className="w-full max-w-sm mb-4 py-3 bg-heavy-green text-white rounded-2xl text-lg font-semibold shadow-md transition-all"
        >
          {showCards ? t('about.close') : t('about.meetProfessionals')}
        </button>

        <div className={`flex flex-col gap-6 items-center w-full transition-all duration-500 ${showCards ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {profissionais.map((prof, i) => (
            <div
              key={i}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              className="w-full max-w-sm cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <img src={prof.foto} alt={prof.nomeKey} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-dark-brown">{t(prof.nomeKey)}</h3>
                {activeCard === i && (
                  <p className="mt-2 text-gray-700 text-base">{t(prof.descricaoKey)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
