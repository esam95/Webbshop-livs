import React, { useEffect, useState } from 'react'

const Products = () => {
  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    try{
      const response = await fetch('https://product-api-production-94fe.up.railway.app/products')
      const data = await response.json()
      setProductList(data)
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
      {productList.map(product => {
        return <article key={product._id}>
          <img src="src\assets\images\8676496 (1).png" alt="" />
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          </article>
      })}
    </div>
  )
}

export default Products