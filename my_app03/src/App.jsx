import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Counter from './ReduxEx/Counter'
//import Counter from './ReduxToolkit/counter'
//import Cart from './cartEx/Cart'
//import Test from '../test'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Section from './pages/Section'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'


function App() {

  return (
    <>
      <BrowserRouter>
      {/* <Counter /> */}
      {/* <Cart /> */}
      {/* <Test /> */}
        <Header />

        <Routes>
          <Route path='/' element={<Section />}/>
          <Route path='/cart' element={<CartPage />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
