import React, { useState } from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Componenets/Footer/Footer'
import LoginPopUp from './Componenets/LoginPopUp/LoginPopUp'
const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
