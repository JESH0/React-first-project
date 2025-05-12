import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'
import About from './Components/About/About'

const Layout = () => {
  return (
    
    <>
     <Header />
     <Outlet />
     <Footer />

    
    </>
  )
}

export default Layout