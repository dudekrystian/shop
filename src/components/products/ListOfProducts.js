import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSortStatus } from "../../store/sortSlice";
import Product from "./Product";
import Products from "./Products";
import SortProduct from "./SortProduct";

export default function ListOfProducts({ products, nameCategory }) {
  // const [option, setOption] = useState();

  const [sorted, setSorted] = useState([...products]);

  const sortCategoryByRating = () => {
    const sort = [...products].sort((a, b) => b.rating - a.rating);
    setSorted(sort);
  };

  const sortCategoryByPrice = () => {
    const sort = [...products].sort((a, b) => a.price - b.price);
    setSorted(sort);
  };

  const sortCategoryByDefault = () => {
    const sort = [...products].sort((a, b) => a.id - b.id);
    setSorted(sort);
  };

  const selectSortingProducts = (value) => {
    if (value === "price") sortCategoryByPrice();
    if (value === "rating") sortCategoryByRating();
    if (value === "default") sortCategoryByDefault();
  };

  return (
    <div className="list-container">
      <div className="name">
        <p>{nameCategory}</p>
      </div>

      <div className="options">
        <button>
          <i class="bi bi-filter"></i>{" "}
        </button>
        {/* <button>Filters</button> */}
        <select onChange={(e) => selectSortingProducts(e.target.value)}>
          <option value="default">by default</option>
          <option value="price">by price</option>
          <option value="rating">by rating</option>
        </select>
        {/* <SortProduct products={products} /> */}
      </div>
      <div className="container-product">
        <Products sorted={sorted} />
      </div>
    </div>
  );
}
