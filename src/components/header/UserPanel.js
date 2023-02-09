import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../store/cartSlice";

export default function UserPanel() {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  const visible = {
    visibility: "visible",
  };

  const hidden = {
    visibility: "hidden",
  };

  return (
    <div className="user-panel">
      <div className="user-panel-element">
        <i class="bi bi-person"></i>
        <span>Your account </span>
      </div>
      <div className="user-panel-element">
        <i class="bi bi-heart"></i>
        <span>Your favourite </span>
      </div>
      <Link className="link" to="/cart">
        <div className="user-panel-element">
          <i class="bi bi-cart2"></i>

          <div className="container-cart" style={itemsCount ? visible : hidden}>
            <span className="counter">{itemsCount} </span>
          </div>

          <span>Your order</span>
        </div>
      </Link>
    </div>
  );
}
