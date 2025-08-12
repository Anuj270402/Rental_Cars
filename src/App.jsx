/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarsDetail from './pages/CarsDetail';
import Cars from './pages/Cars';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';

const App = () => {
  const [showLogin , setShowLogin] = useState(false);
  const isOwnerPath =  useLocation().pathname.startsWith('/owner')



  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}



      <Routes>
        <Route path = '/' element ={<Home/>}/>
        <Route path = '/car-details/:id' element ={<CarsDetail/>}/>
        <Route path = '/cars' element ={<Cars/>}/>
        <Route path = '/my-bookings' element ={<MyBookings/>}/>
      </Routes>
      {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App
