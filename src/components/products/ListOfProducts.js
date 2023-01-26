import React from "react";
import Product from "./Product";

const name = "Laptopy";

export default function ListOfProducts() {
  return (
    <div className="list-container">
      <div className="name">
        <p>{name}</p>
      </div>

      <div className="options">
        <button>
          <i class="bi bi-grid"></i>
        </button>
        <button>Filtry</button>
        <button>Sortowanie</button>
      </div>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
