import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';


const Checkout = (props) => {
  const [cartProductList, setCartProductList] = useState([]);
  const [cartProducts, setCartProducts] = useOutletContext();


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
      console.log(cartProducts)
      for (const cartProduct of cartProducts) {
        let data = await fetchData(cartProduct.id);
        data = {...data, amount: cartProduct.amount}
        newList.push(data);
        console.log(cartProduct)
      }
      setCartProductList(newList);
      console.log(cartProductList)
    }
    getData();
  }, [cartProducts])
  
  let totalPrice = 0;
for(const cartProduct of cartProductList) {
  totalPrice = totalPrice + cartProduct.price*cartProduct.amount;
  console.log(totalPrice);
}

function deleteProduct(e) {
  e.preventDefault();
  const productId = e.target.id; 
  const updatedCart = cartProducts.filter(product => product.id !== productId);
  setCartProducts(updatedCart);
  console.log(cartProductList)
}

function decreaseAmount (e) {
  e.preventDefault()
  let found = cartProducts.findIndex(product => product.id === e.target.id)
  let newList = [];

  for(const cartId of cartProducts) {
    newList=[...newList, cartId]
  }
  if(newList[found].amount > 1) {
    newList[found].amount--;
  }
  setCartProducts(newList);
}

function increaseAmount (e) {
  e.preventDefault()
  let found = cartProducts.findIndex(product => product.id === e.target.id)
  let newList = [];

  for(const cartId of cartProducts) {
    newList=[...newList, cartId]
  }
  newList[found].amount++;
  setCartProducts(newList);
}
  return (
    <table>
          
          <tbody>
            {cartProducts !==undefined && cartProducts.length > 0 ? cartProductList.map(product => {
            return  <tr id='checkoutRow' key={product._id}>
                      <img src="src\assets\images\pic.png" id='cartImage' alt=''/>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <button onClick={decreaseAmount} id={product._id}>-</button>
                      <td>{product.amount}</td>
                      <button onClick={increaseAmount} id={product._id}>+</button>
                      <button onClick={deleteProduct} id={product._id}>Delete Product</button>
                    </tr>
            }):
            <div>
                <p>cart is empty</p>
                <button style={{marginLeft: "100px"}}>
                <Link to={{ pathname: `/products` }}>Product page</Link>
                </button>
            </div>}
                
            
          </tbody>

          <tfoot>
          {totalPrice > 0 ? `Total price: ${totalPrice}`
            : null}
          </tfoot>
    </table>
  )
}

export default Checkout
