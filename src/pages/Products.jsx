import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [cartProducts, setCartProducts] = useOutletContext();

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

  function addToCart(e) {
    e.preventDefault();
    let newList = [];
    let sameId= true;

    for(const cartId of cartProducts) {
        newList=[...newList, cartId]
    }
    if(newList.length === 0){
      newList = [...newList, {id:e.target.id, amount:0}];
      setCartProducts(newList)
    }
    for(const listItem of newList) {
      if(e.target.id === listItem.id){
        sameId = true;
        listItem.amount++;
        setCartProducts(newList)
        break;
      } else {
        sameId = false;
      }
    }
    if(sameId === false){
      newList = [...newList, {id:e.target.id, amount:1}];
      setCartProducts(newList)
    }
  }

    return (
    <div id='productContainer'>
      {productList.length>0 ? productList.map(product => {
        return <article key={product._id}>
          <Product
            key={product._id} 
            title={product.title} 
            price={product.price}/>
            <button onClick={addToCart} id={product._id} className='centerElement'>Add to Cart</button><br />
            <br />
            <Link to={`../products/${product._id}`} relative='path' className='centerElement'>Read more...</Link>
        </article>
      }): null
      }
    </div>
  )
}

export default Products