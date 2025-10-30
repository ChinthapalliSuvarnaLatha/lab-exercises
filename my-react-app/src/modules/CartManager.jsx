export function addToCart(cart, book) {
  const found = cart.find(item => item.id === book.id);
  if (found) {
    return cart.map(item =>
      item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...book, quantity: 1 }];
}

export function removeFromCart(cart, bookId) {
  return cart.filter(item => item.id !== bookId);
}

export function getCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
