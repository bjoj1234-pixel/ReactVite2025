import { useState } from 'react'
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




function App() {
  
  const data = MealsData();

  return (
    <>
      <BrowserRouter>
        
        <Header />
        
        <Routes>
          <Route path='/' element={<Home data={data}/>}></Route>
          <Route path='/new' element={<NewMeals data={data}/>}></Route>
          {/* <Route path='/detail/:id' element={<MealsDetail data={data}/>}></Route> */}
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
