import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div >
      <div className='w-full text-center text-2xl  pt-8 text-gray-600'>
        <p className='font-medium'>ABOUT US </p>
      </div>

      <div className='w-full my-8 flex flex-col md:flex-row p-6 gap-12 '>
        <img className='border border-solid border-gray-500 rounded-tr-2xl rounded-bl-2xl bg-gray-500 p-2 md:max-w-[360px' src={assets.about_image} alt="" />
        <div className='w-full px-8 flex flex-col justify-center gap-6  text-base text-start '>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eaque dolorem.  in iste nostrum itaque officiis laudantium quod quae distinctio eius.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Exercitationem, consectetur.</p>
          <b className='text-gray-900'>OUR VISION :</b>
          <p>our VISION Placeat, maiores soluta! Eveniet inventore atque officia, dolor saepe illum ad delectus, quaerat culpa iure repellat ipsam nesciunt id excepturi. Perferendis, illo?</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p className='font-semibold'>WHY CHOOSE US</p>
      </div>

      <div className='flex flex-row mb-20'>
        <div className='border border-solid px-8 md:px-16 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer text-gray-500'>
          <b>Personalization:</b>
          <p>Tailored recommedations and reminders to help you dtsy on top of your health priorities</p>
        </div>

        <div className='border border-solid px-8 md:px-16 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer text-gray-500'>
          <b>Efficiency;</b>
          <p>streamline appointment scheduling that fits ito your busy lifestyle</p>
        </div>

        <div className='border border-solid px-8 md:px-16 sm:py-12 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer text-gray-500'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area of concern</p>
        </div>
      </div>
    </div>
  )
}

export default About