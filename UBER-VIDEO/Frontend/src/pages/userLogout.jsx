import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserDataContext from '../context/userContext';

const userLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [user , setUser] = useContext(UserDataContext);
    const [error , setError] = useState('');

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status == 200){
            localStorage.removeItem('token');
            navigate('/login');
        }
    })
  return (
    <div>
       <h1>Logout Successful</h1>
    </div>
  )
}

export default userLogout
 
