import React from "react";

export default function Header() {
  return (
    <div className="header">
      {/* <Logo /> */}
      <div className="panel">
        <i class="bi bi-person"></i>
        <i class="bi bi-heart"></i>
        <i class="bi bi-cart2"></i>
      </div>
      <div className="menu">
        <i class="bi bi-list"></i>
        <span>Menu</span>
      </div>

      <input type="search" placeholder="Czego potrzebujesz?"></input>
    </div>
  );
}
