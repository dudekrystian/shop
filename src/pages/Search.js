import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../utils/status";
import Loader from "../components/loader/Loader";
import ListOfProducts from "../components/products/ListOfProducts";
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  setSearchTerm,
  getSearchProductsStatus,
  clearSearch,
} from "../store/searchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  if (searchProducts.length === 0) {
    return (
      <div
        className="container"
        style={{
          minHeight: "70vh",
        }}
      >
        {" "}
        {console.log("not f")}
        <div className="fw-5 text-danger py-5">
          <h3>No Products found.</h3>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3>Search results:</h3>
            </div>
            <br />
            {searchProductsStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ListOfProducts products={searchProducts} />
            )}
            {console.log("found!")}
          </div>
        </div>
      </div>
    </main>
  );
}
