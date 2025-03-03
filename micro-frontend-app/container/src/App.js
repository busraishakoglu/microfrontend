import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from "react-redux";
import store from "./store";

const ProductList = React.lazy(() => import("productList/ProductList"));
const Cart = React.lazy(() => import("cart/Cart"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/">Product List</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </React.Suspense>
        <ToastContainer/>
      </Router>
    </Provider>
  );
};

export default App;
