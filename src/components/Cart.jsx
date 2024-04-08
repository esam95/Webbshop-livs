import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getProductById } from '../firebase/Firebase';

const Cart = (props) => {
  const [cartProductList, setCartProductList] = useState([]);

 //Fetch cart products
  useEffect(() => {
    async function getData() {
      const newList = [];
      for (const cartProduct of props.cartProducts) {
        let data = await getProductById(cartProduct.id);
        data = {...data, amount: cartProduct.amount}
        newList.push(data);
      }
      setCartProductList(newList);
    }
    getData();
  }, [props.cartProducts])
  
  let totalPrice = 0;
  for(const cartProduct of cartProductList) {
    totalPrice = totalPrice + cartProduct.price*cartProduct.amount;
  }

  function deleteProduct(e) {
    e.preventDefault();
    const productId = e.target.id; 

    const updatedCart = props.cartProducts.filter(product => product.id !== productId);
    props.setCartProducts(updatedCart);
  }

  function emptyCart () {
    props.setCartProducts([]);
  }
 

  return (
  <table id='cart'>
    <tbody>
      {props.cartProducts !=undefined ? cartProductList.map(product => {
        return  <tr id='cartRow' key={product.id}>
        <img id='cartImage' src={`/static/images/${product.title}.jpg`} alt=''/>
        <td>{product.title}</td>
        <td>{product.amount} x</td>
        <td>{product.price} kr</td>
        <button onClick={deleteProduct} id={product.id} className='deleteButton'>Delete Product</button>
        </tr>
        }):null}
        <button onClick={emptyCart}>Reset cart</button>
    </tbody>

    <tfoot>Total price: {totalPrice}
      <button style={{marginLeft: "50px"}}>
      <Link to={{ pathname: `/checkout` }}>Checkout</Link>
      </button>
    </tfoot>
  </table>
  )
}

export default Cart