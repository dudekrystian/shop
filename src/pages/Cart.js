import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
  getCartTotal,
  getCartItemsCount,
} from "../store/cartSlice";
import { currencyFormatter } from "../utils/formatCurrency";

export default function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { totalAmount, itemsCount } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart-header">
        <span className="cart-title">Cart ({itemsCount})</span>
      </div>
      <div className="cart-list-products">
        {carts.map((cart) => {
          return (
            <div className="cart-single-product" key={cart?.id}>
              <div className="cart-title">
                <span>{cart?.title}</span>
              </div>
              <div className="cart-price">
                <span>{currencyFormatter.format(cart?.totalPrice)}</span>
              </div>

              <div className="cart-quantity">
                <select>
                  <option>{cart?.quantity}</option>
                </select>
              </div>
              <div className="cart-button">
                <button onClick={() => dispatch(removeFromCart(cart?.id))}>
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-purchase">
        <div className="cart-amount">
          <span>Total:</span>
          <span>{currencyFormatter.format(totalAmount)}</span>
        </div>
        <div className="cart-button-pay">
          <button> Buy</button>
        </div>
      </div>
    </div>
  );
}
