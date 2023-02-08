import React from "react";
import { useDispatch } from "react-redux";
import { setSortOn } from "../../store/sortSlice";

export default function SortProduct({ products }) {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(setSortOn())}>Sorting</button>
    </>
  );
}
