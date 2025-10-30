import React from 'react';

export function BookList({ books, onAddToCart }) {
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span>
              {book.title} by {book.author} – ₹{book.price} ({book.availability})
            </span>
            <button
              onClick={() => onAddToCart(book)}
              disabled={book.availability !== 'in stock'}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
