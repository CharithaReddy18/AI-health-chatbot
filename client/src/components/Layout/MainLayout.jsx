import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col min-h-screen overflow-x-hidden pt-20'>
            <div className='flex-1 w-full'>
                <Outlet/>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default MainLayout