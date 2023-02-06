import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
import { getAllCategories } from "../../store/categorySlice";
import { fetchAsyncCategories } from "../../store/categorySlice";

export default function MenuButton() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  return (
    <div className="menu">
      <div className="element">
        <i class="bi bi-list"></i>
        <span onClick={() => dispatch(setSidebarOn())}>Menu</span>
      </div>
    </div>
  );
}
