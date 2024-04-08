import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts, deleteProductdb } from '../../firebase/Firebase';

const ManageProducts = () => {
  const [productList, setProductList] = useState([]);

  //Fetch products

  const fetchProducts = async () => {
    const productList = await getProducts();
    setProductList(productList);
  };

  useEffect(() => {
    fetchProducts().catch(console.error);
    console.log(productList)
  }, []);

  //Delete product

  const deleteProduct = async (productId) => {
    try {
      console.log(productId);
      await deleteProductdb(productId);
      fetchProducts().catch(console.error);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


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
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price} kr</td>
              <td>{product.stock}</td>
              <td>
                <Link to={`../updateproduct/${product.id}`} relative='path' className="action-button">
                  Update
                </Link>
                <button onClick={() => deleteProduct(product.id)} className="action-button">
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