import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserApp from './UserApp'
// import ThemeLayout from './ContextAPI/Pages/ThemeLayout'
//ThemeProvider를 import하여 안에 ThemeProvider.Provider를 구현
// import ThemeProvider from './ThemeContext'
// import AuthProvider from './Context02 copy/contexts/AuthContext'
// import Header from './Context02 copy/components/Header'
// import Loginform from './Context02 copy/components/Loginform'
// import Profile from './Context02 copy/components/Profile'
// import Home from './Context02 copy/pages/Home'
import {Routes, Route} from 'react-router-dom';
import WishlistProvider from './wishlist/WishlistContext';
import ProductList from './wishlist/ProductList';
import WishlistPage from './wishlist/WishlistPage';

import HomePage from '../LoginExample/Pages/HomePage';
import LoginPage from '../LoginExample/Pages/LoginPage';
import AuthProvider from '../LoginExample/Context/AuthContext';
import Join from './Addr/join';


function App() {
  //ProductList, WishlistPage를 선택하도록 하기위한 상태변수
  const [showlist, setShowlist] = useState(false);


  return (
    <>
      {/* <UserApp /> */}
      {/* <ThemeProvider>
        <ThemeLayout />
      </ThemeProvider> */}
      
      {/* <AuthProvider>           
        <Header />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Loginform />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>

      </AuthProvider> */}

      {/* <WishlistProvider>
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/wishlist' element={<WishlistPage />}></Route>
        </Routes>
      </WishlistProvider> */}

      {/* <WishlistProvider>
        <header style={{display:'flex',padding:'20px',justifyContent:'center',backgroundColor:'#eee'}}>
          <h2>찜하기 예제</h2>
          <button type='button' onClick={()=>setShowlist(!showlist)}>
            {showlist ? '상품보기' : '찜목록보기'}
          </button>
        </header>        
          {showlist ? <WishlistPage />
          :           <ProductList />
          }
      </WishlistProvider>  */}
     

      
      
      
      {/* <AuthProvider>
        <Routes>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/' element={<LoginPage/>}></Route>
        </Routes>
      </AuthProvider> */}

        <Join/>
    </>
  )
}

export default App
