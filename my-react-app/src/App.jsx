import React, { useState } from 'react';
import './App.css';
import { BookList } from './modules/BookList.jsx';
import { addToCart, removeFromCart, getCartTotal } from './modules/CartManager.jsx';
import { CartUI } from './modules/CartUI.jsx';
import booksData from './data/books.json';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart(cart => addToCart(cart, book));
  };

  const handleRemoveFromCart = (bookId) => {
    setCart(cart => removeFromCart(cart, bookId));
  };

  const handleCheckout = () => {
    alert('Order placed! (Mock checkout)');
  };

  return (
    <div>
      <BookList books={booksData} onAddToCart={handleAddToCart} />
      <CartUI cart={cart} onRemove={handleRemoveFromCart} onCheckout={handleCheckout} />
      <div>
        <h3>Total: ₹{getCartTotal(cart)}</h3>
      </div>
    </div>
  );
}

export default App;

