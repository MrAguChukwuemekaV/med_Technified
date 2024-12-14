import React,{ useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext.jsx'
import { assets } from '../assets/assets.js'
import RelatedDoctors from '../components/RelatedDoctors.jsx'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors, currencySymbol} =useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUES', 'WEDS', 'THURS', 'FRI', 'SAT']



  // USE STATE HOOK SECTION
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')


  // LOGIC SECTION
  const fetchDocInfo = async () => {
    const docInfo =doctors.find(doc => doc._id=== docId)
    setDocInfo(docInfo)
  }
  
  const getAvailableSlots = async ()=> {
    setDocSlots([])

    // getting curret date 
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      // now lets get date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // now also lets set endtime or available session for booking with index 
      let endTime =new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      // setting hours
      if (today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30: 0)
      } else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots =[] 

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // increment current time by 30minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev =>([...prev, timeSlots]))
    }


 
 }


  // USE EFFECT SECTION
  useEffect(()=>{
      fetchDocInfo()
  }, [doctors, docId])

  useEffect(()=>{
    getAvailableSlots()
}, [docInfo])




  return docInfo && (
    <div>
        {/* ...........doctors-details.............. */}
        <div className='flex flex-col sm:flex-row gap-4 mt-4 '>
          <div>
            <img className='bg-gray-600 sm:max-w-72 rounded-lg p-6' src={docInfo.image} alt="" />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}<img className='w-5' src={assets.verified_icon} alt="" /></p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button >{docInfo.experience}</button>
            </div>
            <div className='gap-2'>
              <p className='flex items-center gap-x-2 text-sm font-medium text-gray-900 m-3'>ABOUT <img className='w-5' src={assets.info_icon} alt="" />:</p>
              <p >{docInfo.about}</p>
            </div>
            <p className='font-medium '>Charge per session : {currencySymbol}{docInfo.fees}</p>
          </div>
        </div>
        {/* BOOKING SLOT */}
        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
           <p>BOOKING SLOT</p>
        <div className='flex justify-center gap-3 items-center w-full overflow-x-scroll mt-3'>
            {
              docSlots.length && docSlots.map((item,index)=>(
                <div onClick={()=>setSlotIndex(index)} className={`text-center py-2 min-w-16  cursor-pointer ${slotIndex === index ? 'bg-gray-600 text-white' : 'border border-gray-200'}`} key={index}>
                   <p className=''>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                   <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
           </div>

           <div className='flex items-center gap-4 w-full overflow-x-scroll mt-4'> 
              {docSlots.length && docSlots[slotIndex].map((item,index)=>(
                  <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-4 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-gray-600 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                    {item.time.toLowerCase()}
                  </p>
              ))}
           </div>
           <button className='bg-gray-600 text-white text-sm font-light mt-4  px-6 p-2 rounded-full'>Book an Appointment  </button>
        </div>  
         {/*list of related doctors  */}
         <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment