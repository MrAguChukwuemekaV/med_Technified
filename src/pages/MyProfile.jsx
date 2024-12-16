import React, { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'AGU CHUKWUEMEKA V',
    image: assets.profile_pic,
    email: 'aguchukwuemekav@gmail.com',
    phone: '+243-96-3141-84',
    address: {
      line1: '6 umunaga St Maryland ',
      line2: '2,4,6 Isiagu St Uwani'
    },
    gender: 'Male',
    dob: '4/01/1995'
  })
  const [isEdit, setIsEdit]= useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 test-sm'>
      <img className='w-32 mt-2' src={userData.image} alt="" />
      {
        isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-96 p-2 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev =>({...prev,name}))}/>
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-500h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className=' text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
          isEdit
          ? <input className='font-medium bg-gray-300 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev =>({...prev,phone}))}/>
          : <p className=' text-blue-500'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
            ? <p>
              <input className='bg-gray-50 max-w-64 px-2' type="text" value={userData.address.line1} onChange={e => setUserData(prev =>({...prev, address:{...prev.address, line1: e.target.value}}))} />
              <br />
              <input className='bg-gray-50 max-w-64 px-2' type="text" value={userData.address.line2} onChange={e => setUserData(prev =>({...prev, address:{...prev.address, line2: e.target.value}}))}/>
              </p>
            : <p className='text-gray-500 '>
              <address >
              {userData.address.line1}
              <br />
              {userData.address.line2}
              </address>
            </p>
          }

        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-2'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr,3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
            ? <select className='max-w-20 bg-gray-200' onChange={e => setUserData(prev =>({...prev, gender: e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p className='text-gray-500'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit
            ?<input className='max-w-28' type="date"  onChange={e => setUserData(prev =>({...prev, dob: e.target.value}))}value={userData.dob} />
            : <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>


          <div className='mt-8'>
            {
              isEdit
              ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={()=> setIsEdit(false)}>SAVE INFORMATION</button>
              : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={()=> setIsEdit(true)}>EDIT</button>
            }
          </div>

    </div>
  )
}

export default MyProfile