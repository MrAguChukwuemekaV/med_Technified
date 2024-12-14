import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { AppContext} from '../context/AppContext.jsx'

const Doctors = () => {
  
  const { speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)
  

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>(
     applyFilter()
  ), [doctors,speciality])

  return (

    <div className='w-full'>
        <p className='text-gray-600 font-medium text-center'>LIST OF SPECIALIST DOCTORS </p>
        <div className='flex flex-col sm:flex-row items-start gap-4 mt-5'>
          {/* leftside section */}
          <div className='flex flex-col gap-4 text-sm  text-gray-600'>
            <p onClick={()=>speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-indigo-400 text-black font-semibold': ''}`}>General physician</p>
            <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-400 text-black font-semibold': ''}`}>Gynecologist</p>
            <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-400 text-black font-semibold': ''}`}>Dermatologist</p>
            <p onClick={()=>speciality === 'Pediatrician' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatrician' ? 'bg-indigo-400 text-black font-semibold': ''}`}>Pediatrician</p>
            <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-400 text-black font-semibold': ''}`}>Neurologist</p>
            <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-indigo-400 text-black font-semibold': ''}`}>Gastroenterologist</p>
          </div>
          {/* rightside section */}
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
               filterDoc.slice(0,12).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-10px] transition-all duration-500'>
                 <img className='bg-blue-50 p-4' src={item.image} alt="" />
                 <div className='p-2'>
                     <div className='flex items-center gap-x-2 text-sm text-center text-green-600'>
                         <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                     </div>
                     <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                     <p className='text-gray-600 text-sm'>{item.speciality}</p>
                 </div>
                </div>
             ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors