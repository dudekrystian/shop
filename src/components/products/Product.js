import React from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/formatCurrency";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handlerAddToCart = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    const quantity = 1;
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
  };

  return (
    <div className="product-container">
      <Link className="link" to={`/product/${product?.id}`} key={product?.id}>
        <div className="product-image">
          <img src={product?.thumbnail} alt="foto"></img>
        </div>
      </Link>

      <div className="product-name">
        <p>
          {product?.title} ({product?.rating})
        </p>
        <span>{product?.brand}</span>
      </div>
      {/* <div className="rating">
        <i class="bi bi-star-fill"></i>
      </div> */}
      <div className="bottom">
        <div className="price">
          <span className="price-old">
            {currencyFormatter.format(product?.price)}{" "}
          </span>
          <span className="price">
            {currencyFormatter.format(product?.discountedPrice)}{" "}
          </span>
        </div>
        <div className="options">
          {/* <button>
            <i class="bi bi-heart-fill"></i>
          </button> */}
          <button
            onClick={() => {
              handlerAddToCart(product);
            }}
          >
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
