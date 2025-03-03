import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart, clearCart } from 'container/store/cartSlice';

const CartApp = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>
              {product.name} - Quantity: {product.quantity}
              <button onClick={() => dispatch(addProductToCart(product))}>+</button>
              <button onClick={() => dispatch(removeProductFromCart(product))}>-</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </>
  );
};

export default CartApp;
