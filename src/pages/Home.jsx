import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "./Products";
import { useContext } from "react";
import ProductsContext from "../context/product";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
