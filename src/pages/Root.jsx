import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Header/>
        <section>
            <Outlet/>
        </section>
        <Footer/>
    </div>
  )
}

export default Root
