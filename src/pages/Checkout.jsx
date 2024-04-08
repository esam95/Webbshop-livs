import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { getProductById } from '../firebase/Firebase';


const Checkout = () => {
  const [cartProductList, setCartProductList] = useState([]);
  const [cartProducts, setCartProducts] = useOutletContext();

  //Fetch cart products
  useEffect(() => {
    async function getData() {
      const newList = [];
      console.log(cartProducts)
      for (const cartProduct of cartProducts) {
        let data = await getProductById(cartProduct.id);
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
    <table className="checkout-table">
      <tbody>
        {cartProducts !== undefined && cartProducts.length > 0 ? (
          cartProductList.map(product => (
            <tr className="checkout-row" key={product.id}>
              <td className="checkout-image-cell">
              <img id='cartImage' src={`/static/images/${product.title}.jpg`} alt=''/>
              </td>
              <td className="checkout-title-cell">{product.title}</td>
              <td className="checkout-price-cell">${product.price}</td>
              <td className="checkout-amount-cell">
                <button onClick={decreaseAmount} id={product.id} className="checkout-amount-button">
                  -
                </button>
                <span className="checkout-amount">{product.amount}</span>
                <button onClick={increaseAmount} id={product.id} className="checkout-amount-button">
                  +
                </button>
              </td>
              <td>
                <button onClick={deleteProduct} id={product.id} className="delete-button">
                  Delete Product
                </button>
              </td>
            </tr>
          ))
        ) : (
          <div className="empty-cart">
            <p>Cart is empty</p>
            <button className="product-page-button">
              <Link to={{ pathname: `/products` }}>Product page</Link>
            </button>
          </div>
        )}
      </tbody>
      <tfoot className="checkout-price">
        {totalPrice > 0 ? <span >Total price: {totalPrice} kr</span> : null}
      </tfoot>
    </table>

  )
}

export default Checkout
