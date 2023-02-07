import React from "react";
import { Link } from "react-router-dom";
import { setSidebarOff } from "../../store/sidebarSlice";
import { useDispatch } from "react-redux";

export default function MenuItems({ name }) {
  const dispatch = useDispatch();
  return (
    <div className="menu-modal-category-single">
      <i class="bi bi-bag"></i>
      <span className="menu-modal-category-name">
        <Link
          onClick={() => dispatch(setSidebarOff())}
          className="link"
          to={`category/${name}`}
        >
          {name}
        </Link>
      </span>
    </div>
  );
}
