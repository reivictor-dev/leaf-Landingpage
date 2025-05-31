import React from 'react'
import Carousel from './Carousel'

const Classes: React.FC = () => {
  return (
    <section id="classes" className="bg-white py-14 ">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center md:my-4 md:py-4 py-14 ">
        <div className=" items-center w-full md:w-3/4 mx-auto">
          <Carousel/>
          
        </div>
      </div>
    </section>
  )
}

export default Classes
