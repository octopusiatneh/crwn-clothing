import { createSelector } from "reselect";

const selectCart = state => state.cart;

//1st argument is a collection(array,...), 2nd argument is a function
//that will return the value we want out of selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
