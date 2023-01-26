import "../src/scss/style.css";

import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Sale from "./components/sale/Sale";
import ListOfProducts from "./components/products/ListOfProducts";

//pages

import SingleProduct from "./pages/singleProduct";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Category />
      {/* <Sale />
      <Sale />
      <Sale /> */}
      {/* <ListOfProducts /> */}
      <SingleProduct />
      <Footer />
    </div>
  );
}

export default App;
