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
  }, []);

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
        <button className="button-back-product"></button>

        <div className="gallery-product">
          <img
            src={product ? (product.images ? product.images[0] : "") : ""}
            alt="foto"
          />
        </div>
        <div className="product-title">
          <h2>{product?.title}</h2>
        </div>
        <div className="details-product">
          <div className="rating-product">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <div className="desc">
            <div className="brand-product">
              <span>Brand:</span>
              <span className="span-second">{product?.brand}</span>
            </div>
            <div className="info-product">
              <span>Description:</span>
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
    </div>
  );
}
