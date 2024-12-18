import React from "react";

const ProductDetails = ({ p }) => {
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
          <p>{p.price.toFixed(2)}dt</p>
          <p>{p.Brand}</p>
          <button className="btn btn-secondary">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
