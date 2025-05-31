import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <div>
          <h3 className="text-xl font-bold">{t('footer.studioName')}</h3>
          <p className="text-sm">{t('footer.slogan')}</p>
        </div>

        <div>
          <p className="text-sm">{t('footer.contact')}</p>
          <p className="text-sm">📞 +351 912 345 678</p>
          <p className="text-sm">✉️ leafpilates@email.com</p>
        </div>

        <div>
          <p className="text-xs">© {year} LEAF Pilates — {t('footer.rightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
