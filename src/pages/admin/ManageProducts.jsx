import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ManageProducts = () => {
  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    try{
      const response = await fetch('https://product-api-production-94fe.up.railway.app/products')
      const data = await response.json()
      setProductList(data)
      console.log(data)
    } catch(error){
      console.log(error)
    }
  }

  const deleteProduct = async (e) => {
    try{
      e.preventDefault();
      await fetch(`https://product-api-production-94fe.up.railway.app/products/${e.target.id}`, {
        method: 'DELETE'
      })
      console.log(e.target.id)
      fetchData();
    }catch(error){
      console.log(error);
    }
      
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    
    <div className="product-list">
      <Link to={"/products"} className="link-button">Products</Link>
      <Link to={"../createproduct"} relative='path' className="link-button">Create a Product</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(product => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price.toFixed(2)} kr</td>
              <td>{product.stock}</td>
              <td>
                <Link to={`../updateproduct/${product._id}`} relative='path' className="action-button">
                  Update
                </Link>
                <button  id={product._id} onClick={deleteProduct} className="action-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )
}

export default ManageProducts