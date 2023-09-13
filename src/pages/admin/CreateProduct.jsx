import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { redirect } from "react-router-dom";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    title:'No title', 
    description:'No description',
    price: 0,
    stock: 0,
    category: 'No Category',
    image: ''
    });

  const createProduct = async (e) => {
    try{
      e.preventDefault()
      const response = await fetch('https://product-api-production-94fe.up.railway.app/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category: product.category,
        image: product.image
      })
    })
    const postSuccessfull = await response.json();
    if(postSuccessfull.errors===undefined){
      window.location.href = "/admin/manageproducts";
    }
    }catch(error) {
      console.log(error);
    } 
  }

  function handleChangeTitle (e) {
    e.preventDefault();
    console.log(product)
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
      <form onSubmit={createProduct}>
        <label>Title</label><br />
        <input type="text" onChange={handleChangeTitle}/><br />
        <label>Description</label><br />
        <textarea name="" id="" cols="30" rows="10" onChange={handleChangeDescription}></textarea><br />
        <label>Price</label><br />
        <input type="text" onChange={handleChangePrice}/><br />
        <label>Stock</label><br />
        <input type="text" onChange={handleChangeStock}/><br />
        <label>Category</label><br />
        <input type="text" onChange={handleChangeCategory}/><br />
        <button>Submit</button>
      </form>
      <Link to={`../manageproducts`} relative='path'>Manage Products</Link>

    </div>
  )
}

export default CreateProduct