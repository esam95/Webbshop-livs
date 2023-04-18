import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Header from '../components/Header';

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const [cartProducts, setcartProducts] = useOutletContext();


  const fetchData = async () => {
    try{
      const response = await fetch('https://product-api-production-94fe.up.railway.app/products')
      const data = await response.json()
      setProductList(data)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  function addToCart (e) {
    e.preventDefault();
    setcartProducts([...cartProducts,
      e.target.id])
      console.log(cartProducts);
    }

    return (
    <div>
      {productList.length>0 ? productList.map(product => {
        return <article key={product._id}>
          <Product
            key={product._id} 
            title={product.title} 
            price={product.price}/>
            <button onClick={addToCart} id={product._id}>Add to Cart</button>
            <button>
            <Link to={`../products/${product._id}`} relative='path'>view</Link>
            </button> 
        </article>
      }): null
      }
    </div>
  )
}

export default Products