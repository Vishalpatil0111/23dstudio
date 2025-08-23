import React from 'react'
import ServiceCard from '../Components/Services/ServiceCard'
import ButtonN from '../Utils/ButtonN'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Services() {
  const navigate = useNavigate()
  return (
    <div className='w-full font-[bituml]'>
    <div className='w-full h-screen bg-cover bg-center bg-[url("/images/showcase4.jpg")]'></div>
    <div className="w-full z-10  flex flex-col justify-center items-center gap-6 px-4 sm:px-6 lg:px-12">
    
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight bg-[#FFEFAE] mt-10 px-4 text-center">
        What we do
      </h1>

      {/* Subheading */}
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] flex items-center justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl tracking-wide uppercase text-center leading-snug">
         Crafting immersive designs & impactful visual experiences for businesses and brands worldwide.”
        </h3>
      </div>

     
    </div>
    
      <ServiceCard/>
       <div className="bg-gray-900 px-6 md:px-0 py-16 mt-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to bring your vision to life?
        </h2>
        <p className="mb-6 text-lg">
          Get in touch with us and let’s start building something amazing.
        </p>
       <div className='w-fit h-fit inline-block group'>
         <ButtonN onClick={()=> navigate('/contact')} text="Contact Us" color="white" variant="primary"/>
       </div>
      </div>
    </div>
  )
}
