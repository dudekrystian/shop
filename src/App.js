import "../src/scss/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Sale from "./components/sale/Sale";
import ListOfProducts from "./components/products/ListOfProducts";

//pages

import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/header/Sidebar";
import Home from "./pages/Home";
import SingleCategories from "./pages/SingleCategories";

import store from "./store/store";
import { Provider } from "react-redux";
import Search from "./pages/Search";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
          <Header />
          <Category />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/category/:category" element={<SingleCategories />} />
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
