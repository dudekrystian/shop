import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
  getCategoryProductsStatus,
} from "../store/categorySlice";
// import Loader from '../../components/Loader/Loader';
import { STATUS } from "../../src/utils/status";
import ListOfProducts from "../components/products/ListOfProducts";
import SingleProduct from "./SingleProduct";
import Loader from "../components/loader/Loader";

export default function SingleCategories() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div>
      <div>
        <div>
          <div></div>

          {categoryProductsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <ListOfProducts
              nameCategory={category}
              products={categoryProducts}
            />
          )}
        </div>
      </div>
    </div>
  );
}
