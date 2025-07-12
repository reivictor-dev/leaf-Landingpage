import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ToastCard from './ToastCard'
import emailjs from '@emailjs/browser'




const Contact: React.FC = () => {
  const { t } = useTranslation()
  const today = new Date().toISOString().split("T")[0]
  const [toast, setToast] = useState({show: false, message: '', type: 'success'})

  useEffect(() => {
  if (toast.show) {
    const timer = setTimeout(() => setToast({ ...toast, show: false }), 4000)
    return () => clearTimeout(timer)
  }
  }, [toast])

  const [formData, setFormData] = useState({
    nome: '',
    surname: '',
    tel: '',
    trialDate: today,
    trialHour: '',
    email: '',
    mensagem: ''
  })
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isFormEmpty = Object.values(formData).some(value => value === '')

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if (isFormEmpty) {
    setToast({ show: true,
       message: t('contact.alertFillAll'),
        type: 'error' })
    return
  }

  const templateParams = {
    nome: formData.nome,
    surname: formData.surname,
    tel: formData.tel,
    trialDate: formData.trialDate,
    trialHour: formData.trialHour,
    email: formData.email,
    mensagem: formData.mensagem,
  }

 
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(() => {
      setToast({ show: true, message: t('contact.alertThanks', { nome: formData.nome }), type: 'success' })
      setFormData({
        nome: '',
        surname: '',
        tel: '',
        trialDate: today,
        trialHour: '',
        email: '',
        mensagem: '',
      })
    })
    .catch((e) => {
      console.error('Erro ao enviar:', e)

      setToast({ show: true, message: 'Erro ao enviar. Tente novamente.', type: 'error' })
    })
}

  return (
    <section
      id="contato"
      className="py-20 w-full paralaxContact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/20 backdrop-blur-md rounded-xl pb-10">
        <h2 className="text-3xl font-extrabold text-green-700 mb-8 text-center md:my-4 py-12">
          {t('contact.title')}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex flex-col gap-6 "
          noValidate
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="nome"
              placeholder={t('contact.placeholders.nome')}
              value={formData.nome}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 bg-white"
            />
            <input
              type="text"
              name="surname"
              placeholder={t('contact.placeholders.surname')}
              value={formData.surname}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 bg-white"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder={t('contact.placeholders.email')}
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-3 bg-white"
          />

          <input
            type="tel"
            name="tel"
            placeholder={t('contact.placeholders.tel')}
            value={formData.tel}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-3 bg-white"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              name="trialDate"
              min={today}
              value={formData.trialDate}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 bg-white"
            />
            <select
              name="trialHour"
              value={formData.trialHour}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 bg-white"
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
            className="border border-gray-300 rounded-md px-4 py-3 resize-none bg-white"
          />

          <button
            type="submit"
            className="bg-heavy-green text-white rounded-full py-3 font-semibold hover:bg-green-700 transition cursor-pointer"
          >
            {t('contact.sendButton')}
          </button>
        </form>
      </div>
      <ToastCard
        show={toast.show}
        message={toast.message}
        type={toast.type as 'success' | 'error'}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </section>
  )
}

export default Contact
