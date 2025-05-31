import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const generateTimeSlots = () => {
  const slots: string[] = []
  for (let hour = 8; hour <= 20; hour++) {
    slots.push(`${String(hour).padStart(2, '0')}:00`)
    if (hour !== 20) {
      slots.push(`${String(hour).padStart(2, '0')}:30`)
    }
  }
  return slots
}

const Contact: React.FC = () => {
  const { t } = useTranslation()
  const today = new Date().toISOString().split("T")[0]

  const [formData, setFormData] = useState({
    nome: '',
    surname: '',
    tel: '',
    trialDate: today,
    trialHour: '',
    email: '',
    mensagem: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isFormEmpty = Object.values(formData).some(value => value === '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormEmpty) {
      alert(t('contact.alertFillAll'))
      return
    }

    alert(t('contact.alertThanks', { nome: formData.nome }))
    setFormData({
      nome: '',
      surname: '',
      tel: '',
      trialDate: today,
      trialHour: '',
      email: '',
      mensagem: ''
    })
  }

  return (
    <section
      id="contato"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white rounded-xl h-auto"
    >
      <h2 className="text-3xl font-extrabold text-green-700 mb-8 text-center md:my-4 py-12">
        {t('contact.title')}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-6"
        noValidate
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="nome"
            placeholder={t('contact.placeholders.nome')}
            value={formData.nome}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-md px-4 py-3"
          />
          <input
            type="text"
            name="surname"
            placeholder={t('contact.placeholders.surname')}
            value={formData.surname}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-md px-4 py-3"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder={t('contact.placeholders.email')}
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3"
        />

        <input
          type="tel"
          name="tel"
          placeholder={t('contact.placeholders.tel')}
          value={formData.tel}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3"
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="date"
            name="trialDate"
            min={today}
            value={formData.trialDate}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-md px-4 py-3"
          />
          <select
            name="trialHour"
            value={formData.trialHour}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-md px-4 py-3"
          >
            <option value="">{t('contact.placeholders.selectHour')}</option>
            {generateTimeSlots().map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <textarea
          name="mensagem"
          placeholder={t('contact.placeholders.mensagem')}
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-3 resize-none"
        />

        <button
          type="submit"
          className="bg-green-600 text-white rounded-full py-3 font-semibold hover:bg-green-700 transition"
        >
          {t('contact.sendButton')}
        </button>
      </form>
    </section>
  )
}

export default Contact
