import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../../store/sidebarSlice";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";
import MenuItems from "./MenuItems";

// fetchCategory();

export default function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  const styledNoDisplay = {
    display: "none",
  };

  const styledDisplay = {
    display: "flex",
  };

  return (
    <div
      className="menu-modal"
      style={isSidebarOn ? styledDisplay : styledNoDisplay}
    >
      <div className="menu-modal-container">
        <div className="menu-modal-top-background">
          <div className="menu-modal-top">
            <button
              onClick={() => dispatch(setSidebarOff())}
              className="menu-modal-button"
            >
              <i class="bi bi-x-lg"></i>
            </button>
            <span className="menu-modal-header">Menu</span>
          </div>
        </div>

        <div className="menu-modal-middle">
          <span className="menu-modal-name"> Categories</span>
        </div>
        <div className="menu-modal-bottom">
          <ul>
            {categories.slice(0, 8).map((category, idx) => (
              <MenuItems key={idx} name={category} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
