import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
      const navigate = useNavigate();
      const [showMenu, setShowMenu] = useState(false)
      const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-6 max-h-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className=' cursor-pointer' src={assets.Logo} alt="" /> 
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
               <li className='py-1'>HOME</li>
               <hr className=' hidden border-none outline-none h-0.5 bg-primary w-4/5 m-auto '/>
            </NavLink>
            <NavLink to='/doctors'>
               <li className='py-1'>ALL DOCTORS</li>
               <hr className='hidden border-none outline-none h-0.5 bg-primary w-4/5 m-auto '/>
            </NavLink>
            <NavLink to='/about'>
               <li className='py-1'>ABOUT US</li>
               <hr className=' hidden border-none outline-none h-0.5 bg-primary w-4/5 m-auto'/>
            </NavLink>
            <NavLink to='/contact'>
               <li className='py-1'>CONTACT</li>
               <hr className='hidden border-none outline-none h-0.5 bg-primary w-4/5 mb-0 hiddden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-3'>
            {
                token ? 
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='rounded w-8' src={assets.profile_pic} alt="" />
                    <img className='' src={assets.x} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p onClick={()=> navigate('/my-profile')}  className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=> navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>logout</p>
                        </div>
                    </div>
                </div> 
                : 
                <button onClick={()=> navigate('/login')} className='bg-gray-500 text-white px-2 py-1 rounded-md font-light hidden md:block'>
                CREATE ACCOUNT
                </button>
            }
            <img onClick={()=>setShowMenu(true)} className='w-7 md:hidden' src={assets.menu_icon} alt="" />
            {/* .........Mobile Menu */}
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-7 py-5'>
                    <img src={assets.Logo} alt="" />
                    <img  src={assets.x} onClick={()=>setShowMenu(false)} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-3 mt-2 px-4 text-lg font-semibold'>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded-2xl'>HOME</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded-2xl'>ALL DOCTORS</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded-2xl'>ABOUT</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded-2xl'>CONTACT</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar