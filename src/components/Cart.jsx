import React, { useState } from 'react'
import Products from '../pages/Products';

const Cart = (Products) => {
  const [addCart, setAddCart] = useState([]);

  return (
    <div>
      {addCart.map(product => {
        return <Product 
        id={product._id}
        key={product._id} 
        title={product.title} 
        price={product.price}/>
      })
      }
    </div>
  )
}

export default Cart