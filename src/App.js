import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  Error,
  Checkout,
  Private,
} from "./pages";
import PrivateRoute from "./pages/PrivateRoute";
import SingleProductPage from "./pages/SingleProductPage";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/about" element={<About></About>}></Route>

        <Route path="/cart" element={<Cart></Cart>}></Route>

        <Route path="/products" element={<Products></Products>}></Route>

        <Route path="/products/:id" element={<SingleProduct />}></Route>

        <Route path="/checkout" element={<Checkout></Checkout>}></Route>

        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
