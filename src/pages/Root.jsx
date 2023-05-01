import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Root = () => {
  const [cartProducts, setCartProducts] = useState([]);
  
  return (
    <div>
        <Header cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        <section>
            <Outlet context={[cartProducts, setCartProducts]}/>
        </section>
        <Footer/>
    </div>
  )
}

export default Root
