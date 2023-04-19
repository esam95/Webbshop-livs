import React from 'react'
import { useState } from 'react'

const Nav = () => {
  function isCartVisible() {
    cartVisibility ? setCartVisibility(false)
    : setCartVisibility(true)
  }
  console.log(cartVisibility)
  return (
    <div>
      <li className="navbar-item" onClick={isCartVisible}>hi</li>
    </div>
  )
}

export default Nav