import React from "react";

export default function ListProducts() {
  return (
    <div className="product-container">
      <div className="product-image">
        <img
          src="https://i.dummyjson.com/data/products/8/thumbnail.jpg"
          alt="foto"
        ></img>
      </div>
      <div className="product-name">
        <p>Samsung Galaxy M51 LTE 5G 64RAM</p>
        <p>Samsung</p>
      </div>
      <div className="rating">
        <i class="bi bi-star-fill"></i>
      </div>
      <div className="bottom">
        <div className="price">
          <span className="price-old">1699.99</span>
          <span className="price">1299.99</span>
        </div>
        <div className="options">
          <button>
            <i class="bi bi-heart-fill"></i>
          </button>
          <button>
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
