import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
      event.preventDefault()
  }
  return (
    <form className='min-h-[100h] flex items-center justify-center'>
        <div className='flex flex-col gap-3 m-32 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account': 'Login'}</p>
          <p>Please {state === 'Sign Up' ? 'sign up': 'log in'} to book appointment</p>

            {/* Name field  */}
            {
            state === 'Sign Up' && 
            <div className='w-full'>
              <p>Full Name </p>
              <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="text" onChange={()=>setName(e.target.name)} value={name} required/>
            </div> 
            }
                           {/*EMAIL Field  */}
          <div className='w-full'>
            <p>EMAIL </p>
            <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="email" onChange={()=>setEmail(e.target.name)} value={email} required />
          </div>
                           {/*  */}
          <div className='w-full'>
            <p>PASSWORD </p>
            <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="password" onChange={()=>setPassword(e.target.name)} value={password} required />
          </div>

          {/* button */}
          <button className='bg-slate-600 text-white w-full py-2 rounded text-base'>{state === 'Sign Up' ? 'Create Account': 'Login'}</button>
          {
            state === "Sign Up"
            ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>click here to Create Account with us? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Create account</span></p>
            
          }
        </div>
    </form>
  )
}

export default Login