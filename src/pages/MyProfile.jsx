import React, { useState } from 'react'
import {assets} from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'AGU CHUKWUEMEKA V',
    image: assets.profile_pic,
    email: 'aguchukwuemekav@gmail.com',
    phone: '+243-96-3141-84',
    address: {
      line1: '6 umunaga street maryland enugu',
      line2: '2,4,6,8 isiagu street uwani enugu'
    },
    gender: 'male',
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
          <p className='font-medium'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
          isEdit
          ? <input className='font-medium' type="text" value={userData.phone} onChange={e => setUserData(prev =>({...prev,phone}))}/>
          : <p className='font-medium'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
            ? <p>
              <input type="text" value={userData.address.line1} onChange={e => setUserData(prev =>({...prev, address:{...prev.address, line1: e.target.value}}))} />
              <br />
              <input type="text" value={userData.address.line2} onChange={e => setUserData(prev =>({...prev, address:{...prev.address, line2: e.target.value}}))}/>
              </p>
            : <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }

        </div>
      </div>

      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            isEdit
            ? <select onChange={e => setUserData(prev =>({...prev, gender: e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p>{userData.gender}</p>
          }
          <p>Birthday:</p>
          {
            isEdit
            ?<input type="date"  onChange={e => setUserData(prev =>({...prev, dob: e.target.value}))}value={userData.dob} />
            : <p>{userData.dob}</p>
          }
        </div>
      </div>


          <div>
            {
              isEdit
              ? <button onClick={()=> setIsEdit(false)}>SAVE INFORMATION</button>
              : <button onClick={()=> setIsEdit(true)}>EDIT</button>
            }
          </div>

    </div>
  )
}

export default MyProfile