import React from 'react'
import { specialityData } from '../assets/assets'
import { Link} from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' id='speciality'>
        <h1 className='text-3xl font-medium'>FIND BY SPECIALITY</h1>
        <p className='w-2/5 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your apppointment</p>
        <div className='flex sm:justify-center gap-9 pt-5 w-full overflow-scroll' >
            {specialityData.map((item, index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-20 mb-2' src={item.image} alt="" />
                    <h2>{item.speciality}</h2>
                </Link>
            ))}
               
        </div>
    </div>
  )
}

export default SpecialityMenu