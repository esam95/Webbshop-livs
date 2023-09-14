import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

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
    console.log(product)
    setProduct({
      ...product,
      title: e.target.value
    })
  console.log(product)}

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
    <div className="edit-product">
      <form onSubmit={updateProduct}>
        <label htmlFor="title">Title</label><br />
        <input
          type="text"
          id="title"
          onChange={handleChangeTitle}
          value={product.title}
          className="input-field"
        /><br />
        <label htmlFor="description">Description</label><br />
        <textarea
          id="description"
          cols="30"
          rows="10"
          onChange={handleChangeDescription}
          value={product.description}
          className="input-field"
        ></textarea><br />
        <label htmlFor="price">Price</label><br />
        <input
          type="text"
          id="price"
          onChange={handleChangePrice}
          value={product.price}
          className="input-field"
        /><br />
        <label htmlFor="stock">Stock</label><br />
        <input
          type="text"
          id="stock"
          onChange={handleChangeStock}
          value={product.stock}
          className="input-field"
        /><br />
        <label htmlFor="category">Category</label><br />
        <input
          type="text"
          id="category"
          onChange={handleChangeCategory}
          value={product.category}
          className="input-field"
        /><br />
        <button className="submit-button">Submit</button>
      </form>
    </div>

  )
}

export default UpdateProduct