import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { getProductById, updateProduct } from '../../firebase/Firebase';

const UpdateProduct = () => {
  const id = useParams().productId;
  const [product, setProduct] = useState({});

  //Fetch product
  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product: ", error);
      });
      console.log(product)
  }, [id]);

  //Update product
  const handleSubmit = (event) => {
    event.preventDefault();
    
    updateProduct(id, product).then(() => {
      console.log('Product added!');
      window.location.href = "/admin/manageproducts";
    }).catch((error) => {
      console.error('Error adding product:', error);
    });
  };

  //Handle form input
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
      <form onSubmit={handleSubmit}>
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
          type="number"
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