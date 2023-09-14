import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [cartProducts, setCartProducts] = useOutletContext();

  const id = useParams().productId;

  const fetchData = async () => {
    try{
      const response = await fetch(`https://product-api-production-94fe.up.railway.app/products/${id}`)
      const data = await response.json()
      setProduct(data)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  let imgsrc=''
  if(product.title === 'Apelsin'){
    imgsrc = "/static/images/Apelsin.jpg"
  } else if(product.title ==='Sprite'){
    imgsrc = "/static/images/sprite.jpg"
  } else if(product.title ==='Redbull'){
    imgsrc = "/static/images/redbull.jpg"
  } else if(product.title ==='Daim'){
    imgsrc = "/static/images/daim.jpg"
  } else if(product.title ==='Gifflar'){
    imgsrc = "/static/images/gifflar.jpg"
  } else if(product.title ==='Banan'){
    imgsrc = "/static/images/banan.jpg"
  } else {
    imgsrc = "/static/images/pic.jpg"
  }

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
    <div>
      <article className="product-container">
        <img src={imgsrc} className='centerElement' id='productImage'/>
        <h1 className='center'>{product.title}</h1>
        <p className='center'>{product.price} kr</p>
        <p className='center'>{product.stock} st</p>
        <p className='center'>{product.description}</p>
        <button onClick={newaddtoCart} id={product._id} className='centerElement'>Add to Cart</button>
      </article>
    </div>
  )
}

export default Product