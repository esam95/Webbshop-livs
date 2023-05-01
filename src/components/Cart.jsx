import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
      console.log(props.cartProducts)
      for (const cartProduct of props.cartProducts) {
        let data = await fetchData(cartProduct.id);
        data = {...data, amount: cartProduct.amount}
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
  totalPrice = totalPrice + cartProduct.price*cartProduct.amount;
  console.log(totalPrice);
}

function deleteProduct(e) {
  e.preventDefault();
  const productId = e.target.id; 
  const updatedCart = props.cartProducts.filter(product => product.id !== productId);
  props.setCartProducts(updatedCart);
  console.log(cartProductList)
}
function emptyCart () {
  props.setCartProducts([]);
}
 

  return (
  <table id='cart'>
          
          
          <tbody>
            {props.cartProducts !=undefined ? cartProductList.map(product => {
            return  <tr id='cartRow' key={product._id}>
            <img id='cartImage' src="src\assets\images\pic.png" alt=''/>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.amount}</td>
            <button onClick={deleteProduct} id={product._id} className='deleteButton'>Delete Product</button>
          </tr>
            }):null}
          <button onClick={emptyCart}>Empty cart</button>

          </tbody>

          <tfoot>
            Total price: {totalPrice}
            <button style={{marginLeft: "50px"}}>
                <Link to={{ pathname: `/checkout` }}>Checkout</Link>
            </button>
          </tfoot>
    </table>
   
  )
}

export default Cart