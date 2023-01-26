import React from "react";

export default function singleProduct() {
  return (
    <div className="single-product">
      <div className="container">
        <button className="button-back-product">Back</button>

        <div className="gallery-product">
          <img
            src="https://i.dummyjson.com/data/products/8/thumbnail.jpg"
            alt="foto"
          ></img>
        </div>
        <div className="product-title">
          <h2>Samsung Galaxy M51 100GB LTE 5G</h2>
        </div>
        <div className="details-product">
          <div className="rating-product">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <div className="desc">
            <span className="brand-product">
              <span>Brand:</span>
              <span>Samsung</span>
            </span>
            <span className="info-product">
              <span>Description:</span>
              <span>Samsung is the best phone ever...</span>
            </span>
          </div>
        </div>
        <div className="price-product">
          <span className="price-old">1200</span>
          <span className="price-discount">1000</span>
        </div>
        <div className="options-product">
          <select className="select-single">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button className="button-product">
            <i class="bi bi-cart-plus"></i>
            <span>Dodaj do koszyka</span>
          </button>
        </div>
      </div>
    </div>
  );
}
