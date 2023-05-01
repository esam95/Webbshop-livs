import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UpdateProduct = () => {
  const id = useParams().productId;
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const response = await fetch('https://product-api-production-94fe.up.railway.app/products/'+id);
    const data = await response.json();
    setProduct(data)
  }

  useEffect(() => {
    fetchProduct()
  }, []);

  const updateProduct = async (e) => {
    try{
      e.preventDefault()
      const response = await fetch('https://product-api-production-94fe.up.railway.app/products/'+id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        _id: product._id,
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category: product.category,
        image: product.image,
        date: product.date,
        __v: product.__v
      })
    })
    const postSuccessfull = await response.json();
    if(postSuccessfull.acknowledged===true){
      window.location.href = "/admin/manageproducts";
    }
    }catch(error) {
      console.log(error);
    } 
  }

  function handleChangeTitle (e) {
    e.preventDefault();
    setProduct({
      ...product,
      title: e.target.value
    })}

  function handleChangeDescription (e) {
    e.preventDefault();
    setProduct({
      ...product,
      description: e.target.value
    })}

  function handleChangePrice (e) {
    e.preventDefault();
    setProduct({
      ...product,
      price: e.target.value
    })}

  function handleChangeStock (e) {
    e.preventDefault();
    setProduct({
      ...product,
      stock: e.target.value
    })}

    function handleChangeCategory (e) {
      e.preventDefault();
      setProduct({
        ...product,
        category: e.target.value
      })}

  return (
    <div>
      <h1 className='centerElement'>Update product</h1>
      <form onSubmit={updateProduct}>
        <label>Title</label><br />
        <input type="text" onChange={handleChangeTitle} value={product.title}/><br />
        <label>Description</label><br />
        <textarea name="" id="" cols="30" rows="10" onChange={handleChangeDescription} value={product.description}></textarea><br />
        <label>Price</label><br />
        <input type="text" onChange={handleChangePrice} value={product.price}/><br />
        <label>Stock</label><br />
        <input type="text" onChange={handleChangeStock} value={product.stock}/><br />
        <label>Category</label><br />
        <input type="text" onChange={handleChangeCategory} value={product.category}/><br />
        <br /><button>Submit</button>
      </form>
      <br />
      <Link to={`/admin/manageproducts`} relative='path'>Manage Products</Link>
    </div>
  )
}

export default UpdateProduct