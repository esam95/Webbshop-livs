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
  <form onSubmit={createProduct} className="edit-product">
    <label htmlFor="createTitle">Title</label><br />
    <input
      type="text"
      id="createTitle"
      onChange={handleChangeTitle}
      className="input-field"
    /><br />
    <label htmlFor="createDescription">Description</label><br />
    <textarea
      id="createDescription"
      cols="30"
      rows="10"
      onChange={handleChangeDescription}
      className="input-field"
    ></textarea><br />
    <label htmlFor="createPrice">Price</label><br />
    <input
      type="text"
      id="createPrice"
      onChange={handleChangePrice}
      className="input-field"
    /><br />
    <label htmlFor="createStock">Stock</label><br />
    <input
      type="text"
      id="createStock"
      onChange={handleChangeStock}
      className="input-field"
    /><br />
    <label htmlFor="createCategory">Category</label><br />
    <input
      type="text"
      id="createCategory"
      onChange={handleChangeCategory}
      className="input-field"
    /><br />
    <button className="submit-button">Submit</button>
  </form>
</div>

  )
}

export default CreateProduct