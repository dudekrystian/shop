import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSortStatus, setSortOff } from "../store/sortSlice";

export default function SortingCart() {
  const dispatch = useDispatch();
  const isSortOn = useSelector(getSortStatus);

  // const [sorted, setSorted] = useState([...products]);

  // const sortCategoryByRating = () => {
  //   const sort = [...products].sort((a, b) => b.rating - a.rating);
  //   setSorted(sort);
  //   console.log(sorted);
  //   dispatch(setSortOff(console.log({ sort })));
  // };

  // const sortCategoryByPriceUp = () => {
  //   const sort = [...products].sort((a, b) => a.price - b.price);
  //   setSorted(sort);
  //   console.log(sorted);
  //   dispatch(setSortOff());
  // };

  // console.log(sorted);

  const styledNoDisplay = {
    display: "none",
  };

  const styledDisplay = {
    display: "flex",
  };

  return (
    <div
      style={isSortOn ? styledDisplay : styledNoDisplay}
      className="sorting-cart-modal"
    >
      <div className="sorting-cart-container">
        <div className="sorting-cart-top-background">
          <div className="sorting-cart-modal-top">
            <button
              onClick={() => dispatch(setSortOff())}
              className="sorting-cart-button"
            >
              <i class="bi bi-x-lg"></i>
            </button>
            <span className="sorting-cart-header">Sorting</span>
          </div>
        </div>
        <div className="sorting-cart-middle">
          <span>Sort by:</span>
        </div>
        <div className="sorting-cart-bottom">
          <div className="single-option">
            <input type={"radio"} name="selectOption"></input>
            <span> Price from lowest </span>
          </div>
          <div className="single-option">
            <input type={"radio"} name="selectOption"></input>
            <span> Price from highest </span>
          </div>
          <div className="single-option">
            <input type={"radio"} name="selectOption"></input>
            <span> Rated from the highest </span>
          </div>
          <div className="single-option">
            <input type={"radio"} name="selectOption"></input>
            <span> By name from A to Z </span>
          </div>
        </div>
      </div>
    </div>
  );
}
