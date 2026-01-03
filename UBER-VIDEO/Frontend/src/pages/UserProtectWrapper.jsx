import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {userDataContext} from '../context/userContext';


const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    console.log(token);
  
  useEffect(() => {
    if(!token){
        navigate('/login');
    }
  },[token]);

    return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectWrapper;
