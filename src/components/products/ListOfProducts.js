import React from "react";
import Product from "./Product";

export default function ListOfProducts({ products, nameCategory }) {
  return (
    <div className="list-container">
      <div className="name">
        <p>{nameCategory}</p>
      </div>

      <div className="options">
        <button>
          <i class="bi bi-grid"></i>
        </button>
        <button>Filters</button>
        <button>Sorting</button>
      </div>
      {products.map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </div>
  );
}
