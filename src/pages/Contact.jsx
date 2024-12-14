import React from 'react'
import {assets} from '../assets/assets'

const Contact = () => {


  return (
    <div className='mb-80'>
        <div className='text-center text-2xl pt-8 text-gray-600 font-semibold'>
          <p>CONTACT US</p>
        </div>

        <div className='my-8 flex flex-col justify-center md:flex-row gap-10 mb-28'>
              <img src={assets.contact_image} alt="" />
             <div className='flex flex-col justify-center items-start gap-3'>
              <p className='font-semibold text-lg text-gray-600'>OUR OFFICE </p>
              <p className='text-gray-600'> ,<address>Address: 6 UMUNAGA STREET MARYLAND ENUGU, NIGERIA</address></p>
              <p className='text-gray-600'>TEL: (+234) 96-3141-84 <br />Email: aguchukwuemekav@gmail.com</p>
              <b>Career @ TECHMEDIFIED</b>
              <p className='text-gray-600'>Learn More About Us today and See your Imaginations Come True</p>
              <button className='border border-black px-6 py-2 hover:bg-black hover:text-white transition-all duration-300'>A Call Away</button>
             </div>
        </div>
    </div>
  )
}

export default Contact