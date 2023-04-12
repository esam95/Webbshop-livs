import React from 'react'

const Products = () => {

  const fetchData = async () => {
    const response = await fetch('https://product-api-production-94fe.up.railway.app/products/6432d06c4a8b8aec89853d89')
    const data = await response.json()

    console.log(data)
  }
fetchData()
  return (
    <div>Products</div>
  )
}

export default Products