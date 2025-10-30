import React from 'react';

export function CartUI({ cart, onRemove, onCheckout }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.title} × {item.quantity} = ₹{item.price * item.quantity}
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
