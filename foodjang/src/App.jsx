import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './common/common.css'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import MealsData from './api/MealsData'
import NewMeals from './pages/NewMeals/NewMeals'
//import MealsDetail from './Detail/MealsDetail'
import Home from './pages/Home/Home'
import Login from './common/Login/Login'
import AuthProvider from './AuthContext';



function App() {
  
  const data = MealsData();

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        
          <Header />
          
          <Routes>
            <Route path='/' element={<Home data={data}/>}></Route>
            <Route path='/login' element={<Login data={data}/>}></Route>
            <Route path='/new' element={<NewMeals data={data}/>}></Route>
            {/* <Route path='/detail/:id' element={<MealsDetail data={data}/>}></Route> */}
          </Routes>

          <Footer />
          
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
