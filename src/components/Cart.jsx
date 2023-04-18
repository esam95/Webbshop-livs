import React from 'react'
import { useState, useEffect } from 'react'

const Cart = (props) => {
  const [cartProductList, setCartProductList] = useState([]);

  const fetchData = async (id) => {
    try{
      const response = await fetch(`https://product-api-production-94fe.up.railway.app/products/${id}`)
      const data = await response.json()
      //console.log(data)
      return data
    } catch(error){
      console.log(error)
    }
  }


  useEffect(() => {
    async function getData() {
      const newList = [];
      for (const cartProduct of props.cartProducts) {
        const data = await fetchData(cartProduct);
        newList.push(data);
        console.log(cartProduct)
      }
      setCartProductList(newList);
      console.log(cartProductList)
    }
    getData();
  }, [props.cartProducts])
  
  let totalPrice = 0;
for(const cartProduct of cartProductList) {
  totalPrice = totalPrice + cartProduct.price;
  console.log(totalPrice);
}
 

  return (
  <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>price</th>
              <th>stock</th>
            </tr>
          </thead>
          
          <tbody>
            {props.cartProducts !=undefined ? cartProductList.map(product => {
            return  <tr key={product._id}>
                      <img src="src\assets\images\pic.png" alt="" />
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
              
              
                    </tr>
            }):null}
          </tbody>

          <tfoot>
            Total price: {totalPrice}
          </tfoot>
    </table>
   
  )
}

export default Cart