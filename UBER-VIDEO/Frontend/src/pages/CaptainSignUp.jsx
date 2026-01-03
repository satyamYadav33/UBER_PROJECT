import React, { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignUp = () => {

  const navigate = useNavigate();
  
    const [firstname , setFirstName] = useState('');
    const [lastname , setLastName] = useState('');
    const [email , setEmail] = useState('');
      const [password , setPassword] = useState('');
      const [userData , setUserData] = useState('')
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');

    const [captain , setCaptain] = useState(null);

      const submitHandler = async (e) => {
        e.preventDefault();
        setUserData({
          userName : {
          firstname,
          lastname
          },
          email,
          password,
          vehicleType,
          vehicleColor,
          vehicleCapacity,
          vehiclePlate,
        })

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, userData );
        if(response.status === 201){
          const data = response.data;
          setCaptain(data.captain)
          localStorage.setItem('token', data.token)
          navigate('/captain-home')
        }
        console.log(userData);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      }
  return (
    
   <div className='flex flex-col justify-between h-screen p-10'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex flex-col'>
        <p className=" inline-block text-5xl font-bold mb-10">Uber</p>
        <h3 className='text-3xl font-bold mb-4'>What's Your Name</h3>
        <div className="flex gap-3 mb-10">
          <input value={firstname} onChange={(e) => setFirstName(e.target.value)} className='text-2xl px-2 py-5 bg-gray-300 w-1/2 rounded-2xl' type="text"  placeholder="First Name" />
        <input value={lastname} onChange={(e) => setLastName(e.target.value)} className='text-2xl px-2 py-5 bg-gray-300 w-1/2 rounded-2xl' type="text"  placeholder="Last Name" />
        </div>
        <h3 className='text-3xl font-bold mb-4'>What's Your Email</h3>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='text-2xl px-6 py-5 bg-gray-300 w-full mb-10 rounded-2xl' type="text" name="Email" placeholder="Email" />
        <h3 className='text-3xl font-bold mb-4'>Create a Password</h3>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='text-2xl px-30 py-5 bg-gray-300 mb-10 rounded-2xl' type="password" name="Password" placeholder="Enter Your Password" />
        <h3 className='text-3xl font-bold mb-4'>Vehicle Type</h3>
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className='text-2xl px-6 py-5 bg-gray-300 w-full mb-10 rounded-2xl'
        >
          <option value="" disabled>Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="auto">Auto</option>
        </select>

        <h3 className='text-3xl font-bold mb-4'>Vehicle Color</h3>
        <input
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
          className='text-2xl px-6 py-5 bg-gray-300 w-full mb-10 rounded-2xl'
          type="text"
          placeholder="Vehicle Color"
        />

        <h3 className='text-3xl font-bold mb-4'>Vehicle Capacity</h3>
        <input
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
          className='text-2xl px-6 py-5 bg-gray-300 w-full mb-10 rounded-2xl'
          type="text"
          placeholder="Vehicle Capacity"
        />

        <h3 className='text-3xl font-bold mb-4'>Vehicle Plate Number</h3>
        <input
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
          className='text-2xl px-6 py-5 bg-gray-300 w-full mb-10 rounded-2xl'
          type="text"
          placeholder="Vehicle Plate Number"
        />
        <button  className='bg-black px-50 py-6 mb-5 text-white text-5xl rounded-2xl font-bold'>Create Captain Account</button>
         <p className='text-2xl text-center font-bold text-black'>Already have an account? <a href="/CaptainLogin" className='text-[#dc6464]'>Login Here</a></p>
      </form>

      <div className="details text-center text-2xl font-bold text-black">
        <p>By continuing, you agree to the <a href="/" className='text-[#dc6464]'>Uber Terms of Service</a> and <a href="/" className='text-[#dc6464]'>Privacy Policy</a></p>
      </div>
    </div>
  )
}

export default CaptainSignUp

