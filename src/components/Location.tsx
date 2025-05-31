import React from 'react'
import { useTranslation } from 'react-i18next'

const Location: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="location" className="w-full py-20 bg-white h-screen pt-18">
      <h2 className="text-3xl font-bold text-center text-dark-brown mt-16">
        {t('location.title')}
      </h2>
      <div className="max-w-6xl mx-auto px-4 my-12">
        <p className="text-lg text-center text-gray-700">
          {t('location.address')} <b>{t('location.addressDetail')}</b>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <iframe
          src="https://www.google.com/maps?q=R.+Fernando+Farinha+14,+loja+2c&output=embed"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização"
        />
      </div>
    </section>
  )
}

export default Location
