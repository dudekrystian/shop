import React, { useState } from "react";
import { Link } from "react-router-dom";
import SingleCategories from "../../pages/SingleCategories";

export default function MenuItems({ name }) {
  return (
    <div className="menu-modal-category-single">
      <i class="bi bi-bag"></i>
      <span className="menu-modal-category-name">
        <Link to={`/categories/${name}`} element={<SingleCategories />}>
          {name}
        </Link>
      </span>
    </div>
  );
}
