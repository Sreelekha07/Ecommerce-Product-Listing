// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import "./App.css";
import ProductListing from "./components/Home/ProductList";
import ProductDetails from "./components/Home/ProductDetails";
import Cart from "./components/Cart";
import { CartContext, CartProvider } from "./CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <nav>
            <div className="link-title">
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
             
              <CartContext.Consumer>
                {({ getTotalItemCount }) => (
                  <Link to="/cart" className="nav-link cart-icon">
                    🛒 Cart ({getTotalItemCount()})
                  </Link>
                )}
              </CartContext.Consumer>
            </div>
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
