import React from 'react';
import './Cart.css'
const Cart = ({ cart, clearCart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = parseFloat((totalPrice * 0.15).toFixed(2));
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className='cart'>
      <h3>Order summary</h3>
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <button onClick={clearCart} >Clear Cart</button>
    </div>
  );
};

export default Cart;