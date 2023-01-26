import React from "react";

export default function UserPanel() {
  return (
    <div className="user-panel">
      <div className="user-panel element">
        <i class="bi bi-person"></i>
        <span>Your account </span>
      </div>
      <div className="user-panel element">
        <i class="bi bi-heart"></i>
        <span>Your favourite </span>
      </div>
      <div className="user-panel element">
        <i class="bi bi-cart2"></i>
        <span>Your order </span>
      </div>
    </div>
  );
}
