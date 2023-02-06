import React from "react";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/formatCurrency";

export default function Product({ product }) {
  return (
    <Link className="link" to={`/product/${product?.id}`} key={product?.id}>
      <div className="product-container">
        <div className="product-image">
          <img src={product?.thumbnail} alt="foto"></img>
        </div>
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
            <button>
              <i class="bi bi-heart-fill"></i>
            </button>
            <button>
              <i class="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
