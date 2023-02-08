import React from "react";

export default function FilterCart() {
  return (
    <div className="filter-cart-modal">
      <div className="filter-cart-container">
        <div className="filter-cart-top-background">
          <div className="filter-cart-modal-top">
            <button className="filter-cart-button">
              <i class="bi bi-x-lg"></i>
            </button>
            <span className="filter-cart-header">Filter</span>
          </div>
        </div>
        <div className="filter-cart-middle">
          <span>Filter by:</span>
        </div>
        <div className="filter-cart-bottom">
          <div className="filter-option">
            <label>Brand: </label>
            <div className="filter-brand">
              <input type={"checkbox"} name="selectOption"></input>
              <span>Apple (1)</span>
            </div>
            <div className="filter-brand">
              <input type={"checkbox"} name="selectOption"></input>
              <span>Samsung (1)</span>
            </div>
            <div className="filter-brand">
              <input type={"checkbox"} name="selectOption"></input>
              <span>Nokia (5)</span>
            </div>
          </div>
          <div className="filter-option">
            <label>Price: </label>
            <div className="filter-price">
              <input type={"checkbox"} name="selectOption"></input>
              <span>Price to: 500 EUR</span>
            </div>
            <div className="filter-price">
              <input type={"checkbox"} name="selectOption"></input>
              <span>Price over: 500 EUR</span>
            </div>
          </div>

          <div className="filter-cart-button">
            <button className="filter-button">Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
