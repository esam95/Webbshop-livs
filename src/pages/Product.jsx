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

  let imgsrc=''
  if(product.title === 'Apelsin'){
    imgsrc = "src/assets/images/Apelsin.jpg"
  } else if(product.title ==='Sprite'){
    imgsrc = "src/assets/images/sprite.jpg"
  } else if(product.title ==='Redbull'){
    imgsrc = "src/assets/images/redbull.jpg"
  } else if(product.title ==='Daim'){
    imgsrc = "src/assets/images/daim.jpg"
  } else if(product.title ==='Gifflar'){
    imgsrc = "/src/assets/images/gifflar.jpg"
  } else if(product.title ==='banan'){
    imgsrc = "src/assets/images/banan.jpg"
  } else {
    imgsrc = "src/assets/images/pic.png"
  }

  return (
    <div>
      <article>
          <img src={imgsrc} className='centerElement' id='productImage'/>
          <h1 className='center'>{product.title}</h1>
          <p className='center'>{product.price} kr</p>
          <p className='center'>{product.stock} st</p>
          <p className='center'>{product.description}</p>
          <button className='centerElement'>Add to Cart</button>
                  
      </article>
    </div>
  )
}

export default Product