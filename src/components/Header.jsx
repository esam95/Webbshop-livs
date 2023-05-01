import React from 'react'
import Nav from './Nav'
import Cart from './Cart'
import { useState } from 'react'

const Header = (props) => {
  const [cartVisibility, setCartVisibility] = useState(false);

  return (
    <div>
      <Nav cartVisibility={cartVisibility} setCartVisibility={setCartVisibility}/>
      {cartVisibility ? <Cart 
      cartProducts={props.cartProducts}
      setCartProducts={props.setCartProducts}/>
    : null}
      
    </div>
  )
}

export default Header