import React from 'react'
import {Routes , Route} from 'react-router-dom'
import './index.css'
import Start from './pages/Start'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/Home';
import  {UserDataContext} from './context/userContext'
import userLogout from './pages/userLogout'
import UserProtectWrapper from './pages/UserProtectWrapper'

import CaptainHome from './pages/CaptainHome';
import CaptainLogout from './pages/CaptainLogout';



import { useContext } from 'react'

const App = () => {

 const ans = useContext(UserDataContext);
 console.log(ans);

 return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/CaptainLogin' element={<CaptainLogin/>}></Route>
        <Route path='/CaptainSignUp' element={<CaptainSignUp/>}></Route>
        <Route path='home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }></Route>
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <userLogout/>
          </UserProtectWrapper>
        }></Route>
        <Route path='/captain-home' element={
          <UserProtectWrapper>
            <CaptainHome/>
          </UserProtectWrapper>
        }></Route>
        <Route path='/captain/logout' element={
          <UserProtectWrapper>
            <CaptainLogout/>
          </UserProtectWrapper>
        }></Route>

      </Routes>
    </div>
  )
}

export default App
