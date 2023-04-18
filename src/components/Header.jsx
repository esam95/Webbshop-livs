import React from 'react'
import Nav from './Nav'
import Cart from './Cart'

const Header = (props) => {
  return (
    <div>Header
      <Nav/>
      <Cart cartProducts={props.cartProducts}/>
    </div>
  )
}

export default Header