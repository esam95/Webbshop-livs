import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = (props) => {
  function isCartVisible() {
    props.cartVisibility ? props.setCartVisibility(false)
    : props.setCartVisibility(true)
  }
  console.log(props.cartVisibility)
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">Webbshop</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link className="navbar-link" to="/products">Products</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/admin/manageproducts">Admin</Link>
          </li>
          <li>
            <button className="navbar-item" onClick={isCartVisible}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav