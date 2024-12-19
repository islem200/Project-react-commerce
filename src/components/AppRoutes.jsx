import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LogIn from "../pages/LogIn";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import SignUp from "../pages/SignUp";
import Cart from "./Cart";
import CartPage from "../pages/CartPage";

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};
const AppRoutes = ({ isAuthenticated, setAuthenticated, onLogout }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route
      path="/login"
      element={<LogIn setAuthenticated={setAuthenticated} />}
    />
    <Route
      path="/profile"
      element={
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          element={<Profile onLogout={onLogout} />}
        />
      }
    />
    {/* <Route path="/products" element={<Products />} /> */}
    <Route path="/signup" element={<SignUp />} />
    <Route
      path="/cart"
      element={
        <PrivateRoute isAuthenticated={isAuthenticated} element={<CartPage />} />
      }
    />
    
  </Routes>
);

export default AppRoutes;
