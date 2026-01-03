import React, { useState , useContext } from 'react';
import { Link ,  useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/userContext';
import axios from 'axios';
import { useContext } from 'react';

const SignUp = () => {
  const [firstname , setFirstName] = useState('');
  const [lastname , setLastName] = useState('');
  const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [userData , setUserData] = useState('');

    const navigate = useNavigate();

    const [user , setUser] = useContext(UserDataContext);

    const submitHandler = async (e) => {
      e.preventDefault();
      const newUser = {
        fullName : {
          firstname,
          lastname
        },
        email,
        password
      };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
      if(response.status === 201){
        const data = response.data;
        console.log(data);
        navigate('/');
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
        <button  className='bg-black px-50 py-6 mb-5 text-white text-5xl rounded-2xl font-bold'>Register</button>
         <p className='text-2xl text-center font-bold text-black'>Already have an account? <a href="/Login" className='text-[#dc6464]'>Login Here</a></p>
      </form>

      <div className="details text-center text-2xl font-bold text-black">
        <p>By continuing, you agree to the <a href="/" className='text-[#dc6464]'>Uber Terms of Service</a> and <a href="/" className='text-[#dc6464]'>Privacy Policy</a></p>
      </div>
    </div>
  )
}

export default SignUp
