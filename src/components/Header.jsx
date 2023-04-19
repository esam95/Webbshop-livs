import React from 'react'
import Nav from './Nav'
import Cart from './Cart'
import { useState } from 'react'

const Header = (props) => {
  const [cartVisibility, setCartVisibility] = useState(true);
    setCartVisibility(false)
  return (
    <div>
      <Nav cartVisibility={cartVisibility} setCartVisbility={setCartVisibility}/>
      {cartVisibility ? <Cart 
      cartList={props.cartList} 
      setCartList={props.setCartList}/>
    : null}
      
    </div>
  )
}

export default Header