import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import slide1 from '../assets/img/classes-studio/1.jpg'
import slide2 from '../assets/img/classes-studio/2.jpg'
import slide3 from '../assets/img/classes-studio/3.jpg'
import slide4 from '../assets/img/classes-studio/4.jpg'

const Carousel: React.FC = () => {
  const { t } = useTranslation()
  const classesIMG = [slide1, slide2, slide3, slide4]
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent(prev => (prev === classesIMG.length - 1 ? 0 : prev + 1))
  const previousSlide = () => setCurrent(prev => (prev === 0 ? classesIMG.length - 1 : prev - 1))
  const goToSlide = (index: number) => setCurrent(index)

  return (
    <div className="relative overflow-hidden w-full max-w-full">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {classesIMG.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center overflow-hidden pb-10"
          >
            <img
              src={img}
              className="w-full max-h-[800px] object-contain h-full"
              alt={t('carousel.slideAlt', { number: index + 1 })}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 flex items-center justify-between h-full px-4 text-black text-3xl z-20">
        <button
          onClick={previousSlide}
          aria-label={t('carousel.previous')}
          className="hover:text-gray-300 cursor-pointer"
        >
          <FaArrowCircleLeft />
        </button>
        <button
          onClick={nextSlide}
          aria-label={t('carousel.next')}
          className="hover:text-gray-300 cursor-pointer"
        >
          <FaArrowCircleRight />
        </button>
      </div>

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 z-20">
        {classesIMG.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === current ? 'bg-heavy-green' : 'bg-gray-400'
            }`}
            aria-label={t('carousel.goToSlide', { number: index + 1 })}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
