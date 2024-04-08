import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Header from '../components/Header';
import { getProducts } from '../firebase/Firebase';

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const [cartProducts, setCartProducts] = useOutletContext();
  
  //Fetch products

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProductList(productList);
    };

    fetchProducts().catch(console.error);
    console.log(productList)
  }, []);

  //Cart logic

  function newaddtoCart(e) {
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
        return <article className='product-item' key={product.id}>
          <Product
            key={product.id} 
            title={product.title} 
            price={product.price}/>
            <button onClick={newaddtoCart} id={product.id} className='centerElement'>Add to Cart</button><br />
            <br />
            <Link to={`../products/${product.id}`} relative='path' className='centerElement'>Read more...</Link>
        </article>
      }): null
      }
    </div>
  )
}

export default Products