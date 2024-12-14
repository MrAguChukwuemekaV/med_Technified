import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality, docId}) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()


    const [relDoc, setRelDoc] = useState([])

    useEffect(()=>{
       if (doctors.length > 0 && speciality) {
        const doctorsData =doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId)
        setRelDoc(doctorsData)
       }
    }, [doctors,speciality,docId])

  return (
    <div className='w-full flex flex-col items-center gap-4 my-14 text-gray-900 '>
        <h1 className='text-3xl font-medium mt-4'>Top Doctors To Book</h1>
        <p className='w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
        <div className='w-full flex-col  grid grid-cols-auto gap-4  py-6 sm:px-6'>
            {relDoc.slice(0,5).map((item,index)=>(
               <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className=' border border-blue-200 rounded-xl overflow-hidden cursor-pointer  hover:translate-y-[-8px] transition-all duration-500'>
                <img className='bg-blue-50 p-4 ' src={item.image} alt="" />
                <div className='p-2'>
                    <div className='flex items-center gap-x-2 text-sm text-center text-green-600'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
               </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full m-8'>More</button>
    </div>
  )
}

export default RelatedDoctors