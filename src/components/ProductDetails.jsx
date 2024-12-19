import React from "react";
import { useContext } from "react";
import CartContext from "../context/cartContext";

const ProductDetails = ({ p }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={p.image}
            alt="Avatar"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="flip-card-back">
          <h1>{p.name}</h1>
          <p>{p.price.toFixed(2)} TND</p>
          <p>{p.Brand}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              addToCart(p);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
