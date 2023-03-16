import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../Review Items/ReviewItems';
import {deleteShoppingCart, removeFromDb} from '../../utilities/fakedb'

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart)
  const handleRemoveProduct = (id) => {
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining)
    removeFromDb(id)
  }
  const clearCart=()=>{
    setCart([]);
    deleteShoppingCart()
  }
  return (
    <div className='shop-container'>
      <div className="orders-container">
        {
          cart.map(product => <ReviewItems
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItems>)
        }
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;