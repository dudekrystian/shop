import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../store/productSlice";
import { STATUS } from "../utils/status";
import Loader from "../components/loader/Loader";
import { currencyFormatter } from "../utils/formatCurrency";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../store/cartSlice";

import CartMessage from "../components/cartMessage/CartMessage";

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  //get a single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  let discountedPrice =
    product.price - product.price * (product.discountPercentage / 100);
  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const handleClick = (e) => {
    let value = e;
    let tempQty = value;
    setQuantity(value);
    return tempQty;
  };

  const handlerAddToCart = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn(true));
  };

  return (
    <div className="single-product">
      <div className="container">
        {/* <button className="button-back-product">
          <i class="bi bi-arrow-left"></i>
        </button> */}

        <div className="gallery-product">
          <img
            src={product ? (product.images ? product.images[0] : "") : ""}
            alt="foto"
          />
        </div>
        <div className="product-title">
          <span>{product?.title}</span>
        </div>
        <div className="details-product">
          <div className="rating-product"></div>
          <div className="desc">
            <div className="brand-product">
              <span className="span-one">Brand:</span>
              <span className="span-second">{product?.brand}</span>
            </div>
            <div className="info-product">
              <span className="span-one">Description:</span>
              <span className="span-second">{product?.description}</span>
            </div>
          </div>
        </div>
        <div className="price-product">
          <span className="price-old">
            {currencyFormatter.format(product?.price)}
          </span>
          <span className="price-discount">
            {currencyFormatter.format(discountedPrice)}
          </span>
        </div>
        <div className="options-product">
          <select
            onChange={(e) => handleClick(e.target.value)}
            className="select-single"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>

          <button className="button-product">
            <i class="bi bi-cart-plus"></i>
            <span
              onClick={() => {
                console.log("ok");
                handlerAddToCart(product);
              }}
            >
              add to cart
            </span>
          </button>
        </div>
      </div>
      {cartMessageStatus && <CartMessage />}
    </div>
  );
}
