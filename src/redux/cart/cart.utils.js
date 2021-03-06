export const addItemToCart = (cartItems, itemAddToCart) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemAddToCart.id
  );

  //if true => increase the quantiy, return a new cartItems array
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemAddToCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if false => return a new array which all of existing cartItems and the new item which base quantity is 1
  return [...cartItems, { ...itemAddToCart, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
