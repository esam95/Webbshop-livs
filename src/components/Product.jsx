import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div>
          <img src="src\assets\images\pic.png" alt="" />
          <h1>{props.title}</h1>
          <p>{props.price}</p>
                   
    </div>
  )
}

export default Product