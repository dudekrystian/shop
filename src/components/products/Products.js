import React from "react";
import Product from "./Product";

export default function Products({ sorted }) {
  return (
    <>
      {sorted.map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </>
  );
}
