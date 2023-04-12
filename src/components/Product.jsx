import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div>
      <article>
          <img src="src\assets\images\pic.png" alt="" />
          <h1>{props.title}</h1>
          <p>{props.price}</p>
          <button>Add to Cart</button>
          <button>
            <Link to={`products/${props.id}`}>view</Link>
          </button>          
      </article>
    </div>
  )
}

export default Product