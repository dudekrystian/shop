import React from "react";

const CartMessage = () => {
  return (
    <div className="cart-message-modal">
      <div className="cart-message-container">
        <div className="cart-message-info">
          <span>Item added to shopping list</span>
        </div>
        <div className="cart-message-icon">
          <i class="bi bi-check-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default CartMessage;
