import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from '../components/Product';

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
          <Product
            key={product._id} 
            title={product.title} 
            price={product.price}/>
            <button>Add to Cart</button>
            <button>
            <Link to={`../products/${product._id}`} relative='path'>view</Link>
            </button> 
        </article>
      })
      }
    </div>
  )
}

export default Products