import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gray-600 rounded-lg px-6 mt-3 md:px-10 lg:px-20'>
        {/* left side  */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
           <p className='text-2xl md:text-4xl lg:text-5xl text-cyan-600 font-medium leading-tight md:leading-tight lg:leading-tight'>
            BOOK APPOINTMENT <br /> WITH TRUSTED DOCTORS
           </p>
           <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
             <img className='w-28' src={assets.group_profile} alt="group_profile" />
             <p>
               Simply navigate through our extensive list of doctors, <br className='hidden md:block'/> schedule
             </p>
           </div>
           <a href="#speciality" className='flex items-center gap-3 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-x-105 font-semibold transition-all  duration-300'>
                BOOK AN APPOINTMENT TODAY <img  src={assets.arrow_icon} alt="" />
             </a>
        </div>
        {/* right side */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-fit pb-40 rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header