import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <section className='w-[90%] top-[50px]'><Outlet/></section>
    <Footer/>
    </>
  )
}

export default Layout