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
    
    <div>
      <Link to={"/products"}>Products</Link><br />
      <Link to={"../createproduct"} relative='path'>creat a product</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>price</th>
            <th>stock</th>
          </tr>
        </thead>
        
        <tbody>
          {productList.map(product => {
          return <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <button>
              <Link to={`../updateproduct/${product._id}`} relative='path'>Update Product</Link>
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