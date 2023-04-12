import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const id = useParams().productId;
  console.log(id);

  const fetchData = async () => {
    try{
      const response = await fetch(`https://product-api-production-94fe.up.railway.app/products/${id}`)
      const data = await response.json()
      setProduct(data)
      console.log(data)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div>
      <article>
          <img src="../src/assets/images/pic.png" />
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <button>Add to Cart</button>
                  
      </article>
    </div>
  )
}

export default Product