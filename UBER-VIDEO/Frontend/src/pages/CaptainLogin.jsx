import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData , setUserData] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email : email,
      password : password
    });
    console.log(userData);
    setEmail(' ');
    setPassword(' ');

  }
  return (
     <div className='flex flex-col justify-between h-screen pb-10'>
      <form onSubmit={(e) => {submitHandler(e)}} className="first h-[50%] w-screen px-6 py-20 flex gap-10 flex-col justify-between items-center">
        <p className=" inline-block text-5xl font-bold align-left">Uber</p>
        <h1 className='text-3xl font-bold'>What's your phone number or email</h1>
        <input
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} className='text-2xl px-30 py-5 bg-gray-300 rounded-2xl' type="email" name="Email" placeholder="Enter Your Email" />
        <input 
        required 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} className='text-2xl px-30 py-5 bg-gray-300 rounded-2xl' type="password" name="Password" placeholder="Enter Your Password" />
        <button  className='bg-black px-50 py-6 text-white text-5xl rounded-2xl font-bold'>Continue</button>
         <p className='text-2xl font-bold text-black'>New Here?  <a href="/CaptainSignUp" className='text-[#dc6464]'>Register as a Captain</a></p>
      </form>
     
      <div className="second h-[10%] w-screen flex flex-col justify- items-center">
        <a href="/Login" className='bg-[#d5622d] px-30 py-6 text-white text-5xl rounded-2xl font-bold'>Login As User</a>
      </div>
    </div>
  )
}

export default CaptainLogin

