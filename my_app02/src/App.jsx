import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserApp from './UserApp'
// import ThemeLayout from './ContextAPI/Pages/ThemeLayout'
//ThemeProvider를 import하여 안에 ThemeProvider.Provider를 구현
// import ThemeProvider from './ThemeContext'
import AuthProvider from './Context02 copy/contexts/AuthContext'
import Header from './Context02 copy/components/Header'
import Loginform from './Context02 copy/components/Loginform'
import Profile from './Context02 copy/components/Profile'
import Home from './Context02 copy/pages/Home'
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      {/* <UserApp /> */}
      {/* <ThemeProvider>
        <ThemeLayout />
      </ThemeProvider> */}
      
      <AuthProvider>           
        <Header />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Loginform />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>

      </AuthProvider>
    </>
  )
}

export default App
