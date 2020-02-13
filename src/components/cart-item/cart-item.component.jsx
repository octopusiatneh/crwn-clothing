import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} className="img" />

      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
