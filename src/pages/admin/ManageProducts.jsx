import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ManageProducts = () => {
  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    try{
      const response = await fetch('https://product-api-production-94fe.up.railway.app/products')
      const data = await response.json()
      setProductList(data)
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
      fetchData();
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <h1 className='centerElement'>Manage products</h1>
      <Link to={"../createproduct"} relative='path' id='create'>Create product</Link>
      <table className="product-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        
        <tbody>
          {productList.map(product => {
          return <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <button>
              <Link className='update-link' to={`../updateproduct/${product._id}`} relative='path'>Update Product</Link>
            </button>
            <button id={product._id} onClick={deleteProduct}>
              Delete Product
            </button>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ManageProducts