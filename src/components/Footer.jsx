import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();
  return (
    <div className='md:mx-14 bg-gray-400 rounded-t-lg mb-1 px-4 mx-4'>
        <div className='w-full flex flex-col sm:flex-row grid-flow-col sm:gird grid-rows-[3fr_1fr_1fr] my-6 text-sm'>
            {/* Left section */}
            <div className='w-full p-2 m-2 text-center'>
               <img className='mb-4 w-14' src={assets.Logo} alt="" />
               <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum simply dummy text of the printing and typesetting industry Nobis saepe ullam optio  nddhgdh ndhhgs moles</p>
            </div>

            {/* Center section */}
            <div className='w-full text-center m-2 p-2'>
                 <p className='text-xl font-medium mb-5'>COMPANY</p>
                 <ul className='flex flex-col gap-2  text-gray-600 cursor-pointer'>
                    <li onClick={()=>{navigate('/'); scrollTo(0,0)}}>HOME</li>
                    <li onClick={()=>{navigate('/about'); scrollTo(0,0)}}>ABOUT US</li>
                    <li onClick={()=>{navigate('/contact'); scrollTo(0,0)}}>CONTACT US</li>
                    <li>PRIVACY POLICY</li>
                 </ul>
            </div>

            {/* Right section */}
            <div className='w-full m-2 text-center p-2'>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-2  text-gray-600'>
                    <li>+234-90-963-141-84</li>
                    <li>DevFaradcodes@gmail.com</li>
                  </ul>
            </div>
        </div>
            {/* copyright section */}
        <div>
                <hr className='m-4' />
                <p className='py-4 text-center'>  Copyright 2024@ TechMedified . All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer